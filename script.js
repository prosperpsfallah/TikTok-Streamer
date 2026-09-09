<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="TikTok Streamers — Discover live streamers, creators and new talent."
    >

    <meta
        name="theme-color"
        content="#111111"
    >

    <title>TikTok Streamers</title>

    <link
        rel="manifest"
        href="manifest.json"
    >

    <link
        rel="stylesheet"
        href="style.css"
    >

</head>


<body>


<!-- ==================================================
     HEADER
================================================== -->

<header class="header">

    <div class="container nav-container">


        <!-- LOGO -->

        <a
            href="index.html"
            class="logo"
        >

            <div class="logo-icon">
                TS
            </div>

            <span>
                TikTok Streamers
            </span>

        </a>


        <!-- DESKTOP NAV -->

        <nav class="nav">

            <a
                href="index.html"
                class="active"
            >
                Home
            </a>

            <a href="live.html">
                Live
            </a>

            <a href="profile.html">
                Streamers
            </a>

            <a href="leaderboard.html">
                Leaderboard
            </a>

        </nav>


        <!-- HEADER ACTIONS -->

        <div class="header-actions">

            <button
                class="search-btn"
                onclick="openSearch()"
                aria-label="Search"
            >
                🔍
            </button>

            <button
                class="login-btn"
                onclick="openLogin()"
            >
                Login
            </button>

            <button
                class="register-btn"
                onclick="openRegister()"
            >
                Join
            </button>

        </div>


        <!-- MOBILE MENU -->

        <button
            class="menu-btn"
            onclick="toggleMenu()"
            aria-label="Open menu"
        >
            ☰
        </button>

    </div>


    <!-- MOBILE NAV -->

    <div
        id="mobileMenu"
        class="mobile-menu"
    >

        <a
            href="index.html"
            onclick="toggleMenu()"
        >
            Home
        </a>

        <a
            href="live.html"
            onclick="toggleMenu()"
        >
            Live
        </a>

        <a
            href="profile.html"
            onclick="toggleMenu()"
        >
            Streamers
        </a>

        <a
            href="leaderboard.html"
            onclick="toggleMenu()"
        >
            Leaderboard
        </a>

        <button
            onclick="openLogin(); toggleMenu();"
        >
            Login
        </button>

        <button
            onclick="openRegister(); toggleMenu();"
        >
            Create Account
        </button>

    </div>

</header>



<!-- ==================================================
     SEARCH
================================================== -->

<div
    id="searchOverlay"
    class="search-overlay"
>

    <div class="search-box">

        <button
            class="close-search"
            onclick="closeSearch()"
        >
            ×
        </button>


        <h2>
            Search Streamers
        </h2>


        <div class="search-input-wrapper">

            <span>
                🔍
            </span>

            <input
                type="text"
                id="streamerSearch"
                placeholder="Search streamer username..."
                oninput="searchStreamers()"
            >

        </div>


        <div
            id="searchResults"
            class="search-results"
        >
        </div>

    </div>

</div>



<!-- ==================================================
     HERO
================================================== -->

<main>


<section
    id="home"
    class="hero"
>

    <div class="container hero-container">


        <div class="hero-content">


            <div class="hero-badge">
                🎥 STREAMERS COMMUNITY
            </div>


            <h1>

                Discover the

                <span>
                    Streamers
                </span>

                You Love.

            </h1>


            <p>

                Find live creators, discover new talent,
                follow your favorite streamers and
                connect with the community.

            </p>


            <div class="hero-buttons">


                <button
                    class="primary-btn"
                    onclick="window.location.href='live.html'"
                >
                    🔴 Watch Live
                </button>


                <button
                    class="secondary-btn"
                    onclick="openRegister()"
                >
                    Become a Streamer
                </button>


            </div>


            <!-- PLATFORM STATS -->

            <div class="hero-status">


                <div class="status-item">

                    <strong>
                        0
                    </strong>

                    <span>
                        Streamers
                    </span>

                </div>


                <div class="status-item">

                    <strong>
                        0
                    </strong>

                    <span>
                        Live Now
                    </span>

                </div>


                <div class="status-item">

                    <strong>
                        0
                    </strong>

                    <span>
                        Members
                    </span>

                </div>


            </div>

        </div>



        <!-- PHONE PREVIEW -->

        <div class="hero-visual">

            <div class="phone">

                <div class="phone-screen">


                    <div class="phone-header">

                        <strong>
                            LIVE
                        </strong>

                        <span>
                            0 watching
                        </span>

                    </div>


                    <div class="empty-phone">

                        <div class="empty-icon">
                            📺
                        </div>


                        <h3>
                            No LIVE streams
                        </h3>


                        <p>
                            Streamers will appear here
                            when they go LIVE.
                        </p>

                    </div>


                </div>

            </div>

        </div>


    </div>

</section>



<!-- ==================================================
     LIVE
================================================== -->

<section
    id="live"
    class="section"
>

    <div class="container">


        <div class="section-heading">

            <div>

                <span class="section-label">
                    🔴 LIVE
                </span>


                <h2>
                    Live Streamers
                </h2>


                <p>
                    Watch creators who are streaming right now.
                </p>

            </div>

        </div>



        <div class="empty-state">


            <div class="empty-state-icon">
                🔴
            </div>


            <h3>
                Nobody is LIVE right now
            </h3>


            <p>
                When a streamer starts a LIVE session,
                they will appear here.
            </p>


            <button
                class="primary-btn"
                onclick="window.location.href='live.html'"
            >
                Watch LIVE
            </button>


        </div>

    </div>

</section>



<!-- ==================================================
     STREAMERS
================================================== -->

<section
    id="streamers"
    class="section light-section"
>

    <div class="container">


        <div class="section-heading">

            <div>

                <span class="section-label">
                    👥 COMMUNITY
                </span>


                <h2>
                    Streamers
                </h2>


                <p>
                    Discover creators who join the platform.
                </p>

            </div>

        </div>



        <div class="empty-state">


            <div class="empty-state-icon">
                👤
            </div>


            <h3>
                No streamers yet
            </h3>


            <p>
                The first creators who join the platform
                will appear here.
            </p>


            <button
                class="primary-btn"
                onclick="openRegister()"
            >
                Create Account
            </button>


        </div>

    </div>

</section>



<!-- ==================================================
     LEADERBOARD
================================================== -->

<section
    id="leaderboard"
    class="section"
>

    <div class="container">


        <div class="section-heading">

            <div>

                <span class="section-label">
                    🏆 RANKINGS
                </span>


                <h2>
                    Leaderboard
                </h2>


                <p>
                    Top streamers will be ranked here
                    using real platform activity.
                </p>

            </div>

        </div>



        <div class="leaderboard-empty">


            <div class="leaderboard-empty-icon">
                🏆
            </div>


            <h3>
                Leaderboard is waiting
            </h3>


            <p>
                Rankings will appear after real
                streamers begin using the platform.
            </p>


            <button
                class="secondary-btn"
                onclick="window.location.href='leaderboard.html'"
            >
                View Leaderboard
            </button>


        </div>

    </div>

</section>



<!-- ==================================================
     CREATOR CTA
================================================== -->

<section class="cta-section">

    <div class="container">


        <div class="cta-card">


            <div class="cta-content">


                <span>
                    🎤 FOR CREATORS
                </span>


                <h2>
                    Are you a streamer?
                </h2>


                <p>
                    Create your account and become one
                    of the first creators on TikTok Streamers.
                </p>


                <button
                    class="primary-btn"
                    onclick="openRegister()"
                >
                    Join as a Streamer
                </button>


            </div>


            <div class="cta-icon">
                🎥
            </div>


        </div>

    </div>

</section>


</main>



<!-- ==================================================
     TOAST
================================================== -->

<div
    id="toast"
    class="toast"
>
</div>



<!-- ==================================================
     FOOTER
================================================== -->

<footer class="footer">

    <div class="container footer-container">


        <div class="footer-brand">


            <a
                href="index.html"
                class="logo"
            >

                <div class="logo-icon">
                    TS
                </div>

                <span>
                    TikTok Streamers
                </span>

            </a>


            <p>
                A community for streamers
                and viewers to connect.
            </p>


        </div>



        <div class="footer-links">


            <a href="index.html">
                Home
            </a>


            <a href="live.html">
                Live
            </a>


            <a href="leaderboard.html">
                Leaderboard
            </a>


            <a href="login.html">
                Login
            </a>


            <a href="register.html">
                Join
            </a>


        </div>



        <div class="footer-copy">

            © 2026 TikTok Streamers.
            All rights reserved.

        </div>


    </div>

</footer>



<!-- ==================================================
     JAVASCRIPT
================================================== -->

<script src="script.js"></script>

</body>

</html>