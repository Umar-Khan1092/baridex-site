import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MonitorPlay,
    Smartphone,
    Brain,
    Hand,
    Utensils,
    Stethoscope,
    MessageCircle,
    Cpu,
    Search,
    Palette,
    GraduationCap,
    Layout,
    X,
    CheckCircle2,
    Code
} from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0C2146]/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-[#0C2146]/50 hover:text-[#0C2146] transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-[#00A86B] flex items-center justify-center shadow-lg shadow-[#00A86B]/20">
                                    {project.icon}
                                </div>
                                <div>
                                    <div className="px-3 py-1 rounded-full bg-[#00A86B]/10 text-[#00A86B] text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
                                        {project.category}
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#0C2146] font-outfit">{project.title}</h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Problem & Solution */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-[#0C2146] font-bold mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-500 text-sm">01</span>
                                            The Problem
                                        </h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#0C2146] font-bold mb-3 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-lg bg-[#00A86B]/10 flex items-center justify-center text-[#00A86B] text-sm">02</span>
                                            Our Solution
                                        </h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Stack & Key Features */}
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-3xl">
                                        <h4 className="text-[#0C2146] font-bold mb-4 flex items-center gap-2 text-sm">
                                            <Code size={18} className="text-[#00A86B]" />
                                            Technology Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-[#0C2146]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[#0C2146] font-bold mb-4 text-sm flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-[#00A86B]" />
                                            Key Implementations
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.points.map((point, i) => (
                                                <li key={i} className="flex items-center gap-2 text-[#334155] text-xs font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-10 py-3 bg-[#0C2146] text-white rounded-xl font-bold hover:bg-[#00A86B] transition-all shadow-xl shadow-[#0C2146]/10"
                                >
                                    Close Case Study
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            title: "IPTV Web Solutions",
            icon: <MonitorPlay className="text-white" size={28} />,
            points: ["High-Speed Streaming", "Custom Player UI", "VOD Management", "Multi-Portal Support"],
            category: "Web Development",
            problem: "Existing IPTV platforms suffered from massive buffering, poor user navigation, and lack of customization for multiple portal providers.",
            solution: "We built a specialized Node.js streaming engine with an optimized React frontend, reducing latency by 40% and allowing instant portal switching.",
            techStack: ["React.js", "Node.js", "Redis", "WebSockets", "DPlayer"]
        },
        {
            title: "BX Player Suite",
            icon: <Layout className="text-white" size={28} />,
            points: ["Mobile & Web Interface", "Adaptive Bitrate", "Offline Playback", "Fluid User UX"],
            category: "App & Web UI",
            problem: "Users struggled with fragmented experiences across devices, needing a unified player that looks the same on mobile and web.",
            solution: "Implemented a shared design system and cross-platform architecture that ensures a seamless hand-off between mobile and web playbacks.",
            techStack: ["React Native", "Tailwind CSS", "Framer Motion", "Video.js"]
        },
        {
            title: "AI Mental Health Detection",
            icon: <Brain className="text-white" size={28} />,
            points: ["Emotion Detection", "Sentiment Analysis", "Predictive Insights", "Privacy Focused"],
            category: "AI & ML",
            problem: "Early signs of mental health deterioration go unnoticed in digital communications, leading to delayed medical intervention.",
            solution: "Developed an AI model that analyzes text patterns and sentiment shifts in real-time to alert designated healthcare providers early.",
            techStack: ["Python", "TensorFlow", "NLP", "FastAPI", "MongoDB"]
        },
        {
            title: "Greek Sign Language Recognition",
            icon: <Hand className="text-white" size={28} />,
            points: ["Gesture Tracking", "Real-time Translation", "Alphabet Learning", "Accessibility Support"],
            category: "AI Automation",
            problem: "The deaf community in Greece faces significant communication barriers in public services due to a lack of sign language interpreters.",
            solution: "Created a computer-vision powered application that translates Sign language gestures into spoken and written Greek instantly.",
            techStack: ["OpenCV", "MediaPipe", "PyTorch", "Keras", "Flask"]
        },
        {
            title: "Restaurant Automation",
            icon: <Utensils className="text-white" size={28} />,
            points: ["Order Management", "Digital QR Menu", "Inventory Control", "Billing Integration"],
            category: "Enterprise Software",
            problem: "Manual ordering systems lead to high error rates and slow service times during peak hours at busy restaurants.",
            solution: "A complete QR-based ecosystem where customers order directly from tables, synced with kitchen displays and inventory trackers.",
            techStack: ["Next.js", "PostgreSQL", "Prisma", "Realtime DB", "Stripe"]
        },
        {
            title: "Dental Clinic System",
            icon: <Stethoscope className="text-white" size={28} />,
            points: ["Appointment Scheduling", "Patient Records", "Digital Prescriptions", "Smart Reminders"],
            category: "Healthcare Automation",
            problem: "Dental clinics struggled with patient follow-ups and fragmented record management, often losing historical treatment data.",
            solution: "Centralized EHR (Electronic Health Record) system with automated SMS/Email reminders and digital chart management.",
            techStack: ["C#", ".NET Core", "SQL Server", "Azure", "Twilio API"]
        },
        {
            title: "Support Chatbot AI",
            icon: <MessageCircle className="text-white" size={28} />,
            points: ["NLP Processing", "24/7 Availability", "Lead Qualification", "CRM Integration"],
            category: "AI Development",
            problem: "Businesses losing 60% of potential leads due to slow response times outside of standard operating hours.",
            solution: "An intelligent chatbot trained on company docs that resolves 80% of common queries and qualifies leads forhuman agents.",
            techStack: ["OpenAI API", "LangChain", "Node.js", "Intercom SDK"]
        },
        {
            title: "IOT Tutor Mobile App",
            icon: <Cpu className="text-white" size={28} />,
            points: ["Hardware Interface", "Learning Modules", "Real-time Feedback", "Progress Tracking"],
            category: "Mobile App",
            problem: "Beginners in IOT find it difficult to bridge the gap between abstract coding and physical hardware interactions.",
            solution: "An educational app that connects via Bluetooth to ESP32/Arduino boards, providing visual feedback on circuit status.",
            techStack: ["Flutter", "Dart", "Firebase", "ESP32", "MQTT"]
        },
        {
            title: "IPTV SEO Dominance",
            icon: <Search className="text-white" size={28} />,
            points: ["10+ Sites Strategy", "Keyword Authority", "Backlink Network", "Organic Growth"],
            category: "Digital Marketing",
            problem: "IPTV services operate in a highly competitive niche where organic visibility is hard to achieve without penalty.",
            solution: "Executed a multi-site SEO strategy focusing on long-tail technical keywords and a secure, niche-specific backlink network.",
            techStack: ["SEMRush", "Ahrefs", "Google Analytics", "Wordpress SEO"]
        },
        {
            title: "Full App Branding",
            icon: <Palette className="text-white" size={28} />,
            points: ["Visual Identity", "Vector Logo Design", "Design Guidelines", "Brand Consistency"],
            category: "Branding",
            problem: "New tech startups often lack a professional visual identity, making them look untrustworthy in the global market.",
            solution: "Crafted iconic, minimalist branding packages including logos, typography, and color systems optimized for digital screens.",
            techStack: ["Adobe Illustrator", "Figma", "After Effects", "BrandBook"]
        },
        {
            title: "SaaS LMS Product",
            icon: <GraduationCap className="text-white" size={28} />,
            points: ["Course Management", "Student Analytics", "Quiz Systems", "Certification Flow"],
            category: "SaaS Solution",
            problem: "Traditional LMS platforms are too heavy and expensive for independent creators and small training centers.",
            solution: "A lightweight, modular SaaS platform that allows rapid course deployment with built-in automated certificate generation.",
            techStack: ["React.js", "Laravel", "MySQL", "AWS S3", "PDFLib"]
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="portfolio" className="relative scroll-mt-20 py-24 bg-white/5">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Our Proven <span className="text-primary">Portfolio</span></h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Explore our diverse range of successful projects where we've delivered innovative solutions and exceptional value to our clients worldwide.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-[2rem] border border-[#D1F5D9] group flex flex-col items-start shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#00A86B] flex items-center justify-center mb-6 shadow-lg shadow-[#00A86B]/20 transition-transform group-hover:rotate-6">
                                {project.icon}
                            </div>

                            <div className="mb-2 px-2 py-0.5 rounded-full bg-[#00A86B]/10 text-[#00A86B] text-[10px] font-bold uppercase tracking-wider w-fit">
                                {project.category}
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-[#0C2146] font-outfit leading-tight">{project.title}</h3>

                            <ul className="mb-6 space-y-2.5">
                                {project.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-[#334155] text-xs font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => openModal(project)}
                                className="mt-auto flex items-center gap-2 text-[#00A86B] text-xs font-bold hover:gap-3 transition-all cursor-pointer"
                            >
                                View Case Study <Layout size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <CaseStudyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />
        </section>
    );
};

export default Portfolio;
