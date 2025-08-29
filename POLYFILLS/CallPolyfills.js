// let obj = {
//     name: "Preyoshi",
//     city: "Kolkata"
// }
// function displayInfo(state)
// {
//     console.log(`Hi, I am ${this.name} and I am from ${this.city} city and ${state} state`)
// }
// displayInfo.call(obj,"West Bengal")

let obj={
    name:"Preyoshi",
    city:"Kolkata"
}

function displayInfo(state)
{
    console.log(`Hi, my name is ${this.name} and I am from ${this.city} city and ${state} state`);
}

//polyfill

Function.prototype.myCall = function(object , ...rest)
{
    object.newFuncToShowMsg = this;                //this refers to the function     //we creating a parameter in the object and assigning the func to it
    object.newFuncToShowMsg(...rest);                //calling the function inisde the object with all the arguments of the actual func
}

let result = displayInfo.myCall(obj,"West Bengal");