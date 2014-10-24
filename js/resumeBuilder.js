var name = "Lee Tratnyek";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Lee Tratnyek",
  "contacts": {
      "location": "Annapolis, MD"
    },
  "role": "Web Developer",
  "phone": "610.762.6077",
  "pic": "fry.jpg",
  "skills": [
    "JavaScript",
    "HTML",
    "CSS",
    "Ruby",
    "Python"
  ],
  "message": "I wear this chaos well."
};

var work = {
  "jobs": [
    {
      "employer":"Barnes & Noble",
      "title":"Cafe Server",
      "dates":"August 2014 - Present",
      "location":"Annapolis, MD",
      "description":"Prepare world-famous cups'o'Joe."
    },
    {
      "employer":"Synchronoss Technologies, Inc.",
      "title":"Operations Analyst",
      "dates":"January 2010 - December 2013",
      "location":"Bethlehem, PA",
      "description":"Administrator and Developer for performance management software."
    },
    {
      "employer":"CLAI",
      "title":"Intern",
      "dates":"June 2008 - December 2008",
      "location":"Washington, D.C.",
      "description":"Build the center's website."
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Northampton Community College",
      "location": "Bethlehem, PA",
      "degree": "AAS",
      "major": "Web Application Development"
    },
    {
      "name": "The George Washinton University",
      "location": "Washington, D.C.",
      "degree": "BA",
      "major": "English with Creative Writing"
    }
  ]
};

var projects = {};


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}


function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
        formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
  }
}

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart)
  }
}

$("#mapDiv").append(googleMap);