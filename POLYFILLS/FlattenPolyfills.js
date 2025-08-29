// let arr=[1,2,3,4,[5,6],[[7,8]],[[[9,10]]]];
// let res = arr.flat(3);
// console.log(res);

let arr=[1,2,3,4,[5,6],[[7,8]],[[[9,10]]]];      //depth=3, bcz 3 nested sub-arrays

//polyfill

Array.prototype.myFlatten = function(depth=1)         //by default depth is always 1
{
    let tempArr = [];
    function removeSubArr(array,depth)       // will iterate over the array, check each element, //if element is an array itself, again calls the function for that elemnt as the inputted array (RECURSION)
    {
        for(let el of array)
        {
            if(Array.isArray(el)&& depth)
            {
                removeSubArr(el,depth-1);
            }
            else
            {
                tempArr.push(el);
            }
        }
    }
    removeSubArr(arr,depth);                //calling at the end to get the final val
    return tempArr;
}

let result = arr.myFlatten(3);
console.log(result);
