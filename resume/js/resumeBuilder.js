var bio = {
    "name": "Vaida Domeikyte",
    "role": "Front-End Developer",
    "welcomeMessage": "Hello everyone! I am in IT field more than 5 years, I've started as IT lawyer and now continue my career as a Front-End Developer.",
    "contacts": {
        "mobile": "732 593 7537",
        "email": "vaidusia.d@gmail.com",
        "github": "vaidusia",
        "location": "Piscataway, NJ, USA"
    },
    "skills": ["HTML&CSS", "JavaScript", "jQuery", "Responsive and Mobile Design", "GitHub", "Problem Solving Skills", "Bootstrap", "Python"],
    "bioPic": "images/me.jpg"
}

var education = {
    "schools":[
        {
             "name": "Stockholm University",
             "location": "Stockholm, Sweden",
             "degree": "McS",
             "major": "Law and IT",
             "dates": 2012,
             "url": "http://www.su.se/english/"
        },
        {
             "name": "Mykolas Romeris University",
             "location": "Vilnius, Lithuania",
             "degree": "BA",
             "major": "Law",
             "dates": 2009,
             "url": "https://www.mruni.eu/en/"
        }
    ],
    "onlineCourses":[
        {
             "title": "Front-End Web Developer Nanodegree",
             "school": "Udacity",
             "dates": 2016,
             "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
             "title": "An Introduction to Interactive Programming in Python (Part 2)",
             "school": "Rice University",
             "dates": "August 2015",
             "url": "https://www.coursera.org/account/accomplishments/certificate/VCMQCHTUBX"
        },
        {
             "title": "An Introduction to Interactive Programming in Python (Part 1)",
             "school": "Rice University",
             "dates": "July 2015",
             "url": "https://www.coursera.org/account/accomplishments/certificate/C25EY3TDFF"
        },
        {
             "title": "HTML & CSS",
             "school": "CodeAcademy",
             "dates": 2014,
             "url": "https://www.codecademy.com/learn/web"
        },
        {
             "title": "JavaScript",
             "school": "CodeAcademy",
             "dates": 2014,
             "url": "https://www.codecademy.com/learn/javascript"
         },
        {
             "title": "jQuery",
             "school": "CodeAcademy",
             "dates": 2014,
             "url": "https://www.codecademy.com/learn/jquery"
        }
    ]
}

var work = {
    "jobs":[
      {
          "employer": "Greater Legacy Properties",
          "title": "Administrative Assistant",
          "location": "Edison, NJ, USA",
          "dates": "2015-now",
          "description": "F​ielding telephone calls; filing and data entry; creating spreadsheets, letters and notices"
      },
      {
          "employer": "KYPADO",
          "title": "Co-founder",
          "location": "Stockholm, Sweden",
          "dates": "2013-2014",
          "description": "Founded KYPADO company; developed a new idea that improves awareness of privacy in digital world; supervised the project in attaining its goals; was responsible for company administration; launched KYPADO website"
      },
      {
          "employer": "SwampyFoot",
          "title": "Legal Consultant",
          "location": "Vilnius, Lithuania",
          "dates": "2010-2014",
          "description": "Solved disputes; worked on legal issues in the IT field; saved money by negotiated agreements clauses; implemented effective company contracting procedures; advised with legal issues"
      },
      {
          "employer": "GSIM ",
          "title": "Tester",
          "location": "Tel Aviv, Israel",
          "dates": "May 2008 - Sep 2008",
          "description": "Manual testing of various applications"
      }
    ]
}

var projects = {
    "projects":[
        {
            "title": "Build a Portfolio Site",
            "dates": 2016,
            "description": "I was provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. I've developed a responsive website that displays images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
            "images": "images/project2.jpg",
            "url": "https://github.com/vaidusia/portfolio/tree/master/portfolio"
        },
        {
            "title": "Online resume",
            "dates": 2016,
            "description": "This is my second project during my Udacity course program. I have written clean code and applied my knowledge of JavaScript, jQuery DOM manipulation methods and JSON to successfully solve the challenges.",
            "images": "images/project.jpg",
            "url": "https://github.com/vaidusia/resume"
        },
        {
            "title": "KYPADO website",
            "dates": 2015,
            "description": "This is my first project made some time ago. It was really exciting to learn new things and it encouraged me to continue learning and proceeding with web development.",
            "images": "images/project3.jpg",
            "url": "https://github.com/vaidusia/LS-page"
         }
    ]
}
    
bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedImage);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);
   
    
    if (bio.skills.length > 0) {
        
        $("#header").append(HTMLskillsStart);
        
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
        
        formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(formattedSkill);
    }
};

work.display = function () {
    
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);
        
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
        
    }
};

projects.display = function() {
    
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].url);
        $(".project-entry:last").append(formattedProjectTitle);
        
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectImage);
    
    }
};

education.display = function () {
    
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDate);
        
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace('#', education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};


// Call of functions.
bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
            
        logClicks(x,y);
    });

  
$("#mapDiv").append(googleMap);
