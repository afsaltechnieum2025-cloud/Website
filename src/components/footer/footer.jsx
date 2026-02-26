export default function Footer() {
    return (
        <footer className="bg-brandBeige text-black px-6 py-10 bg-[#f5f0e6]">
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
                            Phone: <a href="tel:+16504376338" className="hover:text-brandRed">+971 - 43461199</a>
                        </p>

                        <p className="text-sm">
                            Mail: <a href="" className="hover:text-brandRed">bs@technieum.com</a>
                        </p>

                        <div className="mt-4 flex gap-4">
                            <a href="#" className="bg-brandRed text-white px-4 py-2 rounded-md text-sm font-semibold">
                                Contact Us
                            </a>
                        </div>

                        <h4 className="text-brandOrange font-semibold uppercase mt-8 mb-4 text-sm">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" aria-label="LinkedIn" className="hover:text-brandRed"><i className="fab fa-linkedin text-2xl"></i></a>
                            <a href="#" aria-label="Twitter" className="hover:text-brandRed"><i className="fab fa-twitter text-2xl"></i></a>
                            <a href="#" aria-label="YouTube" className="hover:text-brandRed"><i className="fab fa-youtube text-2xl"></i></a>
                        </div>
                    </div>

                    {/* RIGHT SIDE — 3 COLUMNS PER ROW */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {/* Cyber Security */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Cyber Security</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-brandRed">XDR</a></li>
                                <li><a href="#" className="hover:text-brandRed">Threat Detection Marketplace</a></li>
                                <li><a href="#" className="hover:text-brandRed">Digital Forensics</a></li>
                                <li><a href="#" className="hover:text-brandRed">Threat Intelligence</a></li>
                                <li><a href="#" className="hover:text-brandRed">Digital Risk Protection</a></li>
                                <li><a href="#" className="hover:text-brandRed">Email Security</a></li>
                                <li><a href="#" className="hover:text-brandRed">Vulnerability Management</a></li>
                                <li><a href="#" className="hover:text-brandRed">Cloud Security</a></li>
                            </ul>
                        </div>

                        {/* Data */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Data</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-brandRed">Data Classification Framework</a></li>
                                <li><a href="#" className="hover:text-brandRed">Data Discovery and Classification Automation</a></li>
                                <li><a href="#" className="hover:text-brandRed">Enterprise Data Loss Prevention</a></li>
                                <li><a href="#" className="hover:text-brandRed">Digital Rights Management</a></li>
                                <li><a href="#" className="hover:text-brandRed">Secure Manage File Transfer</a></li>
                                <li><a href="#" className="hover:text-brandRed">Data Privacy Management Platform</a></li>
                                <li><a href="#" className="hover:text-brandRed">Data Privacy Governance Framework</a></li>
                            </ul>
                        </div>

                        {/* Application */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Application</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-brandRed">Secure SDLC</a></li>
                                <li><a href="#" className="hover:text-brandRed">Application Security Posture Management</a></li>
                                <li><a href="#" className="hover:text-brandRed">API Security</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-brandRed">Awareness</a></li>
                                <li><a href="#" className="hover:text-brandRed">Assurance</a></li>
                                <li><a href="#" className="hover:text-brandRed">Expert Services</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-brandOrange font-semibold uppercase mb-4 text-sm">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-brandRed">About Us</a></li>
                                <li><a href="#" className="hover:text-brandRed">Careers</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* BOTTOM LEGAL BAR */}
                <div className="mt-12 border-t border-gray-300 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">

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
