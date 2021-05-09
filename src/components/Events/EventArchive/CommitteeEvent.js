import { getQuarter, committees } from './utils';

class CommitteeEvent {
  constructor(options = {}) {
    this.eventName        = options.eventName         || '';                        // string
    this.committee        = options.committee         || committees.ACM;            // string (enum?); multiple committees?
    this.date             = options.date              || new Date();                // Date type, default current date
    this.quarter          = options.quarter           || getQuarter(this.date);     // object: {'season': 'Fall'/'Winter'/'Spring', 'year': YYYY}, default current quarter
    this.isTrack          = options.isTrack           || false;                     // default false
    this.sessionNumber    = options.sessionNumber     || 1;                         // default 1 if not part of a track
    this.attendanceType   = options.attendanceType;                                 // string (enum?), virtual/in-person/hybrid
    this.physicalLocation = options.physicalLocation;                               // string, only applicable for in-person and hybrid events, default empty
    this.virtualLocation  = options.virtualLocation;                                // string, only applicable for online and hybrid events, default empty
    this.eventLinks       = options.eventLinks        || [];                        // array of strings, default empty, *add link descriptions*
    this.contentLinks     = options.contentLinks      || [];                        // array of strings, default empty
    this.tags             = options.tags              || [];                        // array of strings, default empty
    this.teachers         = options.teachers          || [];                        // array of strings, default empty
  }
}

// need to consider multiple quarters, dropdowns, tracks as first-class, duplicated tags

export default CommitteeEvent;