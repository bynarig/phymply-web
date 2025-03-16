import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import BackgroundDecoration from "@/components/ui/BgDecor";

export default function Home() {
    return (
        <>
                <Navbar/>
            <div className="h-screen flex flex-col items-center justify-center">
                <Hero/>
                <BackgroundDecoration/>
            </div>
            <Footer/>
        </>
    );
}
