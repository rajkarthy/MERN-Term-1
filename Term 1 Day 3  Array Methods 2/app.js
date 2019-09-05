//indexOf
//find
//findIndex
//push, pop
//shift, unshift
//splice and slice
const players = ["Virat","Sachin","Ganguly"];
// console.log(players[-1])
// console.log(typeof players)
// console.log(players)

const players2 =[
    {name:"Virat",rank:5},
    {name:"Sachin",rank:10},
    {name:"Ganguly",rank:15}
];
// let player = players2.find(player => player.name==="Sachin")
// let  player = players2.find(player => player.name==="Ganguly")
// console.log(i)
// console.log(player)
// console.log(typeof players2)
// console.log(players2)

// let playerIndex = players2
//     .findIndex(player=> player.name==="Sachin")
// console.log(playerIndex)


//push, pop
//shift, unshift
// Javascript arrays are dynamic 
// players.push("Dhoni")
// console.log(players.length)
// let removedPlayer = players.pop()
// console.log(players.length)
// console.log(removedPlayer)
// players[0] = "Dhoni"
// console.log(players)

// Splice and slice
// let newPlayers = ["Dhoni", "Rohit Sharma"]
// players.splice(1,1,...newPlayers)
// console.log(players)
// const players = ["Virat","Sachin","Ganguly"]
let removedPlayers = players.slice(1,2);
// while(i!=1)
// {

// }
console.log(removedPlayers);
// console.log(players)

// const name ="Sachin"
// console.log(name)
// name = "Ganguly"
// console.log(name)

// Assignment Day 3 - Find company containing the word "Six" 
// in its name and print its age
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
// Solution #1
// let age = companies
// .filter(c =>c.name.includes("Six"))
// .map((v,k) => v.end-v.start)
// console.log(age)