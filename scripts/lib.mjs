import moment from 'moment';

const getCssStringFromCommittee = (committee) => {
  if (!committee) {
    console.warn('Skipping event. Committee is missing or null.');
    return null;
  }
  switch (committee.toLowerCase().trim()) {
    case 'general':
    case 'impact': // we should change the branding here soon
    case 'external':
    case 'board':
      return 'board';
    case 'teach la':
    case 'teachla':
      return 'teach-la';
    case 'ai':
    case 'cyber':
    case 'design':
    case 'hack':
    case 'icpc':
    case 'studio':
    case 'w':
    case 'cloud':
      return committee.toLowerCase();
    default:
      console.warn(`Skipping event. Unrecognized committee: ${committee}`);
      return null;
  }
};

const generateSingleEvent = ({
  // final keys
  id,
  title,
  start,
  end,
  committee,
  location,
  description,
  links,
  // non-final keys that need to be processed
  rawStart,
  rawEnd,
  date,
  fblink,
  image,
}) => {
  let allDay = false;

  // If committee is already null (from getCssStringFromCommittee), skip
  if (committee === null) {
    console.warn('Skipping event because committee returned null.');
    return null;
  }

  if (!start && !end) {
    if (!date) {
      console.warn('Skipping event because date is missing.');
      return null;
    }
    // If rawStart or rawEnd is missing, set allDay to true
    if (!rawStart) {
      allDay = true;
      start = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const startHr = rawStart.trim();
      start = moment(`${date} ${startHr}`, 'YYYY-MM-DD LT').valueOf();
    }

    if (!rawEnd) {
      allDay = true;
      end = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const endHr = rawEnd.trim();
      end = moment(`${date} ${endHr}`, 'YYYY-MM-DD LT').valueOf();
    }
  }

  if (!links) {
    links = [];
  }
  if (location.includes('ucla.zoom.us')) {
    const zoomLink = location;
    location = 'Zoom';
    links.push({
      text: 'Zoom Link',
      href: zoomLink,
      ext: true,
    });
  }
  if (fblink) {
    links.push({
      text: 'Facebook Event',
      href: fblink,
      ext: true,
    });
  }
  if (image) {
    try {
      // Extract host from url to comply with codeQL scanner
      const url = new URL(image);
      const host = url.hostname;

      if (host === 'drive.google.com') {
        // Google drive urls need to be transformed
        // 'https://drive.google.com/uc?export=view&id=' + image id (id which follows /d in original link)
        image =
          'https://drive.google.com/uc?export=view&id=' +
          image.substring(image.indexOf('/d/') + 3, image.indexOf('/view'));
      } else {
        image = url.href;
      }
    } catch (e) {
      console.log('Warning: Invalid Image URL: ' + e);
      image = '/images/events/default-event.png';
    }
  } else {
    // Default image
    image = '/images/events/default-event.png';
  }

  if (!title) {
    console.warn('Skipping event because title is missing.');
    return null;
  }

  return {
    id,
    title,
    allDay,
    start,
    end,
    location,
    committee,
    description,
    links,
    image,
  };
};

const generateDateRange = (startDate, endDate) => {
  let currentDate = startDate;
  const dates = [];
  while (moment(currentDate).valueOf() < moment(endDate).valueOf()) {
    dates.push(currentDate);
    currentDate = moment(currentDate).add(7, 'days').format('YYYY-MM-DD');
  }
  return dates;
};

export { getCssStringFromCommittee, generateSingleEvent, generateDateRange };
