import { Book, Github, Mail, Twitter } from "lucide-react";
import { useState } from "react";

interface ContProps {
    isDarkMode: boolean
}
export const RenderContact = ({ isDarkMode }: ContProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleFormChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        < div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
                <h2 className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Get In Touch
                </h2>
                <p className={`text-center mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                    I'm always interested in connecting with fellow leaders, entrepreneurs, and changemakers. Let's start a conversation.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-lg p-8 border`}>
                        <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Send a Message
                        </h3>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    required
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    required
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full px-6 py-3 ${isDarkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-600 hover:bg-orange-700'} text-white rounded-lg font-semibold transition-colors duration-200`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-lg p-8 border`}>
                        <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Contact Information
                        </h3>
                        <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <Mail className={`w-5 h-5 mr-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>s.igiraneza@alustudent.com</span>
                            </div>
                            <div className="flex items-center">
                                <Book className={`w-5 h-5 mr-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                                <a
                                    href="https://Book.com/in/Igiraneza-Sheilla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'} transition-colors duration-200`}
                                >
                                    Book.com/in/Igiraneza-Sheilla
                                </a>
                            </div>
                        </div>

                        <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Connect with me
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://Book.com/in/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 ${isDarkMode ? 'bg-gray-700 text-orange-400 hover:bg-orange-600' : 'bg-gray-100 text-orange-600 hover:bg-orange-600'} rounded-full hover:text-white transition-colors duration-200`}
                                aria-label="Book"
                            >
                                <Book className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 ${isDarkMode ? 'bg-gray-700 text-orange-400 hover:bg-orange-600' : 'bg-gray-100 text-orange-600 hover:bg-orange-600'} rounded-full hover:text-white transition-colors duration-200`}
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com/Igiraneza-Sheilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 ${isDarkMode ? 'bg-gray-700 text-orange-400 hover:bg-orange-600' : 'bg-gray-100 text-orange-600 hover:bg-orange-600'} rounded-full hover:text-white transition-colors duration-200`}
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};