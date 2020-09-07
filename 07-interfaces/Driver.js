"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TennisCoach_1 = require("./TennisCoach");
var GolfCoach_1 = require("./GolfCoach");
var myTennisCoach = new TennisCoach_1.TennisCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches... initially empty
var theCoaches = [];
// add the coaches to the array
theCoaches.push(myTennisCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoache = theCoaches_1[_i];
    console.log(tempCoache.getDailyWorkout());
}
