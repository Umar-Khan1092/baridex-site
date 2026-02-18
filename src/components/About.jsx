import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <section id="process" className="relative py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass p-2 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?format=avif&fit=crop&q=30&w=400"
                                alt="Baridex team members collaborating on a project together"
                                className="rounded-2xl w-full h-[500px] object-cover"
                                width="500"
                                height="500"
                                loading="lazy"
                                decoding="async"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-10 right-10 glass p-6 rounded-2xl shadow-2xl border border-primary/20 z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                    <TrendingUp className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">95%</div>
                                    <div className="text-xs text-text-muted">Efficiency Gain</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-secondary/20">
                            <span className="text-xs font-bold tracking-wider uppercase text-secondary">Our Methodology</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Driven by Innovation, <span className="text-primary">Powered by Data</span>
                        </h2>
                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            At Baridex Solution, we don't just write code; we engineer future-proof ecosystems. Our approach combines rigorous data analysis with creative problem-solving to deliver results that matter.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Strategic Planning", desc: "Every project starts with a deep dive into your business goals and current data architecture." },
                                { title: "Agile Development", desc: "We deploy in rapid sprints, ensuring transparent progress and flexibility to market changes." },
                                { title: "Continuous Optimization", desc: "Launch is just the beginning. We use real-time analytics to refine and scale your solution." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-primary">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-text-muted">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
