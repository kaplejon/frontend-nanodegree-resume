var name = "Lee Tratnyek";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Lee Tratnyek",
  "role": "Web Developer",
  "phone": "610.762.6077",
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
      "city": "Bethlehem, PA",
      "degree": "AAS",
      "major": "Web Application Development"
    },
    {
      "name": "The George Washinton University",
      "city": "Washington, D.C.",
      "degree": "BA",
      "major": "English with Creative Writing"
    }
  ]
};


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

if (work.jobs.length > 0) {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
        formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
    //$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
    //$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
  }
}