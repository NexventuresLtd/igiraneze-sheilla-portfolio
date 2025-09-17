import { Heart, Users, Target, Lightbulb, TrendingUp, Database, Mic, Users2, Target as LeadershipIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface AboutProps {
    isDarkMode: boolean;
}

export const RenderAbout = ({ isDarkMode }: AboutProps) => {
    const aboutCards = [
        {
            id: 1,
            title: "Transformative Learning Experiences",
            description: "Building empathy and creating safe learning spaces through hands-on community work.",
            details: "Working with Save the Children Rwanda as a Peer Facilitator taught me empathy, active listening, and how to create safe learning spaces. Volunteering with the Rwanda Book Mobile showed me the power of creativity in education through storytelling and reading activities. As a Regional Coordinator with Youth Impact Mission, I strengthened my organizational and planning skills while leading youth programs.",
            icon: Heart,
            category: "Experience"
        },
        {
            id: 2,
            title: "Applying Leadership Theories",
            description: "Integrating servant leadership and transformational approaches in community development.",
            details: "In these roles, I applied servant leadership by focusing on the needs of children and youth first and transformational leadership by inspiring others to see their potential beyond immediate challenges. My studies at ALU also introduced me to systems thinking, which helped me connect education to child protection, family well-being and community development.",
            icon: Users,
            category: "Leadership"
        },
        {
            id: 3,
            title: "Evaluation of My Learning Journey",
            description: "Developing self-awareness and adaptability through continuous learning and reflection.",
            details: "My journey has made me a more self-aware and adaptable leader, combining skills in innovation and project management with the ability to work across diverse contexts. For me, leadership is a continuous process of learning and reflection.",
            icon: TrendingUp,
            category: "Growth"
        },
        {
            id: 4,
            title: "Connection to Mission and Future Plans",
            description: "Linking education initiatives to broader social impact and community development.",
            details: "The literacy projects, youth programs and child protection campaigns I worked on all support my mission to improve education in refugee communities, while achievements like the National Dialogue on Positive Parenting and the AI project showed me the link between education and wider social issues.",
            icon: Target,
            category: "Mission"
        }
    ];

    const skillsData = [
        {
            id: 1,
            title: "Data Collection",
            description: "Skilled in gathering and analyzing project data for decision-making.",
            icon: Database,
            category: "Analytical"
        },
        {
            id: 2,
            title: "Public Speaking",
            description: "Confident in presenting ideas and engaging diverse audiences.",
            icon: Mic,
            category: "Communication"
        },
        {
            id: 3,
            title: "Teamwork",
            description: "Experienced in collaborating with communities and partners.",
            icon: Users2,
            category: "Collaboration"
        },
        {
            id: 4,
            title: "Leadership",
            description: "Strong ability to guide, mentor and manage projects.",
            icon: LeadershipIcon,
            category: "Management"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants: Variants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full lg:max-w-11/12 mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-shrink-0 max-auto"
                        >
                            <img
                                src="logos/sheilla2.jpeg"
                                alt="Sheilla Leadership Portrait"
                                className="w-64 h-64 lg:w-80 lg:h-80  object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>

                        {/* Right Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}
                            >
                                About My Leadership Journey
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-4xl`}
                            >
                                Through diverse experiences in education, child protection, and community development,
                                I have developed a leadership approach centered on empathy, innovation, and sustainable impact.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-4xl mt-4`}
                            >
                                <strong>My mission: </strong>
                                is to improve the quality of education in Mahama Refugee Camp. I want to make sure that children
                                and young people in the camp have access to better learning opportunities. This includes having trained teachers
                                enough school materials and safe classrooms. I believe that by improving education
                                I can help learners succeed, support their dreams and contribute to the development of the whole community.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    {aboutCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    variants={cardHoverVariants}
                                    className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                                        border-2 rounded-lg p-8 h-full transition-all duration-300`}
                                >
                                    {/* Header */}
                                    <div className="flex items-start mb-6">
                                        <div className={`flex-shrink-0 w-12 h-12 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} 
                                            rounded-lg flex items-center justify-center mr-4`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg mb-3
                                                ${isDarkMode
                                                    ? 'bg-green-700 text-white'
                                                    : 'bg-green-100 text-green-800'
                                                }`}>
                                                {card.category}
                                            </span>
                                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                                                {card.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-semibold mb-4 text-lg`}>
                                        {card.description}
                                    </p>

                                    {/* Details */}
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                        {card.details}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className={`mt-6 w-full h-1 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} 
                                        rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Skills Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}
                        >
                            Skills & Competencies
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}
                        >
                            Through my experiences in education and community development, I've developed a diverse skill set that enables me to create meaningful impact.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {skillsData.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.id}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    className="group cursor-pointer"
                                >
                                    <motion.div
                                        variants={cardHoverVariants}
                                        className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                                            border-2 rounded-lg p-8 h-full transition-all duration-300`}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start mb-6">
                                            <div className={`flex-shrink-0 w-12 h-12 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} 
                                                rounded-lg flex items-center justify-center mr-4`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg mb-3
                                                    ${isDarkMode
                                                        ? 'bg-green-700 text-white'
                                                        : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {skill.category}
                                                </span>
                                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                                                    {skill.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                            {skill.description}
                                        </p>

                                        {/* Bottom accent */}
                                        <div className={`mt-6 w-full h-1 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} 
                                            rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={`text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
                        border-2 rounded-lg p-8`}
                >
                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full 
                        flex items-center justify-center mx-auto mb-6`}>
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                        My Leadership Philosophy
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed max-w-3xl mx-auto`}>
                        Leadership is a continuous process of learning and reflection. Through servant leadership and systems thinking,
                        I focus on creating sustainable change that connects education, child protection, and community development
                        to address the root causes of social challenges.
                    </p>
                    <div className={`mt-6 inline-flex items-center px-6 py-3 rounded-lg border-2
                        ${isDarkMode
                            ? 'border-green-600 text-green-400 bg-gray-700'
                            : 'border-green-200 text-green-700 bg-green-50'
                        }`}>
                        <Target className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Committed to transformative education and community empowerment</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};