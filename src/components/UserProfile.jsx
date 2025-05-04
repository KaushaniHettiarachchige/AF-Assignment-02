import React from 'react';
import { useSession } from '../context/SessionContex';

const UserProfile = () => {
    const { user, logout } = useSession();

    if (!user) return null;

    return (
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white"></div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user.name}
                </p>
                <p className="text-sm text-white truncate">
                    {user.email}
                </p>
            </div>
            <button 
                onClick={logout}
                className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800"
            >
                Sign Out
            </button>
        </div>
    );
};

export default UserProfile;