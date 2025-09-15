import { Book, ArrowRight, Sparkles, Target, Users, Heart, Linkedin } from "lucide-react";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const RenderHome = ({ isDarkMode, setActiveSection }: renderProps) => {
    return (
        <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-orange-50 via-white to-white'}`}>
            {/* Background decorative elements */}
            {/* Animated floating elements */}
            <div className="absolute top-20 left-10 animate-float">
                <div className={`w-4 h-4 rounded-full ${isDarkMode ? 'bg-orange-400/60' : 'bg-orange-500/50'}`}></div>
            </div>
            <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-amber-400/40' : 'bg-amber-400/30'}`}></div>
            </div>
            <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-orange-500/50' : 'bg-orange-400/40'}`}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center">
                    {/* Profile image with elegant frame */}
                    <div className="mb-12 relative inline-block">
                        <div className="relative h-72 w-72 mx-auto">
                            <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-orange-700 to-amber-600' : 'bg-gradient-to-br from-orange-400 to-amber-500'} transform rotate-45 animate-pulse-slow`}></div>
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                <img
                                    src="/logos/sheilla.jpeg"
                                    alt="Igiraneza Sheilla - Professional Portrait"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name with elegant typography */}
                    <div className="mb-6">
                        <h1 className={`text-5xl font-delius md:text-6xl font-bold mb-4 bg-clip-text ${isDarkMode ? 'text-white' : 'text-transparent bg-gradient-to-r from-orange-600 to-amber-500'} transition-all duration-700`}>
                            Igiraneza Sheilla
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full mb-4"></div>
                        <p className={`text-xl md:text-2xl mb-8 font-medium ${isDarkMode ? 'text-orange-500' : 'text-orange-700'} transition-colors duration-500`}>
                            Transformational Leader | Social Entrepreneur | Community Builder
                        </p>
                    </div>

                    {/* Mission statement with elegant card */}
                    <div className={`max-w-5xl mx-auto mb-14 p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/40 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-orange-100'} transition-all duration-500 `}>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-500' : 'text-gray-700'} transition-colors duration-500 italic text-center`}>
                            "Passionate about creating sustainable change through innovative leadership, community engagement, and strategic partnerships. With over 5 years of experience in social entrepreneurship and community development, I'm committed to building bridges between vision and impact."
                        </p>
                    </div>

                    {/* Key strengths grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto">
                        <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/40 border border-gray-700/30' : 'bg-white/60 border border-orange-100'} backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105`}>
                            <div className={`w-12 h-12 ${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                <Target className={`w-6 h-6 ${isDarkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-orange-500' : 'text-orange-700'}`}>Strategic Vision</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>Transforming ideas into impactful initiatives</p>
                        </div>

                        <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/40 border border-gray-700/30' : 'bg-white/60 border border-orange-100'} backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105`}>
                            <div className={`w-12 h-12 ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                <Users className={`w-6 h-6 ${isDarkMode ? 'text-amber-500' : 'text-amber-600'}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-amber-500' : 'text-amber-700'}`}>Community Building</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>Creating collaborative ecosystems for change</p>
                        </div>

                        <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/40 border border-gray-700/30' : 'bg-white/60 border border-orange-100'} backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105`}>
                            <div className={`w-12 h-12 ${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-100'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                <Heart className={`w-6 h-6 ${isDarkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-orange-500' : 'text-orange-700'}`}>Social Impact</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>Driving sustainable positive change</p>
                        </div>
                    </div>

                    {/* Call to action buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <button
                            onClick={() => setActiveSection('portfolio')}
                            className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${isDarkMode ? 'bg-gradient-to-r bg-orange-800  text-white' : 'bg-gradient-to-r bg-orange-500 text-white'} shadow-lg hover:shadow-xl hover:transform hover:scale-105`}
                        >
                            <span className="relative z-10 flex items-center">
                                View My Work
                                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>

                        <a
                            onClick={() => setActiveSection('contact')}
                            rel="noopener noreferrer"
                            className={`group relative px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-500 overflow-hidden ${isDarkMode ? 'border-orange-500 text-orange-500 hover:bg-orange-800' : 'border-orange-500 text-orange-600 hover:bg-orange-500'} hover:text-white shadow-lg hover:shadow-xl hover:transform hover:scale-105`}
                        >
                            <span className="relative z-10 flex items-center">
                                <Linkedin className="w-5 h-5 mr-2" />
                                Connect on Linkedn
                            </span>
                        </a>
                    </div>

                </div>
            </div>

            {/* Custom CSS for animations */}
            <style >{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 0.9; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}