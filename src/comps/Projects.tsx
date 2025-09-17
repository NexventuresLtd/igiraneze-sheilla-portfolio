import { Download, Eye, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface PortProps {
    isDarkMode: boolean;
}

interface PopupData {
    title: string;
    description: string;
    details: string[];
}

export const RenderPortfolio = ({ isDarkMode }: PortProps) => {
    const [selectedItem, setSelectedItem] = useState<PopupData | null>(null);

    const portfolioArtefacts = [
        {
            id: 1,
            title: "Education Initiatives at Mahama Refugee Camp",
            type: "Education Development",
            description: "Improved learning opportunities for children and youth through teacher training and resource provision.",
            image: "/logos/meeting1.jpeg",
            tags: ["Education", "Teacher Training", "Resource Management"]
        },
        {
            id: 2,
            title: "Peer Facilitation with Save the Children",
            type: "Youth Development",
            description: "Facilitated peer learning sessions focusing on life skills, education awareness, and leadership training.",
            image: "/logos/meeting2.jpeg",
            tags: ["Peer Learning", "Life Skills", "Leadership Training"]
        },
        {
            id: 3,
            title: "Rwanda Book Mobile Literacy Program",
            type: "Literacy Initiative",
            description: "Promoted reading culture through mobile library programs and storytelling sessions.",
            image: "/logos/meeting3.jpeg",
            tags: ["Literacy", "Community Engagement", "Reading Culture"]
        },
        {
            id: 4,
            title: "Child Protection and Rights Advocacy",
            type: "Community Development",
            description: "Supported child protection campaigns and early childhood development programs.",
            image: "/logos/meeting1.jpeg",
            tags: ["Child Protection", "Advocacy", "Community Development"]
        }
    ];

    const experienceDetails: Record<string, PopupData> = {
        "Education Initiatives at Mahama Refugee Camp": {
            title: "Education Development - Mahama Refugee Camp",
            description: "Comprehensive program to improve education quality through teacher training, resource provision, and safe learning environments",
            details: [
                "Trained 45+ teachers in modern pedagogical methods and child-centered learning",
                "Distributed educational materials to 500+ students across 3 camp schools",
                "Established 5 safe classroom spaces for vulnerable children",
                "Developed peer mentoring program that improved student retention by 35%",
                "Organized community awareness sessions on importance of education"
            ]
        },
        "Peer Facilitation with Save the Children": {
            title: "Save the Children Rwanda - Peer Facilitator",
            description: "Facilitated learning and development sessions for youth in Mahama Refugee Camp",
            details: [
                "Conducted 60+ peer learning sessions on life skills and education awareness",
                "Mentored 120+ young people in leadership and personal development",
                "Developed curriculum for youth empowerment workshops",
                "Trained 20 youth leaders to continue facilitation work",
                "Built strong communication and teamwork skills while promoting children's rights"
            ]
        },
        "Rwanda Book Mobile Literacy Program": {
            title: "Rwanda Book Mobile - Volunteer",
            description: "Promoted literacy and love for reading through mobile library initiatives",
            details: [
                "Organized weekly reading activities for 200+ children",
                "Conducted storytelling sessions that improved literacy engagement by 40%",
                "Collaborated with teachers and parents to support reading at home",
                "Managed mobile library logistics and book distribution",
                "Strengthened community engagement through literacy events"
            ]
        },
        "Child Protection and Rights Advocacy": {
            title: "Plan International Rwanda - Child Protection Assistant",
            description: "Supported child protection and early childhood development programs",
            details: [
                "Assisted in implementing child protection policies in 3 communities",
                "Supported education projects ensuring safe learning environments",
                "Participated in National Dialogue on Positive Parenting",
                "Contributed to child protection campaigns in Bugesera and Nyaruguru",
                "Gained experience in advocacy, child rights and program management"
            ]
        }
    };

    const handleViewClick = (title: string) => {
        if (experienceDetails[title]) {
            setSelectedItem(experienceDetails[title]);
        }
    };

    const closePopup = () => {
        setSelectedItem(null);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const popupVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-full md:max-w-11/12 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    Education & Community Development Portfolio
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
                >
                    A collection of projects and initiatives focused on improving education quality, promoting child protection, and empowering youth in refugee communities.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {portfolioArtefacts.map((artefact) => (
                        <motion.div
                            key={artefact.id}
                            variants={itemVariants}
                            whileHover="hover"
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden transition-all duration-300`}
                        >
                            <div className="overflow-hidden">
                                <motion.img
                                    src={artefact.image}
                                    alt={artefact.title}
                                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                            <div className="p-5">
                                <div className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-green-600' : 'bg-green-100'} ${isDarkMode ? 'text-white' : 'text-green-800'} text-sm font-medium rounded-full mb-4`}>
                                    {artefact.type}
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {artefact.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed text-sm`}>
                                    {artefact.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {artefact.tags.map((tag) => (
                                        <span key={tag} className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} text-xs rounded`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleViewClick(artefact.title)}
                                        className={`flex items-center px-4 py-2 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-lg text-sm font-medium transition-colors duration-200 flex-1 justify-center`}
                                    >
                                        <Eye className="w-4 h-4 mr-2" />
                                        View Details
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex hidden items-center px-4 py-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg text-sm font-medium transition-colors duration-200`}
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Popup Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50"
                            onClick={closePopup}
                        >
                            <motion.div
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {selectedItem.title}
                                        </h3>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={closePopup}
                                            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                        >
                                            <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                                        </motion.button>
                                    </div>

                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                        {selectedItem.description}
                                    </p>

                                    <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Key Achievements & Responsibilities:
                                    </h4>

                                    <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {selectedItem.details.map((detail, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start"
                                            >
                                                <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? 'bg-green-500' : 'bg-green-400'}`}></span>
                                                {detail}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={closePopup}
                                        className={`mt-6 px-6 py-2 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-lg font-medium transition-colors duration-200`}
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}