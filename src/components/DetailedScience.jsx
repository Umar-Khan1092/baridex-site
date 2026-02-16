import React from 'react';
import { motion } from 'framer-motion';

const DetailedScience = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-heading">Advanced <span className="text-secondary">Data Analytics</span></h2>
                        <p className="text-text-muted text-lg mb-8">
                            Our data science team leverages state-of-the-art machine learning models to solve complex business challenges. From predictive analytics to natural language processing, we turn your raw data into a strategic asset.
                        </p>
                        <ul className="space-y-4">
                            {['Predictive Modeling', 'Neural Network Architectures', 'Big Data Pipeline Engineering', 'Automated Business Intelligence'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass p-4 rounded-[2rem] border-secondary/20 h-[400px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=800"
                            alt="Data visualization dashboard"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DetailedScience;
