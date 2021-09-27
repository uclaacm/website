import moment from "moment";

const getCssStringFromCommittee = (committee) => {
  switch (committee) {
    case 'Teach LA':
      return 'teach-la';
    case 'AI':
    case 'Cyber':
    case 'Design':
    case 'Hack':
    case 'ICPC':
    case 'Studio':
    case 'W':
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
  time,
  date,
  fblink,
}) => {
  // TODO: change this logic to actually look at relevant info
  const allDay = false;

  if (!start && !end) {
    if (!date || !time) {
      throw new Error('Missing either date or time; can\'t proceed');
    }

    // const [year, month, day] = date.split('-');
    const [rawStart, rawEnd] = time.split('-');
    const startHr = rawStart.trim();
    const endHr = rawEnd.trim().split(' ')[0];
    start = moment(`${date} ${startHr} PM`, 'YYYY-MM-DD LT').valueOf();
    end = moment(`${date} ${endHr} PM`, 'YYYY-MM-DD LT').valueOf();
  }

  if (!links) {
    links = [];
    if (fblink) {
      links.push({
        text: 'Facebook Event',
        href: fblink,
        ext: true,
      });
    }
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

export { getCssStringFromCommittee, generateSingleEvent };
