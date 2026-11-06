// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a link

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// CHURCH EVENTS
// =====================================

// You can edit these events or add more.

const events = [

    {
        title: "Sunday Worship Service",
        date: "Every Sunday",
        description: "Join us for a wonderful time of worship, prayer and biblical teaching.",
        image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=700"
    },

    {
        title: "Youth Fellowship",
        date: "Every Saturday",
        description: "A time of fellowship, spiritual growth and interaction among young people.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=700"
    },

    {
        title: "Church Prayer Meeting",
        date: "Every Friday",
        description: "Come together as a church family to pray and seek God's presence.",
        image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=700"
    }

];


// Display events on the website

const eventGrid = document.getElementById("eventGrid");

events.forEach(function (event) {

    const card = document.createElement("article");

    card.className = "event-card";

    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">

        <div class="event-content">

            <span class="event-date">${event.date}</span>

            <h3>${event.title}</h3>

            <p>${event.description}</p>

        </div>
    `;

    eventGrid.appendChild(card);

});


// =====================================
// SERMONS AND MESSAGES
// =====================================

// Add your church sermon details here.

const sermons = [

    {
        title: "Walking With God",
        preacher: "Resident Pastor",
        scripture: "Genesis 5:24",
        description: "Understanding the importance of maintaining a close relationship with God."
    },

    {
        title: "The Power of Prayer",
        preacher: "Resident Pastor",
        scripture: "1 Thessalonians 5:17",
        description: "Discovering the importance of prayer in the life of every believer."
    },

    {
        title: "Living a Life of Faith",
        preacher: "Resident Pastor",
        scripture: "Hebrews 11:1",
        description: "Learning to trust God and live according to His promises."
    }

];


// Display sermon cards

const sermonGrid = document.getElementById("sermonGrid");

sermons.forEach(function (sermon) {

    const card = document.createElement("article");

    card.className = "sermon-card";

    card.innerHTML = `

        <span class="sermon-icon">📖</span>

        <h3>${sermon.title}</h3>

        <p><strong>Preacher:</strong> ${sermon.preacher}</p>

        <p><strong>Bible Text:</strong> ${sermon.scripture}</p>

        <p>${sermon.description}</p>

    `;

    sermonGrid.appendChild(card);

});


// =====================================
// CHURCH ANNOUNCEMENT
// =====================================

// Change this message whenever necessary.

const churchAnnouncement =
    "Welcome to ECWA Church. Join us this Sunday for worship, fellowship and the teaching of God's Word.";

document.getElementById("announcementText").textContent =
    churchAnnouncement;


// =====================================
// PRAYER REQUEST FORM
// =====================================

const prayerForm = document.getElementById("prayerForm");

const prayerFeedback = document.getElementById("prayerFeedback");

prayerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("prayerName").value.trim();

    const email = document.getElementById("prayerEmail").value.trim();

    const message = document.getElementById("prayerMessage").value.trim();

    if (!name || !email || !message) {

        prayerFeedback.textContent = "Please complete all the fields.";

        return;

    }

    // Get existing prayer requests from LocalStorage

    let prayerRequests = JSON.parse(
        localStorage.getItem("ecwaPrayerRequests") || "[]"
    );

    // Create a new prayer request

    const newRequest = {

        id: Date.now(),

        name: name,

        email: email,

        message: message,

        date: new Date().toLocaleString()

    };

    // Add the new request

    prayerRequests.push(newRequest);

    // Save requests in the browser

    localStorage.setItem(
        "ecwaPrayerRequests",
        JSON.stringify(prayerRequests)
    );

    // Display success message

    prayerFeedback.textContent =
        "Your prayer request has been saved successfully. Thank you.";

    // Reset form

    prayerForm.reset();

});


// =====================================
// COPYRIGHT YEAR
// =====================================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();