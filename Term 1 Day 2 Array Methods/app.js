const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [12, 33, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for
//foreach
//filter
//map
//sort
//reduce

// Step 1: Print company names using for loop
// for(let i=0 ; i<companies.length; i++)
// {
//     console.log(companies[i]['name'])
// }
// Step 2: Print company names using looping function
// Note: You will not use variable i
// Note: order of key value pair . Its v,k not k,v. 
// Talk about this and change the order of v,k to k,v before 
// going to the next step
// companies.forEach(function(v,k){
//     console.log(companies[k]['name'])
// })
// Step 3: Arrow functions
// Converted above step to below but missplaced k,v
// Ask them to find what was the error
// companies.forEach((k,v) => console.log(v.name))

// Filter in conventional way
let financeCompanies = []
// Step 1: Using for loop
// for(let i=0;i<companies.length;i++)
// {
//     if(companies[i]['category'] === "Finance" )
//         financeCompanies.push(companies[i])
// }
// Step 2: using filter
// financeCompanies = companies.filter(function(v){
//     if (v['category'] === "Finance")
//         return true
// })
// Step 3: Using arrow function, ask them to experiment
// around using various return value like 1:2 etc
// financeCompanies = companies.filter((v) =>
//      (v['category'] === "Finance")? 1:false
// )
// Step 4: Optimized
// financeCompanies = companies.filter(v=>v['category']==="Finance")
// console.log(financeCompanies)
//map & reduce
// Step 1 : Map is like filter but it can return custom value
// Note: filter would return values whichever satisfies 
// the condition. Map can format the value and give something
// else. Below example is to bring only "finance" company names
// Activity: Students should figure out to remove undefined
// Hint use filter before mapping
// let c = companies.map(function(v){
//     if (v.category === "Finance")
//         return v.name 
// })
// console.log(c)
// sort
// Step 1: Write the final code
// Activity ask them to change the values of return
// like a-b to b-a and understand sorting better
// let sortedAges = ages.sort((a,b) => a-b )
// console.log(sortedAges)

//reduce
// let ageSum = ages.reduce((total,age) => total+age , 0)
// console.log(ageSum)

// Chaining
// companies.filter(v => (v.name === "Finance"))
//          .sort()
//          .map()
//          .reduce()

// 1. Experiment from the begining
// 2.1 Foreach get undefined error - Answer: replace k and v
// 2.2 Map get error undefined  - Answer: filter and then map
// 3. Learn reduce
// 4. Retail companies with their age as single array using 
// Map, reduce, Sort, filter
// [
//     "Company 1 (20 years)",
//     "Company 2 (30 years)"
// ]
// // Solution #1
let retailCompanies = companies
    .filter(v=>v.category==="Retail")
    .sort((a,b)=> (a.end-a.start) - (b.end-b.start) )
    .map((v,k) =>  `${v.name} (${v.end-v.start} years)`)  
// Solution #2
// let retailCompanies = companies
//     .filter(v => v.category === "Retail")
//     .map((v, k) => ({ name: v.name, age: v.end - v.start }))
//     .sort((a, b) => (a.age-b.age))
//     .map((v,k) => `${v.name} (${v.age} years)` )
console.log(retailCompanies)


















// companies.forEach(function (c) {
//     console.log(c)
// })

// let ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// let combined = ages.map(age => age * 2)
//     .filter(age => age > 40)
//     .reduce((a, b) => a + b, 0)
// console.log(combined)

