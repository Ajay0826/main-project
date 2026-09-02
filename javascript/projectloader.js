// Project Loader Script
// Handles loading projects into the main section when clicked

const projectMap = {
  "cv-link": {
    url: "cvproject/CVproject.html",
    name: "CV Project",
    sectionId: "cv-project",
  },
  "calculator-link": {
    url: "calculator/index.html",
    name: "Calculator",
    sectionId: "calculator-project",
  },
  "form-link": {
    url: "formcard/formcard.html",
    name: "Form Card",
    sectionId: "form-project",
  },
  "counter-link": {
    url: "counter/counter.html",
    name: "Counter",
    sectionId: "counter-project",
  },
  "digitalclock-link": {
    url: "digitalclock/digitalclock.html",
    name: "Digital Clock",
    sectionId: "digitalclock-project",
  },
  "weather-link": {
    url: "live-weather-app/live-weather.html",
    name: "Weather App",
    sectionId: "weather-project",
  },
};

// Function to show home view
function showHomeView() {
  // Hide all project sections
  document.querySelectorAll(".project-section").forEach((section) => {
    section.classList.add("hidden");
  });
  // Show home view
  document.getElementById("home-view").classList.remove("hidden");
  // Remove active class from all links
  document.querySelectorAll(".projectlist a").forEach((link) => {
    link.parentElement.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Add click handlers to all project links
  Object.keys(projectMap).forEach((linkId) => {
    const link = document.getElementById(linkId);
    if (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const projectInfo = projectMap[linkId];
        loadProjectInIframe(linkId, projectInfo);
      });
    }
  });
});

function loadProjectInIframe(linkId, projectInfo) {
  const projectSection = document.getElementById(projectInfo.sectionId);
  const projectContent = projectSection.querySelector(".project-content");

  // Create an iframe to load the project
  projectContent.innerHTML = `
    <iframe 
      src="${projectInfo.url}" 
      class="project-iframe"
      title="${projectInfo.name}"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
    ></iframe>
  `;

  // Hide home view and show project section
  document.getElementById("home-view").classList.add("hidden");
  document.querySelectorAll(".project-section").forEach((section) => {
    section.classList.add("hidden");
  });
  projectSection.classList.remove("hidden");

  // Add active class to the clicked link
  document.querySelectorAll(".projectlist a").forEach((link) => {
    link.parentElement.classList.remove("active");
  });
  document.getElementById(linkId).parentElement.classList.add("active");
}
