import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface EducationProps {
    isDarkMode: boolean;
}

export const RenderEducation = ({ isDarkMode }: EducationProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <div className="max-w-full md:max-w-11/12 mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-12 text-center md:text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row items-center mb-6">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-0 md:mr-4 mb-4 md:mb-0 ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                            <GraduationCap className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        </div>
                        <h2 className={`text-2xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                            Education & Achievements
                        </h2>
                    </div>
                    <div className={`w-16 h-1 mx-auto md:mx-0 ${isDarkMode ? 'bg-green-500' : 'bg-green-600'}`} />
                </motion.div>

                <motion.div
                    className="flex flex-col lg:flex-row gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Education Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1"
                    >
                        <div className={`rounded-lg border-l-4 ${isDarkMode ? 'border-green-500 bg-slate-800' : 'border-green-600 bg-white'} p-6 md:p-8 `}>
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                                        Bachelor of Science in Entrepreneurial Leadership
                                    </h3>
                                    <div className={`flex items-center mb-3 text-lg ${isDarkMode ? 'text-green-400' : 'text-green-600'} font-semibold`}>
                                        <GraduationCap className="w-5 h-5 mr-2" />
                                        African Leadership University
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm mb-4">
                                        <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            May 2023 – Present
                                        </div>
                                        <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Kigali, Rwanda
                                        </div>
                                    </div>
                                </div>
                                <div className={`mt-4 lg:mt-0 lg:ml-6 px-4 py-2 rounded-md text-sm font-medium self-start ${isDarkMode ? 'bg-green-900 text-green-200 border border-green-700' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                                    In Progress
                                </div>
                            </div>

                            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                                <p className="text-base leading-relaxed">
                                    Program designed to develop future business leaders, entrepreneurs and change-makers.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                                        Key Skills Acquired:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'Planning and Managing Education Projects',
                                            'Future Thinking',
                                            'Building Startups',
                                            'Creativity and Innovation'
                                        ].map((skill) => (
                                            <div key={skill} className="flex items-center">
                                                <div className={`w-2 h-2 rounded-full mr-3 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`} />
                                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1"
                    >
                        <div className={`rounded-lg border-l-4 ${isDarkMode ? 'border-green-500 bg-slate-800' : 'border-green-600 bg-white'} p-6 md:p-8 `}>
                            <div className="flex items-center mb-6">
                                <Trophy className={`w-6 h-6 mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                                <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                                    Key Achievements & Contributions
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="flex items-start mb-4">
                                        <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`} />
                                        <div>
                                            <p className="font-medium mb-1">National Dialogue Participation</p>
                                            <p className="text-sm leading-relaxed">
                                                Participated in the National Dialogue on Positive Parenting and the launch of the
                                                <span className="font-semibold"> ITETERO application</span> to support parents and children.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="flex items-start mb-4">
                                        <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`} />
                                        <div>
                                            <p className="font-medium mb-1">Community Advocacy</p>
                                            <p className="text-sm leading-relaxed">
                                                Contributed to child protection and rights campaigns in
                                                <span className="font-semibold"> Bugesera and Nyaruguru</span> communities.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="flex items-start">
                                        <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`} />
                                        <div>
                                            <p className="font-medium mb-1">AI-Driven Social Impact</p>
                                            <p className="text-sm leading-relaxed">
                                                Supported an AI-driven data collection project in
                                                <span className="font-semibold"> Gatsibo</span> aimed at reducing early pregnancies among girls.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Professional Summary */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className={`inline-block px-6 py-5 md:px-8 md:py-6 rounded-lg border-2 ${isDarkMode ? 'border-green-800 bg-slate-800' : 'border-green-200 bg-white'} shadow-sm max-w-3xl`}>
                        <p className={`text-base md:text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            "Committed to leveraging education and innovation to drive positive social change and entrepreneurial excellence."
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};