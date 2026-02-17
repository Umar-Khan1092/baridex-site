import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

// Lazy loading components for performance
const Services = React.lazy(() => import('./components/Services'));
const ServiceModal = React.lazy(() => import('./components/ServiceModal'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Team = React.lazy(() => import('./components/Team'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const About = React.lazy(() => import('./components/About'));
const DetailedScience = React.lazy(() => import('./components/DetailedScience'));
const WorkflowAutomation = React.lazy(() => import('./components/WorkflowAutomation'));
const Contact = React.lazy(() => import('./components/Contact'));

// Navbar Component
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Team', href: '/team' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Process', href: '/process' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-[padding,background-color,border-color] duration-300 ${isScrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/20 bg-white/5 flex items-center justify-center p-1 relative shadow-sm">
                        <img
                            src="/images/logo.webp"
                            alt="Baridex Logo"
                            className="w-full h-full object-contain"
                            width="36"
                            height="36"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                        />
                    </div>
                    <Link to="/" className="text-xl font-bold font-outfit tracking-tight text-heading">Baridex<span className="text-primary">Solution</span></Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-semibold transition-all duration-200 hover:text-accent ${location.pathname === link.href ? 'text-accent' : 'text-heading/90'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/923277343906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-5 text-sm"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu - CSS based for performance */}
            <div className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden md:hidden shadow-xl ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'} glass`}>
                <div className="flex flex-col px-6 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-lg font-semibold text-heading hover:text-accent"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/923277343906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

// Hero Section
const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
            <div className="bg-mesh opacity-40"></div>

            <div className="container grid md:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full mb-6 border border-primary/10">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-primary">Next-Gen Software Solutions</span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-[1.1] text-heading">
                        Pioneering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Frontier</span>
                    </h1>
                    <p className="text-base md:text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
                        Baridex Solution Ltd transforms complex data into actionable insights and crafts digital experiences that redefine excellence.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/services" className="btn-primary">
                            Our Services <ChevronRight size={18} />
                        </Link>
                        <a
                            href="https://wa.me/923277343906"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            Contact Us
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 md:gap-10">
                        <div>
                            <div className="text-xl md:text-2xl font-bold text-heading">50+</div>
                            <p className="text-xs text-text-muted">Projects</p>
                        </div>
                        <div className="w-px h-8 bg-border"></div>
                        <div>
                            <div className="text-xl md:text-2xl font-bold text-heading">20+</div>
                            <p className="text-xs text-text-muted">Experts</p>
                        </div>
                        <div className="w-px h-8 bg-border"></div>
                        <div>
                            <div className="text-xl md:text-2xl font-bold text-heading">99%</div>
                            <p className="text-xs text-text-muted">Satisfaction</p>
                        </div>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative z-10 glass-card p-3 rounded-3xl border-primary/10">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <div className="h-[450px] w-full bg-slate-900 relative group overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=40&w=500"
                                    alt="Futuristic AI Neural Network"
                                    className="w-full h-full object-cover opacity-80"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                                        <div className="w-32 h-32 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80"><path d="M3 5V19C3 20.1 5.24 21 8 21C10.76 21 13 20.1 13 19V5" /><path d="M3 5C3 6.1 5.24 7 8 7C10.76 7 13 6.1 13 5C13 3.9 10.76 3 8 3C5.24 3 3 3.9 3 5Z" /><path d="M13 12C13 13.1 15.24 14 18 14C20.76 14 23 13.1 23 12V5" /><path d="M13 19C13 20.1 15.24 21 18 21C20.76 21 23 20.1 23 19V12" /><path d="M23 5C23 6.1 20.76 7 18 7C15.24 7 13 6.1 13 5C13 3.9 15.24 3 18 3C20.76 3 23 3.9 23 5Z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements - expanded with raw SVG for performance */}
                        <div className="absolute -top-6 -right-6 glass p-3 rounded-xl shadow-lg border-primary/20">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                <div>
                                    <div className="text-[10px] text-text-muted">ROI</div>
                                    <div className="text-sm font-bold">+245%</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-6 glass p-3 rounded-xl shadow-lg border-secondary/20">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                <div>
                                    <div className="text-[10px] text-text-muted">Status</div>
                                    <div className="text-sm font-bold">Live</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="pt-20 pb-8 border-t border-border">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-white/5 flex items-center justify-center p-1.5 shadow-sm">
                                <img src="/images/logo.webp" alt="Baridex Logo" className="w-full h-full object-contain" width="40" height="40" loading="lazy" />
                            </div>
                            <span className="text-2xl font-bold font-outfit tracking-tight text-heading">Baridex<span className="text-primary">Solution</span></span>
                        </div>
                        <p className="text-text-muted max-w-sm mb-8 leading-relaxed">
                            Baridex Solution Ltd is a global leader in software innovation, providing cutting-edge solutions in AI, Data Science, and Web Engineering.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold mb-6 text-heading">Explore</h2>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-text-muted hover:text-primary text-sm transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-text-muted hover:text-primary text-sm transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-text-muted hover:text-primary text-sm transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-text-muted hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-base font-bold mb-6 text-heading">Connect</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-text-muted text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> +92 327 7343906</li>
                            <li className="flex items-center gap-2 text-text-muted text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg> baridex.solutions@gmail.com</li>
                            <li>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-xs">
                        &copy; {new Date().getFullYear()} Baridex Solution Ltd. All rights reserved.
                    </p>
                    <p className="text-text-muted text-xs">
                        Crafted with <span className="text-red-500">♥</span> by Baridex Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/923277343906"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >
            <div className="red-dot"></div>
            <svg viewBox="0 0 448 512" className="w-8 h-8 fill-white">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.9 69.4 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157.1zM223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.5 0 101.7-82.8 184.5-184.5 184.5zm103.5-141.6c-5.7-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.6-28.1-16.8-15-28.1-33.5-31.4-39.3-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.5-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-19.9 19.4-19.9 47.4 0 28 20.4 55 23.2 58.8 2.8 3.8 40.1 61.2 97.2 85.8 13.6 5.8 24.2 9.3 32.5 11.9 13.7 4.4 26.1 3.8 35.9 2.3 10.9-1.6 33.7-13.8 38.5-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.4-5.2-3.8-10.9-6.6z" />
            </svg>
        </a>
    );
};

// Simplified Counter for reliability
const Counter = ({ value, startValue = 0 }) => {
    const [displayValue, setDisplayValue] = useState(startValue);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let current = startValue;
            const end = parseInt(value.replace(/\D/g, ''));
            if (current === end) {
                setDisplayValue(end);
                return;
            }

            const duration = 2000;
            const steps = Math.max(Math.abs(end - startValue), 1);
            const incrementTime = Math.max(duration / steps, 16);
            const incrementAmount = Math.ceil(steps / (duration / incrementTime));

            let timer = setInterval(() => {
                current += incrementAmount;
                if (current >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(current);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, value, startValue]);

    return (
        <span ref={ref}>
            {displayValue}{value.includes('M+') ? 'M+' : value.includes('+') ? '+' : ''}
        </span>
    );
};

// Intersection Observer Hook for the Counter
const useInView = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (options.triggerOnce) observer.unobserve(ref);
            }
        }, options);
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, options.triggerOnce]);

    return { ref: setRef, inView };
};

// Loading fallback
const LoadingFallback = () => (
    <div className="min-h-[40vh] flex items-center justify-center">
        <div className="w-10 h-10 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <div className="bg-bg-main min-h-screen text-text-main selection:bg-primary/20">
                    <Navbar />

                    <main className="min-h-[60vh]">
                        <React.Suspense fallback={<LoadingFallback />}>
                            <Routes>
                                <Route path="/" element={
                                    <>
                                        <SEO path="/" />
                                        <Hero />
                                        <React.Suspense fallback={<LoadingFallback />}>
                                            <section className="py-20 bg-bg-section border-y border-border">
                                                <div className="container">
                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                                        {[
                                                            { label: "Founded", val: "2022", start: 2002 },
                                                            { label: "Awards Won", val: "15+" },
                                                            { label: "Lines of Code", val: "10M+" },
                                                            { label: "Countries Served", val: "12" }
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="flex flex-col items-center">
                                                                <div className="text-4xl md:text-5xl font-bold font-outfit text-heading mb-2">
                                                                    <Counter value={item.val} startValue={item.start} />
                                                                </div>
                                                                <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">{item.label}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </section>
                                            <About />
                                            <DetailedScience />
                                            <WorkflowAutomation />
                                        </React.Suspense>
                                    </>
                                } />
                                <Route path="/services" element={<><SEO title="Our Services" path="/services" /><Services onOpenModal={openModal} /></>} />
                                <Route path="/portfolio" element={<><SEO title="Portfolio" path="/portfolio" /><Portfolio /></>} />
                                <Route path="/team" element={<><SEO title="Our Team" path="/team" /><Team /></>} />
                                <Route path="/reviews" element={<><SEO title="Client Reviews" path="/reviews" /><Reviews /></>} />
                                <Route path="/pricing" element={<><SEO title="Pricing Plans" path="/pricing" /><Pricing /></>} />
                                <Route path="/process" element={<><SEO title="Our Process" path="/process" /><About /></>} />
                                <Route path="/contact" element={<><SEO title="Contact Us" path="/contact" /><Contact /></>} />
                            </Routes>
                        </React.Suspense>
                    </main>

                    <React.Suspense fallback={null}>
                        <ServiceModal
                            key={selectedService}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            selectedService={selectedService}
                        />
                    </React.Suspense>

                    <Footer />
                    <WhatsAppButton />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
