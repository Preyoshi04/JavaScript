// let obj= {
//     name: "Preyoshi",
//     city: "Kolkata"
// }

// function displayInfo(state)
// {
//     console.log(`Hi, My name is ${this.name} and I am from ${this.city} city and ${state} state`)
// }

// let bindFunc = displayInfo.bind(obj,"West Bengal")
// bindFunc();

let obj = {
    name: "Preyoshi",
    city: "Kolkata"
}

function displayInfo(state)
{
    console.log(`Hi, my name is ${this.name} and I am from ${this.city} city and ${state} state`)
}

//polyfill
Function.prototype.myBind = function(object , ...args)
{
    object.newFuncToShowBind = this;
    return function()
    {
        object.newFuncToShowBind(...args);
    }
}


let bindFunc = displayInfo.myBind(obj,"WB")
bindFunc();