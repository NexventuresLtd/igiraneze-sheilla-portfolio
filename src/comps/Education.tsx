import { GraduationCap, Calendar, BookOpen, Award, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface EducationProps {
    isDarkMode: boolean;
}

export const RenderEducation = ({ isDarkMode }: EducationProps) => {
    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants:Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}>
                        <GraduationCap className={`w-10 h-10 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`} />
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Academic Journey
                    </h2>
                    <p className={`text-lg ${isDarkMode ? 'text-green-200' : 'text-green-700'} max-w-2xl mx-auto mb-6`}>
                        Pursuing excellence through formal education and professional certifications
                    </p>
                    <div className={`w-24 h-1 ${isDarkMode ? 'bg-green-500' : 'bg-green-400'} mx-auto`} />
                </motion.div>

                {/* Education Timeline */}
                <motion.div 
                    className="relative space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Timeline Line */}
                    <div className={`absolute left-8 top-12 bottom-12 w-1 ${isDarkMode ? 'bg-green-700' : 'bg-green-300'} hidden md:block`} />

                    {/* Bachelor's Degree */}
                    <motion.div 
                        className="relative md:pl-24"
                        variants={itemVariants}
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-6 w-16 h-16 rounded-full flex items-center justify-center z-10 ${isDarkMode ? 'bg-green-700' : 'bg-green-500'}`}>
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-green-600" />
                            </div>
                        </div>

                        <div className={`p-8 rounded-2xl border-2 ${isDarkMode ? 'bg-slate-800 border-green-700' : 'bg-white border-green-300'}`}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Bachelor of Science in Entrepreneurial Leadership
                                    </h3>
                                    <div className={`flex items-center mb-3 text-lg ${isDarkMode ? 'text-green-300' : 'text-green-700'} font-medium`}>
                                        <GraduationCap className="w-5 h-5 mr-3" />
                                        African Leadership University
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            May 2023 – Present
                                        </div>
                                        <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Kigali, Rwanda
                                        </div>
                                    </div>
                                </div>
                                <div className={`mt-4 md:mt-0 md:ml-6 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                                    In Progress
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    <p className="font-semibold mb-2">🎯 Specialization:</p>
                                    <p>3rd year student majoring in Education & Healthcare pathways</p>
                                </div>
                                
                                <div className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <p className="font-semibold mb-3">📚 Relevant Coursework:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            'Creativity & Innovation',
                                            'Systems Thinking', 
                                            'Financial Management',
                                            'Business Management',
                                            'Reflective Thinking',
                                            'Building Startups'
                                        ].map((course) => (
                                            <div key={course} className="flex items-center">
                                                <div className={`w-2 h-2 rounded-full mr-3 ${isDarkMode ? 'bg-green-500' : 'bg-green-400'}`} />
                                                <span className="text-sm">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CPA Certification */}
                    <motion.div 
                        className="relative md:pl-24"
                        variants={itemVariants}
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-6 w-16 h-16 rounded-full flex items-center justify-center z-10 ${isDarkMode ? 'bg-green-700' : 'bg-green-500'}`}>
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <Award className="w-6 h-6 text-green-600" />
                            </div>
                        </div>

                        <div className={`p-8 rounded-2xl border-2 ${isDarkMode ? 'bg-slate-800 border-green-700' : 'bg-white border-green-300'}`}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        CPA Certification Program
                                    </h3>
                                    <div className={`flex items-center mb-3 text-lg ${isDarkMode ? 'text-green-300' : 'text-green-700'} font-medium`}>
                                        <Award className="w-5 h-5 mr-3" />
                                        Institute of Certified Public Accountants of Rwanda
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            April 2025 – Present
                                        </div>
                                        <div className={`flex items-center ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Rwanda
                                        </div>
                                    </div>
                                </div>
                                <div className={`mt-4 md:mt-0 md:ml-6 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                                    Pursuing
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    <p className="font-semibold mb-2">🎯 Objective:</p>
                                    <p>Pursuing Certified Public Accountant certification with focus on strategic leadership</p>
                                </div>
                                
                                <div className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <p className="font-semibold mb-3">📊 Core Curriculum:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            'Strategy & Leadership',
                                            'Corporate Finance',
                                            'Business Law',
                                            'Strategic Performance Management',
                                            'Advanced Accounting',
                                            'Auditing & Assurance'
                                        ].map((course) => (
                                            <div key={course} className="flex items-center">
                                                <div className={`w-2 h-2 rounded-full mr-3 ${isDarkMode ? 'bg-green-500' : 'bg-green-400'}`} />
                                                <span className="text-sm">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Quote */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className={`inline-block px-8 py-6 rounded-2xl ${isDarkMode ? 'bg-green-800/30' : 'bg-green-100/80'} backdrop-blur-sm`}>
                        <p className={`text-lg italic ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                            "Education is not the filling of a pail, but the lighting of a fire."
                        </p>
                        <p className={`mt-2 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>- William Butler Yeats</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};