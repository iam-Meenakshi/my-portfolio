/* =========================================================
   MEENAKSHI PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });


    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("open");

        });

    });

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const typingTexts = [
    "Full Stack Developer in the making.",
    "Web Developer.",
    "Problem Solver.",
    "Cybersecurity Learner."
];

let textIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1700);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % typingTexts.length;

        }

    }

    const speed = deleting ? 45 : 75;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   INTERACTIVE ABOUT PATH
========================================================= */

const pathData = {

    frontend: {

        label: "CURRENTLY LEARNING",

        title: "Frontend",

        description:
            "Creating responsive interfaces and learning how design becomes an actual working website."

    },


    backend: {

        label: "BUILDING WITH",

        title: "Backend",

        description:
            "Understanding server-side logic, APIs and how the frontend communicates with the systems behind it."

    },


    database: {

        label: "UNDERSTANDING",

        title: "Database",

        description:
            "Learning how applications store, retrieve and manage information using databases and CRUD operations."

    },


    security: {

        label: "EXPLORING",

        title: "Cybersecurity",

        description:
            "Exploring how applications can be protected, where vulnerabilities appear and how security fits into development."

    }

};


const pathItems =
    document.querySelectorAll(".path-item");

const pathLabel =
    document.getElementById("pathLabel");

const pathTitle =
    document.getElementById("pathTitle");

const pathDescription =
    document.getElementById("pathDescription");


pathItems.forEach(item => {

    item.addEventListener("click", () => {

        const selectedPath =
            item.dataset.path;

        const data =
            pathData[selectedPath];

        if (!data) return;


        pathItems.forEach(path => {

            path.classList.remove("active");

        });


        item.classList.add("active");


        if (pathLabel) {

            pathLabel.textContent =
                data.label;

        }


        if (pathTitle) {

            pathTitle.textContent =
                data.title;

        }


        if (pathDescription) {

            pathDescription.textContent =
                data.description;

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-menu a");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navigationLinks.forEach(link => {

                        link.classList.remove("active");


                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            rootMargin: "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   PROJECT CARD MOUSE EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card, .featured-project, .cert-card"
    );


projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 700) return;


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -4;


        const rotateY =
            ((x / rect.width) - 0.5) * 4;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   PROFILE IMAGE MOVEMENT
========================================================= */

const profileFrame =
    document.querySelector(".profile-frame");


if (profileFrame) {

    profileFrame.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 700) return;


            const rect =
                profileFrame.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                ((x / rect.width) - 0.5) * 8;


            const moveY =
                ((y / rect.height) - 0.5) * 8;


            profileFrame.style.transform =
                `translateY(-8px)
                 rotateX(${-moveY}deg)
                 rotateY(${moveX}deg)`;

        }
    );


    profileFrame.addEventListener(
        "mouseleave",
        () => {

            profileFrame.style.transform = "";

        }
    );

}


/* =========================================================
   BUTTON MAGNETIC EFFECT
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn, .certificate-link, .contact-links a"
    );


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        if (window.innerWidth < 700) return;


        const rect =
            button.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left -
            rect.width / 2;


        const y =
            event.clientY -
            rect.top -
            rect.height / 2;


        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (formMessage) {

                formMessage.textContent =
                    "Thanks for reaching out! This form is currently a frontend demo.";

            }


            contactForm.reset();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    () => {

        if (!backToTop) return;


        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   STAGGER REVEAL ANIMATION
========================================================= */

const groupedRevealSections =
    document.querySelectorAll(
        ".skills-grid, .project-grid, .certification-grid"
    );


groupedRevealSections.forEach(group => {

    const children =
        group.querySelectorAll(".reveal");


    children.forEach((element, index) => {

        element.style.transitionDelay =
            `${index * 100}ms`;

    });

});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");


cursorGlow.className =
    "cursor-glow";


document.body.appendChild(cursorGlow);


document.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 800) return;


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu
        ) {

            navMenu.classList.remove("active");

            if (menuToggle) {

                menuToggle.classList.remove("open");

            }

        }

    }
);