import React from 'react';
import Link from 'next/link';
import { AnimatedModal } from './AnimatedModal';

const CallToAction = () => {
  return (
    <section className="bg-primary-600 py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            Join thousands of satisfied customers who have transformed their business with our solutions.
          </p>
          <Link 
            href="/contact">
                <AnimatedModal/>
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
