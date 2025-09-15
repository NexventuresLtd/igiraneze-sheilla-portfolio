import { Book } from "lucide-react";

interface renderProps {
    isDarkMode: boolean;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}
export const RenderHome = ({ isDarkMode, setActiveSection }: renderProps) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-orange-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <div className="mb-8 h-64 w-64 overflow-hidden aspect-square rounded-full mx-auto shadow-lg border-4 border-orange-200 dark:border-orange-800">
                        <img
                            src="/logos/sheilla.jpeg"
                            alt="Igiraneza Sheilla - Professional Portrait"
                            className="w-full h-full aspect-square"
                        />
                    </div>
                    <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                       Igiraneza Sheilla
                    </h1>
                    <p className={`text-xl mb-8 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'} font-medium`}>
                        Transformational Leader | Social Entrepreneur | Community Builder
                    </p>
                    <p className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Passionate about creating sustainable change through innovative leadership, community engagement, and strategic partnerships.
                        With over 5 years of experience in social entrepreneurship and community development, I'm committed to building bridges
                        between vision and impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => setActiveSection('portfolio')}
                            className={`px-8 py-3 ${isDarkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-600 hover:bg-orange-700'} text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl`}
                        >
                            View My Work
                        </button>
                        <a
                            href="https://Book.com/in/Igiraneza-Sheilla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center px-8 py-3 ${isDarkMode ? 'border-orange-400 text-orange-400 hover:bg-orange-400' : 'border-orange-600 text-orange-600 hover:bg-orange-600'} border-2 hover:text-white rounded-lg font-semibold transition-colors duration-200`}
                        >
                            <Book className="w-5 h-5 mr-2" />
                            Connect on Book
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}