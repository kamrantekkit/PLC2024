//Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(a, b){
    let arr = [];
    for (let i = 1; i<=5; i++) {
        arr.push(i);
    }
    return arr;    
}

function applicatorFunc(inpFunc, s){
    if(s=='s'){
        const arr = inpFunc;        
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
    else{        
        const arr = inpFunc;
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum/5;
    }
}

let x = applicatorFunc(arrFunc(1,10), 's');
console.log(x);