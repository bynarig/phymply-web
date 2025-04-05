"use client"

import Navbar from "@/components/ui/Navbar";
import AboutWidget from "@/widgets/about/AboutWidget";
import Footer from "@/components/ui/Footer";
import BackgroundDecoration from "@/components/ui/BgDecor";

export default function History() {
    return (
        <>
            <Navbar/>
            <AboutWidget/>
            <BackgroundDecoration/>
            <Footer/>
        </>
    );
}