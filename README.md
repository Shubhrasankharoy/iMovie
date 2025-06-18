## iMovie GPT

1. create next.js
    - Run this command
        ```bash
        npx create-next-app@latest
        ```
    - install 
        - DEPENDENCIES :- 
            - react, react-dom, next
        - DEV DEPENDENCIES :- 
            - @tailwindcss/postcss, tailwindcss
2. Build get start page
3. Build login page
4. Setup firebase
    - create a project
    - install firebase
    ```bash
    npm install firebase
    ``` 
    - create firebase.js
    - install firebase tools for hosting
    ``` bash
    npm install -g firebase-tools
    ```
    - Deploy to Firebase Hosting
        ``` bash
        firebase login
        ```
        ``` bash
        firebase init
        ```
        - Update nextConfig in next.config.mjs
            ```javascript
            output: "export"
            ```
        ```bash
        npm run build
        ```
        ``` bash
        firebase deploy
        ```
5. Write authentication logic
    - Impliment sign in and sign up user api
6. Setup redux store
    - install redux
        ```bash
        npm install @reduxjs/toolkit
        npm install react-redux
        ```
    - Create a store with user slice
    - Connect the store with our web site
7. Fix bug: 
    - Make out browse page protected
8. Setup TMDB for fetching movies
9. Display trailer
10. Display all types of movies

## Features

- Log in / Sign up
    - Sign in / Sign up form
    - Redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Moive
        - Trailer in background
        - Title and Description
        - Movie Suggestions
            - Movie Lists
- MovieGPT
    - Search bar
    - Movie suggestions