"use strict";
//Arrays
let playerAges = [25, 23, 28, 24, 20, 19, 27, 32];
let playerClubs = ["Chelsea", "PSG", "Man City", "Real Madrid"];
let playerStatus = [true, false, false, true];
console.log(playerClubs[0]);
//push is used to add to the last in an array
//pop removes from the last in an array
//shift also remove from an array but starts from the left
//unshift adds to an array starting from the left
console.log(playerClubs);
playerClubs.push("Bayern Munich");
console.log(playerClubs);
playerClubs.pop();
console.log(playerClubs);
playerClubs.shift();
console.log(playerClubs);
playerClubs.unshift("Chelsea");
console.log(playerClubs);
//finding arrays length
console.log(playerClubs.length);
/*.splice gives option of removing a particular index in
an array with a coiunting sequence, e.g .splice(3, 2)*/
playerAges.splice(3, 2);
console.log(playerAges);
