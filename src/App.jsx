import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Services from "./components/Services/Services";
import Service2 from "./components/Service2/Service2";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title title="A PROPOS" />
                <About />
                <Title className="serviceTitle" title="NOS SERVICES" />
                <Services />
            </div>
            <Service2 />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
