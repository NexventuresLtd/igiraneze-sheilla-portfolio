import { ArrowRight, Linkedin, Target, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RenderContact } from "./Contanct";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const RenderHome = ({ isDarkMode, setActiveSection }: renderProps) => {
    const [displayedName, setDisplayedName] = useState("");
    const fullName = "Igiraneza Sheilla";

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setDisplayedName(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                // clearInterval(timer);
                setDisplayedName("");
                currentIndex = 0
            }
        }, 120);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-green-50 to-white'}`}>
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${isDarkMode ? 'bg-green-900/20' : 'bg-green-100/50'} blur-3xl`} />
                    <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${isDarkMode ? 'bg-green-900/20' : 'bg-green-100/50'} blur-3xl`} />
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-full md:max-w-11/12 mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">

                            {/* Left Side - Profile Image */}
                            <motion.div
                                className="order-1 lg:order-2 flex justify-center"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="relative">
                                    {/* Decorative ring */}
                                    <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'} p-1 animate-pulse`}>
                                        <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`} />
                                    </div>

                                    {/* Profile Image */}
                                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                                        <img
                                            src="/logos/sheilla2.jpeg"
                                            alt="Igiraneza Sheilla"
                                            className="w-full h-full object-cover object-center filter brightness-110 contrast-110"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                    </div>

                                    {/* Floating elements */}
                                    <div className={`absolute -top-4 -right-4 w-12 h-12 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full flex items-center justify-center shadow-lg`}>
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`absolute -bottom-4 -left-4 w-12 h-12 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full flex items-center justify-center shadow-lg`}>
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side - Content */}
                            <motion.div
                                className="order-2 lg:order-1 text-center lg:text-left"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {/* Typing Name Animation */}
                                <div className="mb-6">
                                    <motion.h1
                                        className={`text-4xl font-permanent md:text-5xl xl:text-6xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'} leading-tight`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        {displayedName}
                                        <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} animate-pulse`}>|</span>
                                    </motion.h1>

                                    <motion.p
                                        className={`text-xl md:text-2xl ${isDarkMode ? 'text-green-300' : 'text-green-700'} font-medium mb-4`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                    >
                                        Educational Advocate & Social Entrepreneur
                                    </motion.p>

                                    <motion.div
                                        className={`w-20 h-1 ${isDarkMode ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'} mx-auto lg:mx-0`}
                                        initial={{ width: 0 }}
                                        animate={{ width: 80 }}
                                        transition={{ duration: 0.8, delay: 1.0 }}
                                    />
                                </div>

                                {/* Mission Statement */}
                                <motion.div
                                    className="mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >
                                    <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                                        My Mission
                                    </h2>
                                    <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                                        To improve the quality of education in Mahama Refugee Camp, ensuring children and young people have access to better learning opportunities. Through trained teachers, adequate resources, and safe classrooms, I aim to help learners succeed, support their dreams, and contribute to community development.
                                    </p>
                                </motion.div>

                                {/* Key Impact Areas */}
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                >
                                    <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-green-100'} backdrop-blur-sm text-center lg:text-left`}>
                                        <div className={`w-8 h-8 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} rounded-lg flex items-center justify-center mb-2 mx-auto lg:mx-0`}>
                                            <Target className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className={`font-semibold ${isDarkMode ? 'text-green-300' : 'text-green-700'} text-sm`}>Quality Education</h3>
                                    </div>

                                    <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-green-100'} backdrop-blur-sm text-center lg:text-left`}>
                                        <div className={`w-8 h-8 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} rounded-lg flex items-center justify-center mb-2 mx-auto lg:mx-0`}>
                                            <Users className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className={`font-semibold ${isDarkMode ? 'text-green-300' : 'text-green-700'} text-sm`}>Community Impact</h3>
                                    </div>

                                    <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-green-100'} backdrop-blur-sm text-center lg:text-left`}>
                                        <div className={`w-8 h-8 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} rounded-lg flex items-center justify-center mb-2 mx-auto lg:mx-0`}>
                                            <Heart className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className={`font-semibold ${isDarkMode ? 'text-purple-300' : 'text-purple-700'} text-sm`}>Youth Empowerment</h3>
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.6 }}
                                >
                                    <motion.button
                                        onClick={() => setActiveSection('portfolio')}
                                        className={`group px-8 py-4 font-semibold rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="flex items-center">
                                            View My Work
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>

                                    <motion.a
                                        href="https://www.linkedin.com/in/igiraneza-sheilla-5a03102a3/"
                                        target="_blank"
                                        className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 ${isDarkMode ? 'border-2 border-green-500 text-green-300 hover:bg-green-500/10' : 'border-2 border-green-600 text-green-700 hover:bg-green-50'} backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="flex items-center">
                                            <Linkedin className="w-5 h-5 mr-2" />
                                            Connect with Me
                                        </span>
                                    </motion.a>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
            <RenderContact isDarkMode={isDarkMode} />
        </>
    );
};