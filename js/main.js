let userName = prompt('What is your name?');
console.log('Hi, ' + userName + ". Let's set up a budget for you.");

let Income = prompt('What is your monthly income?');

while (Income === '') {
    Income = prompt('Come on. You must make something. What is your monthly income?');
};

mainIncome = parseInt(Income);

console.log('Main Income is '+ mainIncome);



let extraIncome = prompt('How much was your extra income this month?');
let totalIncome;

if (extraIncome === '') {
    let totalIncome = mainIncome;
    console.log('Total Income is '+ totalIncome);
    wageBracket1(totalIncome);
} else {
    extraIncome = parseInt(extraIncome);
    console.log('Extra Income is '+ extraIncome);
    let totalIncome = mainIncome + extraIncome;
    wageBracket2(totalIncome);
    wageBracket1(totalIncome);
}


function wageBracket1(totalIncome) {
    if (totalIncome <= 1500){
        console.log("That's not enough to live on. Get another job as soon as possible.");
    } else if (totalIncome <= 5000){
        console.log("That's not a lot of money. You should budget well.");
    } else {
        console.log("Great! Let's get to work on your budget.");
    }
}

function wageBracket2(totalIncome, reply) {
    
    console.log(userName + ', your total income was ' + totalIncome + '.' );

    switch (true){
        case (totalIncome > 45000):
            reply = "Holy heckaroo! Let's plan your retirement.";
            break;
        case (totalIncome > 5001):
            reply = "You're not a rich little fiend, but you're not going hungry.";
            break;
        case (totalIncome >= 1500):
            reply = "You're getting by, but watch your spending.";
            break;
        case (totalIncome < 1500):
            reply = "You live in poverty. A budget will not fix this.";
            break;
    }
    console.log(reply);


    // let lowEarner = totalIncome <= 1500;
    // let normalEarner = totalIncome <= 5000;
    // let highEarner = totalIncome > 5001 && totalIncome < 44999;
    // let megaEarner = totalIncome > 45000;


    // if (lowEarner){
    //     console.log("You live in poverty.");
    // } else if (normalEarner){
    //     console.log("You're getting by, but watch your spending.");
    // } else if (highEarner){
    //     console.log("You're not a rich little fiend, but you're not going hungry.");
    // } else {
    //     console.log("Also...Holy heckaroo! Let's plan your retirement.");
    // }
}



