interface PricingPlan {
    name: string;
    price: number;
    currency: string;
    features: {
        text: string;
        included: boolean;
    }[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Standar Plan",
        price: 199,
        currency: "RM",
        features: [
            { text: "2 team members", included: true },
            { text: "20GB Cloud storage", included: true },
            { text: "Integration help", included: true },
            { text: "Sketch Files", included: false },
            { text: "API Access", included: false },
            { text: "Complete documentation", included: false },
            { text: "24×7 phone & email support", included: false },
        ]
    },

    {
        name: "Contact Now",
        price: 49,
        currency: "RM",
        features: [
            { text: "2 team members", included: true },
            { text: "20GB Cloud storage", included: true },
            { text: "Integration help", included: true },
            { text: "Sketch Files", included: false },
            { text: "API Access", included: false },
            { text: "Complete documentation", included: false },
            { text: "24×7 phone & email support", included: false },
        ]
    },
    {
        name: "Contact Now",
        price: 59,
        currency: "RM",
        features: [
            { text: "2 team members", included: true },
            { text: "20GB Cloud storage", included: true },
            { text: "Integration help", included: true },
            { text: "Sketch Files", included: false },
            { text: "API Access", included: false },
            { text: "Complete documentation", included: false },
            { text: "24×7 phone & email support", included: false },
        ]
    },
    {
        name: "Contact Now",
        price: 39,
        currency: "RM",
        features: [
            { text: "2 team members", included: true },
            { text: "20GB Cloud storage", included: true },
            { text: "Integration help", included: true },
            { text: "Sketch Files", included: true },
            { text: "API Access", included: false },
            { text: "Complete documentation", included: false },
            { text: "24×7 phone & email support", included: false },
        ]
    },
    // Add more plans as needed
];

export function Price() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center max-w-[110rem] mx-auto m-4">
            {pricingPlans.map((plan, index) => (
                <div key={index} className="w-full max-w-sm p-4 bg-gradient-to-br from-gray-800 via-gray-900/40 to-black/20 border border-gray-400/50 rounded-2xl shadow-2xl sm:p-8 backdrop-blur-xl backdrop-filter relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>
                    <div className="relative">
                        <h5 className="mb-4 text-xl font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">{plan.name}</h5>
                        <div className="flex items-baseline bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                            <span className="text-3xl font-semibold">{plan.currency}</span>
                            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                            <span className="ms-1 text-xl font-normal text-gray-400">/month</span>
                        </div>
                        <ul role="list" className="space-y-5 my-7">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className={`flex items-center ${!feature.included ? 'line-through decoration-gray-500' : ''}`}>
                                    <svg className={`flex-shrink-0 w-4 h-4 ${feature.included ? 'bg-gradient-to-r from-blue-400 to-blue-600 rounded-full' : 'text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className={`text-base font-normal leading-tight ${feature.included ? 'text-gray-300' : 'text-gray-500'} ms-3`}>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="w-full px-5 py-3 text-base font-medium text-center text-white transition-all bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 focus:ring-4 focus:ring-blue-500/50">
                            Choose {plan.name}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
