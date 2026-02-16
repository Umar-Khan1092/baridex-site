import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    Code2,
    TrendingUp,
    Mail,
    Phone,
    MessageSquare,
    Send,
    Menu,
    X,
    ChevronRight,
    Linkedin,
    Instagram,
    Facebook,
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

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
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30 bg-white/5 flex items-center justify-center p-1 relative shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                        <img src="/images/logo.webp" alt="Baridex Logo" className="w-full h-full object-contain" width="40" height="40" />
                    </div>
                    <Link to="/" className="text-xl font-bold font-outfit tracking-tight text-heading">Baridex<span className="text-primary">Solution</span></Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${location.pathname === link.href ? 'text-accent border-b-2 border-accent' : 'text-heading'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/923277343906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-6 text-sm"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-medium hover:text-accent"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Hero Section
const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            <div className="bg-mesh"></div>

            <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold tracking-wider uppercase text-primary">Next-Gen Software Solutions</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-heading">
                        Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Frontier</span>
                    </h1>
                    <p className="text-lg text-text-muted mb-8 max-w-lg">
                        Baridex Solution Ltd transforms complex data into actionable insights and crafts digital experiences that redefine excellence in the modern era.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/services" className="btn-primary">
                            Our Services <ChevronRight size={20} />
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

                    <div className="mt-12 flex items-center gap-8">
                        <div>
                            <div className="text-2xl font-bold text-heading">50+</div>
                            <p className="text-sm text-text-muted text-nowrap">Projects Completed</p>
                        </div>
                        <div className="w-px h-10 bg-glass-border"></div>
                        <div>
                            <div className="text-2xl font-bold text-heading">20+</div>
                            <p className="text-sm text-text-muted text-nowrap">Expert Engineers</p>
                        </div>
                        <div className="w-px h-10 bg-glass-border"></div>
                        <div>
                            <div className="text-2xl font-bold text-heading">99%</div>
                            <p className="text-sm text-text-muted text-nowrap">Client Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 glass-card p-4 rounded-3xl border-primary/20 border">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <div className="h-96 w-full bg-gradient-to-br from-indigo-950 to-slate-950 relative group overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=60&w=800"
                                    alt="Futuristic AI Neural Network"
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                />

                                {/* Scanner Effect */}
                                <motion.div
                                    animate={{ top: ['-10%', '110%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent z-20 shadow-[0_0_15px_var(--primary-glow)]"
                                ></motion.div>

                                {/* Data Pulse Effect */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)] animate-pulse"></div>

                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-64 h-64 border-2 border-primary/30 rounded-full border-dashed flex items-center justify-center"
                                    >
                                        <div className="w-48 h-48 border-2 border-secondary/20 rounded-full flex items-center justify-center">
                                            <div className="w-32 h-32 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                                                <Database size={48} className="text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl border-primary/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <TrendingUp size={24} className="text-green-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">Marketing ROI</div>
                                    <div className="text-lg font-bold">+245%</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl shadow-xl border-secondary/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Code2 size={24} className="text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">Active Sprints</div>
                                    <div className="text-lg font-bold">12 Sprints</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};





// Footer Component
const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-glass-border">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 bg-white/5 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
                                <img src="/images/logo.webp" alt="Baridex Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-bold font-outfit tracking-tight text-heading">Baridex<span className="text-primary">Solution</span></span>
                        </div>
                        <p className="text-text-muted max-w-sm mb-8">
                            Baridex Solution Ltd is a global leader in software innovation, providing cutting-edge solutions in AI, Data Science, and Web Engineering.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold mb-6">Explore</h2>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-text-muted hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-text-muted hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold mb-6">Connect</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-text-muted"><Phone size={16} aria-hidden="true" /> +92 327 7343906</li>
                            <li className="flex items-center gap-2 text-text-muted"><Mail size={16} aria-hidden="true" /> baridex.solutions@gmail.com</li>
                            <li className="text-text-muted uppercase text-xs tracking-widest font-bold text-primary mt-4">Follow Us</li>
                            <li>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://www.facebook.com/profile.php?id=61578939004584" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white hover:text-primary transition-colors" aria-label="Visit our Facebook page"><Facebook size={20} /></a>
                                    <a href="https://www.instagram.com/baridexsolutions?igsh=MWZ0aWRxN3hkaGRqcg==" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white hover:text-primary transition-colors" aria-label="Visit our Instagram profile"><Instagram size={20} /></a>
                                    <a href="https://www.linkedin.com/company/baridex-solutions/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white hover:text-primary transition-colors" aria-label="Visit our LinkedIn profile"><Linkedin size={20} /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; 2024 Baridex Solution Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-sm text-text-muted">
                            Crafted with <span className="text-red-500">♥</span> by Baridex Tech Team
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
    const phoneNumber = '+923277343906';
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank');
    };

    return (
        <motion.div
            className="whatsapp-float"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="red-dot"></div>
            <svg viewBox="0 0 448 512" className="w-9 h-9 fill-white">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.9 69.4 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157.1zM223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.5 0 101.7-82.8 184.5-184.5 184.5zm103.5-141.6c-5.7-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.6-28.1-16.8-15-28.1-33.5-31.4-39.3-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.5-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-19.9 19.4-19.9 47.4 0 28 20.4 55 23.2 58.8 2.8 3.8 40.1 61.2 97.2 85.8 13.6 5.8 24.2 9.3 32.5 11.9 13.7 4.4 26.1 3.8 35.9 2.3 10.9-1.6 33.7-13.8 38.5-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.4-5.2-3.8-10.9-6.6z" />
            </svg>
        </motion.div>
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

            const duration = 2000; // 2 seconds
            const steps = Math.max(Math.abs(end - startValue), 1);
            // Dynamic timing for smoothness
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
                // If triggerOnce is true, we stop observing after the first view
                if (options.triggerOnce) observer.unobserve(ref);
            } else {
                // Only set to false if we want repeat animations
                if (!options.triggerOnce) setInView(false);
            }
        }, options);
        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, options.triggerOnce]); // Only depend on the flag needed for logic

    return { ref: setRef, inView };
};

// Loading fallback
const LoadingFallback = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
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
        <Router>
            <ScrollToTop />
            <div className="bg-bg-main min-h-screen text-text-main selection:bg-primary selection:text-white">
                <Navbar />

                <main className="min-h-[70vh]">
                    <React.Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <section className="py-24 bg-bg-section border-y border-border-light">
                                        <div className="container">
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                                                {[
                                                    { label: "Founded", val: "2022", start: 2002 },
                                                    { label: "Awards Won", val: "15+" },
                                                    { label: "Lines of Code", val: "10M+" },
                                                    { label: "Countries Served", val: "12" }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex flex-col items-center">
                                                        <div className="text-5xl md:text-6xl font-bold font-outfit text-heading mb-3">
                                                            <Counter value={item.val} startValue={item.start} />
                                                        </div>
                                                        <div className="text-sm text-text-muted uppercase tracking-[0.2em] font-semibold">{item.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                    <About />
                                    <DetailedScience />
                                    <WorkflowAutomation />
                                </>
                            } />
                            <Route path="/services" element={<Services onOpenModal={openModal} />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/reviews" element={<Reviews />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/process" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
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
    );
}

export default App;
