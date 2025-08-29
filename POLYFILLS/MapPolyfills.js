// let arr=[1,2,3,4,5]
// let res = arr.map((val)=>{
//     return val;       //prints [1,2,3,4,5]
// })
// console.log(res);

let arr = [1,2,3,4,5];

function getSquareArr(num)    //callback func
{
    return num * 2;
}

//polyfill

Array.prototype.myMap = function(callback) 
{
    let tempArr=[];
    for(let i=0;i<this.length;i++)
    {
        tempArr.push(callback(this[i]));           //callback.call(this[i],i,this)
    }
    return tempArr;
}

let result = arr.myMap(getSquareArr); 
console.log(result);