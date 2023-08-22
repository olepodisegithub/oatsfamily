
let listofindividuals = []
let individualid = ""
let names = ""
let firstname = ""
let othernames = ""
let maidensurname = ""
let gender = ""
let dobtext = ""
let pob = ""
let individualstatus = ""
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

var motherselect = document.createElement("SELECT")
var fatherselect = document.createElement("SELECT")
var spouseselect = document.createElement("SELECT")

function csvToKeyValueArray(csvString) 
{
  var rows = csvString.split('\n');

  rows = rows.filter(function(row) 
  {
    return row.trim() !== '';
  });

  var keys = rows[0].split(',');

  var result = [];

  for (var i = 1; i < rows.length; i++) 
  {
    var row = rows[i].split(',');
    var obj = {};

    for (var j = 0; j < keys.length; j++) 
    {
      obj[keys[j]] = row[j];
    }

    result.push(obj);
  }

  return result;
}

fetch('scripts/family.csv')
  .then(function(response) 
  {
    return response.text();
  })
  .then(function(csvString) 
  {
    listofindividuals = csvToKeyValueArray(csvString);
    loadDropdownLists()
  })
  .catch(function(error) 
  {
    console.error('Error:', error);
});

individualid = sessionStorage.getItem("IndividualID")
document.getElementById('firstname').value = sessionStorage.getItem("FirstName")
document.getElementById('othernames').value = sessionStorage.getItem("OtherNames")
document.getElementById('maidensurname').value = sessionStorage.getItem("MaidenSurname")
document.getElementById('gender').value = sessionStorage.getItem("Gender")
document.getElementById('dobtext').value = sessionStorage.getItem("DateOfBirth")
document.getElementById('pob').value = sessionStorage.getItem("PlaceOfBirth")
document.getElementById('status').value = sessionStorage.getItem("IndividualStatus")
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

document.getElementById("mother").readOnly  = true
document.getElementById("father").readOnly  = true
document.getElementById("spouse").readOnly  = true

document.getElementById("savebutton").addEventListener("click", SaveDetailsToFIle)

function SaveDetailsToFIle()
{
  if(individualid == "" || individualid == "0")
  {
    individualid = getNextIndividualID()
  }
  firstname = document.getElementById('firstname').value
  othernames = document.getElementById('othernames').value
  maidensurname = document.getElementById('maidensurname').value
  gender = document.getElementById('gender').value
  dobtext = document.getElementById('dobtext').value
  pob = document.getElementById('pob').value
  individualstatus = document.getElementById('status').value
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

  names = firstname+" "+othernames+" "+maidensurname+" "+firstname
  alldetails = individualid+","+names+","+firstname+","+othernames+","+maidensurname+","+gender+","+dobtext+","+pob+","+individualstatus+","+birthorder+","+motherid+","+fatherid+","+spouseid+","+domtext+","+pom+","+childrencount+","+siblingscount+","+contactperson+","+contactdetails

  window.open("http://127.0.0.1:8080/done.html?mydata=" + alldetails,"_self");
  //window.open("done.html?mydata=" + alldetails,"_self");
  
}

function loadDropdownLists()
{
  function addItem(itemName,itemValue,selectelement)
  {
    var option = document.createElement("option");
    option.text = itemName;
    option.value = itemValue
    selectelement.add(option);
  }
  
  let mothers = listofindividuals.filter(family => family.Gender === "Female")
  mothers.map(fam => addItem(fam.Name,fam.IndividualID,motherselect))

  let fathers = listofindividuals.filter(family => family.Gender === "Male")
  fathers.map(fam => addItem(fam.Name,fam.IndividualID,fatherselect))

  listofindividuals.map(fam => addItem(fam.Name,fam.IndividualID,spouseselect))

}

document.getElementById("mother").addEventListener("click", displayMotherSelect)
function displayMotherSelect()
{
  if(document.getElementById("motherdropdown").hasChildNodes()) 
  {
    document.getElementById("motherdropdown").removeChild(document.getElementById("motherdropdown").childNodes[0]);
  }
  else
  {
    document.getElementById("motherdropdown").appendChild(motherselect)
  }
}

document.getElementById("father").addEventListener("click", displayFatherSelect)
function displayFatherSelect()
{
  if(document.getElementById("fatherdropdown").hasChildNodes()) 
  {
    document.getElementById("fatherdropdown").removeChild(document.getElementById("fatherdropdown").childNodes[0]);
  }
  else
  {
    document.getElementById("fatherdropdown").appendChild(fatherselect)
  }
}

document.getElementById("spouse").addEventListener("click", displaySpouseSelect)
function displaySpouseSelect()
{
  if(document.getElementById("spousedropdown").hasChildNodes()) 
  {
    document.getElementById("spousedropdown").removeChild(document.getElementById("spousedropdown").childNodes[0]);
  }
  else
  {
    document.getElementById("spousedropdown").appendChild(spouseselect)
  }
}

motherselect.onchange = (ev) =>
{
  let selecetedIndex = motherselect.selectedIndex;
  let selectedOption = motherselect.options[selecetedIndex];
  document.getElementById('motherid').innerText = selectedOption.value;
  document.getElementById('mother').value = selectedOption.text;
  document.getElementById("motherdropdown").removeChild(document.getElementById("motherdropdown").childNodes[0]);
}

fatherselect.onchange = (ev) =>
{
  let selecetedIndex = fatherselect.selectedIndex;
  let selectedOption = fatherselect.options[selecetedIndex];
  document.getElementById('fatherid').innerText = selectedOption.value;
  document.getElementById('father').value = selectedOption.text;
  document.getElementById("fatherdropdown").removeChild(document.getElementById("fatherdropdown").childNodes[0]);
}

spouseselect.onchange = (ev) =>
{
  let selecetedIndex = spouseselect.selectedIndex;
  let selectedOption = spouseselect.options[selecetedIndex];
  document.getElementById('spouseid').innerText = selectedOption.value;
  document.getElementById('spouse').value = selectedOption.text;
  document.getElementById("spousedropdown").removeChild(document.getElementById("spousedropdown").childNodes[0]);
}

function getNextIndividualID()
{
  let nextid = 0
  try
  {
    listofindividuals.map(fam => setID(fam.IndividualID))
    nextid = nextid + 1
    return nextid
  }
  catch(err) 
  {
    return 0
  }

  function setID(id)
  {
    if(id > nextid)
    {
      console.log(nextid)
      nextid = id
    }
  }
}
