// let obj = {
//     name: "Preyoshi",
//     city: "Kolkata"
// }
// function displayInfo(state)
// {
//     console.log(`Hi, I am ${this.name} and I am from ${this.city} city and ${state} state`)
// }
// displayInfo.apply(obj, ["West Bengal"])

let obj={
    name:"Preyoshi",
    city:"Kolkata"
}

function displayInfo(state)
{
    console.log(`Hi, my name is ${this.name} and I am from ${this.city} city and ${state} state`);
}
Function.prototype.myApply = function(object, ...arr)
{
    object.newFuncToShowMsg = this;
    object.newFuncToShowMsg(...arr);
}

let applyResult = displayInfo.myApply(obj,["West Bengal"]);             // apply() methods takes input arguments as arrays!