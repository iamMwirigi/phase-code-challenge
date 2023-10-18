// Define tax rates
const taxRates = [
  {min: 0, max: 24000, rate: 0.1},
  {min: 24000, max: 32333, rate: 0.25},
  {min: 32334, max: 500000, rate: 0.30},
  {min: 500001, max: 800000, rate: 0.325},
  {min: 800000, max: 1000000, rate: 0.3},
  
];

// Define NHIF and NSSF rates
const nhifRate = 0.75;
const nssfRate = 0.75;

// Get input values from user
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits:"));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate payee (tax)
let payee = 0;
let taxableIncome = grossSalary - (nhifRate * grossSalary) - (nssfRate * grossSalary * 2);
for (let i = 0; i < taxRates.length; i++) {
const taxBracket = taxRates[i];
if (taxableIncome > taxBracket.min) {
  const taxableAmount = Math.min(taxableIncome - taxBracket.min, taxBracket.max - taxBracket.min);
  payee += taxableAmount * taxBracket.rate;
}
}

// Calculate NHIF and NSSF deductions
const nhifDeductions = Math.min(nhifRate * grossSalary);
const nssfDeductions = nssfRate * grossSalary * 2;

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;