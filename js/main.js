let userName = prompt("What is your name?");
console.log("Hi, " + userName + ". Let's set up a budget for you.");

let income = prompt("What is your monthly income?");

while (income === "") {
  income = prompt(
    "Come on. You must make something. What is your monthly income?"
  );
}

mainIncome = parseInt(income);

console.log("Main Income is " + mainIncome);

let extraIncome = prompt("How much was your extra income this month?");
let totalIncome;

if (extraIncome === "") {
  let totalIncome = mainIncome;
  console.log("Total Income is " + totalIncome);
  wageBracket1(totalIncome);
} else {
  extraIncome = parseInt(extraIncome);
  console.log("Extra Income is " + extraIncome);
  let totalIncome = mainIncome + extraIncome;
  wageBracket2(totalIncome);
  wageBracket1(totalIncome);
}

function wageBracket1(totalIncome) {
  if (totalIncome <= 1500) {
    console.log(
      "That's not enough to live on. Get another job as soon as possible."
    );
  } else if (totalIncome <= 5000) {
    console.log("That's not a lot of money. You should budget well.");
  } else {
    console.log("Let's get to work on your budget. Great!");
  }
}

function wageBracket2(totalIncome, reply) {
  console.log(userName + ", your total income was " + totalIncome + ".");

  switch (true) {
    case totalIncome > 45000:
      reply = "Holy heckaroo! Let's plan your retirement.";
      break;
    case totalIncome > 5001:
      reply = "You're not a rich little fiend, but you're not going hungry.";
      break;
    case totalIncome >= 1500:
      reply = "You're getting by, but watch your spending.";
      break;
    case totalIncome < 1500:
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

function needs() {
  let totalNeeds =
    rentMortgage +
    groceries +
    health +
    transport +
    gas +
    electric +
    mobile +
    internet +
    extras;
  let percentNeeds = (totalNeeds / income) * 100;
  let goodPractice = percentNeeds <= 50;
  let badPractice = percentNeeds > 50;

  function needsSpending(totalNeeds, percentNeeds) {
    console.log(
      "You spend " +
        totalNeeds +
        " on necessities. That is " +
        percentNeeds +
        " percent of your income. Your detailed spending is: Rent or Mortgage - " +
        rentMortgage +
        ", Groceries - " +
        groceries +
        ", Health - " +
        health +
        ", Transport - " +
        transport +
        ", Gas - " +
        gas +
        ", Electric - " +
        electric +
        ", Mobile - " +
        mobile +
        ", Internet - " +
        internet +
        ", Extras - " +
        extras
    );
  }
  switch (true) {
    case goodPractice:
      needsSpending();
      console.log(
        "Great. You should't spend more than 50% of your income on necessities."
      );
      break;
    case badPractice:
      needsSpending();
      console.log(
        "Terrible. You should't spend more than 50% of your income on necessities."
      );
      break;
  }

  return percentNeeds;
}

let rentMortgage = parseInt(
  prompt("How much do you spend on rent or your mortgage monthly?")
);

let groceries = parseInt(prompt("How much do you spend on groceries a month?"));

let health = parseInt(
  prompt(
    "How much do you spend on our health, including medication, insurance, doctors etc.?"
  )
);

let transport = parseInt(
  prompt(
    "How much is the total you spend on rent or your public transport, fuel, car insurance, etc.?"
  )
);

let gas = parseInt(prompt("What is your monthly gas bill?"));

let electric = parseInt(prompt("What is your monthly power bill?"));

let mobile = parseInt(prompt("What is your monthly mobile bill"));

let internet = parseInt(
  prompt("How much do you spend on your internet service?")
);

let extras = parseInt(
  prompt(
    "Do you have any other necessities you haven't added up? Insert the total amount here"
  )
);

needs();

function wants() {
  let totalWants = outings + holidays + entertainment;
  let percentWants = (totalWants / income) * 100;
  let goodPractice = percentWants <= 30;
  let badPractice = percentWants > 30;

  function wantsSpending(totalWants, percentWants) {
    console.log(
      "You spend " +
        totalWants +
        " on stuff that's superfluous. That is " +
        percentWants +
        " percent of your income. Your detailed spending is: Outings - " +
        outings +
        ", Vacations - " +
        holidays +
        ", Entertainment - " +
        entertainment
    );
  }
  switch (true) {
    case goodPractice:
      wantsSpending();
      console.log(
        "Great. You should't spend more than 30% of your income on wants."
      );
      break;
    case badPractice:
      wantsSpending();
      console.log(
        "Terrible. You should't spend more than 50% of your income on wants."
      );
      break;
  }

  return percentWants;
}

let outings = parseInt(
  prompt("How much do you spend on going out in a month?")
);
let holidays = parseInt(
  prompt("How much do you save up for vacations per month?")
);
let entertainment = parseInt(
  prompt("How much do you spend on entertaining monthly?")
);

wants();

function debtsSavings() {
  let totalDebts = debts + savings;
  let percentDebts = (totalDebts / income) * 100;
  let goodPractice = percentDebts <= 20;
  let badPractice = percentDebts > 20;

  function debtsSpending(totalDebts, percentDebts) {
    console.log(
      "You carry " +
        totalDebts +
        " on necessities. That is " +
        percentDebts +
        " percent of your income."
    );
  }
  switch (true) {
    case goodPractice:
      debtsSpending();
      console.log(
        "Great. Your debts and savings are less than 20% of your income. You should try to save more money."
      );
      break;
    case badPractice:
      debtsSpending();
      console.log(
        "You should't carry more than 20% of your income in debt. If this is debt, you need to lower it and save more. We will generate an alternative scenario."
      );
      const debtSavingsScenario1 = new debtSavingsScenario(
        prompt("Insert an alternative amount of debt"),
        prompt("Insert a different amount you could save.")
      );
      debtSavingsScenario1.showDebtScenario();
      break;
  }

  return percentDebts;
  return debtSavingsScenario1;
}

let debts = parseInt(
  prompt(
    "What are your debt payments monthly, including credit cards, loans etc.?"
  )
);
let savings = parseInt(prompt("How much money do you save per month?"));

debtsSavings();

function debtSavingsScenario(debt, savings) {
  this.debt = debt;
  this.savings = savings;
  this.showDebtScenario = function () {
    console.log(
      "This is a scenario where you owe: " +
        this.debt +
        " and save: " +
        this.savings
    );
  };
}

const debtSavingsScenario2 = new debtSavingsScenario(1000, 2000);
debtSavingsScenario2.showDebtScenario();

totalIncome = 25000;

class FullScenariosArray {
  constructor(needs, wants, savings, debts) {
    this.needs = parseInt(needs);
    this.wants = parseInt(wants);
    this.savings = parseInt(savings);
    this.debts = parseInt(debts);
  }
  sumSingleScenario() {
    let budget = this.needs + this.wants + this.debts;
    let percentNeeds = parseInt((this.needs / totalIncome) * 100);
    let percentWants = parseInt((this.wants / totalIncome) * 100);
    let percentSavings = parseInt((this.savings / totalIncome) * 100);
    let percentDebts = parseInt((this.debts / totalIncome) * 100);
    let percentSpending = parseInt((budget / totalIncome) * 100);

    console.log(
      "In this scenario, your needs are " +
        percentNeeds +
        " percent of your income. Your wants are " +
        percentWants +
        " percent of your income. Your savings are " +
        percentSavings +
        " percent of your income. Your debts are " +
        percentDebts +
        " percent of your income. Your are spending " +
        percentSpending +
        " percent of your income."
    );
  }
}

const fullScenariosArrays = [];
fullScenariosArrays.push(
  new FullScenariosArray("10000", "25000", "8000", "500")
);
fullScenariosArrays.push(
  new FullScenariosArray("15000", "10000", "0", "20000")
);
fullScenariosArrays.push(new FullScenariosArray("5000", "2000", "2000", "0"));

for (const fullScenariosArray of fullScenariosArrays)
  fullScenariosArray.sumSingleScenario();

console.log(fullScenariosArrays);
console.log(
  "You have presented " + fullScenariosArrays.length + " budget alternatives."
);

const badDebt = fullScenariosArrays.filter(
  (amt) => amt.debts > totalIncome / 5
);
console.log(badDebt);
