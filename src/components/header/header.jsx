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

    const Cyberitems = [
        "XDR",
        "Threat Detection Marketplace",
        "Digital Forensics",
        "Threat Intelligence",
        "Digital Risk Protection",
        "Email Security",
        "Vulnerability Management",
        "Cloud Security",
    ];

    const Dataitems = [
        "Data Classification Framework",
        "Data Discovery and Classification Automation",
        "Enterprise Data Loss Prevention",
        "Digital Rights Management",
        "Secure Manage File Transfer",
        "Data Privacy Management Platform",
        "Data Privacy Governance Framework",
    ];

    const Applicationitems = [
        "Secure SDLC",
        "Application Security Posture Management",
        "API Security",
    ];

    const Assuranceitems = [
        "Vulnerability Assessment and Penetration testing",
        "Source Code review",
        "Red Team Services",
        "Configuration Review",
    ];

    const Awarenessitems = [
        "Cyber War gaming Exercises",
        "Security Awareness Training",
    ];

    const ExpertasaServiceitems = [
        "Expert as a Service",
    ];

    return (
        <header className="fixed top-0 w-full z-50">
            {/* Gradient background layer */}
            <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none
                        ${scrolled ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-brandwhite via-brandblack to-brandblack`}>
            </div>

            {/* Content layer */}

            <div className="relative w-full flex items-center justify-between px-6 py-4 transition-colors duration-500">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Techneium Logo" className="h-14" />
                </div>

                {/* Navigation */}
                <nav className={`hidden md:flex items-center gap-8 ${scrolled ? "text-brandwhite" : "text-brandwhite"}`}>

                    {/* Solutions */}
                    <div className="relative group">
                        <a href="#solutions" className="flex items-center gap-1 hover:text-brandOrange transition">
                            Solutions
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>

                        {/* Dropdown */}
                        <div className="
                            absolute top-full left-0 mt-0 w-80 bg-brandwhite rounded-lg shadow-xl
                            opacity-0 invisible translate-y-2
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-300 z-50
                        ">
                            <div className="p-4 space-y-4">

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Cyber Security</h4>
                                        <p className="text-xs text-gray-600">
                                            {Cyberitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Data</h4>
                                        <p className="text-xs text-gray-600">
                                            {Dataitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Application</h4>
                                        <p className="text-xs text-gray-600">
                                            {Applicationitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="relative group">
                        <a href="#services" className="flex items-center gap-1 hover:text-brandOrange transition-colors">
                            Services
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>

                        {/* Dropdown */}
                        <div className="
                                absolute top-full left-0 mt-0 w-80 bg-brandwhite rounded-lg shadow-xl
                                opacity-0 invisible translate-y-2
                                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                pointer-events-none group-hover:pointer-events-auto
                                transition-all duration-300 z-50
                        ">
                            <div className="p-4 space-y-4">

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Assurance</h4>
                                        <p className="text-xs text-gray-600">
                                            {Assuranceitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Awareness</h4>
                                        <p className="text-xs text-gray-600">
                                            {Awarenessitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 hover: p-2 rounded-md transition">
                                    <div className="bg-brandblack p-2 rounded-md">
                                        <i className="fa-solid fa-lock text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-600">Expert Services</h4>
                                        <p className="text-xs text-gray-600">
                                            {ExpertasaServiceitems.join(", ")}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="relative group">
                        <a href="#about" className="flex items-center gap-1 hover:text-brandOrange transition-colors">
                            About
                        </a>
                    </div>

                    {/* Careers */}
                    <div className="relative group">
                        <a href="#careers" className="flex items-center gap-1 hover:text-brandOrange transition-colors">
                            Careers
                        </a>
                    </div>

                    {/* Contact */}
                    <a
                        href="#contact"
                        className={`px-4 py-2 rounded-md font-semibold transition-all duration-500
                ${scrolled ? "bg-white text-brandRed" : "bg-brandOrange text-brandwhite"}`}
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="relative w-10 h-10 flex flex-col justify-center items-center"
                    >
                        <span className={`absolute w-6 h-0.5 bg-brandwhite transform transition duration-300 ease-in-out
                ${mobileOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-2"}`}></span>

                        <span className={`absolute w-6 h-0.5 bg-brandwhite transition-opacity duration-300 ease-in-out
                ${mobileOpen ? "opacity-0" : "opacity-100"}`}></span>

                        <span className={`absolute w-6 h-0.5 bg-brandwhite transform transition duration-300 ease-in-out
                ${mobileOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-2"}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}

            {mobileOpen && (
                <div className="md:hidden bg-brandblack shadow-lg absolute top-full left-0 w-full z-40">

                    <div className="flex flex-col p-4 space-y-4 text-brandwhite">
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
                                    <a href="" className="block text-sm hover:text-brandOrange">
                                        Cyber Security
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandOrange">
                                        Data
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandOrange">
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
                                    <a href="" className="block text-sm hover:text-brandOrange">
                                        Assurance
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandOrange">
                                        Awareness
                                    </a>
                                    <a href="" className="block text-sm hover:text-brandOrange">
                                        Expert Services
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#about" className="hover:text-brandOrange">About</a>
                        <a href="#careers" className="hover:text-brandOrange">Careers</a>
                        <a
                            href="#contact"
                            className="bg-brandOrange text-branwhite px-4 py-2 rounded-md text-center font-semibold"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            )}

        </header>
    );
}





