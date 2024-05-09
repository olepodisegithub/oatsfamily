
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

function displayElement(families,displayelement,countlevel,displayviewlink)
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

        let status = ""

        const name = document.createElement("h5")
        if(item.Status === "Alive")
        {
          status = "A"
        }
        else if(item.Status === "Dead")
        {
          status = "D"
        }
        else
        {
          status = " "
        }
  
        name.innerText = item.Name + ", (" + item.Gender + ", " + status + ")"
        name.Name = item.IndividualID

        const mother = document.createElement("h6")
        mothername = getIndividualNameByID(item.MotherID)
        if(getStatus(item.MotherID) === "Alive")
        {
          status = "A"
        }
        else if(getStatus(item.MotherID) === "Dead")
        {
          status = "D"
        }
        else
        {
          status = " "
        }
        mother.innerText = mothername + ", (Mother, " + status + ")"
        mother.Name = item.MotherID

        const father = document.createElement("h6")
        fathername = getIndividualNameByID(item.FatherID)
        if(getStatus(item.FatherID) === "Alive")
        {
          status = "A"
        }
        else if(getStatus(item.FatherID) === "Dead")
        {
          status = "D"
        }
        else
        {
          status = " "
        }
        father.innerText = fathername + ", (Father, " + status + ")"
        father.Name = item.FatherID

        const spouse = document.createElement("h6")
        spousename = getIndividualNameByID(item.SpouseID)
        if(getStatus(item.SpouseID) === "Alive")
        {
          status = "A"
        }
        else if(getStatus(item.SpouseID) === "Dead")
        {
          status = "D"
        }
        else
        {
          status = " "
        }
        spouse.innerText = spousename + ", (Spouse, " + status + ")"
        spouse.Name = item.SpouseID

        const level = document.createElement("level")
        level.innerText = countlevel

        const imag = document.createElement("img")
        imag.setAttribute("src",item.Photo)
        imag.setAttribute("alt",item.Name)

        name.addEventListener("click", function(e) {
          //displayFamilyDetails(e.target.innerText);
          displayFamilyDetails(e.target.Name);
         })
        mother.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.Name);
         })
        father.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.Name);
         })
         spouse.addEventListener("click", function(e) {
          displayFamilyDetails(e.target.Name);
         })

        art.appendChild(name)
        art.appendChild(mother)
        art.appendChild(father)
        art.appendChild(spouse)

        if(displayelement === "mogolwagolwane")
        {
          art.appendChild(level)
        }

        if (displayviewlink === "Yes")
        {
          const para = document.createElement("p")
          const alink = document.createElement("a")
          alink.Name = item.IndividualID
  
          alink.addEventListener("click", function(event)
          {
            console.log("clicked the link, View Details")
            console.log(event.target.Name)
            saveSessionDetails(event.target.Name)
          
            window.open("Individual.html","_self");
          })
  
          alink.innerHTML = "View Details"
          para.appendChild(alink)
          art.appendChild(para)
        }
                
        if (document.getElementById("displayoption").checked == true)
        {
          art.appendChild(imag)
        } 
        document.getElementById(displayelement).appendChild(art)

        countindividuals = countindividuals + 1
    }
}

document.getElementById("newindividual").addEventListener("click", function(event)
{
  if (document.getElementById("filterText").value == "")
  {
    
  }
  else
  {
    clearSessionDetails()
    window.open("Individual.html","_self");
  }
})

function clearSessionDetails()
{
  sessionStorage.setItem("IndividualID", "")
  sessionStorage.setItem("Name", "")
  sessionStorage.setItem("FirstName", "")
  sessionStorage.setItem("OtherNames", "")
  sessionStorage.setItem("MaidenSurname", "")
  sessionStorage.setItem("Gender", "")
  sessionStorage.setItem("DateOfBirth", "")
  sessionStorage.setItem("PlaceOfBirth", "")
  sessionStorage.setItem("IndividualStatus", "")
  sessionStorage.setItem("BirthOrder", "")
  sessionStorage.setItem("MotherID", "")
  sessionStorage.setItem("FatherID", "")
  sessionStorage.setItem("SpouseID", "")
  sessionStorage.setItem("DateOfMarriage", "")
  sessionStorage.setItem("PlaceOfMarriage", "")
  sessionStorage.setItem("ChildrenCount", "")
  sessionStorage.setItem("SiblingsCount", "")
  sessionStorage.setItem("ContactPerson", "")
  sessionStorage.setItem("ContactDetails", "")
  sessionStorage.setItem("MotherName", "")
  sessionStorage.setItem("FatherName", "")
  sessionStorage.setItem("SpouseName", "")
}

function saveSessionDetails(individualid)
{

  let indvidualdetails = []
  
  indvidualdetails = listoffamilies.filter(family => family.IndividualID === individualid)

  sessionStorage.setItem("IndividualID", indvidualdetails[0].IndividualID)
  sessionStorage.setItem("Name", indvidualdetails[0].Name)
  sessionStorage.setItem("FirstName", indvidualdetails[0].FirstName)
  sessionStorage.setItem("OtherNames", indvidualdetails[0].OtherNames)
  sessionStorage.setItem("MaidenSurname", indvidualdetails[0].MaidenSurname)
  sessionStorage.setItem("Gender", indvidualdetails[0].Gender)
  sessionStorage.setItem("DateOfBirth", indvidualdetails[0].DateOfBirth)
  sessionStorage.setItem("PlaceOfBirth", indvidualdetails[0].PlaceOfBirth)
  sessionStorage.setItem("IndividualStatus", indvidualdetails[0].Status)
  sessionStorage.setItem("BirthOrder", indvidualdetails[0].BirthOrder)
  sessionStorage.setItem("MotherID", indvidualdetails[0].MotherID)
  sessionStorage.setItem("FatherID", indvidualdetails[0].FatherID)
  sessionStorage.setItem("SpouseID", indvidualdetails[0].SpouseID)
  sessionStorage.setItem("DateOfMarriage", indvidualdetails[0].DateOfMarriage)
  sessionStorage.setItem("PlaceOfMarriage", indvidualdetails[0].PlaceOfMarriage)
  sessionStorage.setItem("ChildrenCount", indvidualdetails[0].ChildrenCount)
  sessionStorage.setItem("SiblingsCount", indvidualdetails[0].SiblingsCount)
  sessionStorage.setItem("ContactPerson", indvidualdetails[0].ContactPerson)
  sessionStorage.setItem("ContactDetails", indvidualdetails[0].ContactDetails)
  sessionStorage.setItem("MotherName", getIndividualNameByID(indvidualdetails[0].MotherID))
  sessionStorage.setItem("FatherName", getIndividualNameByID(indvidualdetails[0].FatherID))
  sessionStorage.setItem("SpouseName", getIndividualNameByID(indvidualdetails[0].SpouseID))
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

fetch('scripts/family.csv')
  .then(function(response) 
  {
    return response.text();
  })
  .then(function(csvString) 
  {
    listoffamilies = csvToKeyValueArray(csvString);

    //sessionStorage.setItem('familydetails', JSON.stringify(listoffamilies))

    reset("families")
    displayElement(listoffamilies,"families","","No")
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
  var searches = inputText.split(" ")
  if(searches.length = 2)
  {
    displayElement(listoffamilies.filter(family => String(family.Name.toLocaleLowerCase()).includes(searches[0].toLocaleLowerCase()) && String(family.Name.toLocaleLowerCase()).includes(searches[1].toLocaleLowerCase())),"families","","Yes")  
  }
  else if(searches.length = 1)
  {
    displayElement(listoffamilies.filter(family => String(family.Name.toLocaleLowerCase()).includes(searches[0].toLocaleLowerCase())),"families","","Yes")  
  }
}

document.getElementById("filterButton").addEventListener("click", filterBy)
document.getElementById("filterText").addEventListener("input", filterBy)

function displayFamilyDetails(searchid)
{
  document.getElementById("filterText").value = ""
  
  reset("families")

  //individual
  filterIndividual(searchid,"individual","Nna")

  myname = getIndividualNameByID(indid)

  //spouse
  filterSpouse(spouseid,"spouse","Mosadi/ Monna wa ga " + myname)
  
  //his or her children
  countindividuals = 0
  filterChildren(indid,"children","Bana ba ga " + myname)
  
  //parents
  filterParents(motherid,fatherid,"parents","Batsadi ba ga " + myname)
  
  //siblings
  countindividuals = 0
  filterSiblings(motherid,fatherid,indid,"siblings","Ba tsalwa le " + myname)
  
  //mmemogolo
  countindividuals = 0
  filterMmemogolo(motherid,"mmemogolo","Mmaagwe mogolo " + myname)
  
  //rremogolo
  countindividuals = 0
  filterRremogolo(fatherid,"rremogolo","Rraagwe mogolo " + myname)
  
  //mmangwane
  countindividuals = 0
  filterMmangwane(motherid,"mmangwane","Mmangwanaagwe " + myname)
  
  //rrangwane
  countindividuals = 0
  filterRrangwane(fatherid,"rrangwane","Rrangwanaagwe " + myname)
  
  //malome
  countindividuals = 0
  filterMalome(getMotherID(motherid),getFatherID(motherid),motherid,"malome","Malomaagwe " + myname)
  
  //rakgadi
  countindividuals = 0
  filterRakgadi(getMotherID(fatherid),getFatherID(fatherid),fatherid,"rakgadi","Rakgadiagwe " + myname)
  
  //setlogolo
  countindividuals = 0
  filterSetlogolo(motherid,fatherid,indid,"setlogolo","Setlogolo sa ga " + myname)
  
  //ntsalae
  countindividuals = 0
  filterNtsalae(motherid,fatherid,indid,"ntsalae","Ntsalae " + myname)
  
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
  child.map(fam => listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID).map(ch => displayElement(listoffamilies.filter(family => family.MotherID === ch.IndividualID || family.FatherID === ch.IndividualID),element,"","Yes")))
}

function filterBanaBaBana(id,element,displaytext)
{
  reset(element)

  let child = listoffamilies.filter(family => family.MotherID === id || family.FatherID === id)
  child.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
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
        displayElement(parents,divelement,countthelevels,"Yes")
        proceed = true
        parents.map(fam => addIndividualIDToString(fam.IndividualID))
      }
      else if (getMotherID(id) > 0)
      {
        let parents = listoffamilies.filter(family => family.IndividualID === getMotherID(id))
        displayElement(parents,divelement,countthelevels,"Yes")
        proceed = true
        parents.map(fam => addIndividualIDToString(fam.IndividualID))
      }
      else if (getFatherID(id) > 0)
      {
        let parents = listoffamilies.filter(family => family.IndividualID === getFatherID(id))
        displayElement(parents,divelement,countthelevels,"Yes")
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
    displayElement(parents,element,"","Yes")
  }
  else if (mid > 0)
  {
    let parents = listoffamilies.filter(family => family.IndividualID === mid)
    parents.map(fam => addIndividualIDToString(fam.IndividualID))
    proceed = true
    displayElement(parents,element,"","Yes")
  }
  else if (fid > 0)
  {
    let parents = listoffamilies.filter(family => family.IndividualID === fid)
    parents.map(fam => addIndividualIDToString(fam.IndividualID))
    proceed = true
    displayElement(parents,element,"","Yes")
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
  reset(element)

  if(mid > 0 && fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  else if(mid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  else if(fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  document.getElementById("h3" + "ntsalae").innerText = displaytext + " (" + countindividuals + ")"
}

function filterSetlogolo(mid,fid,myid,element,displaytext)
{
  reset(element)
  
  if(mid > 0 && fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  else if(mid > 0)
  {
    let siblings = listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  else if(fid > 0)
  {
    let siblings = listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
    siblings.map(fam => displayElement(listoffamilies.filter(family => family.MotherID === fam.IndividualID || family.FatherID === fam.IndividualID),element,"","Yes"))
  }
  document.getElementById("h3" + "setlogolo").innerText = displaytext + " (" + countindividuals + ")"
  
}

function filterRakgadi(mid,fid,myid,element,displaytext)
{
  reset(element)

  let listRakgadi = []
  
  if(mid > 0 && fid > 0)
  {
    listRakgadi =listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
  }
  else if(mid > 0)
  {
    listRakgadi =listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
  }
  else if(fid > 0)
  {
    listRakgadi =listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Female")
  }
  displayElement(listRakgadi,element,"","Yes")
  document.getElementById("h3" + "rakgadi").innerText = displaytext + " (" + countindividuals + ")"
}

function filterMalome(mid,fid,myid,element,displaytext)
{
  reset(element)

  let listMalome = []
  
  if(mid > 0 && fid > 0)
  {
    listMalome =listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
  }
  else if(mid > 0)
  {
    listMalome =listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
  }
  else if(fid > 0)
  {
    listMalome =listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid).filter(family => family.Gender === "Male")
  }
  displayElement(listMalome,element,"","Yes")
  document.getElementById("h3" + "malome").innerText = displaytext + " (" + countindividuals + ")"

}

function filterRrangwane(fid,element,displaytext)
{
  reset(element)
  
  let fathermotherid = getMotherID(fid)
  let fatherfatherid = getFatherID(fid)

  let listRrangwane = []

  if(fid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      listRrangwane = listoffamilies.filter(family => family.MotherID === getMotherID(fid) || family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid))
    }
    else if(fathermotherid > 0)
    {
      listRrangwane = listoffamilies.filter(family => family.MotherID === getMotherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid))
    }
    else if(fatherfatherid > 0)
    {
      listRrangwane = listoffamilies.filter(family => family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder > getFamilyOrder(fid))
    }
    displayElement(listRrangwane,element,"","Yes")
    document.getElementById("h3" + "rrangwane").innerText = displaytext + " (" + countindividuals + ")"

  }
}

function filterMmangwane(mid,element,displaytext)
{
  reset(element)
  
  let fathermotherid = getMotherID(mid)
  let fatherfatherid = getFatherID(mid)

  let listMmangwane = []

  if(mid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      listMmangwane = listoffamilies.filter(family => family.MotherID === getMotherID(mid) || family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid))
    }
    else if(fathermotherid > 0)
    {
      listMmangwane = listoffamilies.filter(family => family.MotherID === getMotherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid))
    }
    else if(fatherfatherid > 0)
    {
      listMmangwane = listoffamilies.filter(family => family.FatherID === getFatherID(mid)).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder > getFamilyOrder(mid))
    }
    displayElement(listMmangwane,element,"","Yes")
    document.getElementById("h3" + "mmangwane").innerText = displaytext + " (" + countindividuals + ")"

  }
}

function filterRremogolo(fid,element,displaytext)
{
  reset(element)
  
  let fathermotherid = getMotherID(fid)
  let fatherfatherid = getFatherID(fid)

  let listRremogolo = []

  if(fid > 0)
  {
    if(fathermotherid > 0 && fatherfatherid > 0)
    {
      listRremogolo = listoffamilies.filter(family => family.MotherID === getMotherID(fid) || family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid))
    }
    else if(fathermotherid > 0)
    {
      listRremogolo = listoffamilies.filter(family => family.MotherID === getMotherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid))
    }
    else if(fatherfatherid > 0)
    {
      listRremogolo = listoffamilies.filter(family => family.FatherID === getFatherID(fid)).filter(family => family.IndividualID !== fid).filter(family => family.Gender === "Male").filter(family => family.FamilyOrder < getFamilyOrder(fid))
    }

    displayElement(listRremogolo,element,"","Yes")
    document.getElementById("h3" + "rremogolo").innerText = displaytext + " (" + countindividuals + ")"

  }
}

function filterMmemogolo(mid,element,displaytext)
{
  reset(element)
  
  let mothermotherid = getMotherID(mid)
  let motherfatherid = getFatherID(mid)

  let listMmemogolo = []

  if(mid > 0)
  {
    if(mothermotherid > 0 && motherfatherid > 0)
    {
      listMmemogolo = listoffamilies.filter(family => family.MotherID === mothermotherid || family.FatherID === motherfatherid).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid))
    }
    else if(mothermotherid > 0)
    {
      listMmemogolo = listoffamilies.filter(family => family.MotherID === mothermotherid).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid))
    }
    else if(motherfatherid > 0)
    {
      listMmemogolo = listoffamilies.filter(family => family.FatherID === motherfatherid).filter(family => family.IndividualID !== mid).filter(family => family.Gender === "Female").filter(family => family.FamilyOrder < getFamilyOrder(mid))
    }

    displayElement(listMmemogolo,element,"","Yes")
    document.getElementById("h3" + "mmemogolo").innerText = displaytext + " (" + countindividuals + ")"

  }
}

function filterSiblings(mid,fid,myid,element,displaytext)
{
  reset(element)

  let listSiblings = []

  if(mid > 0 && fid > 0)
  {
    listSiblings = listoffamilies.filter(family => family.MotherID === mid || family.FatherID === fid).filter(family => family.IndividualID !== myid)
  }
  else if(mid > 0)
  {
    listSiblings = listoffamilies.filter(family => family.MotherID === mid).filter(family => family.IndividualID !== myid)
  }
  else if(fid > 0)
  {
    listSiblings = listoffamilies.filter(family => family.FatherID === fid).filter(family => family.IndividualID !== myid)
  }

  displayElement(listSiblings,element,"","Yes")
  document.getElementById("h3" + "siblings").innerText = displaytext + " (" + countindividuals + ")"

}

function filterParents(mid,fid,element,displaytext)
{
  reset(element)

  let listParents = []

  if (mid > 0 && fid > 0)
  {
    listParents = listoffamilies.filter(family => family.IndividualID === mid || family.IndividualID === fid)
  }
  else if (mid > 0)
  {
    listParents = listoffamilies.filter(family => family.IndividualID === mid)
  }
  else if (fid > 0)
  {
    listParents = listoffamilies.filter(family => family.IndividualID === fid)
  }

  displayElement(listParents,element,"","Yes")
  document.getElementById("h3" + "parents").innerText = displaytext

}

function filterChildren(id,element,displaytext)
{
  reset(element)
  let listChildren = []
  listChildren = listoffamilies.filter(family => family.MotherID === id || family.FatherID === id)
  
  displayElement(listChildren,element,"","Yes")
  document.getElementById("h3" + "children").innerText = displaytext + " (" + countindividuals + ")"
}

function filterSpouse(id,element,displaytext)
{
  reset(element)
  let listSpouse = []
  listSpouse = listoffamilies.filter(family => family.IndividualID === id)

  displayElement(listSpouse,element,"","Yes")
  document.getElementById("h3" + "spouse").innerText = displaytext 
}

function filterIndividual(namesearch,element,displaytext)
{
  reset(element)
  let listIndividual = []
  listIndividual = listoffamilies.filter(family => String(family.IndividualID.toLocaleLowerCase()) == namesearch.toLocaleLowerCase())
  
  displayElement(listIndividual,element,"","Yes")
  document.getElementById("h3" + "individual").innerText = displaytext
}

function getIndividualNameByID(id)
{

  let name = ""
  let searchresult = listoffamilies.filter(family => family.IndividualID === id)
  if (searchresult.length > 0)
  {
    if (searchresult[0].OtherNames.length > 0)
    {
      name = searchresult[0].FirstName + " " + searchresult[0].OtherNames  + " " + searchresult[0].MaidenSurname
    }
    else
    {
      name = searchresult[0].FirstName + " " + searchresult[0].MaidenSurname
    }
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

function getStatus(id)
{
  
  try
  {
    return listoffamilies.filter(family => family.IndividualID === id)[0].Status
  }
  catch(err) 
  {
    return 0
  }
}