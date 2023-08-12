let listoffamilies = []

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

export function getFamilyDetails()
{
  try
  {
    
    fetch('scripts/family.csv')
      .then(function(response) 
      {
        return response.text();
      })
      .then(function(csvString) 
      {
        listoffamilies = csvToKeyValueArray(csvString);      
      })
      .catch(function(error) 
      {
        console.error('Error:', error);
    });

  }
  catch(err) 
  {
    return 0
  }
  return listoffamilies
}
