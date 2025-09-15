import { BookOpen, Lightbulb, Target, TrendingUp } from "lucide-react";

interface EssayProps {
    isDarkMode: boolean
}
export const RenderEssay = ({ isDarkMode }: EssayProps) => (
    <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Reflective Leadership Essay
            </h2>
            <p className={`text-center mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A comprehensive reflection on my leadership journey, growth, and future aspirations.
            </p>

            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-lg p-8 md:p-12 border`}>
                <article className="prose prose-lg max-w-none">

                    <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex items-center`}>
                        <Lightbulb className="w-6 h-6 mr-3" />
                        Learning Experiences That Transformed Me
                    </h3>
                    <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        My journey began with a profound realization during my first community project in 2019. I discovered that traditional top-down approaches to leadership often fail to create sustainable change. This experience taught me the power of collaborative leadership and the importance of listening before leading. The failure of my initial project became a catalyst for growth, forcing me to reevaluate my assumptions about leadership and embrace a more inclusive approach.
                    </p>
                    <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Another transformative moment came when I had to navigate a crisis that threatened to shut down our social enterprise. This experience taught me resilience, adaptability, and the crucial skill of turning challenges into opportunities. It was during this period that I learned to lead with vulnerability, admitting when I didn't have all the answers and leveraging the collective wisdom of my team.
                    </p>

                    <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex items-center`}>
                        <BookOpen className="w-6 h-6 mr-3" />
                        Applications of Leadership Theories
                    </h3>
                    <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Throughout my leadership journey, I have consciously applied various leadership theories to guide my practice. Servant leadership principles have been particularly influential, shaping my belief that leaders exist to serve their teams and communities rather than the other way around. This philosophy has guided my approach to mentoring young entrepreneurs and building inclusive organizational cultures.
                    </p>
                    <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        I have also drawn heavily from transformational leadership theory, focusing on inspiring and motivating others to exceed their own self-interests for the greater good. This approach has been essential in building coalitions and partnerships that have amplified our collective impact. Additionally, situational leadership principles have helped me adapt my leadership style to different contexts and team members' needs.
                    </p>

                    <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex items-center`}>
                        <TrendingUp className="w-6 h-6 mr-3" />
                        Skills, Knowledge, and Mindset Transformation
                    </h3>
                    <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        My leadership capabilities have evolved significantly over the past five years. Initially focused on technical skills and domain expertise, I have developed a more holistic understanding of leadership that encompasses emotional intelligence, systems thinking, and cultural competency. My communication skills have been refined through countless presentations, negotiations, and difficult conversations that required empathy and clarity.
                    </p>
                    <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Perhaps most importantly, my mindset has shifted from viewing leadership as a position of authority to understanding it as a practice of service and continuous learning. I have learned to embrace uncertainty, welcome feedback, and view failures as learning opportunities rather than setbacks. This growth mindset has enabled me to take on increasingly complex challenges and support others in their own development journeys.
                    </p>

                    <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} flex items-center`}>
                        <Target className="w-6 h-6 mr-3" />
                        Mission Journey and Post-Graduation Plans
                    </h3>
                    <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        My mission has always been to create sustainable positive change through innovative leadership and strategic partnerships. This mission has been the north star guiding all my professional and personal decisions. Looking ahead, I plan to expand this mission by establishing a leadership development institute focused on emerging market entrepreneurs and social innovators.
                    </p>
                    <p className={`mb-0 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Post-graduation, I intend to leverage the knowledge and network gained through my studies to scale our impact across multiple regions. My goal is to create a sustainable ecosystem that supports the next generation of leaders while continuing to address pressing social and economic challenges. This journey has taught me that true leadership is not about reaching a destination, but about continuously growing and empowering others to reach their full potential.
                    </p>
                </article>
            </div>
        </div>
    </div>
);