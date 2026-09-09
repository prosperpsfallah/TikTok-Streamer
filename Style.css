/* =========================================================
   TIKTOK STREAMERS
   Main Stylesheet
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --black: #111111;
    --dark: #181818;
    --dark-2: #242424;
    --white: #ffffff;
    --light: #f7f7f8;
    --gray: #707070;
    --light-gray: #e8e8e8;
    --red: #fe2c55;
    --cyan: #25f4ee;
    --green: #16a34a;
    --danger: #dc2626;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    --radius: 18px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--light);
    color: var(--black);
    line-height: 1.6;
    min-height: 100vh;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

img {
    max-width: 100%;
    display: block;
}

/* =========================================================
   HEADER
   ========================================================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid var(--light-gray);
    backdrop-filter: blur(12px);
}

.navbar {
    max-width: 1250px;
    margin: auto;
    min-height: 72px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 21px;
    font-weight: 800;
    white-space: nowrap;
}

.logo-mark {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: linear-gradient(
        135deg,
        var(--cyan),
        var(--black) 48%,
        var(--red)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 900;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
}

.nav-links a {
    color: #444;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s ease;
}

.nav-links a:hover {
    color: var(--red);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn {
    border: none;
    border-radius: 12px;
    padding: 11px 18px;
    font-weight: 700;
    transition: 0.2s ease;
}

.btn:hover {
    transform: translateY(-1px);
}

.btn-dark {
    background: var(--black);
    color: var(--white);
}

.btn-dark:hover {
    background: #292929;
}

.btn-red {
    background: var(--red);
    color: var(--white);
}

.btn-red:hover {
    background: #e51f49;
}

.btn-outline {
    background: transparent;
    border: 1px solid #d5d5d5;
    color: var(--black);
}

.btn-outline:hover {
    border-color: var(--black);
}

.search-btn {
    width: 42px;
    height: 42px;
    border: 1px solid var(--light-gray);
    border-radius: 50%;
    background: white;
    font-size: 18px;
}

.menu-btn {
    display: none;
    width: 42px;
    height: 42px;
    border: none;
    background: transparent;
    font-size: 25px;
}

/* =========================================================
   MOBILE NAV
   ========================================================= */

.mobile-menu {
    display: none;
    background: white;
    border-top: 1px solid var(--light-gray);
    padding: 18px 24px;
}

.mobile-menu.active {
    display: block;
}

.mobile-menu a {
    display: block;
    padding: 12px 0;
    font-weight: 600;
    border-bottom: 1px solid #eee;
}

/* =========================================================
   SEARCH OVERLAY
   ========================================================= */

.search-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.72);
    z-index: 2000;
    display: none;
    align-items: flex-start;
    justify-content: center;
    padding: 90px 20px;
}

.search-overlay.active {
    display: flex;
}

.search-box {
    width: min(700px, 100%);
    background: white;
    border-radius: 20px;
    padding: 24px;
}

.search-box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.search-box-header h3 {
    font-size: 22px;
}

.close-search {
    border: none;
    background: #f1f1f1;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 20px;
}

.search-form {
    display: flex;
    gap: 10px;
}

.search-form input {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 13px 15px;
    outline: none;
}

.search-form input:focus {
    border-color: var(--red);
}

/* =========================================================
   HERO
   ========================================================= */

.hero {
    background: var(--black);
    color: white;
    overflow: hidden;
}

.hero-inner {
    max-width: 1250px;
    margin: auto;
    padding: 90px 24px;
    min-height: 620px;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    align-items: center;
    gap: 60px;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 13px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #ddd;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 20px;
}

.live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 0 5px rgba(254, 44, 85, 0.15);
}

.hero h1 {
    font-size: clamp(44px, 6vw, 78px);
    line-height: 0.98;
    letter-spacing: -3px;
    max-width: 760px;
    margin-bottom: 24px;
}

.hero h1 span {
    background: linear-gradient(
        90deg,
        var(--cyan),
        white 45%,
        var(--red)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero p {
    color: #bdbdbd;
    max-width: 650px;
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    margin-top: 45px;
}

.hero-stat strong {
    display: block;
    font-size: 28px;
    line-height: 1;
}

.hero-stat span {
    display: block;
    color: #929292;
    font-size: 13px;
    margin-top: 7px;
}

/* =========================================================
   PHONE MOCKUP
   ========================================================= */

.hero-visual {
    display: flex;
    justify-content: center;
    position: relative;
}

.phone {
    width: 285px;
    height: 555px;
    background: #050505;
    border: 8px solid #303030;
    border-radius: 42px;
    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.55),
        -15px 0 60px rgba(37, 244, 238, 0.08),
        15px 0 60px rgba(254, 44, 85, 0.08);
    overflow: hidden;
    position: relative;
}

.phone-notch {
    position: absolute;
    width: 105px;
    height: 25px;
    background: #000;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 16px 16px;
    z-index: 5;
}

.phone-screen {
    height: 100%;
    padding: 55px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.phone-screen h3 {
    font-size: 18px;
    margin-bottom: 7px;
}

.phone-screen p {
    color: #888;
    font-size: 13px;
}

.phone-live {
    color: var(--red);
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 10px;
}

/* =========================================================
   SECTIONS
   ========================================================= */

.section {
    padding: 85px 24px;
}

.section-inner {
    max-width: 1250px;
    margin: auto;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;
    margin-bottom: 35px;
}

.section-title h2 {
    font-size: 36px;
    letter-spacing: -1px;
}

.section-title p {
    color: var(--gray);
    margin-top: 5px;
}

.section-link {
    color: var(--red);
    font-weight: 700;
    font-size: 14px;
}

/* =========================================================
   EMPTY STATES
   ========================================================= */

.empty-state {
    border: 1px dashed #d7d7d7;
    border-radius: var(--radius);
    background: white;
    padding: 60px 25px;
    text-align: center;
}

.empty-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto 18px;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
}

.empty-state h3 {
    font-size: 21px;
    margin-bottom: 7px;
}

.empty-state p {
    color: var(--gray);
    max-width: 500px;
    margin: auto;
}

/* =========================================================
   CARDS
   ========================================================= */

.card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.card {
    background: white;
    border: 1px solid #ededed;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.card-body {
    padding: 18px;
}

.card-title {
    font-weight: 800;
}

.card-text {
    color: var(--gray);
    font-size: 14px;
}

/* =========================================================
   LIVE SECTION
   ========================================================= */

.live-section {
    background: white;
}

.live-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.live-card {
    min-height: 330px;
    border-radius: var(--radius);
    background: #111;
    color: white;
    position: relative;
    overflow: hidden;
}

.live-card-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    font-size: 14px;
}

/* =========================================================
   STREAMER CARDS
   ========================================================= */

.streamer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.streamer-card {
    background: white;
    border-radius: var(--radius);
    border: 1px solid #ededed;
    padding: 20px;
    text-align: center;
}

.avatar {
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50%;
    background: #ededed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #999;
    font-weight: 800;
}

.streamer-card h3 {
    margin-top: 13px;
    font-size: 17px;
}

.streamer-card p {
    color: var(--gray);
    font-size: 13px;
}

/* =========================================================
   LEADERBOARD
   ========================================================= */

.leaderboard {
    background: var(--black);
    color: white;
}

.leaderboard .section-title p {
    color: #999;
}

.leaderboard-empty {
    border: 1px solid #292929;
    background: #181818;
}

.leaderboard-empty .empty-icon {
    background: #252525;
}

/* =========================================================
   CTA
   ========================================================= */

.cta {
    max-width: 1250px;
    margin: 0 auto;
    padding: 80px 24px;
}

.cta-box {
    background:
        radial-gradient(
            circle at 15% 20%,
            rgba(37, 244, 238, 0.12),
            transparent 30%
        ),
        radial-gradient(
            circle at 85% 70%,
            rgba(254, 44, 85, 0.16),
            transparent 30%
        ),
        #111;
    color: white;
    border-radius: 28px;
    padding: 60px;
    text-align: center;
    overflow: hidden;
}

.cta-box h2 {
    font-size: 42px;
    letter-spacing: -1px;
    margin-bottom: 12px;
}

.cta-box p {
    color: #aaa;
    max-width: 600px;
    margin: 0 auto 25px;
}

/* =========================================================
   MODALS
   ========================================================= */

.modal {
    position: fixed;
    inset: 0;
    z-index: 3000;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-content {
    width: min(450px, 100%);
    background: white;
    border-radius: 22px;
    padding: 30px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background: #f1f1f1;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 20px;
}

.modal h2 {
    font-size: 27px;
    margin-bottom: 7px;
}

.modal-subtitle {
    color: var(--gray);
    font-size: 14px;
    margin-bottom: 22px;
}

/* =========================================================
   FORMS
   ========================================================= */

.form-group {
    margin-bottom: 16px;
}

.form-group label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 7px;
}

.form-control {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 11px;
    padding: 12px 13px;
    outline: none;
    background: white;
}

.form-control:focus {
    border-color: var(--red);
    box-shadow: 0 0 0 3px rgba(254, 44, 85, 0.08);
}

.form-submit {
    width: 100%;
    margin-top: 5px;
}

/* =========================================================
   TOAST / NOTIFICATION
   ========================================================= */

.toast {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 5000;
    background: #111;
    color: white;
    padding: 13px 18px;
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(100px);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease;
}

.toast.show {
    transform: translateY(0);
    opacity: 1;
}

/* =========================================================
   FOOTER
   ========================================================= */

.footer {
    background: #0b0b0b;
    color: white;
    padding: 55px 24px 25px;
}

.footer-inner {
    max-width: 1250px;
    margin: auto;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 45px;
    padding-bottom: 40px;
}

.footer-brand p {
    color: #888;
    max-width: 330px;
    margin-top: 12px;
    font-size: 14px;
}

.footer h4 {
    margin-bottom: 15px;
}

.footer a {
    display: block;
    color: #999;
    font-size: 14px;
    margin-bottom: 9px;
}

.footer a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid #222;
    padding-top: 20px;
    color: #777;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1000px) {

    .nav-links {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .hero-inner {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 70px;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero h1 {
        max-width: 700px;
    }

    .hero p {
        max-width: 600px;
    }

    .hero-stats {
        justify-content: center;
    }

    .card-grid,
    .live-grid,
    .streamer-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {

    .navbar {
        padding: 0 16px;
    }

    .nav-actions .btn-dark {
        display: none;
    }

    .hero-inner {
        padding: 65px 18px;
    }

    .hero h1 {
        font-size: 48px;
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 16px;
    }

    .hero-stats {
        gap: 20px;
    }

    .hero-stat strong {
        font-size: 23px;
    }

    .section {
        padding: 60px 18px;
    }

    .section-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .section-title h2 {
        font-size: 29px;
    }

    .card-grid,
    .live-grid,
    .streamer-grid {
        grid-template-columns: 1fr;
    }

    .phone {
        width: 260px;
        height: 510px;
    }

    .cta {
        padding: 55px 18px;
    }

    .cta-box {
        padding: 45px 22px;
    }

    .cta-box h2 {
        font-size: 32px;
    }

    .footer {
        padding-left: 18px;
        padding-right: 18px;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .footer-bottom {
        flex-direction: column;
    }
}

@media (max-width: 380px) {

    .logo {
        font-size: 18px;
    }

    .search-btn {
        display: none;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero-actions {
        width: 100%;
        flex-direction: column;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .modal-content {
        padding: 24px 18px;
    }
}