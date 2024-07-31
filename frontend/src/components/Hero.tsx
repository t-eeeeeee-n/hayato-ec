import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Welcome to Fresh Market</h1>
                    <p className="mt-4 text-xl">Find the freshest ingredients for your meals</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
