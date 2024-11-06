import { SignupForm } from "../../components/SignupForm";
import { TextHoverEffectDemo } from "../../components/TextHoverEffect";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <TextHoverEffectDemo />
            <div className="text-center mb-24">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white  mb-4">
                    We've got an entire team dedicated to support you and your business
                </h1>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                    Let's work together to bring your vision to life
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-white text-xl">
                        Have questions? We'd love to hear from you. Send us a message
                        and we'll respond as soon as possible.
                    </p>
                    
                    <div className="space-y-6 mt-12">
                        <div className="flex items-center">
                            <svg className="w-7 h-7 text-gray-700 dark:text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700 dark:text-white text-lg">support@yourcompany.com</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-7 h-7 text-gray-700 dark:text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-700 dark:text-white text-lg">+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>
                
                <SignupForm />
            </div>
        </div>
    );
}
