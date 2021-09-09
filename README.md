 # Dashboard
This is my my most recent project.
Built with React, React-hooks, the Strava API, and an extremely small dependency list. I wanted to build as much as I could from scratch for experience. 

A training dashboard where I can show a simple bird's eye view of my entire program to my athletic coaches. 
It pulls from the Strava API, which itself has a link to my WHOOP data. This is the best it gets until WHOOP releases an API. 

The first completed feature is a calendar component which shows that bird's eye view mentioned above. 
Its two month-calendars, with days highlighted that have workout logs on them. This is where the data from Strava is displayed.
A modal appears to show the workout log details when the day is clicked. 
There were no pre-built npm packages used for the calendar component.  

## What I am adding now
A modular weekly training schedule which shows a sample week in training.
As an athlete, I find the best way to plan my training is by the week, and then by groups of weeks (not necessarily months). This component is for planning a sample single week. 

The idea is to have a bank of created workout-templates (created by the user) of which the user can assign to a particular day/time on the weekly schedule. 
This is effectively your weekly training plan. The weekly schedule will act a visual representation of the weekly training for the athlete.

These templates do not get created for every workout, instead they behave like models would in an model-view-controller design framework in app development. Log instances are then created when the workout is completed and then will show up on the calendar component noted above. 