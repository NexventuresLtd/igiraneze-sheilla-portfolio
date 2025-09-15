import { Book } from "lucide-react";
import { motion } from "framer-motion";

interface RenderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const RenderHome = ({ isDarkMode, setActiveSection }: RenderProps) => {
    return (
        <div className={`min-h-screen flex items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-orange-100'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 text-center">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 h-64 w-64 overflow-hidden rounded-full mx-auto shadow-2xl border-4 border-orange-200 dark:border-orange-800"
                >
                    <img
                        src="/logos/sheilla.jpeg"
                        alt="Igiraneza Sheilla - Professional Portrait"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`text-5xl font-delius font-extrabold mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    Igiraneza Sheilla
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className={`text-xl mb-8 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'} font-medium`}
                >
                    Transformational Leader | Social Entrepreneur | Community Builder
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                    Passionate about creating sustainable change through innovative leadership, community engagement, and strategic partnerships.
                    With over 5 years of experience in social entrepreneurship and community development, I'm committed to building bridges
                    between vision and impact.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={() => setActiveSection('portfolio')}
                        className={`px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    >
                        View My Work
                    </button>
                    <a
                        href="https://Book.com/in/Igiraneza-Sheilla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-8 py-3 border-2 ${isDarkMode ? 'border-orange-400 text-orange-400 hover:bg-orange-400' : 'border-orange-600 text-orange-600 hover:bg-orange-600'} hover:text-white rounded-lg font-semibold transition-transform duration-200 transform hover:scale-105`}
                    >
                        <Book className="w-5 h-5 mr-2" />
                        Connect on Book
                    </a>
                </motion.div>
            </div>
        </div>
    );
};
