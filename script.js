// ==========================================
// TIKTOK STREAMERS
// MAIN FRONTEND SCRIPT
// ==========================================

const API_BASE = "/api";

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("active");
    }
}

function toggleMobileMenu() {
    toggleMenu();
}

// ==========================================
// SEARCH
// ==========================================

function openSearch() {
    const overlay = document.getElementById("searchOverlay");

    if (!overlay) return;

    overlay.classList.add("active");

    const input = document.getElementById("streamerSearch");

    if (input) {
        setTimeout(() => {
            input.focus();
        }, 100);
    }
}

function closeSearch() {
    const overlay = document.getElementById("searchOverlay");

    if (overlay) {
        overlay.classList.remove("active");
    }
}

async function searchStreamers() {
    const input = document.getElementById("streamerSearch");
    const results = document.getElementById("searchResults");

    if (!input) return;

    const searchTerm = input.value.trim();

    if (!searchTerm) {
        if (results) {
            results.innerHTML = "";
        }
        return;
    }

    try {
        const response = await fetch(
            `${API_BASE}/streamers?search=${encodeURIComponent(searchTerm)}`
        );

        if (!response.ok) {
            throw new Error("Search request failed.");
        }

        const data = await response.json();

        const streamers = data.streamers || [];

        if (!results) return;

        if (streamers.length === 0) {
            results.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">👤</div>
                    <h3>No streamers found</h3>
                    <p>There are no matching streamers yet.</p>
                </div>
            `;
            return;
        }

        results.innerHTML = streamers.map(streamer => `
            <div class="search-result-item">
                <strong>
                    ${escapeHTML(streamer.username || "Streamer")}
                </strong>
                <span>
                    ${escapeHTML(streamer.full_name || "")}
                </span>
            </div>
        `).join("");

    } catch (error) {
        console.error("Search error:", error);

        if (results) {
            results.innerHTML = `
                <div class="empty-state">
                    <h3>Search unavailable</h3>
                    <p>Please try again later.</p>
                </div>
            `;
        }
    }
}

// ==========================================
// SECTION SCROLL
// ==========================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// ==========================================
// LOGIN
// ==========================================

function openLogin() {
    window.location.href = "login.html";
}

function closeLogin() {
    // Kept for compatibility with older HTML.
}

async function loginUser(event) {
    if (event) {
        event.preventDefault();
    }

    window.location.href = "login.html";
}

// ==========================================
// REGISTER
// ==========================================

function openRegister() {
    window.location.href = "register.html";
}

function closeRegister() {
    // Kept for compatibility with older HTML.
}

async function registerUser(event) {
    if (event) {
        event.preventDefault();
    }

    window.location.href = "register.html";
}

function switchToRegister() {
    window.location.href = "register.html";
}

function switchToLogin() {
    window.location.href = "login.html";
}

// ==========================================
// STREAMER ACTIONS
// ==========================================

function joinStreamer() {
    window.location.href = "register.html";
}

function viewProfile(userId) {
    if (userId) {
        window.location.href =
            `profile.html?id=${encodeURIComponent(userId)}`;
        return;
    }

    showMessage("No streamer profile is available yet.");
}

function changeRanking(period) {
    window.location.href =
        `leaderboard.html?period=${encodeURIComponent(period)}`;
}

// ==========================================
// BACKEND HEALTH CHECK
// ==========================================

async function checkBackendStatus() {
    try {
        const response = await fetch(`${API_BASE}/health`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();

        console.log("=================================");
        console.log("TIKTOK STREAMERS BACKEND");
        console.log("=================================");
        console.log("Status:", data.status);
        console.log("Message:", data.message);
        console.log("Database:", data.database);
        console.log("Users:", data.users);
        console.log("Streamers:", data.streamers);
        console.log("Live streams:", data.liveStreams);
        console.log("=================================");

        updateBackendStatus(true);

        return data;

    } catch (error) {
        console.error("Backend connection failed:", error);

        updateBackendStatus(false);

        return null;
    }
}

// ==========================================
// BACKEND STATUS
// ==========================================

function updateBackendStatus(isOnline) {
    const statusElement =
        document.getElementById("backendStatus");

    if (!statusElement) return;

    if (isOnline) {
        statusElement.textContent = "Backend Online";

        statusElement.classList.add("online");
        statusElement.classList.remove("offline");

    } else {
        statusElement.textContent = "Backend Offline";

        statusElement.classList.add("offline");
        statusElement.classList.remove("online");
    }
}

// ==========================================
// LOAD STREAMERS
// ==========================================

async function loadStreamers() {
    try {
        const response =
            await fetch(`${API_BASE}/streamers`);

        if (!response.ok) {
            throw new Error("Could not load streamers.");
        }

        const data = await response.json();

        console.log("Streamers received:", data);

        return data.streamers || [];

    } catch (error) {
        console.error(
            "Streamer loading error:",
            error
        );

        return [];
    }
}

// ==========================================
// LOAD LIVE STREAMS
// ==========================================

async function loadLiveStreams() {
    try {
        const response =
            await fetch(`${API_BASE}/live`);

        if (!response.ok) {
            throw new Error("Could not load live streams.");
        }

        const data = await response.json();

        console.log("Live streams received:", data);

        return data.liveStreams || [];

    } catch (error) {
        console.error(
            "Live stream loading error:",
            error
        );

        return [];
    }
}

// ==========================================
// LOAD LEADERBOARD
// ==========================================

async function loadLeaderboard() {
    try {
        const response =
            await fetch(`${API_BASE}/leaderboard`);

        if (!response.ok) {
            throw new Error("Could not load leaderboard.");
        }

        const data = await response.json();

        console.log(
            "Leaderboard received:",
            data
        );

        return data.rankings || [];

    } catch (error) {
        console.error(
            "Leaderboard loading error:",
            error
        );

        return [];
    }
}

// ==========================================
// TOAST MESSAGE
// ==========================================

function showMessage(message) {
    let toast =
        document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.left = "50%";
        toast.style.bottom = "30px";
        toast.style.transform =
            "translateX(-50%)";
        toast.style.zIndex = "99999";
        toast.style.padding =
            "12px 18px";
        toast.style.borderRadius =
            "12px";
        toast.style.background = "#111";
        toast.style.color = "#fff";
        toast.style.fontSize = "14px";
        toast.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.2)";
        toast.style.transition =
            "opacity .25s ease";

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.style.opacity = "0";
    }, 3000);
}

// ==========================================
// ESCAPE KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }

        closeSearch();

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );

        if (mobileMenu) {
            mobileMenu.classList.remove(
                "active"
            );
        }
    }
);

// ==========================================
// CLOSE SEARCH WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener(
    "click",
    function (event) {

        const searchOverlay =
            document.getElementById(
                "searchOverlay"
            );

        if (
            searchOverlay &&
            event.target === searchOverlay
        ) {
            closeSearch();
        }

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );

        if (
            mobileMenu &&
            event.target.closest("a")
        ) {
            mobileMenu.classList.remove(
                "active"
            );
        }
    }
);

// ==========================================
// HTML SECURITY
// ==========================================

function escapeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================
// PAGE STARTUP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    async function () {

        console.log(
            "TikTok Streamers frontend loaded."
        );

        // These are optional.
        // The homepage still works if the
        // backend/API is not available yet.

        checkBackendStatus();

        loadStreamers();

        loadLiveStreams();

        loadLeaderboard();
    }
);