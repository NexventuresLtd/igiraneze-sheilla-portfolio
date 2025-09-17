import { BookOpen, Briefcase, Clock, FileText, Home, Menu, Moon, Sun, X, GraduationCap, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'about', icon: Info },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'essay', label: 'Essay', icon: BookOpen },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'resume', label: 'Resume', icon: FileText },
];

interface NavProps {
    isDarkMode: boolean,
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    activeSection: string
    isMenuOpen: boolean
}

export const RenderNavigation = ({ isDarkMode, setActiveSection, setIsMenuOpen, isMenuOpen, activeSection, setIsDarkMode }: NavProps) => {
    return (
        <motion.nav 
            className={`${isDarkMode 
                ? 'bg-slate-900/95 border-slate-700/50 backdrop-blur-xl' 
                : 'bg-white/95 border-green-100/50 backdrop-blur-xl'
            } sticky top-0 z-50`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-11/12 mx-auto px4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 gap-4">
                    {/* Logo Section */}
                    <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full ${isDarkMode 
                                ? 'bg-gradient-to-r from-green-400 to-green-500' 
                                : 'bg-gradient-to-r from-green-500 to-emerald-500'
                            } flex items-center justify-center`}>
                                <span className="text-white font-bold text-lg">IS</span>
                            </div>
                            <div className="hidden xl:block">
                                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                                    Igiraneza Sheilla
                                </h1>
                                <p className={`text-xs ${isDarkMode ? 'text-green-300' : 'text-green-600'} font-medium uppercase tracking-wide`}>
                                    Educational Advocate
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">
                            {navigation.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => {
                                            item.id === "resume" ?
                                                window.open("https://docs.google.com/document/d/16DcQPH2rIc6tPLzJlOQpmrpoyf8Ph1Dkt-LF7yShIRc/edit?tab=t.0", "_blank")
                                                :
                                                setActiveSection(item.id)
                                        }}
                                        className={`relative capitalize flex items-center px-4 py-3 cursor-pointer rounded-xl text-sm font-semibold transition-all duration-300 ${
                                            isActive
                                                ? `${isDarkMode 
                                                    ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 ' 
                                                    : 'text-white bg-gradient-to-r from-green-600 to-emerald-600 '
                                                }`
                                                : `${isDarkMode 
                                                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                                                    : 'text-slate-600 hover:text-slate-800 hover:bg-gray-100/80'
                                                }`
                                        }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {item.label}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20"
                                                layoutId="activeTab"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex items-center space-x-3">
                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-3 rounded-xl transition-all duration-300 ${
                                isDarkMode 
                                    ? 'text-yellow-300 bg-slate-800/60 hover:bg-slate-700' 
                                    : 'text-slate-600 bg-gray-100/80 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle dark mode"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDarkMode ? 'dark' : 'light'}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-3 rounded-xl transition-all duration-300 ${
                                    isDarkMode 
                                        ? 'text-slate-300 bg-slate-800/60 hover:bg-slate-700' 
                                        : 'text-slate-600 bg-gray-100/80 hover:bg-gray-200'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isMenuOpen ? 'close' : 'menu'}
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 180, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="lg:hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-2 pt-2 pb-4 space-y-2">
                                {navigation.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => {
                                                if (item.id === "resume") {
                                                    window.open("https://docs.google.com/document/d/16DcQPH2rIc6tPLzJlOQpmrpoyf8Ph1Dkt-LF7yShIRc/edit?tab=t.0", "_blank");
                                                } else {
                                                    setActiveSection(item.id);
                                                }
                                                setIsMenuOpen(false);
                                            }}
                                            className={`flex items-center w-full px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                                                isActive
                                                    ? `${isDarkMode 
                                                        ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 ' 
                                                        : 'text-white bg-gradient-to-r from-green-600 to-emerald-600 '
                                                    }`
                                                    : `${isDarkMode 
                                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                                                        : 'text-slate-600 hover:text-slate-800 hover:bg-gray-100/80'
                                                    }`
                                            }`}
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02, x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Icon className="w-5 h-5 mr-3" />
                                            {item.label}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}