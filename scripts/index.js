
let listofindividuals = []

var username = ""
var password = ""

document.getElementById("sign-in").addEventListener("click", OpenWebpage)
document.getElementById("username").addEventListener("click", cancelMessage)
document.getElementById("password").addEventListener("click", cancelMessage)

function cancelMessage()
{
    document.getElementById("message").innerText = ""
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
    listofindividuals = csvToKeyValueArray(csvString);
  })
  .catch(function(error) 
  {
    console.error('Error:', error);
});

function login(myusername,mypassword)
{
    let returnval = false
    if (listofindividuals.filter(family => String(family.Username) === myusername && String(family.Password) === mypassword).length > 0)
    {
        returnval = true
    }
    else
    {
        returnval = false
    }
    return returnval
}

function OpenWebpage()
{
    if (login(document.getElementById("username").value,document.getElementById("password").value) === true)
    {
      window.open("family.html","_self");
    }
    else
    {
        document.getElementById("message").innerText = "Username or password incorrect"
    }
}

