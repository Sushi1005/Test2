function generateTable() {
    var rows = parseInt(document.getElementById("t1").value);
    var cols = parseInt(document.getElementById("t2").value);

    var table = "<table class='center'>";
    for (var i = 0; i < rows; i++) {
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
            table += "<td>Row " + (i + 1) + ", Column " + (j + 1) + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.body.innerHTML =  table ;
    document.body.innerHTML =  table +"<div><button id='b2' onclick='addColumn()'>Add Column</button> " +"<button id='b3' onclick='addRow()'>Add Row</button></div>";

    
}

function addColumn() {
    var table = document.querySelector("table");
    var rowCount = table.rows.length;

    for (var i = 0; i < rowCount; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.innerHTML = "New Column";
    }
}

function addRow() {
    var table = document.querySelector("table");
    var newRow = table.insertRow(-1);
    var cellCount = table.rows[0].cells.length;

    for (var i = 0; i < cellCount; i++) {
        var cell = newRow.insertCell(-1);
        cell.innerHTML = "New Row";
        }
    }