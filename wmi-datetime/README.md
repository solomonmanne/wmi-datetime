wmi-datetime
=============

This package is intended to simplify datetime conversion to and from Windows Management Instrumentation (WMI) format.

Usage
=====
Below is a simple example of how to convert a javascript datetime string to an acceptable WMI datetime that can be passed to a WQL query:

var wmiDatetime = require('wmi-datetime');
var wmiDate = wmiDatetime.GetWmiDateFromDateString('2017-09-13T18:29:22.412Z');

This results in:
20170913112922.412-420

Now you can use this in your WQL query, for example: 

var query = `SELECT * FROM Win32_Process WHERE CreationDate = ${wmiDate}`;

Voila!



Now when you get the result back it would be in this format '20170913112922.412-420', however, you want to perform javascript datetime operations on it
in this case just do the following:

var jsDate = wmiDatetime.getDateFromWMIDate('20170913112922.412-420');

This results in:
2017-09-13T18:29:22.412Z

As you can see, this is a javascript acceptable date string!

Enjoy! 