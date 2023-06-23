
let listoffamilies = []
let mothername = ""
let fathername = ""
let spousename = ""
let indid = 0
let motherid = 0
let fatherid = 0
let spouseid = 0
let myname = ""
let stringforlist = ""
let proceed = true
let countindividuals = 0

function displayElement(families,displayelement,countlevel)
{
    families.map(createIndividualElement)

    function createIndividualElement(item) 
    {
        if(displayelement === "individual")
        {
          indid = item.IndividualID
          motherid = item.MotherID
          fatherid = item.FatherID
          spouseid = item.SpouseID
        }

        const art = document.createElement("article")
        art.style.backgroundColor = "azure";

        const name = document.createElement("h5")
        name.innerText = item.Name + ", (" + item.Gender + ")"
        name.Name = "Individual:" + item.IndividualID

        const mother = document.createElement("h6")
        mothername = getIndividualNameByID(item.MotherID)
        mother.innerText = mothername + ", (Mother)"
        mother.Name = "Mother:" + item.MotherID

        const father = document.createElement("h6")
        fathername = getIndividualNameByID(item.FatherID)
        father.innerText = fathername + ", (Father)"
        father.Name = "Father:" + item.FatherID

        const spouse = document.createElement("h6")
        spousename = getIndividualNameByID(item.SpouseID)
        spouse.innerText = spousename + ", (Spouse)"
        spouse.Name = "Spouse:" + item.SpouseID

        const level = document.createElement("level")
        level.innerText = countlevel

        const imag = document.createElement("img")
        imag.setAttribute("src",item.Photo)
        imag.setAttribute("alt",item.Name)

        name.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.innerText);
         })
        mother.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.innerText);
         })
        father.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.innerText);
         })
         spouse.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.innerText);
         })

        art.appendChild(name)
        art.appendChild(mother)
        art.appendChild(father)
        art.appendChild(spouse)

        if(displayelement === "mogolwagolwane")
        {
          art.appendChild(level)
        }

        const para = document.createElement("p")
        const alink = document.createElement("a")
        alink.Name = indid

        alink.addEventListener("click", function(event)
        {
          saveSessionDetails(event.target.Name)
        
          window.open("Individual.html","_self");
        })

        alink.innerHTML = "View Details"
        para.appendChild(alink)
        art.appendChild(para)
                
        if (document.getElementById("displayoption").checked == true)
        {
          art.appendChild(imag)
        } 
        document.getElementById(displayelement).appendChild(art)

        countindividuals = countindividuals + 1
    }
}

function saveSessionDetails(individualid)
{

  let indvidualdetails = []
  
  indvidualdetails = listoffamilies.filter(family => family.IndividualID.includes(individualid))

  console.log("here " + indvidualdetails[0].IndividualID + " " + individualid)

  sessionStorage.setItem("IndividualID", indvidualdetails[0].IndividualID)
  sessionStorage.setItem("Name", indvidualdetails[0].Name)
  sessionStorage.setItem("FirstName", indvidualdetails[0].FirstName)
  sessionStorage.setItem("OtherNames", indvidualdetails[0].OtherNames)
  sessionStorage.setItem("MaidenSurname", indvidualdetails[0].MaidenSurname)
  sessionStorage.setItem("Gender", indvidualdetails[0].Gender)
  sessionStorage.setItem("DateOfBirth", indvidualdetails[0].DateOfBirth)
  sessionStorage.setItem("PlaceOfBirth", indvidualdetails[0].PlaceOfBirth)
  sessionStorage.setItem("Status", indvidualdetails[0].Status)
  sessionStorage.setItem("BirthOrder", indvidualdetails[0].BirthOrder)
  sessionStorage.setItem("MotherID", indvidualdetails[0].MotherID)
  sessionStorage.setItem("FatherID", indvidualdetails[0].FatherID)
  sessionStorage.setItem("SpouseID", indvidualdetails[0].SpouseID)
  sessionStorage.setItem("DateOfMarriage", indvidualdetails[0].DateOfMarriage)
  sessionStorage.setItem("PlaceOfMarriage", indvidualdetails[0].IndivPlaceOfMarriageidualID)
  sessionStorage.setItem("ChildrenCount", indvidualdetails[0].ChildrenCount)
  sessionStorage.setItem("SiblingsCount", indvidualdetails[0].SiblingsCount)
  sessionStorage.setItem("ContactPerson", indvidualdetails[0].ContactPerson)
  sessionStorage.setItem("ContactDetails", indvidualdetails[0].ContactDetails)
}

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

fetch('family.csv')
  .then(function(response) 
  {
    return response.text();
  })
  .then(function(csvString) 
  {
    listoffamilies = csvToKeyValueArray(csvString);

    //sessionStorage.setItem('familydetails', JSON.stringify(listoffamilies))

    reset("families")
    displayElement(listoffamilies,"families","")
  })
  .catch(function(error) 
  {
    console.error('Error:', error);
});

function reset(element)
{
  let parent = document.getElementById(element); 
  parent.replaceChildren(); 
}

function filterBy()
{
  reset("families")
  reset("individual")
  reset("spouse")
  reset("children")
  reset("parents")
  reset("siblings")
  reset("mmemogolo")
  reset("rremogolo")
  reset("mmangwane")
  reset("rrangwane")
  reset("malome")
  reset("rakgadi")
  reset("setlogolo")
  reset("ntsalae")
  reset("nkukuntatemogolo")
  reset("mogolwagolwane")
  reset("banababana")
  reset("dikokomane")

  //spouse
  document.getElementById("h3" + "spouse").innerText = "Mosadi/ Monna wa ga " 

  //his or her children
  document.getElementById("h3" + "children").innerText = "Bana ba ga "

  //parents
  document.getElementById("h3" + "parents").innerText = "Batsadi ba ga "

  //siblings
  document.getElementById("h3" + "siblings").innerText = "Ba tsalwa le " 

  //mmemogolo
  document.getElementById("h3" + "mmemogolo").innerText = "Mmaagwe mogolo "

  //rremogolo
  document.getElementById("h3" + "rremogolo").innerText = "Rraagwe mogolo "

  //mmangwane
  document.getElementById("h3" + "mmangwane").innerText = "Mmangwanaagwe "

  //rrangwane
  document.getElementById("h3" + "rrangwane").innerText = "Rrangwanaagwe "

  //malome
  document.getElementById("h3" + "malome").innerText = "Malomaagwe "

  //rakgadi
  document.getElementById("h3" + "rakgadi").innerText = "Rakgadiagwe "

  //setlogolo
  document.getElementById("h3" + "setlogolo").innerText = "Setlogolo sa ga "

  //ntsalae
  document.getElementById("h3" + "ntsalae").innerText = "Ntsalae "

  //nkukuntatemogolo
  document.getElementById("h3" + "nkukuntatemogolo").innerText = "Nkukuagwe le Ntateagwe mogolo "

  //mogolwagolwane
  document.getElementById("h3" + "mogolwagolwane").innerText = "Nkukuagwe le Ntateagwe Mogolwagolwane, "
  
  //banababana
  document.getElementById("h3" + "banababana").innerText = "Bana ba bana ba ga "

  //dikokomane
  document.getElementById("h3" + "dikokomane").innerText = "Dikokomane tsa ga "


  countindividuals = 0

  var inputText = document.getElementById("filterText").value
  displayElement(listoffamilies.filter(family => String(family.Name.toLocaleLowerCase()).includes(inputText.toLocaleLowerCase())),"families","")
}

document.getElementById("filterButton").addEventListener("click", filterBy)
document.getElementById("filterText").addEventListener("input", filterBy)

function displayFamilyDetails(nameandmore)
{
  let names = nameandmore.split(",")
  
  document.getElementById("filterText").value = names[0]
  
  reset("families")

  //individual
  filterIndividual(names[0],"individual","Nna")
  document.getElementById("h3" + "individual").innerText = "Nna"

  myname = getIndividualNameByID(indid)
  //spouse
  filterSpouse(spouseid,"spouse","Mosadi/ Monna wa ga " + myname)
  document.getElementById("h3" + "spouse").innerText = "Mosadi/ Monna wa ga " + myname 

  //his or her children
  countindividuals = 0
  filterChildren(indid,"children","Bana ba ga " + myname)
  document.getElementById("h3" + "children").innerText = "Bana ba ga " + myname + " (" + countindividuals + ")"

  //parents
  filterParents(motherid,fatherid,"parents","Batsadi ba ga " + myname)
  document.getElementById("h3" + "parents").innerText = "Batsadi ba ga " + myname

  //siblings
  countindividuals = 0
  filterSiblings(motherid,fatherid,indid,"siblings","Ba tsalwa le " + myname)
  document.getElementById("h3" + "siblings").innerText = "Ba tsalwa le " + myname + " (" + countindividuals + ")"

  //mmemogolo
  countindividuals = 0
  filterMmemogolo(motherid,"mmemogolo","Mmaagwe mogolo " + myname)
  document.getElementById("h3" + "mmemogolo").innerText = "Mmaagwe mogolo " + myname + " (" + countindividuals + ")"

  //rremogolo
  countindividuals = 0
  filterRremogolo(fatherid,"rremogolo","Rraagwe mogolo " + myname)
  document.getElementById("h3" + "rremogolo").innerText = "Rraagwe mogolo " + myname + " (" + countindividuals + ")"

  //mmangwane
  countindividuals = 0
  filterMmangwane(motherid,"mmangwane","Mmangwanaagwe " + myname)
  document.getElementById("h3" + "mmangwane").innerText = "Mmangwanaagwe " + myname + " (" + countindividuals + ")"

  //rrangwane
  countindividuals = 0
  filterRrangwane(fatherid,"rrangwane","Rrangwanaagwe " + myname)
  document.getElementById("h3" + "rrangwane").innerText = "Rrangwanaagwe " + myname + " (" + countindividuals + ")"

  //malome
  countindividuals = 0
  filterMalome(getMotherID(motherid),getFatherID(motherid),motherid,"malome","Malomaagwe " + myname)
  document.getElementById("h3" + "malome").innerText = "Malomaagwe " + myname + " (" + countindividuals + ")"

  //rakgadi
  countindividuals = 0
  filterRakgadi(getMotherID(fatherid),getFatherID(fatherid),fatherid,"rakgadi","Rakgadiagwe " + myname)
  document.getElementById("h3" + "rakgadi").innerText = "Rakgadiagwe " + myname + " (" + countindividuals + ")"

  //setlogolo
  countindividuals = 0
  filterSetlogolo(motherid,fatherid,indid,"setlogolo","Setlogolo sa ga " + myname)
  document.getElementById("h3" + "setlogolo").innerText = "Setlogolo sa ga " + myname + " (" + countindividuals + ")"

  //ntsalae
  countindividuals = 0
  filterNtsalae(motherid,fatherid,indid,"ntsalae","Ntsalae " + myname)
  document.getElementById("h3" + "ntsalae").innerText = "Ntsalae " + myname + " (" + countindividuals + ")"

  //nkukuntatemogolo
  countindividuals = 0
  proceed = false
  reset("nkukuntatemogolo")
  filterNkukuNtateMogolo(getMotherID(motherid),getFatherID(motherid),"nkukuntatemogolo","Nkukuagwe le Ntateagwe mogolo " + myname)
  filterNkukuNtateMogolo(getMotherID(fatherid),getFatherID(fatherid),"nkukuntatemogolo","Nkukuagwe le Ntateagwe mogolo " + myname)
  document.getElementById("h3" + "nkukuntatemogolo").innerText = "Nkukuagwe le Ntateagwe mogolo " + myname + " (" + countindividuals + ")"

  //mogolwagolwane
  countindividuals = 0
  filterMogolowagolwane("mogolwagolwane","Nkukuagwe le Ntateagwe Mogolwagolwane, " + myname)
  document.getElementById("h3" + "mogolwagolwane").innerText = "Nkukuagwe le Ntateagwe Mogolwagolwane, " + myname + " (" + countindividuals + ")"
  
  //banababana
  countindividuals = 0
  filterBanaBaBana(indid,"banababana","Bana ba bana ba ga " + myname)
  document.getElementById("h3" + "banababana").innerText = "Bana ba bana ba ga " + myname + " (" + countindividuals + ")"

  //dikokomane
  countindividuals = 0
  filterDikokomane(indid,"dikokomane","Dikokomane tsa ga " + myname)
  document.getElementById("h3" + "dikokomane").innerText = "Dikokomane tsa ga " + myname + " (" + countindividuals + ")"
}

function filterDikokomane(id,element,displaytext)
{
  reset(element)

  let child = listoffamilies.filter(family => family.MotherID === id || family.FatherID === id)
  child.map(fam => listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID).map(ch => displayElement(listoffamilies.filter(family => family.MotherID === ch.IndividualID || family.FatherID === ch.IndividualID),element,"")))
}

function filterBanaBaBana(id,element,displaytext)
{
  reset(element)

  let child = listoffamilies.filter(family => family.MotherID === id || family.FatherID === id)
  child.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,""))
}

function filterMogolowagolwane(element,displaytext)
{
  let divelement = element
  reset(divelement)

  let countthelevels = 0

  while(proceed === true)
  {
    countthelevels = countthelevels + 1
    proceed = false
    const myArray = stringforlist.split(",");
    stringforlist = ""
    myArray.map(printPerson)
    
    function printPerson(id) 
    {
      if (getMotherID(id) > 0 && getFatherID(id) > 0)
      {
        let parents = listoffamilies.filter(family => family.IndividualID === getMotherID(id) || family.IndividualID === getFatherID(id))
        displayElement(parents,divelement,countthelevels)
        proceed = true
        parents.map(fam => addIndividualIDToString(fam.IndividualID))
      }
      else if (getMotherID(id) > 0)
      {
        let parents = listoffamilies.filter(family => family.IndividualID === getMotherID(id))
        displayElement(parents,divelement,countthelevels)
        proceed = true
        parents.map(fam => addIndividualIDToString(fam.IndividualID))
      }
      else if (getFatherID(id) > 0)
      {
        let parents = listoffamilies.filter(family => family.IndividualID === getFatherID(id))
        displayElement(parents,divelement,countthelevels)
        proceed = true
        parents.map(fam => addIndividualIDToString(fam.IndividualID))
      }
    }
  }
}

function filterNkukuNtateMogolo(mid,fid,element,displaytext)
{

  let divelement = element
  
  if (mid > 0 && fid > 0)
  {
    let parents = listoffamilies.filter(family => family.IndividualID === mid || family.IndividualID === fid)
    parents.map(fam => addIndividualIDToString(fam.IndividualID))
    proceed = true
    displayElement(parents,element,"")
  }
  else if (mid > 0)
  {
    let parents = listoffamilies.filter(family => family.IndividualID === mid)
    parents.map(fam => addIndividualIDToString(fam.IndividualID))
    proceed = true
    displayElement(parents,element,"")
  }
  else if (fid > 0)
  {
    let parents = listoffamilies.filter(family => family.IndividualID === fid)
    parents.map(fam => addIndividualIDToString(fam.IndividualID))
    proceed = true
    displayElement(parents,element,"")
  }
}

function addIndividualIDToString(item)
{
  if(stringforlist.length === 0)
  {
    stringforlist = item
  } 
  else
  {
    stringforlist = stringforlist + "," + item
  }
}

function filterNtsalae(mid,fid,myid,element,displaytext)
{
  let divelement = element
  reset(divelement)

  if(mid > 0 && fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
  else if(mid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
  else if(fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
}

function filterSetlogolo(mid,fid,myid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  if(mid > 0 && fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
  else if(mid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
  else if(fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),divelement,""))
    //displayElement(listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement)
  }
}

function filterRakgadi(mid,fid,myid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  if(mid > 0 && fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement,"")
  }
  else if(mid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement,"")
  }
  else if(fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female"),divelement,"")
  }
}

function filterMalome(mid,fid,myid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  if(mid > 0 && fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male"),divelement,"")
  }
  else if(mid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male"),divelement,"")
  }
  else if(fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male"),divelement,"")
  }
}

function filterRrangwane(fid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  let fathermotherid = getMotherID(fid)
  let fatherfatherid = getFatherID(fid)

  if(fid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(fid) || family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid)),divelement,"")
    }
    else if(fathermotherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid)),divelement,"")
    }
    else if(fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid)),divelement,"")
    }
  }
}

function filterMmangwane(mid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  let fathermotherid = getMotherID(mid)
  let fatherfatherid = getFatherID(mid)

  if(mid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(mid) || family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid)),divelement,"")
    }
    else if(fathermotherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid)),divelement,"")
    }
    else if(fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid)),divelement,"")
    }
  }
}

function filterRremogolo(fid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  let fathermotherid = getMotherID(fid)
  let fatherfatherid = getFatherID(fid)

  if(fid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(fid) || family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid)),divelement,"")
    }
    else if(fathermotherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid)),divelement,"")
    }
    else if(fatherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid)),divelement,"")
    }
  }
}

function filterMmemogolo(mid,element,displaytext)
{
  let divelement = element
  reset(divelement)
  
  let mothermotherid = getMotherID(mid)
  let motherfatherid = getFatherID(mid)

  if(mid > 0)
  {
    if(mothermotherid > 0 && motherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(mid) || family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid)),divelement,"")
    }
    else if(mothermotherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.MotherID === getMotherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid)),divelement,"")
    }
    else if(motherfatherid > 0)
    {
      displayElement(listoffamilies.filter(family => family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid)),divelement,"")
    }
  }
}

function filterSiblings(mid,fid,myid,element,displaytext)
{
  let divelement = element
  reset(divelement)

  if(mid > 0 && fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid),divelement,"")
  }
  else if(mid > 0)
  {
    displayElement(listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid),divelement,"")
  }
  else if(fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid),divelement,"")
  }
}

function filterParents(mid,fid,element,displaytext)
{
  let divelement = element
  reset(divelement)

  if (mid > 0 && fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.IndividualID === mid || family.IndividualID === fid),divelement,"")
  }
  else if (mid > 0)
  {
    displayElement(listoffamilies.filter(family => family.IndividualID === mid),divelement,"")
  }
  else if (fid > 0)
  {
    displayElement(listoffamilies.filter(family => family.IndividualID === fid),divelement,"")
  }
}

function filterChildren(id,element,displaytext)
{
  reset(element)
  let arraylist = listoffamilies.filter(family => family.MotherID === id || family.FatherID === id)
  displayElement(arraylist,element,"")
}

function filterSpouse(id,element,displaytext)
{
  reset(element)
   
  displayElement(listoffamilies.filter(family => family.IndividualID === id),element,"")
}

function filterIndividual(namesearch,element,displaytext)
{
  reset(element)
  
  displayElement(listoffamilies.filter(family => String(family.Name.toLocaleLowerCase()).includes(namesearch.toLocaleLowerCase())),element,"")
}

function getIndividualNameByID(id)
{

  let name = ""
  let motherresult = listoffamilies.filter(family => family.IndividualID === id)
  if (motherresult.length > 0)
  {
    name = motherresult[0].Name
  }
  return name
}

function getIndividualsCount(individualsarray)
{
  return individualsarray.length
}

function getFatherID(id)
{
  try 
  {
    return listoffamilies.filter(family => family.IndividualID === id)[0].FatherID
  }
  catch(err) 
  {
    return 0
  }
  
}

function getMotherID(id)
{
  try
  {
    return listoffamilies.filter(family => family.IndividualID === id)[0].MotherID
  }
  catch(err) 
  {
    return 0
  }
}

function getFamilyOrder(id)
{
  try
  {
    return listoffamilies.filter(family => family.IndividualID === id)[0].FamilyOrder
  }
  catch(err) 
  {
    return 0
  }
}