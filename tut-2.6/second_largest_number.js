function SecondLargestNumber(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first =arr[i];

        }
        else if(arr[i]>second && arr[i]!=first)
        {
            second=arr[i];
        }
    }
    return second;
}
let arr=[5,6,2,4,50,4,2];

let result=SecondLargestNumber(arr);
console.log(result);