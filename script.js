document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home-content").classList.add("show-text");
    }, 500); // Delay animation for better effect
});
function openPopup(id) { document.getElementById(id).style.display = 'flex'; }

function closePopup(id) { document.getElementById(id).style.display = 'none'; }

// Close popup when clicking outside the content
window.onclick = function(event) { const popups = document.querySelectorAll('.popup'); popups.forEach(popup => { if (event.target === popup) { popup.style.display = 'none'; } }); }
function closeAlert() {
    document.getElementById("popup").style.display = "none";
}

function showAlert() {
    document.getElementById("alertBox").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () { const filterButtons = document.querySelectorAll(".filter-btn"); const projectCards = document.querySelectorAll(".project-card"); const loadMoreBtn = document.querySelector(".load-more"); let visibleProjects = 3;

function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        filterProjects(this.getAttribute("data-filter"));
    });
});

function showMoreProjects() {
    let hiddenProjects = [...projectCards].slice(visibleProjects, visibleProjects + 5);
    hiddenProjects.forEach(card => card.style.display = "block");
    visibleProjects += 5;
    if (visibleProjects >= projectCards.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", showMoreProjects);
showMoreProjects();

});



function openroadPopup(id) { document.getElementById(id).style.display = 'flex'; }

function closeroadPopup(id) { document.getElementById(id).style.display = 'none'; }

// Close popup when clicking outside the content
window.onclick = function(event) { const popups = document.querySelectorAll('.popupmodal'); popups.forEach(popup => { if (event.target === popup) { popup.style.display = 'none'; } }); }
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("roadModal");
    const openModalBtn = document.querySelector(".details-btn");
    const closeModalBtn = document.querySelector(".close-btn");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});




// Add smooth scroll effect for CTA button to contact section
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for navbar
            behavior: 'smooth'
        });
    });
});
// Smooth scroll for "Get a Free Consultation" button
document.querySelector('.cta-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
    });
});

// Function to animate numbers
function animateNumbers(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = range / (duration / 10);
    
    let timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + "+";
        if (current >= end) {
            element.textContent = end + "+";
            clearInterval(timer);
        }
    }, 10);
}

// Detect when section is visible
function startCounting() {
    let stats = document.querySelectorAll(".stat-item h3");
    let section = document.querySelector(".stats");
    
    let options = { root: null, threshold: 0.6 };
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(stats[0], 0, 10, 1500);
                animateNumbers(stats[1], 0, 500, 2000);
                animateNumbers(stats[2], 0, 300, 1800);
                observer.disconnect();
            }
        });
    }, options);
    
    observer.observe(section);
}

// Run animation when page loads
document.addEventListener("DOMContentLoaded", startCounting);

// Slide-in effect when section appears
const slideInElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.6 });

slideInElements.forEach(element => observer.observe(element));
// Example auto-popup after scroll or event
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home-content").classList.add("show-text");
    }, 500); // Delay animation for better effect
});


  
