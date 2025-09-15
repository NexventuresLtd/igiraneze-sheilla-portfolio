import { Award, Lightbulb, Target, TrendingUp, Users } from "lucide-react";

interface Timeline {
    isDarkMode: boolean
}
export const RenderTimeline = ({ isDarkMode }: Timeline) => {

    const timelineEvents = [
        {
            year: "2019",
            title: "Founded First Social Enterprise",
            description: "Launched a social enterprise focused on providing digital literacy training to underserved communities.",
            icon: Lightbulb,
            achievement: "Served 500+ community members"
        },
        {
            year: "2020",
            title: "Leadership Development Program",
            description: "Completed intensive leadership certification and began mentoring young entrepreneurs.",
            icon: Award,
            achievement: "Mentored 25+ entrepreneurs"
        },
        {
            year: "2021",
            title: "Strategic Partnership Initiative",
            description: "Established partnerships with 3 major organizations to expand community impact.",
            icon: Users,
            achievement: "3x program reach expansion"
        },
        {
            year: "2023",
            title: "Innovation Lab Launch",
            description: "Created an innovation lab to support tech startups in emerging markets.",
            icon: Target,
            achievement: "15 startups accelerated"
        },
        {
            year: "2024",
            title: "Regional Leadership Recognition",
            description: "Received regional award for entrepreneurial leadership and community impact.",
            icon: TrendingUp,
            achievement: "Regional Excellence Award"
        }
    ];

    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
                <h2 className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Leadership Journey Timeline
                </h2>
                <p className={`text-center mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                    Key milestones and achievements in my entrepreneurial leadership journey.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-300'}`}></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            return (
                                <div key={index} className="relative flex items-start">
                                    {/* Timeline dot */}
                                    <div className={`flex items-center justify-center w-16 h-16 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-100'} rounded-full border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'} shadow-lg z-10`}>
                                        <Icon className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-orange-600'}`} />
                                    </div>

                                    {/* Content */}
                                    <div className={`ml-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-lg p-6 border flex-1`}>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {event.title}
                                            </h3>
                                            <span className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-100'} ${isDarkMode ? 'text-white' : 'text-orange-800'} text-sm font-medium rounded-full mt-2 sm:mt-0`}>
                                                {event.year}
                                            </span>
                                        </div>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 leading-relaxed`}>
                                            {event.description}
                                        </p>
                                        <div className={`inline-flex items-center px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-orange-300' : 'bg-orange-50 text-orange-700'} rounded-full text-sm font-medium`}>
                                            <Award className="w-4 h-4 mr-2" />
                                            {event.achievement}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}