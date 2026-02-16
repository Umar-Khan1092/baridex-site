module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0C2146',
                secondary: '#1E3A8A',
                accent: '#2563EB',
                'accent-light': '#06B6D4',
                success: '#00A86B',
                'bg-main': '#FFFFFF',
                'bg-section': '#F8FAFC',
                'bg-card': '#F1F5F9',
                'text-main': '#334155',
                'text-heading': '#0C2146',
                'text-muted': '#64748B',
                'border-light': '#E2E8F0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
