# Events
Events are stored as a JSON array of objects
Each object is either a single event or a track
Each event or track object can have the following properties:
| Property           | Type       | Required   |
|--------------------|------------|------------|
| `isTrack`          | `boolean`  | *required* |
| `committees`       | `string[]` | *required* |
| `events`           | `object[]` | *required* |
| `trackName`        | `string`   | *optional* |
| `trackID`          | `number`   | *optional* |
| `trackPicture`     | `string`   | *optional* |
| `description`      | `string`   | *optional* |

`committee`:
- like a tag, is a filterable attribute

`trackPicture`:
- file location

`description`:
- track description unused if not a track

The events array contains 1 or more objects
Each event in the array can have the following properties:
| Property           | Type       | Required   |
|--------------------|------------|------------|
| `eventName`        | `string`   | *required* |
| `eventPicture`     | `string`   | *optional* |
| `trackID`          | `number`   | *optional* |
| `description`      | `string`   | *optional* |
| `date`             | `number`   | *required* |
| `sessionNumber`    | `number`   | *required* |
| `attendanceType`   | `number`   | *required* |
| `physicalLocation` | `string`   | *optional* |
| `virtualLocation`  | `string`   | *optional* |
| `eventLinks`       | `object[]` | *optional* |
| `contentLinks`     | `object[]` | *optional* |
| `tags`             | `string[]` | *optional* |
| `teachers`         | `string[]` | *optional* |

`eventPicture`:
- file location
- default to track picture if applicable, otherwise use a default committee picture

`date`:
- Unix epoch (seconds since 1/1/1970)

`sessionNumber`:
- needed for tracks, default 1 for one-off events

`attendanceType`:
- 0: physical, 1: virtual, 2: hybrid (an enum perhaps)

`physicalLocation`:
- only applicable for in-person and hybrid events

`virtualLocation`:
- link
- only applicable for virtual and hybrid events

`eventLinks`, `contentLinks`:
- each link is an object with properties "link" and "title"

`tags`:
- plan on keeping a list of duplicate tags (disallowed list vs allowed list)

Note on quarters:
- can be computed based on date (currently have quarter data as far back as 13-14 school year; could get older years, when did ACM @ UCLA start/how far back are we archiving?)
- it need never be specified since date is required
- supports tracks that continue for multiple quarters
- a single event can only occur in one quarter; multiple quarters --> multiple events

Based on this data structure, one-off events and tracks can be differentially rendered easily by checking the isTrack property.

To filter/search events, I plan on generating a second data structure which is just an array of all the events by concatenating all the events arrays. This is the motivation for the trackID property which will allow us to figure out which track a certain event is (e.g. a user searches individual events and clicks some track tag, which should then display all the events for that track).

The trackPicture and/or eventPicture will be used as a background in a card display.

In general, we want a compact display; dropdowns can be used to see more information.

What will initial card display look like? Certainly organized chronologically, but with tracks grouped together or everything as individual events? (Leaning towards grouping tracks)