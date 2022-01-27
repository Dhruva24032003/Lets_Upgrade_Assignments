//To make a function that will give the output of the table. i.e. table 12. use prompt to get the user input and console to give the output.

function printtable(num){
    for(let i=1;i<=10;i++){

        console.log(num+' * '+i+' = ',num*i);
    }
}

const num = prompt('Enter a number:-');

printtable(num);