// TOGGLE BUUTON
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => (
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
))

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden")
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden")
})

// DARK LIGHT THEME
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

darkMode();


function darkMode() {
    html.classList.add("dark");
    localStorage.setItem("mode", "dark");
}


// TABS
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
const all = document.querySelectorAll('.work_card');
const digital_marketing = document.querySelectorAll('.digital-marketing');

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabval = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = "none"
        })

        if (tabval == "digital marketing") {
            digital_marketing.forEach(item => {
                item.style.display = "block"
            })
        } else {
            all.forEach(item => {
                item.style.display = "block"
            })
        }

    })
})

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const logo = document.getElementById("logo");
    const whiteLogo = document.getElementById("white-logo");

    if (this.scrollY >= 200) {
        navbar.classList.add("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.add("text-whiteColor")
        })

        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
    } else {
        navbar.classList.remove("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.remove("text-whiteColor")
        })

        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
}


window.addEventListener("scroll", scrollHeader)

// SHOE SCROLL UP

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp)

// SCROLL SECTION ACTIVE LINK
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    })

    navLinks.forEach(item => {
        item.classList.remove('active');
        if (item.href.includes(current)) {
            item.classList.add('active');
        }
    })

}

window.addEventListener("scroll", activeLink)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    durarion: 2500,
    delay: 400

});

sr.reveal(".hero__image");
sr.reveal(".hero__content", { origin: "bottom" });
sr.reveal(".hero__footer", { delay: 1200 });

sr.reveal(".service__top", { origin: "bottom" });
sr.reveal(".service__item", { origin: "bottom", interval: 300 });

sr.reveal(".recent_works_top", { origin: "bottom" });
sr.reveal(".recent_works_tabs", { origin: "bottom", delay: 1200 });
sr.reveal(".work_card", { origin: "bottom", delay: 1200 });

sr.reveal(".exp__top", { origin: "top" });
sr.reveal(".exp_card", { origin: "left", interval: 300 });

sr.reveal(".edu__top", { origin: "top" });
sr.reveal(".edu_card", { origin: "right", interval: 300 });

sr.reveal(".skills__top", { origin: "bottom" });
sr.reveal(".skills_card", { origin: "bottom", interval: 300 });

sr.reveal(".contact__form", { origin: "left", interval: 300 });
sr.reveal(".contact__item", { origin: "right", interval: 300 });