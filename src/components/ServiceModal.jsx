import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown } from 'lucide-react';

const ServiceModal = ({ isOpen, onClose, selectedService }) => {
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: selectedService || '',
        budget: '',
        description: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: 'success', message: 'Inquiry submitted successfully! We will contact you soon.' });
        setTimeout(() => {
            setStatus({ type: '', message: '' });
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0C2146]/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0C2F20] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-white mb-2 font-outfit">
                                Get Started with <span className="text-[#00A86B]">Baridex Solution</span>
                            </h2>
                            <p className="text-white/70 text-sm mb-8">
                                Fill out the form below to kickstart your project. We'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white rounded-lg px-4 py-3 text-[#0C2146] focus:outline-none text-sm"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white rounded-lg px-4 py-3 text-[#0C2146] focus:outline-none text-sm"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-white rounded-lg px-4 py-3 text-[#0C2146] focus:outline-none text-sm"
                                            placeholder="+92 3XX XXXXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Service Type <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <select
                                                required
                                                className="w-full h-11 bg-white rounded-lg px-4 py-2 text-[#0C2146] focus:outline-none appearance-none text-sm"
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            >
                                                <option value="">Select Service</option>
                                                <option value="AI Automation">AI Automation & Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="App Development">App Development</option>
                                                <option value="Data Science">Data Science Solutions</option>
                                                <option value="SEO">SEO Optimization</option>
                                                <option value="Social Media Marketing">Social Media Marketing</option>
                                                <option value="UI/UX Design">UI/UX Design</option>
                                                <option value="Video Editing">Video Editing</option>
                                                <option value="Branding">Branding</option>
                                                <option value="E-commerce Development">E-commerce Development</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Content Writing">Content Writing</option>
                                                <option value="Logo Design">Logo Design</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0C2146]/50 pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Budget Range <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select
                                            required
                                            className="w-full h-11 bg-white rounded-lg px-4 py-2 text-[#0C2146] focus:outline-none appearance-none text-sm"
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        >
                                            <option value="">Select Your Budget</option>
                                            <option value="100-500">$100 - $500</option>
                                            <option value="500-1000">$500 - $1,000</option>
                                            <option value="1000-5000">$1,000 - $5,000</option>
                                            <option value="5000+">$5,000+</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0C2146]/50 pointer-events-none" size={18} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-white/90 mb-2 uppercase tracking-wider">Project Description <span className="text-red-500">*</span></label>
                                    <textarea
                                        required
                                        rows="3"
                                        className="w-full bg-white rounded-lg px-4 py-3 text-[#0C2146] focus:outline-none resize-none text-sm"
                                        placeholder="Tell us more about your project requirements..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 bg-[#00A86B]/20 border border-[#00A86B]/30 rounded-lg flex items-center gap-3 text-white text-sm"
                                    >
                                        <CheckCircle className="text-[#00A86B]" size={18} />
                                        {status.message}
                                    </motion.div>
                                )}

                                <div className="flex justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-6 py-2.5 bg-white text-[#0C2146] rounded-lg font-bold hover:bg-white/90 transition-colors text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2.5 bg-[#00A86B] text-white rounded-lg font-bold hover:bg-[#008F5A] transition-colors shadow-lg shadow-[#00A86B]/20 text-sm"
                                    >
                                        Submit Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
