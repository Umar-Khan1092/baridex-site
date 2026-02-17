import React from 'react';
import { motion } from 'framer-motion';
import { User, BadgeCheck } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        { name: "Abbas Virk", role: "CEO, AI Engineer", verified: true },
        { name: "Faizan Abbas", role: "Founder, Software Engineer", verified: true },
        { name: "Umar Attique", role: "Founder, Data Scientist", verified: true },
        { name: "Irfan Saleem", role: "Manager, SEO expert", verified: true },
        { name: "Javeria Virk", role: "Manager, Mobile app developer", verified: true },
        { name: "Irfan Ghaffar", role: "ML Engineer", verified: false },
        { name: "Abdulrehman", role: "Data Analyst", verified: false },
        { name: "Babar Ali", role: "Data Scientist", verified: false },
        { name: "Shan", role: "Client Relationship Manager", verified: false },
        { name: "Sardar Alam", role: "AI Engineer", verified: false },
        { name: "Anaab", role: "Content Writer", verified: false },
        { name: "Abdullah", role: "Logo Designer", verified: false },
        { name: "Zain Shafique", role: "UI/UX Designer", verified: false },
        { name: "Asfand Yar Wali", role: "Software Engineer", verified: false },
        { name: "Sofia", role: "Mobile app developer", verified: false },
        { name: "Sehar", role: "Content Writer", verified: false },
        { name: "Rubeena Khan", role: "AI Engineer", verified: false },
        { name: "Noor Fatima", role: "Full Stack Developer", verified: false }
    ];

    return (
        <section id="team" className="py-24 relative overflow-hidden bg-[#F8FFF9]">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0C2146]">Our Expert <span className="text-[#00A86B]">Team</span></h2>
                        <div className="w-20 h-1.5 bg-[#00A86B] mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Meet the brilliant minds behind Baridex Solution Ltd. A diverse team of engineers, designers, and strategists dedicated to your success.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#00A86B]/10 group-hover:text-[#00A86B] transition-colors duration-300">
                                    <User size={40} />
                                </div>
                                {member.verified && (
                                    <div className="absolute -right-1 bottom-1 bg-white rounded-full p-0.5 shadow-sm">
                                        <BadgeCheck className="text-blue-500" size={20} />
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-[#0C2146] mb-1 font-outfit">{member.name}</h3>
                            <p className="text-[#00A86B] font-semibold text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
