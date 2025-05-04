import React, { createContext, useState, useEffect, useContext } from 'react';

const SessionContext = createcontext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [user, setUser] useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (userData) => {
        steUser(userData);
        localStorage.setItem('usesr', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateUser = (updatedUserData) => {
        setUSer(updatedUserData);
        localStorage.setItem('user', JSON.stringify(updatedUserData));
    };

    const value = {
        user,
        isLoading,
        login,
        logout,
        updateUser,
        isAuthenticated: !!user
    };

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};