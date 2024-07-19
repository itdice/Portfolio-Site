/*Top Button Part*/
const topBtns = document.body.querySelectorAll("div.top-button");

const homeBtn = document.body.querySelector("#home");
const skillsBtn = document.body.querySelector("#skills");
const projectsBtn = document.body.querySelector("#projects");
const infosBtn = document.body.querySelector("#infos");

const homeView = document.body.querySelector("#home-view");
const skillsView = document.body.querySelector("#skills-view");
const projectsView = document.body.querySelector("#projects-view");
const infosView = document.body.querySelector("#info-view");

let nowPos = "home";

setInterval(function () {
    for (let topBtn of topBtns) {
        topBtn.classList.remove("selected");
    }
    if (nowPos != null) {
        const topSelected = document.body.querySelector("#"+nowPos);
        topSelected.classList.add("selected");
    }

    if (Math.abs(homeView.getBoundingClientRect().top) < 400) {
        nowPos = "home";
    }
    else if (Math.abs(skillsView.getBoundingClientRect().top) < 400) {
        nowPos = "skills";
    }
    else if (Math.abs(projectsView.getBoundingClientRect().top) < 400) {
        nowPos = "projects";
    }
    else if (Math.abs(infosView.getBoundingClientRect().top) < 400) {
        nowPos = "infos";
    }
}, 10);

homeBtn.addEventListener("click", function () {
    nowPos = "home";
    homeView.scrollIntoView({behavior: "smooth", block: "center"});
})

skillsBtn.addEventListener("click", function () {
    nowPos = "skills";
    skillsView.scrollIntoView({behavior: "smooth", block: "center"});
})

projectsBtn.addEventListener("click", function () {
    nowPos = "projects";
    projectsView.scrollIntoView({behavior: "smooth", block: "center"});
})

infosBtn.addEventListener("click", function () {
    nowPos = "infos";
    infosView.scrollIntoView({behavior: "smooth", block: "center"});
})


for (let topBtn of topBtns) {
    topBtn.addEventListener("mouseover", function () {
        topBtn.classList.add("hovered");
    })
    topBtn.addEventListener("mouseout", function () {
        topBtn.classList.remove("hovered");
    })
}

/*Info Button Part*/
const emailBtn = document.body.querySelector("#email");
const phoneBtn = document.body.querySelector("#phone");
const gitBtn = document.body.querySelector("#git");

emailBtn.addEventListener("click", function () {
    window.open("mailto:itdice@itdice.net");
});

phoneBtn.addEventListener("click", function () {
    window.open("tel:+821037480954");
});

gitBtn.addEventListener("click", function () {
    window.open("https://github.com/itdice");
});
