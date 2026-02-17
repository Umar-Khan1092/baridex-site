import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Smartphone, Palette, PenTool, Share2, Layers, Video, Diamond, ShoppingBag, Megaphone, Bot, Database } from 'lucide-react';

const Services = ({ onOpenModal }) => {
    const services = [
        {
            title: "AI Automation & Development",
            icon: <Bot className="text-white" size={28} />,
            points: ["Smart AI Agents", "Process Automation", "Custom AI Models", "Workflow Optimization"],
            price: "$450",
            type: "AI Automation"
        },
        {
            title: "Web Development",
            icon: <Code2 className="text-white" size={28} />,
            points: ["Custom Architecture", "Responsive Design", "Modern Frameworks", "Secure Backend"],
            price: "$225",
            type: "Web Development"
        },
        {
            title: "App Development",
            icon: <Smartphone className="text-white" size={28} />,
            points: ["Cross-Platform Apps", "Native Performance", "User Authentication", "Cloud Integration"],
            price: "$675",
            type: "App Development"
        },
        {
            title: "Data Science Solutions",
            icon: <Database className="text-white" size={28} />,
            points: ["Predictive Analytics", "Machine Learning", "Data Visualization", "Strategic Insights"],
            price: "$400",
            type: "Data Science"
        },
        {
            title: "SEO Optimization",
            icon: <Search className="text-white" size={28} />,
            points: ["Keyword Research", "On-Page SEO", "Rank Tracking", "Technical Audits"],
            price: "$135",
            type: "SEO"
        },
        {
            title: "Social Media Marketing",
            icon: <Share2 className="text-white" size={28} />,
            points: ["Content Strategy", "Brand Engagement", "Paid Campaigns", "Analytics Reporting"],
            price: "$112",
            type: "Social Media Marketing"
        },
        {
            title: "UI/UX Design",
            icon: <Layers className="text-white" size={28} />,
            points: ["User Research", "Visual Identity", "Interactive Prototypes", "Experience Design"],
            price: "$180",
            type: "UI/UX Design"
        },
        {
            title: "Video Editing",
            icon: <Video className="text-white" size={28} />,
            points: ["Cinematic Graphics", "Sound Design", "Color Grading", "Storytelling Edits"],
            price: "$90",
            type: "Video Editing"
        },
        {
            title: "Branding",
            icon: <Diamond className="text-white" size={28} />,
            points: ["Identity Design", "Market Positioning", "Guidelines Creation", "Visual Language"],
            price: "$270",
            type: "Branding"
        },
        {
            title: "E-commerce Development",
            icon: <ShoppingBag className="text-white" size={28} />,
            points: ["Online Stores", "Payment Gateways", "Inventory Systems", "Secure Checkout"],
            price: "$360",
            type: "E-commerce Development"
        },
        {
            title: "Mobile App Development",
            icon: <Smartphone className="text-white" size={28} />,
            points: ["iOS & Android", "App Store Prep", "Real-time Sync", "Push Notification"],
            price: "$585",
            type: "Mobile App Development"
        },
        {
            title: "Digital Marketing",
            icon: <Megaphone className="text-white" size={28} />,
            points: ["Lead Generation", "Email Marketing", "ROI Analysis", "Market Research"],
            price: "$202",
            type: "Digital Marketing"
        },
        {
            title: "Content Writing",
            icon: <PenTool className="text-white" size={28} />,
            points: ["SEO Articles", "Creative Copy", "Blog Management", "Technical Writing"],
            price: "$36",
            type: "Content Writing"
        },
        {
            title: "Logo Design",
            icon: <Palette className="text-white" size={28} />,
            points: ["Unique Concepts", "Vector Graphics", "Minimalist Design", "Brand Symbols"],
            price: "$22",
            type: "Logo Design"
        }
    ];

    const handleWhatsApp = (serviceTitle) => {
        const phone = '923277343906';
        const msg = `Hi, I want to know more about your ${serviceTitle} services`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section id="services" className="relative scroll-mt-20 py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">Our Premium <span className="text-primary">Services</span></h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            We provide end-to-end digital solutions tailored to your business needs, ensuring you stay ahead in the competitive digital landscape.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#F8FFF9] p-8 rounded-[2rem] border border-[#D1F5D9] group flex flex-col items-start shadow-sm hover:shadow-md transition-[box-shadow,background-color,border-color,transform] duration-300"
                        >
                            <div className="w-14 h-14 rounded-lg bg-[#00A86B] flex items-center justify-center mb-6 shadow-lg shadow-[#00A86B]/20">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-[#0C2146] font-outfit">{service.title}</h3>
                            <ul className="mb-8 space-y-2">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[#334155] text-xs font-semibold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto w-full">
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-3xl font-bold text-[#00A86B]">{service.price}</span>
                                    <span className="text-xs text-text-muted">starting from</span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => onOpenModal(service.title)}
                                        className="w-full py-3 bg-[#00A86B] text-white rounded-lg font-bold hover:bg-[#008F5A] transition-colors flex items-center justify-center gap-2"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        onClick={() => handleWhatsApp(service.title)}
                                        className="w-full py-3 border-2 border-[#00A86B] text-[#00A86B] rounded-lg font-bold hover:bg-[#00A86B]/5 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.9 69.4 27.3 107.1 27.3 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157.1zM223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 365.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.5 0 101.7-82.8 184.5-184.5 184.5zm103.5-141.6c-5.7-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.6-28.1-16.8-15-28.1-33.5-31.4-39.3-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.5-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-19.9 19.4-19.9 47.4 0 28 20.4 55 23.2 58.8 2.8 3.8 40.1 61.2 97.2 85.8 13.6 5.8 24.2 9.3 32.5 11.9 13.7 4.4 26.1 3.8 35.9 2.3 10.9-1.6 33.7-13.8 38.5-27 4.7-13.3 4.7-24.7 3.3-27-1.4-2.4-5.2-3.8-10.9-6.6z" />
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
