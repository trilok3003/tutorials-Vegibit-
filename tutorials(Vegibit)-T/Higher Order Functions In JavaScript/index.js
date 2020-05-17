	
//  Array of objects
const companies = [
  { id: 1, name: "Square", sector: "Finance", founded: 2009 },
  { id: 2, name: "Disney", sector: "Media", founded: 1923 },
  { id: 3, name: "Ford", sector: "Auto", founded: 1903 },
  { id: 4, name: "Netflix", sector: "Media", founded: 1997 },
  { id: 5, name: "Apple", sector: "Technology", founded: 1976 },
  { id: 6, name: "Visa", sector: "Finance", founded: 1958 },
  { id: 7, name: "Tesla", sector: "Auto", founded: 2003 },
  { id: 8, name: "Microsoft", sector: "Technology", founded: 1975 },
  { id: 9, name: "Roku", sector: "Media", founded: 2002 }
];
 
//  Array of numbers
const numbers = [32, 15, 20, 16, 52, 54, 11, 49, 31, 19, 75, 42, 45, 68, 30];

function output(data) {
   // document.write(data + "<br/>");
   console.log(data)
  }
  // for 
  for (let i = 0; i < companies.length; i++) {
    output(companies[i].name);
  }
// forEach
  companies.forEach(function(company) {
    output(company.name);
  });
// for of
  for (let company of companies) {
    output(company.name);
  }
  // for in  for key value pair
  for (let property in companies[3]) {
    output(property + ": " + companies[3][property]);
  }
  // filter
  let twenty = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 20) {
    twenty.push(numbers[i]);
  }
}
console.log(twenty)

const twenty1 = numbers.filter(data => {
    if (data <= 20) {
      return true;
    }
  });

console.log(twenty1)

const twenty2 = numbers.filter(num => num <= 20);
console.log(twenty2)

const financeCompanies = companies.filter(function(company) {
  if (company.sector === "Finance") {
    return true;
  }
});
 
financeCompanies.forEach(data => output(data.name));

const seventiesCompanies = companies.filter(
    company => company.founded >= 1970 && company.founded < 1980
  );
   
  seventiesCompanies.forEach(company => output(company.name));

  const fortyYears = companies.filter(company => 2019 - company.founded >= 40);
 
fortyYears.forEach(company => output(company.name));

// map

const newArray = companies.map(company => company.name);
 
newArray.forEach(company => output(company));

const description = companies.map(
    company =>
      `${company.name} was founded in ${company.founded} and is in the  ${
        company.sector
      } business`
  );
   
  description.forEach(d => output(d));

  const powerTwo = numbers.map(num => Math.pow(num, 2));
 
powerTwo.forEach(num => output(num));

// sort
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.founded > c2.founded) {
      return 1;
    } else {
      return -1;
    }
  });
   
  sortedCompanies.forEach(c => output(c.name));
const sortedCompanies1 = companies.sort((c1, c2) =>
  c1.founded > c2.founded ? 1 : -1
);
 
sortedCompanies1.forEach(c => output(c.name));

const sortInts = numbers.sort((a, b) => a - b);
 
sortInts.forEach(n => output(n))

// reduce
let numSum = 0;
for (let i = 0; i < numbers.length; i++) {
  numSum += numbers[i];
}
 
output(numSum);

const numSum1 = numbers.reduce((total, num) => total + num, 0);
output(numSum1);

const totalYears = companies.reduce(function(total, company) {
    return total + (2019 - company.founded);
  }, 0);
   
  output(totalYears);

  const totalYears1 = companies.reduce(
    (total, company) => total + (2019 - company.founded),
    0
  );
  output(totalYears1);
const combined = numbers
  .map(num => num * 3)
  .filter(num => num >= 70)
  .sort((a, b) => a - b);
 
combined.forEach(c => output(c));

