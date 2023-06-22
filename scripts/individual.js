import { getFamilyDetails } from './Data.js';

let indid = 0
let motherid = 0
let fatherid = 0
let spouseid = 0

let listoffamilies = []

const myids = sessionStorage.getItem("familyids").split(":")

listoffamilies = getFamilyDetails()

console.log(getFamilyDetails())

document.getElementById('firstname').value = sessionStorage.getItem("familyids")
