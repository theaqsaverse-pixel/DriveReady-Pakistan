# 🚗 DriveReady Pakistan

> A complete front-end web platform to help Pakistani citizens prepare for their **driving license test** — covering traffic signs, traffic rules, video tutorials, and interactive practice tests. Built entirely with **HTML, CSS, and JavaScript** — no backend, no database, no frameworks.

---

## 📌 Project Overview

**DriveReady Pakistan** is a static multi-page website designed for candidates preparing for the DLIMS Punjab driving license theory and practical test. It provides structured learning, video content, and multiple interactive test modes — all runnable by simply opening the HTML files in a browser.

---

## 🗂️ File Structure

```
DriveReady/
│
├── index.html            → Home page (landing + features + testimonials)
├── learning.html         → Learning Center (traffic signs + traffic rules)
├── theory.html           → Theory Test Center (practice + official mock test)
├── vedio.html            → Video Learning Center (mini YouTube for drivers)
│
├── style.css             → Global stylesheet shared by index.html & learning.html
├── main.js               → Shared JavaScript (nav menu toggle, search box)
├── learning.js           → JavaScript for traffic rules interactive component
│
└── images/
    ├── warning/          → Warning sign images (.jpg / .png)
    ├── mandatory/        → Mandatory sign images (.jpg)
    └── INFORMATORY/      → Informatory sign images (.jpg / .png / .gif)
```

---

## 📄 Pages & Features

---

### 🏠 Home Page — `index.html`

The landing page introduces the platform and guides users to the three learning modules.

**Built with:** `index.html` + `style.css` + `main.js`

**Sections:**
- **Hero** — headline, two CTA buttons (Start Learning / Practice Tests)
- **Features Grid** — 3 cards: Learning Materials, Theory Test (marked "Popular"), Watch Videos
- **How It Works** — 3-step visual guide (Learn → Practice → Pass) with step numbers and icons
- **Testimonials** — 3 student success story cards (Ahmed Khan, Sara Ali, Muhammad Bilal)
- **Footer** — brand, modules, company links, contact info

**JavaScript (main.js):**
- Hamburger menu toggle (`#menu-icon` → `.navbar.active`)
- Menu auto-close on scroll
- Search box toggle on `#search-icon` click

---

### 📚 Learning Center — `learning.html`

The content library. Teaches candidates all traffic signs and road rules before the test.

**Built with:** `learning.html` + `style.css` + `main.js` + `learning.js` + `images/` folder

#### 🚦 Traffic Signs Section

Displayed inside a collapsible **main accordion** (`#traffic-signs-accordion`). Contains three sub-sections, each with a category header and a `.cards-grid` of image cards:

| Category | Header Color | Sign Count | Image Folder |
|----------|-------------|------------|--------------|
| ⚠️ **Warning Signs** | Orange/amber | 63 signs | `images/warning/` |
| 🛑 **Mandatory Signs** | Red | 45 signs | `images/mandatory/` |
| ℹ️ **Informatory Signs** | Blue | 65+ signs | `images/INFORMATORY/` |

Each `.info-card` shows:
- The actual **sign image** (`<img>` tag from the images folder)
- The **sign name** in `<h4>` below it

**Warning signs include:** Falling Rocks, Airfield Ahead, Children Crossing, Cyclists Crossing, Right/Left Bend, Double Bend, Crossroads, Y-Junction, Level Crossing (with/without gate), Traffic Signals, Loose Gravel, Pedestrian Crossing, Road Works, Slippery Road, Steep Ascent/Descent, Roundabout, T-Junction, Tunnel Ahead, U-Turn, Wild Animals, Risk of Ice, Dual Carriageway, and more.

**Mandatory signs include:** Stop, Slow, No Entry, Road Closed, Parking Prohibited, Overtaking Prohibited, Turn Left/Right, No U-Turn, No Left/Right Turn, No Stopping, Speed Limits (30/50 km/h), Keep Left/Right, Go Straight, Lane Control, No Entry for specific vehicles (cycle, motorcycle, goods vehicle, agricultural vehicle, pedestrians), Give Way, and more.

**Informatory signs include:** Parking (multiple variants), Hospital, Filling Station, Telephone, First Aid, Bus Stop, One Way, Direction Signs, Dead End, Hotel/Motel, Restaurant, Cafeteria, Mosque, Airport Direction, Roundabout, Hazardous material signs (Explosive, Radioactive, Corrosive, Flammable Gas/Liquid/Solid, Poison Gas), Road marking signs (Broken Lane, Edge Lines, Solid Lane, Dividing Line, Parallel Lines), Tourist Info, Youth Hostel, and more.

---

#### 📖 Traffic Rules Section

Displayed inside a second **main accordion** (`#traffic-rules-accordion`). Contains an **interactive tabbed component** built with `learning.js`.

**5 Category Tabs (`.category-btn`):**

| Tab | Icon | Topic |
|-----|------|-------|
| Speed Limits | `bx-tachometer` | Speed rules for different road types and vehicle classes |
| Signals & Lights | `bx-traffic-cone` | Traffic light meanings, indicator rules, hand signals |
| Safety Rules | `bx-shield` | Seatbelts, mobile phones, DUI, helmets |
| Road Conduct | `bx-street-view` | Overtaking, horn use, pedestrian right of way |
| Special Zones | `bx-star` | Motorway rules, school zones, emergency vehicles, parking |

Clicking a tab updates:
- `#headerIcon` (Boxicon class)
- `#categoryTitle` (heading text)
- `#categoryDescription` (subtitle text)
- `#rulesList` (the rules `<ul>` list)

Logic is handled by `learning.js` which listens for `.category-btn` clicks and re-renders the `.rules-display-card` content dynamically.

---

### 🎮 Theory Test Center — `theory.html`

The interactive testing module. Fully self-contained — all CSS and JS are inline in the file.

**Built with:** `theory.html` only (inline `<style>` and `<script>`)

#### 📊 Progress Dashboard (Hero Section)

A gamified panel shown at the top of the dashboard screen:

- **Mastery progress bar** — animates from 0% to current mastery level
- **Mastery level badge** — changes label and gradient color based on %:
  - 0–39% → Beginner (red gradient)
  - 40–69% → Intermediate (orange gradient)  
  - 70–89% → Advanced (purple gradient)
  - 90–100% → Expert (green gradient)
- **Stats grid (4 items):** Readiness badge, Player name, Tests Taken, Avg. Accuracy
- **Achievement badges (4 icons):** First Test 🏆, Perfect Score 💯, 50% Mastery ⭐, Hot Streak 🔥 — locked until earned
- All progress is saved to and loaded from **`localStorage`** under key `'driveReadyProgress'`

#### 🧘 Practice Hub Card

Users must select **one category** and **one mode** before clicking Start Practice.

**Sign Categories (`.category-mini-card`):**
- 🛑 Mandatory Signs
- ⚠️ Warning Signs
- ℹ️ Information Signs

**Practice Modes (`.mode-mini-card`):**

---

##### Mode 1 — Zen Practice 🧘

- **10 questions** shuffled from the selected category
- **No timer** — relaxed, pressure-free learning
- Each question shows a **traffic sign emoji** + question text
- **4 multiple-choice options** (A, B, C, D) — options are shuffled each round
- On answer: correct option turns green, wrong turns red — buttons disabled
- **Auto-advances** to next question after 1.5 seconds
- **🔊 Voice button** — reads question aloud using `window.speechSynthesis` (Web Speech API)
- Completes → shows Results screen

---

##### Mode 2 — Flashcards 🎴

- Displays **10 sign cards** in a responsive CSS grid (5 columns on desktop, fewer on mobile)
- Each `.flashcard-grid-item` shows: sign emoji + question text on front
- **Click any card to flip it** — reveals the correct answer, card turns teal/green gradient
- Cards are independent — flip as many as you like in any order
- **"Try More Flashcards"** button — loads additional signs from the same category that haven't been shown yet
- **"Back to Dashboard"** button — returns to the main screen without going through results

---

##### Mode 3 — Survival Mode ⚡

- **10 questions** with a **3-heart lives system** (❤️❤️❤️)
- Each round shows:
  - The **question text** at top
  - A **sign emoji** centred on screen inside `.survival-sign-container`
  - **Two answer panels** (LEFT and RIGHT) side by side
- The correct answer is **randomly assigned to left or right** each round (prevents memorising position)
- A **wrong answer text** is drawn from the sign's options array and placed on the opposite side
- **Click LEFT or RIGHT panel** to answer
- The sign **animates toward the chosen side** using CSS class `moving-left` / `moving-right`
- Correct panel highlights green, wrong panel highlights red
- **Wrong answer = lose one heart** → heart turns grey and shrinks
- **Live score counter** in top-right corner
- Game ends when all 3 hearts are lost OR all 10 questions answered
- Proceeds to Results screen

---

#### 🏆 Official Mock Test Card

Simulates the real Pakistan DLIMS theory test.

| Setting | Value |
|---------|-------|
| Questions | 20 (randomly drawn from all 3 categories combined) |
| Time Limit | 10 minutes (600 second countdown) |
| Pass Score | 90% (18 out of 20) |
| Timer | Cannot be paused — shown as `MM:SS` in top-right |

- Questions are shuffled using **Fisher-Yates algorithm** every session
- After all 20 questions or time runs out → shows Results screen
- Result stamp shows **"🎉 PASSED!"** (green) or **"❌ FAILED"** (red) based on 90% threshold

---

#### 📋 Results Screen (shared by all modes)

Shown after every test session:

- **Score display** — e.g. `8 / 10`
- **Percentage** — e.g. `80%`
- **Analytics grid (4 cards):** ✅ Correct · ❌ Incorrect · ⏱️ Time Taken · 🎯 Accuracy
- **Answer Review** — every question listed with:
  - Sign emoji
  - "Your Answer" (red if wrong)
  - "Correct Answer" (always green)
- **Action buttons:**
  - 🔄 Try Again — restarts same category/mode with reshuffled questions
  - 🎯 Try More — goes back to dashboard and auto-launches same settings
  - ← Back to Theory — returns to dashboard

**After every test, the following is updated and saved:**
- `userProgress.testsTaken++`
- `userProgress.totalScore` and `userProgress.totalQuestions` updated
- `userProgress.mastery` increases based on performance (`masteryGain = floor(percentage / 10)`)
- Progress saved to `localStorage` key `'driveReadyProgress'`

---

### 🎥 Video Learning Center — `vedio.html`

A self-contained mini YouTube-style portal for driving-related Pakistani content.

**Built with:** `vedio.html` only (inline `<style>` and `<script>`)

**10 curated videos** — all Pakistani / driving-related YouTube content. Topics include:
- Driving License complete process in Pakistan (Urdu)
- How to pass the L-shape practical test (Urdu)
- All traffic signs of Pakistan (Urdu guide)
- Car driving for beginners — clutch, gear, accelerator (Urdu)
- Pakistan motorway rules and speed limits
- Defensive driving on Pakistani roads
- E-sign test preparation — all signs in Urdu and English
- Parallel and reverse parking guide (Urdu)
- DLIMS online license appointment booking
- Car maintenance for Pakistani drivers

**Features:**

- **Video grid** — responsive CSS grid of `.card` elements with YouTube thumbnails
- **Thumbnails** — auto-loaded from YouTube CDN: `https://img.youtube.com/vi/{videoId}/mqdefault.jpg`
- **Search bar** — filters cards in real-time by title, description, or category
- **Category filter pills** — Road Test, Beginner, Traffic Signs, Clutch Control, Safety, Intermediate, Advanced, Parking
- **Video player modal** — full-page overlay that embeds YouTube using privacy-enhanced domain:  
  `https://www.youtube-nocookie.com/embed/{videoId}?autoplay=1`
- **"Watch on YouTube"** direct link — always visible as fallback if embed is blocked
- **Related videos sidebar** — shows other videos sharing the same category
- **Watch history** — stored in `localStorage` key `'drHistory'` (max 20 entries)
  - Shown in a grid at the bottom of the page
  - Also shown in sidebar while a video is playing
  - **"Clear History"** button wipes all history after confirmation
- **Escape key** closes the player modal
- **Gradient backgrounds** per category used as thumbnail fallback

---

## 🛠️ Technologies Used

| Technology | Where Used |
|------------|------------|
| **HTML5** | All pages — semantic structure |
| **CSS3** | `style.css` (shared) + inline styles in `theory.html` and `vedio.html` |
| **CSS Grid** | Video grid, flashcard grid, stats grid, sign cards grid, footer |
| **CSS Flexbox** | Nav, hero sections, card layouts, pills, buttons |
| **CSS Animations & Keyframes** | `fadeIn`, `fadeInLeft`, `fadeInRight`, `fadeInUp`, `bounceIn`, `shimmer`, `bgFloat`, `cardPulse`, `iconBounce`, `statItemAppear` |
| **CSS Custom Properties (Variables)** | `--main-color`, `--text-color`, `--bg-color`, `--correct-color`, `--wrong-color`, etc. |
| **Vanilla JavaScript (ES6+)** | All interactivity — no libraries or frameworks |
| **localStorage API** | Saving user progress (`driveReadyProgress`) and watch history (`drHistory`) |
| **Web Speech API** | Read-aloud button in Zen Mode (`window.speechSynthesis`) |
| **YouTube Embed (iframe)** | Video player using `youtube-nocookie.com` domain |
| **YouTube Thumbnail CDN** | Auto-loading thumbnails via `img.youtube.com/vi/{id}/mqdefault.jpg` |
| **Google Fonts — Poppins** | Typography across all pages |
| **Boxicons 2.1.4** | All icons via CDN (`unpkg.com/boxicons`) |

---

## 📱 Responsive Design

Every page is fully mobile-responsive using CSS media queries:

| Breakpoint | Changes |
|------------|---------|
| `≤ 1200px` | Flashcard grid reduces columns |
| `≤ 1024px` | Hero grid stacks vertically, cards go single column |
| `≤ 768px` | Hamburger menu appears, nav collapses with `clip-path` animation, survival options stack vertically |
| `≤ 480px` | Reduced font sizes, single-column flashcards, compact button padding |

Navigation on mobile uses a `clip-path: circle()` expand/collapse animation on the `.navbar` element.

---

## 🚀 How to Run

This is a **100% static website** — no server, no npm, no installation required.

### Option 1 — Open directly
```
1. Download or clone this repository
2. Open index.html in any modern browser (Chrome, Firefox, Edge)
3. Navigate between pages using the navbar
```

### Option 2 — Clone via Git
```bash
git clone https://github.com/YOUR_USERNAME/driveready-pakistan.git
cd driveready-pakistan
# Open index.html in your browser
```

### Option 3 — VS Code Live Server
```
1. Open the folder in VS Code
2. Install the "Live Server" extension
3. Right-click index.html → Open with Live Server
```

> ⚠️ **Image dependency:** Sign images must be present in the `images/warning/`, `images/mandatory/`, and `images/INFORMATORY/` folders for the Learning Center to display correctly.  
> ⚠️ **Internet required:** YouTube thumbnails and video embeds require an active internet connection. Google Fonts and Boxicons also load from CDN.

---

## 🗃️ Traffic Signs Data Source

All sign images and their names follow the official Pakistani traffic sign standards as defined by:
- **National Highway Authority (NHA)** of Pakistan
- **Punjab Safe Cities Authority (PSCA)**
- **DLIMS Punjab** e-sign computerized test question bank

The 3 categories (Warning, Mandatory, Informatory) match exactly what is tested in the DLIMS e-sign theory test at license centers across Punjab.

---

## 💾 Data Persistence (localStorage)

The site stores two items in the browser's localStorage:

| Key | Content | Used In |
|-----|---------|---------|
| `driveReadyProgress` | JSON object — mastery %, tests taken, total score, accuracy, category scores, achievements | `theory.html` |
| `drHistory` | JSON array — last 20 watched videos (id, title, thumbnail, ytId) | `vedio.html` |

No data is sent to any server. All data stays in the user's browser.

---

## 👨‍💻 Project Info

- **Type:** Academic / Student Project
- **Purpose:** Driving license preparation platform for Pakistan
- **Target Users:** Candidates preparing for DLIMS Punjab theory and practical driving test
- **Cities Covered:** Lahore, Islamabad, Karachi, Rawalpindi

---

## 📄 License

Submitted for **educational and academic purposes only.**  
Traffic sign images are used for educational reference based on NHA Pakistan standards.  
YouTube video links and thumbnails belong to their respective creators.

---

*Built to help every Pakistani pass their driving test on the first attempt. 🚗🇵🇰*
