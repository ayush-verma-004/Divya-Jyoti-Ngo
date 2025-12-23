import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe, BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionWrapper from '../components/ui/SectionWrapper';
import { highlights, projects } from '../data/mockData';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Children smiling"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/30" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-200 font-medium text-sm mb-6 backdrop-blur-sm">
                        Empowering Lives, Spreading Hope
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Be the Light in <br />
                        <span className="text-primary-500">Someone's Darkness</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join Divya Jyoti NGO in our mission to provide education, healthcare, and support to underprivileged communities across India.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/donate" size="lg" icon={Heart}>
                            Donate Now
                        </Button>
                        <Button to="/projects" variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                            Our Projects
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

const Stats = () => {
    const stats = [
        { icon: Users, label: 'Lives Impacted', value: '10,000+' },
        { icon: BookOpen, label: 'Children Educated', value: '5,000+' },
        { icon: Globe, label: 'Villages Covered', value: '50+' },
        { icon: Heart, label: 'Volunteers', value: '500+' },
    ];

    return (
        <div className="bg-primary-600 text-white py-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-500 rounded-full opacity-50 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary-700 rounded-full opacity-50 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold font-heading mb-1">{stat.value}</div>
                            <div className="text-primary-100 text-sm md:text-base font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />

            {/* Highlights Section */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Key Initiatives</h2>
                    <p className="text-neutral-600">
                        We focus on holistic development through various programs targeting education, healthcare, and community empowerment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <Card key={item.id} className="h-full flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                                <p className="text-neutral-600 mb-4 flex-grow">{item.description}</p>
                                <div className="pt-4 border-t border-neutral-100">
                                    <Button variant="ghost" to="/projects" className="px-0 hover:bg-transparent text-primary-600 hover:text-primary-700 p-0 h-auto font-medium">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Featured Projects Preview */}
            <SectionWrapper bg="gray">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Impact</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Recent Projects</h2>
                    </div>
                    <Button to="/projects" variant="outline">View All Projects</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <Card key={project.id} className="group">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wide z-10">
                                    {project.category}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white line-clamp-2">{project.summary}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-neutral-500 text-sm mb-3">
                                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                                    {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Call to Action */}
            <SectionWrapper bg="dark" className="text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-neutral-400 mb-10">
                        Your support can change lives. Join us in our journey to create a better world for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/donate" size="lg" className="min-w-[180px]">
                            Donate Today
                        </Button>
                        <Button to="/contact" variant="outline" size="lg" className="min-w-[180px] border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-white">
                            Get Involved
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Home;
