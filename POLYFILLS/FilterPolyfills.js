// let arr=[1,2,3,4,5,6,7,8,9,10]
// let res = arr.filter((val)=> {
//     return val>3;
// })
// console.log(res);

let arr=[1,2,3,4,5,6,7,8,9,10];

function getFilterArr(num)       //callback func
{
    return num>3;
}

//polyfill

Array.prototype.myFilter = function(callback)
{
    let tempArr =[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i]))             //callback.call(this,this[i],i,this)
        {
            tempArr.push(this[i]);
        }
    }
    return tempArr;
}

let result = arr.myFilter(getFilterArr);
console.log(result);