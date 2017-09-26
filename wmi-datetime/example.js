//This file shows simple usage of the package

var dateTime = require('./index');

var _wmiDate = dateTime.getWmiDateFromDateString();
console.log(_wmiDate);

//now convert it back to JS date
var _jsDate = dateTime.getDateFromWMIDate(_wmiDate.toString());
console.log(_jsDate);

