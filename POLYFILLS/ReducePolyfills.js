// let arr=[1,2,3,4,5,6,7,8,9,10]
// let res = arr.reduce((acc,curr)=> {
//     return acc+curr;
// })
// console.log(res);

let arr=[1,2,3,4,5,6,7,8,9,10];

function getSum(acc,curr)     //callback func
{
    return acc+curr;
}

//polyfill 

Array.prototype.myReduce = function(callback,initialValue)
{
    let acc = initialValue ? initialValue : this[0];
    for(let i = initialValue ? 0 : 1;i<this.length;i++)
    {
        acc = callback(this[i],acc);   //callback.call(this,acc,this[i],i,this)
    }
    return acc;
}

let result = arr.myReduce(getSum);
console.log(result);
