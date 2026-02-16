import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Muhammad Ahmed",
            initials: "MA",
            color: "bg-green-200",
            project: "IPTV Solutions",
            rating: 5,
            date: "2026-02-16",
            comment: "The IPTV solution provided by Baridex is top-notch. Buffering is a thing of the past, and our users love the custom player UI."
        },
        {
            name: "Sarah Jenkins",
            initials: "SJ",
            color: "bg-purple-200",
            project: "AI Specialist",
            rating: 5,
            date: "2026-02-12",
            comment: "Exceptional AI implementation. The real-time translation accuracy for sign language exceeded our expectations. Truly life-changing tech."
        },
        {
            name: "James Mitchell",
            initials: "JM",
            color: "bg-blue-200",
            project: "Mental Health AI",
            rating: 5,
            date: "2026-02-08",
            comment: "Working with Abbas and his team was a breeze. Their AI models for sentiment analysis are highly sophisticated and privacy-focused."
        },
        {
            name: "Ayesha Khan",
            initials: "AK",
            color: "bg-orange-200",
            project: "POS Automation",
            rating: 4,
            date: "2026-01-28",
            comment: "Our restaurant efficiency improved significantly with the QR ordering system. Highly professional team and great support."
        },
        {
            name: "Lachlan Moore",
            initials: "LM",
            color: "bg-cyan-200",
            project: "BX Player",
            rating: 4,
            date: "2026-01-15",
            comment: "The fluid UX of the BX Player is incredible. It works seamlessly across all our client devices. Great attention to detail."
        },
        {
            name: "Emily Davis",
            initials: "ED",
            color: "bg-rose-200",
            project: "LMS Platform",
            rating: 5,
            date: "2025-12-28",
            comment: "Baridex delivered a robust LMS that scaled perfectly with our student growth. The student analytics feature is a game-changer."
        },
        {
            name: "Oliver Brown",
            initials: "OB",
            color: "bg-indigo-200",
            project: "AI Chatbot",
            rating: 4,
            date: "2025-12-15",
            comment: "The AI chatbot handles 80% of our student queries automatically. It has freed up so much time for our human support agents."
        },
        {
            name: "Chloe Wilson",
            initials: "CW",
            color: "bg-teal-200",
            project: "Healthcare App",
            rating: 5,
            date: "2025-11-22",
            comment: "Managing patient records and appointments has never been easier. The automated reminders have reduced no-shows by 30%."
        }
    ];

    return (
        <section id="reviews" className="py-24 relative overflow-hidden bg-white/5">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0C2146]">Client <span className="text-[#00A86B]">Reviews</span></h2>
                        <div className="w-20 h-1.5 bg-[#00A86B] mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Hear from our satisfied clients across the globe who have transformed their businesses with our solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-[#0C2146] font-bold text-sm ${review.color}`}>
                                        {review.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0C2146] text-sm">{review.name}</h4>
                                        <span className="px-2 py-0.5 rounded-full bg-[#E0F7EB] text-[#00A86B] text-[10px] font-bold">
                                            {review.project}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={14}
                                            className={star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex gap-2 mb-6">
                                <Quote size={18} className="text-[#E0F7EB] shrink-0 transform rotate-180" />
                                <p className="text-[#334155] text-sm italic leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>

                            {/* Card Footer */}
                            <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center text-slate-400 text-[10px]">
                                <div className="flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" size={12} className="w-3 h-3 fill-none stroke-current stroke-2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {review.date}
                                </div>
                                <span className="font-medium">Verified Client</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
