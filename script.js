/* =========================================================
   TIKTOK STREAMERS
   Main JavaScript
   ========================================================= */

"use strict";

/* =========================================================
   CONFIGURATION
   ========================================================= */

const API_BASE = "/api";

/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    menu.classList.toggle("active");
}

function toggleMobileMenu() {
    toggleMenu();
}

/* Close mobile menu after clicking a link */
document.addEventListener("click", function (event) {
    const link = event.target.closest("#mobileMenu a");

    if (!link) return;

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("active");
    }
});

/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {
    const overlay = document.getElementById("searchOverlay");

    if (!overlay) return;

    overlay.classList.add("active");

    const input = overlay.querySelector("input");

    if (input) {
        setTimeout(() => input.focus(), 100);
    }
}

function closeSearch() {
    const overlay = document.getElementById("searchOverlay");

    if (!overlay) return;

    overlay.classList.remove("active");
}

async function searchStreamers() {
    const input = document.getElementById("streamerSearch");

    if (!input) return;

    const query = input.value.trim();

    if (!query) {
        showMessage("Please enter a streamer name or username.");
        return;
    }

    try {
        const response = await fetch(
            `${API_BASE}/streamers?search=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Search request failed.");
        }

        const data = await response.json();

        if (!data.streamers || data.streamers.length === 0) {
            showMessage("No streamers found.");
            return;
        }

        showMessage(`${data.streamers.length} streamer(s) found.`);

        /*
         * Real search results will be rendered here
         * after the database is connected.
         */
        console.log("Streamer search results:", data.streamers);

    } catch (error) {
        console.error("Streamer search error:", error);
        showMessage("Search is not available yet.");
    }
}

/* =========================================================
   SECTION SCROLLING
   ========================================================= */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =========================================================
   LOGIN MODAL
   ========================================================= */

function openLogin() {
    const modal = document.getElementById("loginModal");

    if (!modal) return;

    modal.classList.add("active");
}

function closeLogin() {
    const modal = document.getElementById("loginModal");

    if (!modal) return;

    modal.classList.remove("active");
}

function loginUser(event) {
    if (event) {
        event.preventDefault();
    }

    /*
     * Authentication will be connected to the backend
     * and database later.
     */

    showMessage("Login will be available after the account system is connected.");
}

/* =========================================================
   REGISTER MODAL
   ========================================================= */

function openRegister() {
    const modal = document.getElementById("registerModal");

    if (!modal) return;

    modal.classList.add("active");
}

function closeRegister() {
    const modal = document.getElementById("registerModal");

    if (!modal) return;

    modal.classList.remove("active");
}

function registerUser(event) {
    if (event) {
        event.preventDefault();
    }

    /*
     * Registration will be connected to the backend
     * and database later.
     */

    showMessage("Registration will be available soon.");
}

/* =========================================================
   SWITCH AUTH MODALS
   ========================================================= */

function switchToRegister() {
    closeLogin();
    openRegister();
}

function switchToLogin() {
    closeRegister();
    openLogin();
}

/* =========================================================
   STREAMER ACTIONS
   ========================================================= */

function joinStreamer() {
    window.location.href = "register.html";
}

function viewProfile() {
    window.location.href = "profile.html";
}

/* =========================================================
   LEADERBOARD
   ========================================================= */

function changeRanking(period) {
    const allowedPeriods = [
        "weekly",
        "monthly",
        "all-time"
    ];

    if (!allowedPeriods.includes(period)) {
        return;
    }

    /*
     * Real rankings will be loaded from the backend
     * after users and streamer activity exist.
     */

    console.log("Selected leaderboard:", period);

    showMessage(
        "Leaderboard data will appear when streamers start using the platform."
    );
}

/* =========================================================
   BACKEND STATUS
   ========================================================= */

async function checkBackendStatus() {
    try {
        const response = await fetch(`${API_BASE}/health`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Backend unavailable.");
        }

        const data = await response.json();

        console.log("TikTok Streamers API:", data);

        updateBackendStatus(true);

        return data;

    } catch (error) {
        console.warn("Backend status:", error.message);

        updateBackendStatus(false);

        return null;
    }
}

function updateBackendStatus(isOnline) {
    const statusElement = document.getElementById("backendStatus");

    if (!statusElement) return;

    if (isOnline) {
        statusElement.textContent = "Online";
        statusElement.classList.add("online");
        statusElement.classList.remove("offline");
    } else {
        statusElement.textContent = "Offline";
        statusElement.classList.add("offline");
        statusElement.classList.remove("online");
    }
}

/* =========================================================
   LOAD STREAMERS
   ========================================================= */

async function loadStreamers() {
    try {
        const response = await fetch(`${API_BASE}/streamers`);

        if (!response.ok) {
            throw new Error("Could not load streamers.");
        }

        const data = await response.json();

        /*
         * The platform intentionally starts empty.
         *
         * No fake streamers are created here.
         */

        console.log("Streamers:", data.streamers || []);

        return data.streamers || [];

    } catch (error) {
        console.warn("Streamers unavailable:", error.message);

        return [];
    }
}

/* =========================================================
   LOAD LIVE STREAMS
   ========================================================= */

async function loadLiveStreams() {
    try {
        const response = await fetch(`${API_BASE}/live`);

        if (!response.ok) {
            throw new Error("Could not load live streams.");
        }

        const data = await response.json();

        /*
         * No demo or fake LIVE streams are created.
         */

        console.log("Live streams:", data.liveStreams || []);

        return data.liveStreams || [];

    } catch (error) {
        console.warn("Live streams unavailable:", error.message);

        return [];
    }
}

/* =========================================================
   LOAD LEADERBOARD
   ========================================================= */

async function loadLeaderboard() {
    try {
        const response = await fetch(`${API_BASE}/leaderboard`);

        if (!response.ok) {
            throw new Error("Could not load leaderboard.");
        }

        const data = await response.json();

        /*
         * No fake rankings are created.
         */

        console.log("Leaderboard:", data.rankings || []);

        return data.rankings || [];

    } catch (error) {
        console.warn("Leaderboard unavailable:", error.message);

        return [];
    }
}

/* =========================================================
   MESSAGE / TOAST
   ========================================================= */

function showMessage(message) {
    let toast = document.getElementById("toast");

    /*
     * Create the toast automatically if the HTML page
     * does not already contain one.
     */

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "toast";
        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    const loginModal = document.getElementById("loginModal");

    if (
        loginModal &&
        event.target === loginModal
    ) {
        closeLogin();
    }

    const registerModal = document.getElementById("registerModal");

    if (
        registerModal &&
        event.target === registerModal
    ) {
        closeRegister();
    }

    const searchOverlay = document.getElementById("searchOverlay");

    if (
        searchOverlay &&
        event.target === searchOverlay
    ) {
        closeSearch();
    }
});

/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }

    closeLogin();
    closeRegister();
    closeSearch();

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("active");
    }
});

/* =========================================================
   SEARCH ENTER KEY
   ========================================================= */

document.addEventListener("keydown", function (event) {

    const searchInput = document.getElementById("streamerSearch");

    if (!searchInput) return;

    if (
        document.activeElement === searchInput &&
        event.key === "Enter"
    ) {
        event.preventDefault();
        searchStreamers();
    }
});

/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", async function () {

    console.log("=================================");
    console.log("   TIKTOK STREAMERS");
    console.log("=================================");
    console.log("Frontend loaded successfully.");
    console.log("Platform status: Empty / Ready");
    console.log("Fake users: 0");
    console.log("Fake streamers: 0");
    console.log("Fake LIVE streams: 0");
    console.log("=================================");

    /*
     * Check the backend if the endpoint exists.
     */

    await checkBackendStatus();

    /*
     * Load real data only.
     * If the database has no users yet,
     * these arrays remain empty.
     */

    await loadStreamers();
    await loadLiveStreams();
    await loadLeaderboard();
});