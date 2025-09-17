import { BookOpen, Lightbulb, Quote, Target, TrendingUp, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EssayProps {
    isDarkMode: boolean;
}

export const RenderEssay = ({ isDarkMode }: EssayProps) => {
    const [isReading, setIsReading] = useState(false);
    const [currentReadingSection, setCurrentReadingSection] = useState<string | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Create refs using useRef directly
    const introRef = useRef<HTMLDivElement>(null);
    const transformationRef = useRef<HTMLDivElement>(null);
    const experiencesRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const conclusionRef = useRef<HTMLDivElement>(null);

    const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('data-section') || '';
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all section elements
        const refs = [introRef, transformationRef, experiencesRef, missionRef, conclusionRef];
        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    // Get all essay text for reading
    const getEssayText = (sectionId?: string) => {
        const essaySections = {
            introduction: "Leadership Reflection Essay. Introduction. My leadership journey has been both personal and professional, shaped by my mission to improve the quality of education and create opportunities for young people. Leadership, for me, is not just about holding a position of authority, but about guiding, influencing, and serving others in a way that inspires growth and transformation. As I look back at my learning experiences, I see how they have expanded my skills, reshaped my mindset, and given me the confidence to pursue my mission and future aspirations.",
            transformation: "Transformation of Skills, Knowledge and Mindsets. Throughout my journey, I have experienced a transformation in skills, knowledge and mindset that has shaped me into a stronger leader. I have strengthened my abilities in data collection, teamwork, public speaking and leadership through projects that required me to listen carefully, plan effectively and coordinate with others. Alongside these practical skills, I deepened my understanding of leadership theories such as transformational and servant leadership, which provided me with the tools to reflect on my actions and refine my approach. Most importantly, my mindset has shifted. I no longer view challenges as obstacles, but as opportunities to learn and grow. By embracing mistakes and seeking feedback, I have developed a growth mindset that pushes me to continuously improve both personally and professionally.",
            experiences: "Specific Learning Experiences and Leadership Theory Application. One of the most meaningful learning experiences I had was leading a peer study group. At first, the group lacked direction and some members felt discouraged. I applied transformational leadership by setting a clear vision, encouraging participation, and creating an atmosphere of trust. I motivated the group to stay focused, and as a result, our collaboration improved and everyone gained confidence in their learning. Another valuable experience came from coordinating a community education activity in the camp. The project required mobilizing learners, organizing resources, and making sure activities ran smoothly. Here, I applied principles of servant leadership, putting the needs of the learners first and ensuring they felt supported. By listening to their challenges and incorporating their feedback, I helped create an inclusive and engaging environment.",
            mission: "Connection to Mission Journey, Career Aspirations and Future Plans. My mission is to improve education in Mahama Refugee Camp and beyond by ensuring learners have access to quality teaching, materials, and safe learning spaces. Everything I have learned in my leadership journey directly connects to this mission. The artefacts I worked on, including my portfolio reflections, mission statement and project experiences, serve as evidence of how I am preparing to create real impact. Post-graduation, I plan to use my leadership skills in the education and community development sector. Whether I work in nonprofit organizations, schools or community initiatives, my goal is to be a change-maker who uses leadership to empower others. The insights I gained about teamwork, adaptability and servant leadership will guide me in building sustainable solutions that transform learners' futures.",
            conclusion: "Conclusion. My leadership journey has been one of growth, reflection, and transformation. The experiences I gained, the theories I applied and the artefacts I created have shaped me into a leader who values service, adaptability and empowerment. I now carry not only improved skills and knowledge but also a mindset that sees leadership as a lifelong journey. As I move forward, I am confident that these lessons will continue to guide me in achieving my mission and contributing positively to the lives of others."
        };

        if (sectionId) {
            return essaySections[sectionId as keyof typeof essaySections];
        }

        return Object.values(essaySections).join(" ");
    };

    // Start or stop text-to-speech
    const toggleReadAloud = (sectionId?: string) => {
        if (isReading) {
            // Stop reading
            window.speechSynthesis.cancel();
            setIsReading(false);
            setCurrentReadingSection(null);
            return;
        }

        // Start reading
        setIsReading(true);
        if (sectionId) {
            setCurrentReadingSection(sectionId);
        }

        const text = sectionId ? getEssayText(sectionId) : getEssayText();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower for better comprehension
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
            setIsReading(false);
            setCurrentReadingSection(null);
        };

        utterance.onerror = () => {
            setIsReading(false);
            setCurrentReadingSection(null);
        };

        speechSynthesisRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };

    // Clean up on component unmount
    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full md:max-w-11/12 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                    <div className="text-center sm:text-left">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                            Leadership Reflection Essay
                        </h2>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            A comprehensive reflection on my leadership journey, growth, and future aspirations.
                        </p>
                    </div>
                    <button
                        onClick={() => toggleReadAloud()}
                        className={`mt-6 sm:mt-0 flex items-center px-5 py-3 rounded-lg font-medium transition-colors duration-300 ${isReading && !currentReadingSection
                            ? 'bg-green-700 text-white'
                            : isDarkMode
                                ? 'bg-gray-800 text-green-400 hover:bg-green-700 hover:text-white'
                                : 'bg-white text-green-700 hover:bg-green-700 hover:text-white border border-green-200'
                            }`}
                    >
                        {isReading && !currentReadingSection ? (
                            <VolumeX className="w-5 h-5 mr-2" />
                        ) : (
                            <Volume2 className="w-5 h-5 mr-2" />
                        )}
                        {isReading && !currentReadingSection ? 'Stop Reading' : 'Read Aloud'}
                    </button>
                </div>

                <div className={`rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <article className="max-w-none">
                        {/* Introduction */}
                        <div
                            ref={introRef}
                            data-section="intro"
                            className={`mb-12 text-center transition-opacity duration-700 ${visibleSections.has('intro') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 ${isDarkMode ? 'bg-green-800' : 'bg-green-100'} rounded-full mb-6`}>
                                <BookOpen className={`w-8 h-8 md:w-9 md:h-9 ${isDarkMode ? 'text-white' : 'text-green-700'}`} />
                            </div>
                            <p className={`text-lg md:text-xl italic max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                "Leadership is not about being in charge. It is about taking care of those in your charge." - Simon Sinek
                            </p>
                        </div>

                        {/* Introduction Section */}
                        <section
                            className={`mb-12 transition-opacity duration-700 ${visibleSections.has('intro') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-green-400' : 'text-green-700'} flex items-center`}>
                                    <div className={`p-2 mr-4 rounded-lg ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                        <Lightbulb className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    Introduction
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('introduction')}
                                    className={`p-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
                                    aria-label={isReading && currentReadingSection === 'introduction' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'introduction' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    My leadership journey has been both personal and professional, shaped by my mission to improve the quality of education and create opportunities for young people. Leadership, for me, is not just about holding a position of authority, but about guiding, influencing, and serving others in a way that inspires growth and transformation.
                                </p>
                                <p className={`text-lg leading-relaxed mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    As I look back at my learning experiences, I see how they have expanded my skills, reshaped my mindset, and given me the confidence to pursue my mission and future aspirations.
                                </p>
                            </div>
                        </section>

                        {/* Transformation Section */}
                        <section
                            ref={transformationRef}
                            data-section="transformation"
                            className={`mb-12 transition-opacity duration-700 ${visibleSections.has('transformation') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-green-400' : 'text-green-700'} flex items-center`}>
                                    <div className={`p-2 mr-4 rounded-lg ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                        <TrendingUp className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    Transformation of Skills, Knowledge and Mindsets
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('transformation')}
                                    className={`p-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
                                    aria-label={isReading && currentReadingSection === 'transformation' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'transformation' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Skill Development</h4>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        I have strengthened my abilities in data collection, teamwork, public speaking and leadership through projects that required me to listen carefully, plan effectively and coordinate with others.
                                    </p>
                                </div>
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Leadership Theories</h4>
                                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        I deepened my understanding of leadership theories such as transformational and servant leadership, which provided me with the tools to reflect on my actions and refine my approach.
                                    </p>
                                </div>
                            </div>
                            <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Mindset Shift</h4>
                                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Most importantly, my mindset has shifted. I no longer view challenges as obstacles, but as opportunities to learn and grow. By embracing mistakes and seeking feedback, I have developed a growth mindset that pushes me to continuously improve both personally and professionally.
                                </p>
                            </div>
                        </section>

                        {/* Experiences Section */}
                        <section
                            ref={experiencesRef}
                            data-section="experiences"
                            className={`mb-12 transition-opacity duration-700 ${visibleSections.has('experiences') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-green-400' : 'text-green-700'} flex items-center`}>
                                    <div className={`p-2 mr-4 rounded-lg ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                        <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    Specific Learning Experiences and Leadership Theory Application
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('experiences')}
                                    className={`p-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
                                    aria-label={isReading && currentReadingSection === 'experiences' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'experiences' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Peer Study Group Leadership</h4>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        One of the most meaningful learning experiences I had was leading a peer study group. At first, the group lacked direction and some members felt discouraged. I applied transformational leadership by setting a clear vision, encouraging participation, and creating an atmosphere of trust. I motivated the group to stay focused, and as a result, our collaboration improved and everyone gained confidence in their learning.
                                    </p>
                                </div>
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>Community Education Coordination</h4>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Another valuable experience came from coordinating a community education activity in the camp. The project required mobilizing learners, organizing resources, and making sure activities ran smoothly. Here, I applied principles of servant leadership, putting the needs of the learners first and ensuring they felt supported. By listening to their challenges and incorporating their feedback, I helped create an inclusive and engaging environment.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Mission Section */}
                        <section
                            ref={missionRef}
                            data-section="mission"
                            className={`mb-12 transition-opacity duration-700 ${visibleSections.has('mission') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                                <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-0 ${isDarkMode ? 'text-green-400' : 'text-green-700'} flex items-center`}>
                                    <div className={`p-2 mr-4 rounded-lg ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                        <Target className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    Connection to Mission Journey, Career Aspirations and Future Plans
                                </h3>
                                <button
                                    onClick={() => toggleReadAloud('mission')}
                                    className={`p-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-300`}
                                    aria-label={isReading && currentReadingSection === 'mission' ? 'Stop reading section' : 'Read this section aloud'}
                                >
                                    {isReading && currentReadingSection === 'mission' ? (
                                        <VolumeX className="w-5 h-5" />
                                    ) : (
                                        <Volume2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        My mission is to improve education in Mahama Refugee Camp and beyond by ensuring learners have access to quality teaching, materials, and safe learning spaces. Everything I have learned in my leadership journey directly connects to this mission. The artefacts I worked on, including my portfolio reflections, mission statement and project experiences, serve as evidence of how I am preparing to create real impact.
                                    </p>
                                </div>
                                <div className={`p-6 md:p-8 rounded-lg ${isDarkMode ? 'bg-gray-750' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Post-graduation, I plan to use my leadership skills in the education and community development sector. Whether I work in nonprofit organizations, schools or community initiatives, my goal is to be a change-maker who uses leadership to empower others. The insights I gained about teamwork, adaptability and servant leadership will guide me in building sustainable solutions that transform learners' futures.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <div
                            ref={conclusionRef}
                            data-section="conclusion"
                            className={`mt-12 pt-8 text-center transition-opacity duration-700 ${visibleSections.has('conclusion') ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 ${isDarkMode ? 'bg-green-800' : 'bg-green-100'} rounded-full mb-6`}>
                                <Target className={`w-8 h-8 md:w-9 md:h-9 ${isDarkMode ? 'text-white' : 'text-green-700'}`} />
                            </div>
                            <Quote/>
                            <p className={`text-lg md:text-xl italic max-w-11/12 mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                My leadership journey has been one of growth, reflection, and transformation. The experiences I gained, the theories I applied and the artefacts I created have shaped me into a leader who values service, adaptability and empowerment. I now carry not only improved skills and knowledge but also a mindset that sees leadership as a lifelong journey. As I move forward, I am confident that these lessons will continue to guide me in achieving my mission and contributing positively to the lives of others.
                            </p>
                            <Quote className="ml-auto"/>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};