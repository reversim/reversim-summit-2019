const axios = require("axios");
const halls = ['A10', 'A3', 'A4', 'A5']; // Copied from /client/src/data/halls.js
const day1 = [ //Copied from Copied from /client/src/data/agenda.js, removed the breaks.
  { time: "08:00-09:00", text: "Registration & Coffee", excludeHall: true },
  {
    time: "09:00-09:40",
    sessions: [
      null,
      "5c51f4e27314030017e1c2ce",
      "5c765e02e037850017ca38f6",
      "5c753a43d0e22f001706cbd1"
    ]
  },
  {
    time: "10:00-10:50",
    text: "Welcome + Keynote",
    sessions: "5cae52ece7179a36ac342cf9"
  },
  {
    time: "11:10-11:40",
    sessions: [
      "5c77fd129cec66001786e678",
      "5c72fecbe931df0017cad291",
      "5c74d43efb50dd0017b460e2",
      "5c7817eb9cec66001786e69c"
    ]
  },
  {
    time: "11:50-12:20",
    sessions: [
      "5c6beb0ad7ca690017a9d038",
      {
        text: "Postmortem",
        sessions: ["5c648683ceec950017a7a20d", "5c6c2441d7ca690017a9d043"]
      },
      "5c741556fb50dd0017b460d2",
      "5c77ae2c9cec66001786e61e"
    ]
  },
  { time: "12:20-13:20", text: "Lunch" , excludeHall: true},
  {
    time: "13:20-13:50",
    sessions: [
      "5c57eb47499ec8001717bb1b",
      {
        text: "OSSIL",
        sessions: ["5c768578b347af001757ff25", "5c4f84abae9a470017867fae"]
      },
      "5c77de369cec66001786e64b",
      "5c50c2ddae9a470017867fc9"
    ]
  },
  {
    time: "14:00-14:30",
    sessions: [
      "5c7859231503d900172c583e",
      "5c685885f477e10017131ac1",
      "5c77f95a9cec66001786e671",
      "5c781b369cec66001786e6a1"
    ]
  },
  {
    time: "14:40-15:20",
    text: "Ignites",
    shortSessions: [
      "5c7795039cec66001786e60f",
      "5c77c6089cec66001786e62e",
      "5c741121fb50dd0017b460d1",
      "5c77ff989cec66001786e67b",
      "5c7811269cec66001786e697",
      "5c783ea0d1b4260017fe23f1",
      "5c7847ea1503d900172c581f"
    ]
  },
  {
    time: "15:40-16:10",
    sessions: [
      "5c771e7d9cec66001786e604",
      "5c5fe555e6ceb50017772487",
      "5c66b0052be200001726d346",
      "5c5145067314030017e1c2b5"
    ]
  },
  {
    time: "16:20-16:50",
    sessions: [
      "5c507db4ae9a470017867fc1",
      "5c6a4a13d330b60017b4f82c",
      "5c7557e2d0e22f001706cbe0",
      "5c518d9f7314030017e1c2c7"
    ]
  },
  { time: "17:10-17:50", sessions: ["5cb1de4136df6a422308f415"] }
];

const day2 = [ //Copied from Copied from /client/src/data/agenda.js, removed the breaks.
  { time: "08:00-09:00", text: "Registration & Coffee", excludeHall: true },
  {
    time: "09:00-09:40",
    sessions: [
      null,
      "5c778acb9cec66001786e608",
      "5c76650be037850017ca38f8",
      "5c73f0a0fb50dd0017b460cb"
    ]
  },
  {
    time: "10:00-10:50",
    text: "Welcome + Keynote",
    sessions: "5cb2106436df6a42230a9640"
  },
  {
    time: "11:10-11:40",
    sessions: [
      "5c7859c31503d900172c5840",
      "5c751107d0e22f001706cbc5",
      "5c6407d2e2ba3d00178ee60c",
      "5c517d367314030017e1c2c4"
    ]
  },
  {
    time: "11:50-12:20",
    sessions: [
      "5c6a6e55d330b60017b4f82f",
      "5c768d4eb347af001757ff29",
      {
        text: "OSSIL",
        sessions: [
          "5c765936e037850017ca38f3",
          "5c7693c3051b240017a208f2",
          "5c784cce1503d900172c582a"
        ]
      },
      "5c645d5ae2ba3d00178ee616"
    ]
  },
  { time: "12:20-13:20", text: "Lunch", excludeHall: true },
  {
    time: "13:20-13:50",
    sessions: [
      "5c5eae53ced7850017d57f40",
      "5c76534de037850017ca38f0",
      {
        text: "Postmortem",
        sessions: ["5c6c657d8e68c600174f5109", "5c77b5af9cec66001786e626"]
      },
      "5c6f045cf9d89b0017a7d80b"
    ]
  },
  {
    time: "14:00-14:30",
    sessions: [
      "5c52f3c55a09c900174932e3",
      "5c77c9ab9cec66001786e633",
      "5c650165ceec950017a7a213",
      "5c768ead2443a10017bb2bd1"
    ]
  },
  {
    time: "14:40-15:20",
    text: "Ignites",
    shortSessions: [
      "5c501187ae9a470017867fb4",
      "5c6e9189f9d89b0017a7d7fc",
      "5c77ee889cec66001786e666",
      "5c744342fb50dd0017b460d6",
      "5c767e73b347af001757ff22",
      "5c5eafa3ced7850017d57f41"
    ]
  },
  {
    time: "15:40-16:10",
    sessions: [
      "5c4ec71ae6319f00172a968e",
      "5c6da466a0b22e0017b88ac5",
      "5c754052d0e22f001706cbd8",
      "5c6c23fcd7ca690017a9d042"
    ]
  },
  {
    time: "16:20-16:50",
    sessions: [
      "5c75adf7e037850017ca38cd",
      "5c7801589cec66001786e680",
      "5c77f6d79cec66001786e670",
      "5c7854181503d900172c5833"
    ]
  },
  { time: "17:10-17:50", sessions: ["5cb20ef536df6a42230a8bcf"] }
];
const tzString = "+0300";

class Agenda {
  async load() {
    let databaseResponse = await axios.get(
      "https://summit2019.reversim.com/api/initial"
    );
    this.database = databaseResponse.data;
    this.day1 = this.loadDay(day1, "2019-06-16");
    this.day2 = this.loadDay(day2, "2019-06-17");
  }

  loadDay(data, date) {
    let aggregate = [];
    for (let slot of data) {
      let events = this.loadSlot(slot, date);
      if (events.length > 0) {
        for (let event of events) {
          aggregate.push(event);
        }
      }
    }
    return aggregate;
  }

  loadSlot(slot, date) {
    let events = [];
    // Generate the startTime
    let times = slot.time.split("-");
    if (times.length < 2) {
      //Not an actual event
      return events;
    }
    let startTime = `${date}T${times[0]}:00${tzString}`;
    let endTime = `${date}T${times[1]}:00${tzString}`;

    if (slot.text) {
      // Single event
      let event = {
        summary: slot.text,
        start: {
          dateTime: startTime
        },
        end: {
          dateTime: endTime
        }
      };

      if(!slot.excludeHall){ // NOT Registration, Coffee, etc
        // Single events are always in halls[0]
        event.location = halls[0];
      }

      if (slot.sessions) {
        // Event includes more metadata
        let sessionData = this.loadSession(slot.sessions);
        event.description = this.combineDescription(
          sessionData.abstract,
          sessionData._id
        );
      } else if (slot.shortSessions) {
        // Multiple subSessions
        event.description = this.multiSessionDescription(slot.shortSessions);
      }

      events.push(event);
    } else if (slot.sessions) {
      // Multiple events to generate
      let count = 0;
      for (let session of slot.sessions) {
        if (session !== null) {
          if (typeof session === "string" || session instanceof String) {
            // A sessionId
            let sessionData = this.loadSession(session);
            if (sessionData != null) {
              let event = {
                summary: this.combineTitle(
                  sessionData.title,
                  sessionData.speaker_ids
                ),
                description: this.combineDescription(
                  sessionData.abstract,
                  sessionData._id
                ),
                start: {
                  dateTime: startTime
                },
                end: {
                  dateTime: endTime
                },
                location: halls[count]
              };
              events.push(event);
            }
          } else {
            let event = {
              summary: session.text,
              description: this.multiSessionDescription(session.sessions),
              start: {
                dateTime: startTime
              },
              end: {
                dateTime: endTime
              },
              location: halls[count]
            };

            events.push(event);
          }
        }
        count++;
      }
    }

    return events;
  }

  loadSession(session) {
    return this.database.proposals[session];
  }

  combineDescription(abstract, sessionId) {
    return `${abstract}\nhttps://summit2019.reversim.com/session/${sessionId}`;
  }

  combineTitle(title, speakers) {
    let authors = [];
    for (let speakerId of speakers) {
      authors.push(this.database.users[speakerId].name);
    }

    return `${title} / ${authors.join(" / ")}`;
  }

  multiSessionDescription(sessions) {
    let description = "";
    for (let subSession of sessions) {
      let sessionData = this.loadSession(subSession);
      description += `==${this.combineTitle(
        sessionData.title,
        sessionData.speaker_ids
      )}==\n`;
      description += this.combineDescription(
        sessionData.abstract,
        sessionData._id
      );
      description += "\n\n";
    }
    return description;
  }
}

module.exports = Agenda;
