 # Dashboard
A personal app I am creating to plan and manage my own physical training. 
For a number of years, I have used a combination of google docs, strava, and imagination to visualize and plan my training. 
This app seeks to relieve my imagination and provide the tools I need to plan and continue to monitor my training, all in one place. 

It pulls my data from the Strava API, which has an integration with WHOOP. The WHOOP data that comes in from Strava is less than perfect and may be omitted at some point, but currently there is no direct WHOOP API, and the WHOOP strap is such a powerful fitnes tool it cannot be just omitted - it makes loggin workouts basically seamless. 

These activities, which come in from Strava, are reformatted and saved to a local database using Node.js and Postgres, and then displayed over a custom calendar component. The calendar currently features three Month componemts rendering out clickable days to show the contents of the logs which occured on those days in a modal window. The fucntionality to add and delete logs has also been added should there be a need to make those changes. However, ideally this will never be needed if the WHOOP data starts to become more consistently accurate- the idea is automate as much as possible in terms of logging workouts. I think the hassle of laggin workouts is a major painpoint in workout logging in general. 

Because this app will be highly specialized to my needs as it scales in complexity, I chose not to use any libraries and packages for the calendar. My philosphy is to start small and scale as needed. Currently, the calendar component relies on JS date objects soley. 

## What I am adding now
Training Programs. 

Programs will have workouts within them, not logs. 

These workouts are templates for me to follow, I would create one for each of the planned workouts I have in the program, which is normally for me, somewhere around 4-10 unique workouts. 

I may run several programs simultanesouly, I might have a Combat Sports Training Program which has a Sparring, Padwork, Drilling, and Fight-Specific Conditioning Workouts. That may be overlaid by a running program which has an Easy Run, Tempo Run, and a Long Run. There may also then be a supplemental Strength and Injury preventaion plan on top of those which has a Shoulder Health, Hip Health, Neck Health, and Knee Health Workouts as well. 

These workouts would be predefined in a planning phase, and easily accesible on the Dashboard like a bank of templates. The idea in the future is to have them displayed on a visual table for the week. Each day of the week having at least three slots to fit a workout in, Am, Lunch, and PM. These slots would be drag -n- drop for easy on-the-go audibles in my weekly training should I need to make changes on the fly based on how my body feels. 

So the user, myself in this case, would create a plan, create some workouts to go in the plan, then drag -n- drop them to where they fit in my weekly training schedule, which is a visual representation of my week in training blocks displayed likley in a simple HTML table format. I would then set a start and stop date to the training plan, so the weekly training schedule can set the stage for automatic log generation upon workout completion. Because those workouts are set to certain times, the app can assume completion of am workouts at the begnning of the lunch workouts and so on. The workout template you created would then get passed into log format and saved as a log on that day/time specifed without the need for me to come back in and change anything. 

Adding notes to the workouts after is expected but not required, except maybe in the event the workout didnt get completed. But even if I never came back to augment any details, in a few months time, I would have automated logs of all my workouts in that time if I stuck to the program, and a visual calendar representation of how long it was, and when what workouts happened at a very detailed level. 

Maybe i'll call the app My Training Memory ;p