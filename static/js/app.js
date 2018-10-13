// from data.js
var tableData = data;


// Select filter button
var filterButton = d3.select("#filter-btn");

// Select inputDate using d3 and use to create user input date value
var inputDate = d3.select("#datetime");
var inputValue = inputDate.property("value");

inputDate.on('change',function() {
    inputValue = inputDate.property("value");
});

filterButton.on('click',function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

    // Filter data
    var filteredData;

    if (inputValue === '') {
        filteredData = tableData;
    }
    else {
        filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    }

    // Create ufo-table and select the body element for which to append   
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;

    // Clear existing table if exists
    tbody.html('');

    // using return from above function dynamically create a table 
    for (var i = 0; i < filteredData.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(filteredData[i].city.toUpperCase());
        trow.append("td").text(filteredData[i].state.toUpperCase());
        trow.append("td").text(filteredData[i].country.toUpperCase());
        trow.append("td").text(filteredData[i].durationMinutes);
        trow.append("td").text(filteredData[i].shape);
        trow.append("td").text(filteredData[i].comments);
        trow.append("td").text(filteredData[i].datetime);
    }
});

