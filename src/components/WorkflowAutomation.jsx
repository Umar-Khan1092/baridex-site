import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const WorkflowAutomation = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary/5">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-last lg:order-first"
                    >
                        <div className="relative glass p-3 rounded-[2.5rem] border-primary/20 overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?format=webp&fit=crop&q=80&w=1200"
                                alt="Intelligent Workflow Automation System in action"
                                className="w-full h-[450px] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700"
                                width="800"
                                height="450"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Decorative Tech Elements */}
                            <div className="absolute top-10 left-10 z-20">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="p-3 glass rounded-full"
                                >
                                    <TrendingUp className="text-primary" size={24} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-primary/20">
                            <span className="text-xs font-bold tracking-wider uppercase text-primary">Efficiency Redefined</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-heading">
                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Workflow Automation</span>
                        </h2>
                        <p className="text-text-muted text-lg mb-8">
                            Transform manual chaos into digital precision. At Baridex Solution, we build intelligent pipelines that connect your departments, legacy systems, and cloud infrastructure into a seamless, high-velocity engine.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Custom ERP Bridges", desc: "Unify your operations with purpose-built data bridges." },
                                { title: "RPA Deployment", desc: "Automate repetitive tasks with robotic precision." },
                                { title: "API Ecosystems", desc: "Build secure, scalable connections between any tool." },
                                { title: "Real-time Monitoring", desc: "Live dashboards for total visibility over your flows." }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-5 rounded-2xl border-white/5">
                                    <h3 className="font-bold mb-2 text-heading">{item.title}</h3>
                                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a href="https://wa.me/923277343906" target="_blank" rel="noopener noreferrer" className="btn-primary">Optimize My Workflow</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowAutomation;
