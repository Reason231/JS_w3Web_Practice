function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");
    
    // Insert a new row at the end of the table
    var newRow = table.insertRow(-1);
    // var newColum=table.insertColumn(-2)
    
    // Insert new cells into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    // var cell3 = newColum.insertCell(3);
    
    // Add content to the new cells
    cell1.innerHTML = "New row cell1";
    cell2.innerHTML = "New row cell2";
    // cell3.innerHTML = "New Column cell2";
  }
  


