## iMovie GPT

- create next.js
```bash
npx create-next-app@latest
```
    - install 
        - DEPENDENCIES :- 
            - react, react-dom, next
        - DEV DEPENDENCIES :- 
            - @tailwindcss/postcss, tailwindcss
- Build get start page
- Build login page
- Setup firebase
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

- install redux
```bash
npm install @reduxjs/toolkit
npm install react-redux
```



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