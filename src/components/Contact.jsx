import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide message after 5 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    return (
        <section id="contact" className="relative scroll-mt-20">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-heading">Let's Build Something <span className="text-primary">Amazing</span></h2>
                        <p className="text-text-muted mb-12 text-lg">
                            Ready to take your business to the next level? Contact our expert team today for a free consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Mail className="text-primary group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted mb-1">Email Us</div>
                                    <div className="text-xl font-bold">baridex.solutions@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                                    <Phone className="text-secondary group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted mb-1">Quick Contact</div>
                                    <div className="text-xl font-bold">+92 327 7343906</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <MessageSquare className="text-accent group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-text-muted mb-1">Live Chat</div>
                                    <div className="text-xl font-bold">WhatsApp Available 24/7</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-glass-border flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61578939004584" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:text-primary transition-all hover:-translate-y-1"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/baridexsolutions?igsh=MWZ0aWRxN3hkaGRqcg==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:text-primary transition-all hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/company/baridex-solutions/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:text-primary transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-text-muted">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-heading"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-text-muted">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-heading"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-muted">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-heading"
                                    placeholder="Project Inquiry"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-muted">Message Details</label>
                                <textarea
                                    rows="5"
                                    className="w-full bg-white border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-heading resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                                Send Message <Send size={20} />
                            </button>

                            {/* Success Message UI */}
                            <AnimatePresence>
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`p-4 rounded-xl text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                            }`}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
