// Navigation responsive menu
(() => {
    // Select menu items on variable
    let openButton = document.querySelector(".open-button");
    let closeButton = document.querySelector(".close-btn");
    let links = document.querySelectorAll("nav ul li");
    let linksLen = links.length;
    let nav = document.querySelector(".nav");
    let hireMeBtn = document.querySelector(".hire-me-btn");
    
    // onclick event on menu bar.
    openButton.addEventListener("click", () => {
        // add toggle class on menu-icon bar
        nav.classList.toggle("active");

        // SlideUp animation for menu items
        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navAnimation 0.3s ease forwards ' + (index / 10 + 0.3) + 's';
            }
        });

        // SlideUp animation on navigation button
        if(hireMeBtn.style.animation) {
            hireMeBtn.style.animation = '';
        } else {
            hireMeBtn.style.animation = 'navAnimation 0.3s ease forwards ' + (linksLen / 10 + 0.5) + 's';
        }
    })

    closeButton.addEventListener("click", () => {
        // add toggle class on close button
        nav.classList.toggle("active");

        // SlideUp animation for menu items
        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navAnimation 0.3s ease forwards ' + (linksLen / 10 + 0.5) + 's';
            }
        });

        // SlideUp animation for navigation button
        if(hireMeBtn.style.animation) {
            hireMeBtn.style.animation = '';
        } else {
            hireMeBtn.style.animation = 'navAnimation 0.3s ease forwards ' + (linksLen / 10 + 0.5) + 's';
        }
    })
})();

// Skill progress bar script
(() => {
    
    let dataParcent = document.querySelectorAll(".skill-bar-inner");
    let showParcent = document.querySelectorAll(".skill-box .show-parcent");
    let dataLen = dataParcent.length;
    let i;
    for(i = 0; i < dataLen; i++) {
        dataParcent[i].style.width = dataParcent[i].getAttribute("data-parcent") + '%';
        showParcent[i].innerHTML = dataParcent[i].getAttribute("data-parcent") + '%';
    }
    
    
})();

// Circular Progress Bar Script
(() => {
    let circularProgress = document.querySelectorAll(".circular-progress");
    let circularProgressInner = document.querySelectorAll(".circular-progress-inner");
    let circularValue = document.querySelectorAll(".circular-value");
    let i;
    let len = circularProgress.length;

    for(i = 0; i < len; i++) {
        circularProgressInner[i].style.background = `conic-gradient(
            #0FBF61 ${circularProgress[i].getAttribute("data-parcent") * 3.6}deg,
            #fff ${circularProgress[i].getAttribute("data-parcent") * 3.6}deg
        )`;
        circularValue[i].innerHTML = circularProgress[i].getAttribute("data-parcent") + "%";
    }
})();

// Sticky menu javascript
 window.addEventListener('scroll', function() {
     let header = document.querySelector('.header');
     header.classList.toggle('sticky', window.scrollY > 0)
 })