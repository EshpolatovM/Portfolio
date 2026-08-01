import React, { Suspense } from 'react';
import Header from "../components/Header.jsx";
import {Outlet} from 'react-router-dom'
import Footer from "../components/Footer.jsx";
import Loading from "../components/Loading.jsx";

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
