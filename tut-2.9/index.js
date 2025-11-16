//Count the Digits on a Given Integer

function countDigits(n)
{
    if(n==0)
        return 1;
    let count=0;
    n=Math.abs(n);
    while(n>0)
    {
        n=Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(12345));
console.log(countDigits(-6789));