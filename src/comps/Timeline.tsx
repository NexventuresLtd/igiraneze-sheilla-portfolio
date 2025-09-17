import { BookOpen, Heart, Users, Shield, Target, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

interface Timeline {
    isDarkMode: boolean;
}

export const RenderTimeline = ({ isDarkMode }: Timeline) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(timelineRef, { once: true, amount: 0.1 });
    const controls = useAnimation();

    const timelineEvents = [
        {
            year: "2018 – Present",
            title: "Program Assistant – Youth Empowerment",
            organization: "Youth Vision Rwanda",
            description: "Guide and mentor youth on how to start small businesses, inspired by principles of faith and resilience. Provide training on entrepreneurship, leadership and financial literacy.",
            icon: Target,
            achievement: "Empowering young people for self-reliance"
        },
        {
            year: "2021 – 2023",
            title: "Volunteer",
            organization: "Rwanda Book Mobile",
            description: "Encouraged children to develop a love for reading through mobile library programs. Organized reading activities and storytelling sessions to improve literacy skills.",
            icon: BookOpen,
            achievement: "Strengthened community engagement"
        },
        {
            year: "2021 – 2024",
            title: "Regional Coordinator",
            organization: "Youth Impact Mission",
            description: "Coordinated youth development programs at the regional level, reaching diverse communities. Provided mentorship and leadership training for young people.",
            icon: Users,
            achievement: "Developed organizational and planning skills"
        },
        {
            year: "2022 – 2023",
            title: "Peer Facilitator",
            organization: "Save the Children Rwanda",
            description: "Facilitated peer learning sessions with young people in Mahama Refugee Camp. Supported children and youth with life skills, education awareness, and leadership training.",
            icon: Heart,
            achievement: "Promoted children's rights and participation"
        },
        {
            year: "2025 – Present",
            title: "Assistant – Child Protection and Rights, ECD, and Education",
            organization: "Plan International Rwanda",
            description: "Assisted in implementing child protection and early childhood development programs. Supported education projects by ensuring safe learning environments.",
            icon: Shield,
            achievement: "Advocacy and program management experience"
        }
    ];

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full lg:max-w-11/12 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Professional and Leadership Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
                    >
                        Building leadership skills through meaningful work in youth development, education, and community empowerment.
                    </motion.p>
                </div>

                <div className="relative" ref={timelineRef}>
                    {/* Timeline line */}
                    <div className={`absolute left-6 top-0 bottom-0 w-0.5 
                        ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}></div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="space-y-8"
                    >
                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative flex items-start"
                                >
                                    {/* Timeline dot */}
                                    <div className={`flex-shrink-0 w-12 h-12 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} 
                                        rounded-full flex items-center justify-center relative z-10`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="ml-6 flex-1">
                                        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                                            border-2 rounded-lg p-6`}>
                                            
                                            {/* Header */}
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                                <div className="flex-1">
                                                    <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                        {event.title}
                                                    </h3>
                                                    <p className={`text-lg font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'} mb-2`}>
                                                        {event.organization}
                                                    </p>
                                                </div>
                                                <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-lg 
                                                    ${isDarkMode
                                                        ? 'bg-green-700 text-white'
                                                        : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {event.year}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                                                {event.description}
                                            </p>

                                            {/* Achievement */}
                                            <div className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border-2
                                                ${isDarkMode
                                                    ? 'border-green-600 text-green-400 bg-gray-700'
                                                    : 'border-green-200 text-green-700 bg-green-50'
                                                }`}>
                                                <Briefcase className="w-4 h-4 mr-2" />
                                                {event.achievement}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};