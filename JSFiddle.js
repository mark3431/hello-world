JSFiddle

HTML
----
<span id="num"></span> <span id="street"></span><br /> <span id="city"></span>, <span id="state"></span> <span id="zip"></span>

Javascript
----------
txt="<address>"+
 "<street>Roble Ave</street>"+
  "<mtfcc>S1400</mtfcc>"+
  "<streetNumber>649</streetNumber>"+
  "<lat>37.45127</lat>"+
  "<lng>-122.18032</lng>"+
  "<distance>0.04</distance>"+
  "<postalcode>94025</postalcode>"+
  "<placename>Menlo Park</placename>"+
  "<adminCode2>081</adminCode2>"+
  "<adminName2>San Mateo</adminName2>"+
  "<adminCode1>CA</adminCode1>"+
  "<adminName1>California</adminName1>"+
  "<countryCode>US</countryCode>"+
 "</address>";

if (window.DOMParser)  {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
} else { // Internet Explorer
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt);
}

document.getElementById("num").innerHTML=
xmlDoc.getElementsByTagName("streetNumber")[0].childNodes[0].nodeValue;
document.getElementById("street").innerHTML=
xmlDoc.getElementsByTagName("street")[0].childNodes[0].nodeValue;
document.getElementById("city").innerHTML=
xmlDoc.getElementsByTagName("adminName2")[0].childNodes[0].nodeValue;
document.getElementById("state").innerHTML=
xmlDoc.getElementsByTagName("adminCode1")[0].childNodes[0].nodeValue;
document.getElementById("zip").innerHTML=
xmlDoc.getElementsByTagName("postalcode")[0].childNodes[0].nodeValue;