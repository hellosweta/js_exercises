// class Clock {
//   constructor() {
//     const date = new Date();
//     this.hour = date.getHours();
//     this.min = date.getMinutes();
//     this.sec = date.getSeconds();
//     this.printTime();
//
//     setInterval(this._tick.bind(this), 1000);
//
//     // 1. Create a Date object.
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.
//   }
//
//   printTime() {
//     console.log(`${this.hour}:${this.min}:${this.sec}`);
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//   }
//
//   _tick() {
//     this.sec ++;
//
//     if (this.sec>59) {
//       this.min ++;
//       this.sec = 0;
//     }if (this.min>59){
//       this.hour ++;
//       this.min = 0;
//     }if (this.hour >23) {
//       this.hour = 0;
//       this.min = 0;
//       this.sec = 0;
//     }
//     // console.log(`${this.hour}:${this.min}:${this.sec}`);
//
//     this.printTime();
//
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   }
// }
//
// const clock = new Clock();

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  };
};
//
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
