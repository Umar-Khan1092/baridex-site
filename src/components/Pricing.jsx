import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, ShieldCheck, Monitor } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "1 Month Pass",
            desc: "Perfect for testing our premium service",
            price: "£10",
            duration: "/ 30 days",
            features: [
                "10,000+ Live Channels",
                "40,000+ Movies & Series (VOD)",
                "4K / FHD / HD Quality",
                "Anti-Freeze Technology",
                "Works on All Devices"
            ],
            highlight: false
        },
        {
            name: "3 Months Pass",
            desc: "Quarterly plan with great savings",
            price: "£25",
            duration: "/ 90 days",
            features: [
                "10,000+ Live Channels",
                "40,000+ Movies & Series (VOD)",
                "4K / FHD / HD Quality",
                "Priority Support",
                "Save £5 vs Monthly"
            ],
            highlight: false
        },
        {
            name: "6 Months Pass",
            desc: "Most popular choice for stability",
            price: "£40",
            duration: "/ 180 days",
            features: [
                "10,000+ Live Channels",
                "40,000+ Movies & Series (VOD)",
                "4K / FHD / HD Quality",
                "Premium Stability",
                "Save £20 vs Monthly"
            ],
            highlight: true,
            badge: "BEST SELLER"
        },
        {
            name: "12 Months Pass",
            desc: "Best value for long-term entertainment",
            price: "£60",
            duration: "/ 365 days",
            features: [
                "10,000+ Live Channels",
                "40,000+ Movies & Series (VOD)",
                "4K / FHD / HD Quality",
                "VIP Support Status",
                "Best Value (Save £60)"
            ],
            highlight: false
        }
    ];

    const handleWhatsApp = (planName) => {
        const phone = '923277343906';
        const msg = `Hi, I am interested in the ${planName} Premium Subscription. Please provide more details.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-[#F8FFF9]">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0C2146]">Premium <span className="text-[#00A86B]">Subscription</span></h2>
                        <div className="w-20 h-1.5 bg-[#00A86B] mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-4">
                            Simple pricing. Instant access. No hidden fees.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-[#0C2146]/60">
                            <span className="flex items-center gap-1"><Monitor size={14} /> Smart TV</span>
                            <span className="flex items-center gap-1"><Zap size={14} /> Firestick</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={14} /> Android Box</span>
                            <span className="flex items-center gap-1"><Star size={14} /> Smartphone & PC</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-[transform,box-shadow,border-color,background-color] duration-500 border ${plan.highlight ? 'border-[#00A86B] scale-105 z-10' : 'border-slate-100'} flex flex-col group`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00A86B] text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#0C2146] mb-2 font-outfit">{plan.name}</h3>
                                <p className="text-slate-400 text-xs min-h-[32px]">{plan.desc}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-black text-[#0C2146]">{plan.price}</span>
                                <span className="text-slate-400 text-sm font-medium">{plan.duration}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-[#E0F7EB] flex items-center justify-center">
                                            <Check className="text-[#00A86B]" size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsApp(plan.name)}
                                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${plan.highlight
                                    ? 'bg-[#00A86B] text-white shadow-lg shadow-[#00A86B]/30 hover:bg-[#008F5A]'
                                    : 'bg-[#F8FFF9] text-[#00A86B] border-2 border-[#00A86B] hover:bg-[#00A86B] hover:text-white'
                                    }`}
                            >
                                Get Started Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
