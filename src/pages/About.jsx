import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';

const About = () => {
    return (
        <>
            <div className="bg-neutral-900 py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Our mission, vision, and the story behind Divya Jyoti NGO.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-primary-600">Who We Are</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Divya Jyoti NGO is a non-profit organization dedicated to uplifting the underprivileged sections of society. Established in 2010, we have been working tirelessly to bridge the gap between those who want to help and those who need help. We believe that every individual deserves access to basic necessities, education, and healthcare, regardless of their background.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-primary-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-neutral-900">Our Mission</h3>
                            <p className="text-neutral-700">
                                To empower marginalized communities by providing quality education, accessible healthcare, and sustainable livelihood opportunities, enabling them to lead lives of dignity and self-reliance.
                            </p>
                        </div>
                        <div className="bg-primary-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-neutral-900">Our Vision</h3>
                            <p className="text-neutral-700">
                                A world where every individual has the opportunity to realize their full potential, free from poverty, ignorance, and disease.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-primary-600">Our Story</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                            It started with a simple idea: that a small group of committed citizens can change the world. Dr. Rajesh Kumar, our founder, witnessed the struggles of street children in New Delhi and decided to take action. What began as a weekend teaching program has now grown into a full-fledged movement touching thousands of lives.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Over the years, we have expanded our reach to rural areas, focusing on women empowerment and holistic village development. Our journey has been challenging but incredibly rewarding, fueled by the smiles of the children we educate and the gratitude of the families we support.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default About;
