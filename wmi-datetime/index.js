var getWmiDateFromDateString = function (_date)
{
 
    var inDate=new Date(_date);
//if user did not pass a date, just use the current date time
if(_date===undefined)
  inDate = new Date(); 

//discover the timezone addition based on the computer clock/locale
var _dayUnFormatted = inDate.getDate().toString();
var day= (_dayUnFormatted.length===1) ? `0${_dayUnFormatted}`: _dayUnFormatted ;
 
var _monthUnFormatted = inDate.getMonth()+1;
var month= (_monthUnFormatted.toString().length===1) ? `0${_monthUnFormatted}`: _monthUnFormatted ;

var year= inDate.getFullYear();
 
//get time
var _hour= inDate.getHours();
var hour = (_hour.toString().length===1) ? `0${_hour}`: _hour;

var _minutes= inDate.getMinutes();
var minutes = (_minutes.toString().length===1) ? `0${_minutes}`: _minutes;


var _secondsJS = inDate.getSeconds();
var seconds = (_secondsJS.toString().length===1) ? `0${_secondsJS}`: _secondsJS;

var _milliseconds = inDate.getMilliseconds();
var milliseconds = (_milliseconds.toString().length===1) ? `00${_milliseconds}` : (_milliseconds.toString().length===2) ? `0${_milliseconds}` : _milliseconds;
 
var timeZoneOffset = inDate.getTimezoneOffset();
 
//format the date for WMI
var wmiDate = `${year}${month}${day}${hour}${minutes}${seconds}.${milliseconds}-${timeZoneOffset}`;
 
return wmiDate; 
}
 


var getDateFromWMIDate = function (_wmiDate)
{
//discover the timezone addition based on the computer clock/locale
var day= _wmiDate.toString().substring(6,8);
 
var month= _wmiDate.toString().substring(4,6) ;

var year= _wmiDate.toString().substring(0,4);
 
//get time
var hour= _wmiDate.toString().substring(8,10);
var minutes= _wmiDate.toString().substring(10,12);
var seconds = _wmiDate.toString().substring(12,14);
var milliseconds = _wmiDate.toString().substring(15,18);

var outDate = `${year}/${month}/${day} ${hour}:${minutes}:${seconds}.${milliseconds}`;

var jsDate = new Date(outDate);

return jsDate;
}

module.exports.getWmiDateFromDateString = getWmiDateFromDateString;
module.exports.getDateFromWMIDate = getDateFromWMIDate;
