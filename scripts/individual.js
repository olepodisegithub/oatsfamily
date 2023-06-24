let firstname = ""
let othernames = ""
let maidensurname = ""
let gender = ""
let dobtext = ""
let pob = ""
let status = ""
let birthorder = ""
let motherid = ""
let fatherid = ""
let spouseid = ""
let domtext = ""
let pom = ""
let childrencount = ""
let siblingscount = ""
let contactperson = ""
let contactdetails = ""

let alldetails = ""

document.getElementById('firstname').value = sessionStorage.getItem("FirstName")
document.getElementById('othernames').value = sessionStorage.getItem("OtherNames")
document.getElementById('maidensurname').value = sessionStorage.getItem("MaidenSurname")
document.getElementById('gender').value = sessionStorage.getItem("Gender")
document.getElementById('dobtext').value = sessionStorage.getItem("DateOfBirth")
document.getElementById('pob').value = sessionStorage.getItem("PlaceOfBirth")
document.getElementById('status').value = sessionStorage.getItem("Status")
document.getElementById('birthorder').value = sessionStorage.getItem("BirthOrder")
document.getElementById('motherid').innerText = sessionStorage.getItem("MotherID")
document.getElementById('fatherid').innerText = sessionStorage.getItem("FatherID")
document.getElementById('spouseid').innerText = sessionStorage.getItem("SpouseID")
document.getElementById('domtext').value = sessionStorage.getItem("DateOfMarriage")
document.getElementById('pom').value = sessionStorage.getItem("PlaceOfMarriage")
document.getElementById('childrencount').value = sessionStorage.getItem("ChildrenCount")
document.getElementById('siblingscount').value = sessionStorage.getItem("SiblingsCount")
document.getElementById('contactperson').value = sessionStorage.getItem("ContactPerson")
document.getElementById('contactdetails').value = sessionStorage.getItem("ContactDetails")
document.getElementById('mother').value = sessionStorage.getItem("MotherName")
document.getElementById('father').value = sessionStorage.getItem("FatherName")
document.getElementById('spouse').value = sessionStorage.getItem("SpouseName")

document.getElementById("savebutton").addEventListener("click", SaveDetailsToFIle)

function SaveDetailsToFIle()
{

    firstname = document.getElementById('firstname').value
    othernames = document.getElementById('othernames').value
    maidensurname = document.getElementById('maidensurname').value
    gender = document.getElementById('gender').value
    dobtext = document.getElementById('dobtext').value
    pob = document.getElementById('pob').value
    status = document.getElementById('status').value
    birthorder = document.getElementById('birthorder').value
    motherid = document.getElementById('motherid').innerText
    fatherid = document.getElementById('fatherid').innerText
    spouseid = document.getElementById('spouseid').innerText
    domtext = document.getElementById('domtext').value
    pom = document.getElementById('pom').value
    childrencount = document.getElementById('childrencount').value
    siblingscount = document.getElementById('siblingscount').value
    contactperson = document.getElementById('contactperson').value
    contactdetails = document.getElementById('contactdetails').value

    alldetails = firstname+","+othernames+","+maidensurname+","+gender+","+dobtext+","+pob+","+status+","+birthorder+","+motherid+","+fatherid+","+spouseid+","+domtext+","+pom+","+childrencount+","+siblingscount+","+contactperson+","+contactdetails

    const fs = require('fs');

    fs.writeFile('ChangesFile', alldetails, err => 
        {
            if (err) 
            {
                console.error(err)
            }
            else 
            {
                console.log('Data written to file successfully.')
            }
        }
    )
}