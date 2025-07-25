# 🎬 iMovie-GPT

iMovie-GPT is an intelligent movie browsing web application built using **Next.js**, **Firebase**, **TailwindCSS**, and a **free GPT API**. Users can log in, explore trending movies, and receive AI-generated movie recommendations powered by GPT and TMDB (The Movie Database).

---

## 🚀 Features

- 🔐 **Authentication**
  - User Sign In / Sign Up with Firebase
  - Protected Browse Page after Login

- 🎞️ **Browse Page**
  - Dynamic Header
  - Main Movie with Trailer Background
  - Title, Description, and Movie Lists

- 🤖 **MovieGPT Integration**
  - GPT-powered search bar
  - AI-generated movie suggestions
  - TMDB fetch for movie metadata
  - Full movie details and cast/crew info

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Styling:** TailwindCSS
- **State Management:** Redux Toolkit
- **Authentication & Hosting:** Firebase
- **Movie Data:** TMDB API
- **AI Search:** GPT API (GitHub Marketplace)

---

## 🧱 Project Setup

### 1. Create a Next.js App

```bash
npx create-next-app@latest
```

- Install dependencies:

```bash
npm install react react-dom next
npm install -D tailwindcss @tailwindcss/postcss
```

### 2. Firebase Setup
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

- Install Firebase:

    ```bash
    npm install firebase
    ```

- Set up `Firebase Hosting`:

    ```bash
    npm install -g firebase-tools
    firebase login
    firebase init
    ```

- Add Firebase config in `firebase.js`

- Update `next.config.mjs`:

    ```js
    output: "export"
    ```

- Build and Deploy:

    ```bash
    npm run build
    firebase deploy
    ```

## 🔐 Authentication

- Implement ***Sign In / Sign Up*** APIs with Firebase

- Use **Redux** to store user session data

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

- Create **Redux store** and connect with your app

## 🎬 TMDB Integration

- Fetch **trending**, **top-rated**, **upcoming** movies using the TMDB API

- Display **trailers**, **movie thumbnails**, **genres**, and **descriptions**

## 🤖 GPT Movie Search

- Set up **GPT API** from [GitHub Marketplace](https://github.com/marketplace/models)

- Create a GPT container with a search bar

- Pass user queries to **GPT API**

- Fetch recommended movie details using TMDB

- Store and manage results in **Redux**

- Display full movie details upon click

## 🐛 Bug Fixes

- Protected routing for `Browse page` if user is not authenticated


## 📦 Deployment

- Hosted on `Firebase Hosting`
- Run the following to deploy:

    ```bash
    npm run build
    firebase deploy
    ```

## 👨‍💻 Author
Shubhra Sankha Roy
[GitHub](https://github.com/Shubhrasankharoy) | [LinkedIn](https://www.linkedin.com/in/shubhra-sankha-roy-23311b320)

## 📄 License

- This project is open-source and available under the [MIT License](LICENSE).
