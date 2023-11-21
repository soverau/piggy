// Ingrese nombre
let userName = prompt("What is your name?");
console.log("Hi, " + userName + ". Let's set up a budget for you.");

// Ingrese ingresos principales
let income = prompt("What is your monthly income?");

// Asegurar que no esté en blanco
while (income === "") {
  income = prompt(
    "Come on. You must make something. What is your monthly income?"
  );
}

// Convertir monto en un número
let mainIncome = parseInt(income);

// Devolver mensaje al usuario
console.log("Main Income is " + mainIncome);

// Ingrese ingresos secundarios
let extraIncome = prompt("How much was your extra income this month?");

// Dar 3 oportunidades de ingresar si no dejó el campo vacío
if (extraIncome === "") {
  for (let i = 0; i < 3; i++) {
    extraIncome = prompt(
      "Come on, no extra income? Are you sure? Any number at all..."
    );
    i++;
  }
}

// Declarar monto total
let totalIncome;

// Crear franjas de ingreso

if (extraIncome === "") {
  extraIncome = 0;
  totalIncome = mainIncome;
  console.log("Total Income is " + totalIncome);
  wageBracket1(totalIncome);
} else if (extraIncome > 0) {
  extraIncome = parseInt(extraIncome);
  console.log("Extra Income is " + extraIncome);
  totalIncome = mainIncome + extraIncome;
  wageBracket2(totalIncome);
  wageBracket1(totalIncome);
}

// Dar respuesta al usuario según el monto que gana - franja ingreso 1.

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

// Dar respuesta al usuario según el monto que gana - franja ingreso 2.
function wageBracket2(totalIncome, reply) {
  console.log(userName + ", your total income was " + totalIncome + ".");

  if (totalIncome > 45000) {
    reply =
      "Holy heckaroo! You make " +
      totalIncome +
      ". Let's plan your retirement.";
  } else if (totalIncome > 5001) {
    reply =
      "You make " +
      totalIncome +
      ". You're not a rich little fiend, but you're not going hungry.";
  } else if (totalIncome >= 1500) {
    reply =
      " You make " +
      totalIncome +
      ". You're getting by, but watch your spending.";
  } else if (totalIncome < 1500) {
    reply =
      " You make " +
      totalIncome +
      ". You live in poverty. A budget will not fix this.";
  }
  console.log(reply);

  console.log(`Your total income ${totalIncome}.`);

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

// Función necesidades
function needs(
  rentMortgage,
  groceries,
  health,
  transport,
  gas,
  electric,
  mobile,
  internet,
  extras,
  totalIncome
) {
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

  let percentNeeds = (totalNeeds / totalIncome) * 100;

  let goodPractice = percentNeeds <= 50;
  let badPractice = percentNeeds > 50;

  console.log(
    `Your needs spending is ${percentNeeds}% of your total income ${totalIncome}.`
  );

  // Función gastos - devolución al usuario
  function needsSpending(totalNeeds, percentNeeds, totalIncome) {
    console.log(
      "You spend " +
        totalNeeds +
        " on necessities. That is " +
        percentNeeds +
        " percent of your income.  You make " +
        totalIncome +
        ". Your detailed spending is: Rent or Mortgage - " +
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

  needsSpending(totalNeeds, percentNeeds, totalIncome);

  // Devolución buenas práctivas sobre gastos en necesidades

  if (goodPractice) {
    console.log(
      "Great. You should't spend more than 50% of your income on necessities.  You make " +
        totalIncome +
        "."
    );
  } else if (badPractice) {
    console.log(
      "Terrible. You should't spend more than 50% of your income on necessities.  You make " +
        totalIncome +
        "."
    );
  }

  // if (goodPractice) {
  //   console.log("Great");
  // } else if (badPractice) {
  //   console.log(
  //     "Terrible. You should be spending less than 50% of your income on needs"
  //   );
  // }
}

// Solicitar al usuario montos que gasta en necesidades

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

// Llamar a función necesidades

needs(
  rentMortgage,
  groceries,
  health,
  transport,
  gas,
  electric,
  mobile,
  internet,
  extras,
  totalIncome
);

// Función deseos

function wants(outings, holidays, entertainment, totalIncome) {
  console.log(`running wants`);
  console.log(`total income ${totalIncome}`);
  let totalWants = outings + holidays + entertainment;
  console.log(`total wants ${totalWants}`);
  let percentWants = (totalWants / totalIncome) * 100;
  console.log(`percent wants ${percentWants}`);
  let goodPractice = percentWants <= 30;
  let badPractice = percentWants > 30;

  // Función gastos en deseos

  function wantsSpending(totalWants, percentWants, totalIncome) {
    console.log(
      "You spend " +
        totalWants +
        " on stuff that's superfluous. That is " +
        percentWants +
        " percent of your total income " +
        totalIncome +
        ". Your detailed spending is: Outings - " +
        outings +
        ", Vacations - " +
        holidays +
        ", Entertainment - " +
        entertainment
    );
  }

  // llamar a función gastos en deseos

  wantsSpending(totalWants, percentWants, totalIncome);

  // Devolución a usuario sobre gastos en deseos

  if (goodPractice) {
    console.log(
      "Great. You should't spend more than 30% of your income on wants."
    );
  } else if (badPractice) {
    console.log(
      "Terrible. You should't spend more than 50% of your income on wants."
    );
  }
}

// Pedir a usuario que ingrese montos de gastos en deseos

let outings = parseInt(
  prompt("How much do you spend on going out in a month?")
);
let holidays = parseInt(
  prompt("How much do you save up for vacations per month?")
);
let entertainment = parseInt(
  prompt("How much do you spend on entertaining monthly?")
);

// llamar a función deseos

wants(outings, holidays, entertainment, totalIncome);

// Función ahorros

function debtsSavings(debts, savings, totalIncome) {
  let totalDebts = debts + savings;
  let percentDebts = (totalDebts / totalIncome) * 100;
  let goodPractice = percentDebts <= 20;
  let badPractice = percentDebts > 20;

  // Función deudas

  function debtsSpending(totalDebts, percentDebts) {
    console.log(
      "You carry " +
        totalDebts +
        " on debts. That is " +
        percentDebts +
        " percent of your income."
    );
  }

  // Llamar a función gastos en deudas

  debtsSpending(totalDebts, percentDebts);

  if (goodPractice) {
    console.log(
      "Great. Your debts and savings are less than 20% of your income. You should still try to save more money."
    );
  } else if (badPractice) {
    console.log(
      "You should't carry more than 20% of your income in debt. If this is debt, you need to lower it and save more. We will generate an alternative scenario."
    );
    const debtSavingsScenario1 = new debtSavingsScenario(
      prompt("Insert an alternative amount of debt"),
      prompt("Insert a different amount you could save.")
    );
    debtSavingsScenario1.showDebtScenario();

    return percentDebts;
  }
}

// Pedir usuario montos de deudas y ahorros

let debts = parseInt(
  prompt(
    "What are your debt payments monthly, including credit cards, loans etc.?"
  )
);
let savings = parseInt(prompt("How much money do you save per month?"));

// Llamar a función ahorros y deudas

debtsSavings(debts, savings, totalIncome);

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

// A partir de aquí creo escenarios alternativos de ahorros y gastos para comparar al usuario pero no llegué a completarlo todavía.

const debtSavingsScenario2 = new debtSavingsScenario(1000, 2000);
debtSavingsScenario2.showDebtScenario();

// //const totalIncome = 25000;

// Se crea una clase con un constructor para ejemplificar escenarios de necesidades, deseos, ahorros y gastos.

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

// Se declara un array para crear un escenario
const fullScenariosArrays = [];

// Se envían los escenarios (luego se crearán a partir de lo que ingresa el usuario)
fullScenariosArrays.push(
  new FullScenariosArray("10000", "25000", "8000", "500")
);
fullScenariosArrays.push(
  new FullScenariosArray("15000", "10000", "0", "20000")
);
fullScenariosArrays.push(new FullScenariosArray("5000", "2000", "2000", "0"));

for (const fullScenariosArray of fullScenariosArrays)
  fullScenariosArray.sumSingleScenario();

// Devolución al usuario de escenarios posibles de presupuestos.

console.log(fullScenariosArrays);
console.log(
  "You have presented " + fullScenariosArrays.length + " budget alternatives."
);

// Se filtra cuál es el escenario donde hay demasiada deuda y se devuelve al usuario.

const badDebt = fullScenariosArrays.filter(
  (amt) => amt.debts > totalIncome / 5
);
console.log(`This scenario has way too much debt at an amount of ${badDebt}.`);

totalIncome = 25000;

// A partir de acá estoy haciendo pruebas

// class FullScenariosArray {
//   constructor(needs, wants, savings, debts) {
//     this.needs = parseInt(needs);
//     this.wants = parseInt(wants);
//     this.savings = parseInt(savings);
//     this.debts = parseInt(debts);
//   }
//   sumSingleScenario() {
//     let budget = this.needs + this.wants + this.debts;
//     let percentNeeds = parseInt((this.needs / totalIncome) * 100);
//     let percentWants = parseInt((this.wants / totalIncome) * 100);
//     let percentSavings = parseInt((this.savings / totalIncome) * 100);
//     let percentDebts = parseInt((this.debts / totalIncome) * 100);
//     let percentSpending = parseInt((budget / totalIncome) * 100);

//     console.log(
//       "In this scenario, your needs are " +
//         percentNeeds +
//         " percent of your income. Your wants are " +
//         percentWants +
//         " percent of your income. Your savings are " +
//         percentSavings +
//         " percent of your income. Your debts are " +
//         percentDebts +
//         " percent of your income. Your are spending " +
//         percentSpending +
//         " percent of your income."
//     );
//   }
// }

// const fullScenariosArrays = [];
// fullScenariosArrays.push(
//   new FullScenariosArray("10000", "25000", "8000", "500")
// );
// fullScenariosArrays.push(
//   new FullScenariosArray("15000", "10000", "0", "20000")
// );
// fullScenariosArrays.push(new FullScenariosArray("5000", "2000", "2000", "0"));

// for (const fullScenariosArray of fullScenariosArrays)
//   fullScenariosArray.sumSingleScenario();

// console.log(fullScenariosArrays);
// console.log("You have presented " + fullScenariosArrays.length + " budgets.");
