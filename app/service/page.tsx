export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
          
            <div className="container mx-auto px-8 py-12">
                <div className="grid grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="relative bg-gray-800 rounded-3xl overflow-hidden">
                            <img 
                                src="/your-model-image.jpg" 
                                alt="Fashion Model" 
                                className="w-full h-[400px] object-cover"
                            />
                            <button className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl">+</span>
                            </button>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-sm">BUILD YOUR</p>
                                <p className="font-bold">METAVERSE LOOK</p>
                            </div>
                        </div>

                        <div className="bg-emerald-300 rounded-3xl p-8">
                            <div className="mb-4">
                                <img src="/award-icon.svg" alt="Award" className="w-12 h-12" />
                                <p className="text-sm mt-2">A'DESIGN AWARD</p>
                                <p className="text-xs">WINNER</p>
                            </div>
                            
                            <div className="mt-8">
                                <p className="text-sm">Cooperate As</p>
                                <p className="font-bold">Designer / Media</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-6xl font-bold leading-tight">
                                SWITCH UP<br />
                                YOUR DIGITAL<br />
                                CLOTHING
                            </h1>
                            
                            <button className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full flex items-center space-x-2">
                                <span>WEAR NOW</span>
                                <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                                <span className="text-3xl font-bold">01</span>
                                <img src="/icon1.svg" alt="" className="w-8 h-8 rounded-full" />
                                <p className="text-sm">The tides of the fashion industry's movement</p>
                                <span className="text-sm text-gray-400">/2022</span>
                            </div>
                            
                            <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                                <span className="text-3xl font-bold">02</span>
                                <img src="/icon2.svg" alt="" className="w-8 h-8 rounded-full" />
                                <p className="text-sm">Show off your look, reap the real-world rewards</p>
                                <span className="text-sm text-gray-400">/2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}