import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-schema: dark)').matches)
            );
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-4 px-3 py-2 rounded focus:outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            aria-label="Toggle dark mode"
        >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default DarkModeToggle;