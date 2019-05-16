# Reversim Calendar Sync

This will 
1. Connect to a Google Calendar
2. Delete all the events
3. Insert events based on the agenda

## How to run

1. Generate a `credentials.json` from the Google API dashboard.
2. Modify the `calendarId` in index.js
3. Run `node .`
4. Follow the prompt to authorize the application

## TODO
- It currently does not include lecture locations
- The dates of the event are hardcoded in agenda.js
- The agenda data is hardcoded in agenda.js