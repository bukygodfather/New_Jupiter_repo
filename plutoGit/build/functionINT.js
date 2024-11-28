"use strict";
//Functions is a way of writting a group of codes for just one particular/specific job
/*3 types of functions
the type that doesnt take argument, the second type takes argument*/
/*This first type doesnt take or return's any argument*/
function greet() {
    console.log("Good morning");
    console.log("Good morning");
    console.log("Good morning");
}
greet();
/*This second type takes but doesnt return any argument*/
function goodbye(name) {
    console.log(`Good morning! ${name}`);
    console.log("Good morning");
    console.log("Good morning");
}
goodbye("Chris");
/*This third type takes and returns  argument*/
function shout(name) {
    const arg = `Good bye! ${name}`;
    return arg;
}
shout("Jaga");
