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
    
    let skillboxes = document.querySelectorAll(".skill-box");
    skillboxes.forEach(skillbox => {
        let sillBarInner = skillbox.querySelector(".skill-bar-inner");
        let showParcent = skillbox.querySelector(".show-parcent");
        let width = 1;
        let target = +sillBarInner.getAttribute("data-parcent");
        let inc = target / 200;
        let id = setInterval(frame, 5);
        function frame() {
            if(width >= target) {
                clearInterval(id);
            } else {
                width += inc;
                sillBarInner.style.width = width + "%";
                showParcent.textContent = Math.floor(width) + "%";
            }
        }
    })
    
})();

// Circular Progress Bar Script
(() => {
    // Select all circular boxes.
    const circularProgress = document.querySelectorAll(".circular-progress");

    // Use forEach iterator for applying animation to all the element. 
    circularProgress.forEach(circular => {
        // Select all necessary element of every circular boxes.
        let circularProgressInner = circular.querySelector(".circular-progress-inner");
        let circularValue = circular.querySelector(".circular-value");
        let dataLength = 1;
        let target = +circular.getAttribute("data-parcent");
        let inc = target / 200;
        let id = setInterval(frame, 5);
        
        function frame() {
            if(dataLength >= target) {
                clearInterval(id);
            } else {
                dataLength += inc;
                // Iconic gradient background property.
                circularProgressInner.style.background = `conic-gradient(
                    #0FBF61 ${dataLength * 3.6}deg,
                    #fff ${0 * 3.6}deg
                )`;
                circularValue.textContent = Math.floor(dataLength) + "%";
            }
        }
    })


})();

// Sticky menu javascript
 window.addEventListener('scroll', function() {
     let header = document.querySelector('.header');
     header.classList.toggle('sticky', window.scrollY > 0)
 })