// First problem


function mindGame(number){
   const Multiply = number * 3;
    const Plus = Multiply + 10;
     const Divide = Plus / 2;
    const Minus = Divide - 5;
    return Minus;
}

const myNumber = 40;
const total = mindGame(myNumber);
console.log(total);


// third problem

function isLGSeven (number){
    const minus = number - 7;
    if (minus < 7){
        return minus;
    }
    else{ 
       return minus * 2;
    } 
}
const myFirsrNumber = 20;
const firstNumber = isLGSeven(myFirsrNumber);
console.log(firstNumber);


// fift problem

function gemsToDiamond(friend1, friend2, friend3){
    const first = friend1 * 21;
    const second = friend2 * 32;
    const third = friend3 * 43;
    const total = first + second + third;

    if (total < 2000){
        return total - 2000;
    }
    else{
        return total;
    }
}
const friend1 = 50;
const friend2 = 60;
const friend3 = 70;
const Gems = gemsToDiamond(friend1, friend2, friend3);
console.log(Gems);