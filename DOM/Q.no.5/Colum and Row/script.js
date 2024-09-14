// Function to insert a new row at the end of the table
function insert_Row() {
    var table = document.getElementById("sampleTable");
    
    // Insert a new row at the end
    var newRow = table.insertRow(-1);
  
    // Insert cells into the new row, based on the number of columns in the first row
    var numOfCols = table.rows[0].cells.length; // Get the number of columns in the first row
    for (var i = 0; i < numOfCols; i++) {
      var newCell = newRow.insertCell(i);
      newCell.innerHTML = `New row cell${i+1}`;
    }
  }
  
  // Function to insert a new column to all existing rows
  function insert_Column() {
    var table = document.getElementById("sampleTable");
  
    // Loop through all rows and add a new cell at the end of each row
    for (var i = 0; i < table.rows.length; i++) {
      var newCell = table.rows[i].insertCell(-1); // Insert cell at the end of the row
      newCell.innerHTML = `New col cell${i+1}`;
    }
  }
  