# MedT Project 🩺 
### AI-Assisted Medical Terminology & Translation Platform

**MedT** is a high-performance full-stack web application designed for medical students, translators, and healthcare professionals. It provides instant access to complex medical terminology with AI-driven accuracy, real-time search suggestions, and audio pronunciations.

---

## 🚀 Core Features

* **Smart Search Autocomplete:** Instant, client-side filtered search for thousands of medical terms using optimized data fetching from a production API.
* **Audio Pronunciation:** Integrated **Web Speech API** to provide native English pronunciations for medical terms to assist in clinical learning.
* **AI-Enhanced Accuracy:** Visual indicators (Accuracy Progress Bars) showing the reliability of AI-generated medical descriptions.
* **Responsive Term Details:** Dynamic routing using **React Router** to display in-depth definitions, translations, and specializations for each term.
* **Modern UI/UX:** Clean, medical-grade interface built with **React** and **Tailwind CSS**, featuring smooth animations via **Animate.css**.

---

## 🛠️ Technical Stack

| Category | Technology |
| --- | --- |
| **Frontend** | React.js, Next.js (App Router), Tailwind CSS |
| **State Management** | React Hooks (useState, useEffect) |
| **Data Fetching** | Axios (with Debouncing for Search Optimization) |
| **Backend API** | Node.js, Express.js (Deployed on Vercel) |
| **Database** | MongoDB with Optimized Indexing |
| **Animations** | Animate.css, Framer Motion |

---

## 📖 How It Works

1.  **Home Page:** User clicks "Start" to enter the search environment.
2.  **Search Experience:** As the user types, a request is made to the `/MedTApi/api/v1/all` endpoint. The data is cached and filtered locally for a "zero-lag" experience.
3.  **Details Page:** Clicking a term navigates the user to a unique URL (e.g., `/term-details/:id`) where specific data is fetched and displayed.
4.  **Audio Integration:** The user can click the speaker icon to hear the correct pronunciation of the term.

---

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/medt-project.git](https://github.com/your-username/medt-project.git)


2. Install dependencies:
   ```bash
   npm install

   
3. Start the development server:
     ```bash
   npm run dev




👨‍💻 Developed By

Ahmed - Full-stack Web Developer
Specialized in building scalable, AI-driven SaaS platforms and healthcare solutions.