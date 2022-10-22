function inch_to_cms()
{
    var number = parseInt(prompt("Enter a value in inch"))
    document.write(number + " inches in cm: " + (number*2.54))
}

function pow(number1,number2)
{
    var ans=1
    var i=0
    while(i<number2)
    {
        ans = ans * number1;
        i++;
    }
    document.write(number1+"^"+number2+"="+ans)
}

function sum_sq_even()
{
    var num = parseInt(prompt("Enter last number for even:"))
    var sum=0;  // Accumulator
    var i=1
            while(i<=num)
            {
                if(i%2==0)
                {
                    sum+=(i*i)
                }
                i++;      
            }
            document.write("<br>Sum of square of even number is "+sum)
}