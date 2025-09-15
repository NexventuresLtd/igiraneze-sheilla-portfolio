import { Download, Eye } from "lucide-react";

interface PortProps {
    isDarkMode: boolean
}
export const RenderPortfolio = ({ isDarkMode }: PortProps) => {

    const portfolioArtefacts = [
        {
            id: 1,
            title: "Strategic Business Plan - Tech Startup",
            type: "Business Plan",
            description: "Comprehensive 40-page business plan for a fintech startup, including market analysis, financial projections, and go-to-market strategy.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            tags: ["Strategy", "Finance", "Leadership"]
        },
        {
            id: 2,
            title: "Community Development Project Report",
            type: "Project Report",
            description: "Detailed report on a 6-month community development initiative that improved local infrastructure and created 50+ jobs.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
            tags: ["Community", "Project Management", "Impact"]
        },
        {
            id: 3,
            title: "Leadership Training Program Budget",
            type: "Financial Document",
            description: "Complete budget analysis and resource allocation for a leadership development program serving 200+ participants.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
            tags: ["Budget", "Training", "Resource Management"]
        },
        {
            id: 4,
            title: "Field Research: Rural Entrepreneurship Study",
            type: "Research Paper",
            description: "Ethnographic research on rural entrepreneurship patterns, including interviews with 100+ small business owners.",
            image: "https://images.unsplash.com/photo-1500989145603-8e6885c88f15?w=400&h=250&fit=crop",
            tags: ["Research", "Entrepreneurship", "Rural Development"]
        }
    ];
    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Portfolio Artefacts
                </h2>
                <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                    A collection of professional documents and project deliverables showcasing my leadership experience and strategic thinking.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioArtefacts.map((artefact) => (
                        <div key={artefact.id} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                            <img
                                src={artefact.image}
                                alt={artefact.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-100'} ${isDarkMode ? 'text-white' : 'text-orange-800'} text-sm font-medium rounded-full mb-4`}>
                                    {artefact.type}
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {artefact.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                                    {artefact.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {artefact.tags.map((tag) => (
                                        <span key={tag} className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs rounded`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button className={`flex items-center px-4 py-2 ${isDarkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-600 hover:bg-orange-700'} text-white rounded-lg text-sm font-medium transition-colors duration-200`}>
                                        <Eye className="w-4 h-4 mr-2" />
                                        View
                                    </button>
                                    <button className={`flex items-center px-4 py-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg text-sm font-medium transition-colors duration-200`}>
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
