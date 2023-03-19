import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="bg-white">
                <div className="mx-auto max-w-7xl px-2">
                    <div className="flex h-16 items-center justify-center">
                        <div className="space-x-4">
                            <Link to="/" className=" text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                HOME
                            </Link>

                            <Link to="/review" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                REVIEW
                            </Link>

                            <Link to="/dashboard" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                DASHBOARD
                            </Link>

                            <Link to="/blogs" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                BLOGS
                            </Link>

                            <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                ABOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
