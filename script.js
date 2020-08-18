var workDay = {
  "8 AM": "",
  "9 AM": "",
  "10 AM": "",
  "11 AM": "",
  "12 PM": "",
  "1 PM": "",
  "2 PM": "",
  "3 PM": "",
  "4 PM": "",
  "5 PM": "",
};

$("#currentDay").text((moment().format("dddd")) + ", " + (moment().format("MMMM Do YYYY, h:mm a")));

function hourInt(hourString) {
  switch(hourString) {
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
  }
}

for(i=1;i<11;i++)
{
  var textEntry = "#text-entry" + i;
  $(textEntry).text(workDay[i-1]);
  var hour = "#time" + i;
  var time = moment().hour();
  var hourStr = $(hour).text();
  var hourNum = hourInt(hourStr);  
  if(hourNum < time) 
  {
    $(textEntry).addClass("past");
  } 
  else if (hourNum > time) 
  {
    $(textEntry).addClass("future");
  } 
  else 
  {
    $(textEntry).addClass("present");
  }
}