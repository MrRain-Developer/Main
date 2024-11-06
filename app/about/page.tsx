import { TextHoverEffectDemo } from "../../components/TextHoverEffect";


export default function AboutUs() {
    return (
        <>
            <TextHoverEffectDemo />

            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center font-sans">
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto glass p-8 rounded-lg  text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Welcome to our story. We are a team of innovators dedicated to creating cutting-edge digital solutions. Our journey began with a vision to redefine premium web experiences and deliver excellence in every pixel.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
                                <p className="text-gray-300">
                                    To empower businesses with premium, responsive, and custom-made web solutions that not only meet but exceed their digital needs.
                                </p>
                            </div>
                            <div className="glass p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-white mb-3">Our Vision</h2>
                                <p className="text-gray-300">
                                    To become a leader in the digital space, setting standards for innovation and quality, and transforming ideas into impactful online experiences.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a href="/contact" className="inline-block px-8 py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
