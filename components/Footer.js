import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full mt-12 py-8 px-4 text-center">
            <h3 className="text-lg font-semibold mb-2">👨‍💻 Author</h3>
            <p className="mb-2">
                Shubhra Sankha Roy{" "}
                <a
                    href="https://github.com/Shubhrasankharoy"
                    className="underline hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>{" "}
                |{" "}
                <a
                    href="https://www.linkedin.com/in/shubhra-sankha-roy-23311b320"
                    className="underline hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </p>
            <p className="text-gray-400 text-sm">MIT License</p>
        </footer>
    )
}
