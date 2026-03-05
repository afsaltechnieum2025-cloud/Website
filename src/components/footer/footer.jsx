export default function Footer() {

    const socialLinks = [
        { href: "#", label: "LinkedIn", icon: "fa-linkedin" },
        { href: "#", label: "Twitter", icon: "fa-twitter" },
        { href: "#", label: "YouTube", icon: "fa-youtube" },
    ];

    const CybermenuItems = [
        "XDR",
        "Threat Detection Marketplace",
        "Digital Forensics",
        "Threat Intelligence",
        "Digital Risk Protection",
        "Email Security",
        "Vulnerability Management",
        "Cloud Security",
    ];

    const DatamenuItems = [
        "Data Classification Framework",
        "Data Discovery and Classification Automation",
        "Enterprise Data Loss Prevention",
        "Digital Rights Management",
        "Secure Manage File Transfer",
        "Data Privacy Management Platform",
        "Data Privacy Governance Framework",
    ];

    const ApplicationmenuItems = [
        "Secure SDLC",
        "Application Security Posture Management",
        "API Security",
    ];

    const ServicesmenuItems = [
        "Awareness",
        "Assurance",
        "Expert Services",
    ];

    const CompanymenuItems = [
        "About Us",
        "Careers",
    ];


    return (
        <footer className="bg-brandblack text-brandwhite px-6 py-10 bg-brandblack">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION — LEFT BRANDING + RIGHT GRID */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">

                    {/* LEFT COLUMN — BRANDING */}
                    <div className="w-full lg:w-1/3">
                        <img src="/logo.png" alt="Technieum Logo" className="h-16 mb-4" />

                        <p className="text-sm mb-2">
                            Office 2208, Al Shafar Tower 1<br />TECOM, Dubai<br />United Arab Emirates
                        </p>

                        <p className="text-sm">
                            Phone: <a href="tel:+16504376338" className="hover:text-brandOrange">+971 - 43461199</a>
                        </p>

                        <p className="text-sm">
                            Mail: <a href="" className="hover:text-brandOrange">bs@technieum.com</a>
                        </p>

                        <div className="mt-4 flex gap-4">
                            <a href="#" className="bg-brandOrange text-brandwhite px-4 py-2 rounded-md text-sm font-semibold">
                                Contact Us
                            </a>
                        </div>

                        <h4 className="text-brandOrange font-semibold uppercase mt-8 mb-4 text-sm">Follow Us</h4>
                        <div className="flex gap-4">
                            {socialLinks.map(({ href, label, icon }) => (
                                <a key={label} href={href} aria-label={label} className="hover:text-brandOrange">
                                    <i className={`fab ${icon} text-2xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE — 3 COLUMNS PER ROW */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {/* Cyber Security */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Cyber Security</h4>
                            <ul className="space-y-2 text-sm">
                                {CybermenuItems.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-brandOrange">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Data</h4>
                            <ul className="space-y-2 text-sm">
                                {DatamenuItems.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-brandOrange">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Application */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Application</h4>
                            <ul className="space-y-2 text-sm">
                                {ApplicationmenuItems.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-brandOrange">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Services</h4>
                            <ul className="space-y-2 text-sm">
                                {ServicesmenuItems.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-brandOrange">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Company</h4>
                            <ul className="space-y-2 text-sm">
                                {CompanymenuItems.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-brandOrange">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* BOTTOM LEGAL BAR */}
                <div className="mt-12 border-t border-gray-300 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white-600">

                        <p className="mb-2 md:mb-0">
                            © 2023–{new Date().getFullYear()} Technieum. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#" className="hover:text-brandRed">Privacy Policy</a>
                            <a href="#" className="hover:text-brandRed">Cookie Policy</a>
                            <a href="#" className="hover:text-brandRed">Responsible Disclosure Policy</a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}
