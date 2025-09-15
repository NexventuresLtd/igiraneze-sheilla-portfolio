import { ArrowRight, Linkedin, Target, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
        <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-green-50'}`}>
            {/* Content */}
            <div className="relative z-10 pt-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-11/12 mx-auto text-center">

                    {/* Profile Image */}
                    <motion.div
                        className="mb-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative inline-block">
                            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 mx-auto ${isDarkMode ? 'border-green-600' : 'border-green-500'}`}>
                                <img
                                    src="/logos/sheilla.jpeg"
                                    alt="Igiraneza Sheilla"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Typing Name Animation */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1 className={`text-4xl font-delius md:text-6xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                            {displayedName}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mb-8"
                    >
                        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-green-300' : 'text-green-700'} font-medium tracking-wide`}>
                            Transformational Leader & Social Entrepreneur
                        </p>
                        <div className={`w-24 h-1 ${isDarkMode ? 'bg-green-500' : 'bg-green-400'} mx-auto mt-4`} />
                    </motion.div>

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="mb-8"
                    >
                        <div className={`max-w-5xl mx-auto rounded-lg p-8 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                            <p className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                Passionate about creating sustainable change through innovative leadership and community engagement.
                                With over 5 years of experience in social entrepreneurship, I bridge the gap between vision and impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="mb-10"
                    >
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-700' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                    <Target className={`w-6 h-6 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} />
                                </div>
                                <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>Strategic Vision</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Transforming ideas into impact</p>
                            </div>
                            <div className="text-center">
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-700' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                    <Users className={`w-6 h-6 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} />
                                </div>
                                <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>Community Building</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Creating collaborative ecosystems</p>
                            </div>
                            <div className="text-center">
                                <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-700' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                    <Heart className={`w-6 h-6 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} />
                                </div>
                                <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>Social Impact</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Driving sustainable change</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                    >
                        <motion.button
                            onClick={() => setActiveSection('portfolio')}
                            className={`px-8 py-3 font-medium rounded-full transition-all duration-300 ${isDarkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center">
                                View My Work
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                        </motion.button>

                        <motion.button
                            onClick={() => setActiveSection('contact')}
                            className={`px-8 py-3 font-medium rounded-full transition-all duration-300 ${isDarkMode ? 'border border-green-500 text-green-300 hover:bg-green-800' : 'border border-green-500 text-green-700 hover:bg-green-50'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center">
                                <Linkedin className="w-4 h-4 mr-2" />
                                Connect
                            </span>
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};