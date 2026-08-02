import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import { Outlet, useLocation } from 'react-router-dom'
import Footer from "../components/Footer.jsx";
import Preloader from "../components/Preloader.jsx";
import { AnimatePresence } from 'framer-motion';

const KNOWN_PATHS = ['/', '/about', '/contact', '/project'];

const RootLayout = () => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    const path = pathname.replace(/\/+$/, '') || '/';
    const showHeader = KNOWN_PATHS.includes(path);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" />}
            </AnimatePresence>
            {showHeader && <Header />}
            <main>
                <Outlet />
            </main>
            {showHeader && <Footer />}
        </>
    );
};

export default RootLayout;
