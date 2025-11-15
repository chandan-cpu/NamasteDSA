function p1(n){
    for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=0;j<n;j++)
        {
            row+="* ";
        }
        console.log(row);
    }
}

function p2(n){
       for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=0;j<=i;j++)
        {
            row+="* ";
        }
        console.log(row);
    }

}

function p3(n)
{
    for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=0;j<=i;j++)
        {
        //    number=number+1;
        row=row+(i+1)
        //    process.stdout.write(number+" ");
        }
        console.log(row);
        
      
    }
}

function p4(n)
{
    for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=5;j>i;j--)
        {
        //    number=number+1;
        row=row+(i+1)
        //    process.stdout.write(number+" ");
        }
        console.log(row);
    }
}
function p5(n)
{
    for(let i=5;i>0;i--)
    {
        let row="";
        for(let j=0;j<i;j++)
        {
        //    number=number+1;
        row=row+(j+1)
        //    process.stdout.write(number+" ");
        }
        console.log(row);
    }
}

function p6(n)
{
    
    for(let i=0;i<n;i++)
    {
        let row="";
        for(let j=0;j<(n-(i+1));j++)
        {
            row+=" ";
        }
        console.log(row);
        for(let k=0;k<=i;k++)
        {
            row+="*";
        }
        console.log(row);
    }
}

function p7(n)
{
    for(let i=0;i<n;i++)   
    {
        let row="";
        let toogle= 1
        for(let j=0;j<=i;j++)
        {
            row=row+toogle
            if(toogle==1)
                toogle=0;
            else
                toogle=1;
        }
        console.log(row);
    }
}

function p8(n)
{
    let toogle= 1
    for(let i=0;i<n;i++)   
    {
        let row="";
      
        for(let j=0;j<=i;j++)
        {
            row=row+toogle
            if(toogle==1)
                toogle=0;
            else
                toogle=1;
        }
        console.log(row);
    }
}

//Problem 1 call 
// p1(5);

//Problem 2 call
//  p2(5);

//Problem 3 call
// p3(5);
//Problem 4 call
// p4(5);
//Problem 5 call
//  p5(5);
//Problem 6 call
    // p6(5);

//Problem 7 call
    // p7(5);

//Problem 8 call
    p8(5);

