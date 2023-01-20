import moment from 'moment';

const getCssStringFromCommittee = (committee) => {
  switch (committee.toLowerCase().trim()) {
    case 'general':
    case 'impact': // we should change the branding here soon
    case 'external':
    case 'board':
      return 'board';
    case 'teach la':
      return 'teach-la';
    case 'ai':
    case 'cyber':
    case 'design':
    case 'hack':
    case 'icpc':
    case 'studio':
    case 'w':
      return committee.toLowerCase();
    default:
      throw new Error(`Unrecognized string ${committee}`);
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
}) => {
  let allDay = false;

  if (!start && !end) {
    if (!date) {
      throw new Error('Missing date; can\'t proceed');
    }
    // If rawStart or rawEnd is missing, set allDay to true
    if (!rawStart) {
      allDay = true;
      start = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const startHr = rawStart.replace('PST', '').trim();
      start = moment(`${date} ${startHr}`, 'YYYY-MM-DD LT').valueOf();
    }

    if (!rawEnd) {
      allDay = true;
      end = moment(`${date}`, 'YYYY-MM-DD LT').valueOf();
    } else {
      const endHr = rawEnd.replace('PST', '').trim();
      end = moment(`${date} ${endHr}`, 'YYYY-MM-DD LT').valueOf();
    }
  }

  if(!links){
    links = [];
  }
  if(location.includes('ucla.zoom.us')) {
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

  if (!title) {
    throw new Error('Missing title');
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
