import { TennisCoach } from "./TennisCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myTennisCoach = new TennisCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches... initially empty
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(myTennisCoach);
theCoaches.push(myGolfCoach);

for (let tempCoache of theCoaches){
    console.log(tempCoache.getDailyWorkout());
}