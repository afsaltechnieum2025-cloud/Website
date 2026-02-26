import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            {/* Gradient background layer */}
            <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none
                        ${scrolled ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-brandYellow via-brandOrange to-brandRed`}>
            </div>

            {/* Content layer */}
            <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-colors duration-500">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Techneium Logo" className="h-14" />
                </div>

                {/* Navigation */}
                <nav className={`hidden md:flex items-center gap-8 ${scrolled ? "text-white" : "text-black"}`}>

                    <div className="relative group">
                        <a href="#solutions" className="flex items-center gap-1 hover:text-brandYellow transition">
                            Solutions
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>

                        {/* Dropdown menu */}
                        <div
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                        >
                            <div className="p-4 space-y-4">
                                {/* Dropdown items */}
                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="AI Gateway" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Cyber Security</h4>
                                        <p className="text-xs text-gray-600">XDR, Threat Detection Marketplace, Digital Forensics, Threat Intelligence, Digital Risk Protection, Email Security, Vulnerability Management, Cloud Security</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="WAAP" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Data</h4>
                                        <p className="text-xs text-gray-600">Data Classification Framework, Data Discovery and Classification Automation, Enterprise Data Loss Prevention, Digital Rights Management, Secure Manage File Transfer, Data Privacy Management Platform, Data Privacy Governance Framework</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="WAAP" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Application</h4>
                                        <p className="text-xs text-gray-600">Secure SDLC, Application Security Posture Management, API Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <a href="#services" className="flex items-center gap-1 hover:text-brandYellow transition-colors">Services
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>

                        {/* Dropdown menu */}
                        <div
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                        >
                            <div className="p-4 space-y-4">
                                {/* Dropdown items */}
                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="AI Gateway" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Assurance</h4>
                                        <p className="text-xs text-gray-600">Vulnerability Assessment and Penetration testing, Source Code review, Red Team Services, Configuration Review</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="WAAP" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Awareness</h4>
                                        <p className="text-xs text-gray-600">Cyber War gaming Exercises, Security Awareness Training</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition">
                                    <div className="bg-gray-100 p-2 rounded-md">
                                        <img src="" alt="WAAP" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Expert Services</h4>
                                        <p className="text-xs text-gray-600">Expert as a Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <a href="#about" className="flex items-center gap-1 hover:text-brandYellow transition-colors">About
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="none" strokeWidth="2" viewBox="0 0 24 24" >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    <div className="relative group">
                        <a href="#careers" className="flex items-center gap-1 hover:text-brandYellow transition-colors">Careers
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="none" strokeWidth="2" viewBox="0 0 24 24" >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    <a
                        href="#contact"
                        className={`px-4 py-2 rounded-md font-semibold transition-all duration-500
                        ${scrolled ? "bg-white text-brandRed" : "bg-brandRed text-white"}`}
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile menu toggle */}

                {/* <div className="md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-black dark:text-white focus:outline-none"
                    >
                        {mobileOpen ? (
                            // X icon
                            <svg
                                className="w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg
                                className="w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div> */}

                <div className="md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="relative w-10 h-10 flex flex-col justify-center items-center"
                    >
                        {/* Top bar */}
                        <span
                            className={`absolute w-6 h-0.5 bg-black transform transition duration-300 ease-in-out
        ${mobileOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-2"}`}
                        ></span>

                        {/* Middle bar */}
                        <span
                            className={`absolute w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out
        ${mobileOpen ? "opacity-0" : "opacity-100"}`}
                        ></span>

                        {/* Bottom bar */}
                        <span
                            className={`absolute w-6 h-0.5 bg-black transform transition duration-300 ease-in-out
        ${mobileOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-2"}`}
                        ></span>
                    </button>
                </div>

            </div>

            {/* Mobile menu */}

            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40">
                    
                    <div className="flex flex-col p-4 space-y-4 text-black">
                        {/* Dropdown: Solutions */}
                        <div>
                            <button
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "solutions" ? null : "solutions")
                                }
                                className="flex items-center justify-between w-full font-semibold"
                            >
                                Solutions
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === "solutions" && (
                                <div className="mt-2 space-y-3 pl-4">
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Cyber Security
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Data
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Application
                                    </a>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "services" ? null : "services")
                                }
                                className="flex items-center justify-between w-full font-semibold"
                            >
                                Services
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openDropdown === "services" && (
                                <div className="mt-2 space-y-3 pl-4">
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Assurance
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Awareness
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandRed">
                                        Expert Services
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#about" className="hover:text-brandRed">About</a>
                        <a href="#careers" className="hover:text-brandRed">Careers</a>
                        <a
                            href="#contact"
                            className="bg-brandRed text-white px-4 py-2 rounded-md text-center font-semibold"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
}





