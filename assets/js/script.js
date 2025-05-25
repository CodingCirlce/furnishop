// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("nav-links");
// // const overlay = document.getElementById("overlay");

// function closeNav() {
//     hamburger.classList.remove("active");
//     navLinks.classList.remove("active");
//     //   overlay.classList.remove("active");
// }

// // Toggle nav + overlay
// hamburger.addEventListener("click", () => {
//     console.log('any issue??')
//     //   overlay.classList.toggle("active");
//     hamburger.classList.toggle("active");
//     navLinks.classList.toggle("active");
// });

// // Click outside to close
// // overlay.addEventListener("click", closeNav);

// // Auto-close on scroll
// window.addEventListener("scroll", () => {
//     if (navLinks.classList.contains("active")) {
//         closeNav();
//     }
// });


// window.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add("loading");

//     const text = "💊 GenSafe...";
//     const typingText = document.getElementById("text");
//     let i = 0;

//     // Type one character at a time
//     const typeInterval = setInterval(() => {
//         typingText.textContent += text[i];
//         i++;
//         if (i === text.length) {
//             clearInterval(typeInterval);

//             // Add zoom effect after a short pause
//             setTimeout(() => {
//                 const splash = document.getElementById("splash-screen");
//                 splash.classList.add("zoom-out");

//                 // Fade out splash and show main content
//                 setTimeout(() => {
//                     splash.style.opacity = "0";
//                     document.body.classList.remove("loading");
//                 }, 600); // match zoom duration
//             }, 500); // small pause after typing
//         }
//     }, 100); // speed of typing
// });



window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loading");

    // Welcome animation
    const text = "🔨 KWALITY FURNITURE WORLD";
    const typingText = document.getElementById("text");
    let i = 0;

    const typeInterval = setInterval(() => {
        if (typingText) {
            typingText.textContent += text[i];
            i++;
            if (i === text.length) {
                clearInterval(typeInterval);

                // Add zoom effect after a short pause
                setTimeout(() => {
                    const splash = document.getElementById("splash-screen");
                    splash.classList.add("zoom-out");

                    // Fade out splash and show main content
                    setTimeout(() => {
                        splash.style.opacity = "0";
                        splash.style.pointerEvents = "none"; // prevent it from blocking clicks
                        document.body.classList.remove("loading");
                        document.body.classList.add("ready");
                    }, 600);
                }, 100);
            }
        }
    }, 100);

    // ✅ Hamburger logic goes here so it's safe
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    function closeNav() {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        if (navLinks.classList.contains("active")) {
            closeNav();
        }
    });

    // product card carousel logic
    // const carousel = document.getElementById("carousel");
    // let cards = Array.from(carousel.children);
    // let isHovered = false;

    // Enable smooth native scrolling
    // carousel.style.scrollBehavior = "smooth";
    // carousel.style.overflowX = "auto";
    // carousel.style.overflowY = "hidden";

    // Optional: make sure card width is respected
    // cards.forEach(card => {
    //     card.style.flex = "0 0 auto";
    // });

    // Optional: Prevent scroll chaining (bouncing)
    // carousel.addEventListener("wheel", (e) => {
    //     if (
    //         (e.deltaY < 0 && carousel.scrollLeft === 0) ||
    //         (e.deltaY > 0 && carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth)
    //     ) {
    //         e.preventDefault();
    //     }
    // }, { passive: false });

    // Disable dragging scroll beyond first/last cards
    // carousel.addEventListener("scroll", () => {
    //     const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    //     if (carousel.scrollLeft <= 0) {
    //         carousel.scrollLeft = 0;
    //     }

    //     if (carousel.scrollLeft >= maxScrollLeft) {
    //         carousel.scrollLeft = maxScrollLeft;
    //     }
    // });


    // auto flip first product card logic
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile)
    const firstCard = document.querySelector(".flip-card");
    if (firstCard) {
        setTimeout(() => {
            firstCard.classList.add("flip");

            // Flip it back after 2 seconds
            setTimeout(() => {
                firstCard.classList.remove("flip");
            }, 2000);
        }, 1500); // Wait a bit after page load
    }

    // Show hint only on mobile
    if (isMobile) {
        firstCard.classList.add("show-hint");
        setTimeout(() => {
            firstCard.classList.remove("show-hint");
        }, 4000);
    }



});

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
        if (card.classList.contains('flip')) {
            setTimeout(() => {
                card.classList.remove("flip");
            }, 2000);
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));




const dropBtn = document.querySelector(".dropdown");
const dropContent = document.querySelector(".dropdown-content");

dropBtn.addEventListener("click", function (e) {
    if (dropContent.classList.contains('show')) dropContent.classList.remove('show');
    else dropContent.classList.add('show');
});

