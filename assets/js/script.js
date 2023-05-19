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
                link.style.animation = 'navAnimation 0.3s ease forwards ' + (index / 10 + 0.1) + 's';
            }
        });

        // SlideUp animation on navigation button
        if(hireMeBtn.style.animation) {
            hireMeBtn.style.animation = '';
        } else {
            hireMeBtn.style.animation = 'navAnimation 0.3s ease forwards ' + (linksLen / 10 + 0.1) + 's';
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
