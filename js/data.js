// js/data.js

// --- APTITUDE TEST DATA ---
export const quizQuestions = [
    {
        question: "Which activity sounds most enjoyable to you?",
        options: [
            { text: "Building or repairing things", trait: 'R' },
            { text: "Solving complex math or science problems", trait: 'I' },
            { text: "Creating art, music, or writing stories", trait: 'A' },
            { text: "Helping or teaching others", trait: 'S' }
        ]
    },
    {
        question: "In a team project, you prefer to...",
        options: [
            { text: "Lead the team and persuade others", trait: 'E' },
            { text: "Organize the files, data, and schedule", trait: 'C' },
            { text: "Come up with creative, original ideas", trait: 'A' },
            { text: "Understand the theory behind the project", trait: 'I' }
        ]
    },
    {
        question: "You are most comfortable working with...",
        options: [
            { text: "People and helping them with their problems", trait: 'S' },
            { text: "Data, numbers, and clear instructions", trait: 'C' },
            { text: "Tools, machines, and physical objects", trait: 'R' },
            { text: "Ideas, theories, and abstract concepts", trait: 'I' }
        ]
    },
    {
        question: "Which of these describes you best?",
        options: [
            { text: "Ambitious and influential", trait: 'E' },
            { text: "Practical and down-to-earth", trait: 'R' },
            { text: "Curious and analytical", trait: 'I' },
            { text: "Expressive and imaginative", trait: 'A' }
        ]
    },
    {
        question: "Your ideal work environment would be...",
        options: [
            { text: "A structured office with clear tasks", trait: 'C' },
            { text: "A dynamic place where you can influence decisions", trait: 'E' },
            { text: "A school, hospital, or counseling center", trait: 'S' },
            { text: "A design studio, theater, or concert hall", trait: 'A' }
        ]
    }
];

export const traitDescriptions = {
    R: { name: 'Realistic (The Doer)', stream: 'Science / Vocational', description: 'You are practical, hands-on, and like working with tools, machines, or animals. You enjoy physical tasks and tangible results.', color: 'bg-green-100', textColor: 'text-green-800' },
    I: { name: 'Investigative (The Thinker)', stream: 'Science', description: 'You are analytical, curious, and enjoy solving complex problems. You are drawn to ideas, research, and scientific discovery.', color: 'bg-blue-100', textColor: 'text-blue-800' },
    A: { name: 'Artistic (The Creator)', stream: 'Arts', description: 'You are creative, imaginative, and expressive. You enjoy working in unstructured environments and using your creativity to produce art, music, or writing.', color: 'bg-purple-100', textColor: 'text-purple-800' },
    S: { name: 'Social (The Helper)', stream: 'Arts', description: 'You are empathetic, cooperative, and enjoy helping, teaching, and caring for others. You thrive in collaborative environments.', color: 'bg-pink-100', textColor: 'text-pink-800' },
    E: { name: 'Enterprising (The Persuader)', stream: 'Commerce', description: 'You are ambitious, outgoing, and enjoy leading and influencing people. You are drawn to business, sales, and management roles.', color: 'bg-orange-100', textColor: 'text-orange-800' },
    C: { name: 'Conventional (The Organizer)', stream: 'Commerce', description: 'You are organized, detail-oriented, and enjoy working with data and following set procedures. You value accuracy and efficiency.', color: 'bg-gray-100', textColor: 'text-gray-800' }
};


// --- CAREER PATHS DATA ---
export const careerPaths = {
    "B.Sc. Physics": { description: "Focuses on the fundamental principles of the universe...", govJobs: ["Scientific Officer (BARC, ISRO)", "DRDO Scientist"], privateJobs: ["Data Analyst", "R&D Scientist"], higherStudies: ["M.Sc. in Physics", "M.Tech"] },
    "B.A. History": { description: "Involves the study of past events to understand the present...", govJobs: ["Archaeological Survey of India (ASI)", "Civil Services (IAS, IPS)"], privateJobs: ["Journalist", "Content Writer"], higherStudies: ["M.A. in History/Archaeology", "B.Ed."] },
    "B.Com (Hons)": { description: "Provides in-depth knowledge of accounting, finance, and business...", govJobs: ["Bank PO", "SSC CGL (Auditor)"], privateJobs: ["Chartered Accountant (CA)", "Financial Analyst"], higherStudies: ["M.Com", "MBA (Finance)"] },
    "BBA": { description: "A comprehensive management course...", govJobs: ["Bank Managerial Roles", "PSU Management Trainee"], privateJobs: ["Marketing Manager", "HR Manager"], higherStudies: ["MBA", "PGDM"] },
    "B.Tech Computer Science": {
        description: "A comprehensive engineering degree focusing on the design, development, and testing of software and hardware. It covers programming, algorithms, data structures, and computer networks.",
        govJobs: ["DRDO Scientist", "ISRO Scientist", "NIC Scientist", "IT Officer (Banks & PSUs)"],
        privateJobs: ["Software Development Engineer (SDE)", "Data Scientist", "Cybersecurity Analyst", "Cloud Engineer", "Machine Learning Engineer"],
        higherStudies: ["M.Tech in Computer Science", "MS from abroad", "MBA (Master of Business Administration)"]
    },
};


// --- FIND COLLEGES DATA ---
export const colleges = [
    {
        id: 1,
        name: "AIIMS, Vijaypur, Jammu",
        location: "Jammu",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=AIIMS+Jammu"
    },
    {
        id: 2,
        name: "Amar Singh College",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["B.Sc Nursing", "B.Sc Chemistry"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen", "Labs"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=Amar+Singh+College"
    },
    {
        id: 3,
        name: "Asutosh College",
        location: "Kolkata",
        streams: ["Science", "Commerce", "Arts", "Vocational"],
        courses: ["BBA", "B.Sc. Computer Science", "B.A. Bengali"],
        cutoff: "85%",
        facilities: ["Lab", "Library", "Gym"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=Asutosh+College"
    },
    {
        id: 4,
        name: "Baba Ghulam Shah Badshah University",
        location: "Rajouri",
        streams: ["Science", "Vocational", "Commerce", "Arts"],
        courses: ["B.Tech", "MBA", "B.A", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=BGSBU"
    },
    {
        id: 5,
        name: "Central Sericultural Research and Training Institute",
        location: "Pampore",
        streams: ["Science"],
        courses: ["Sericulture Tech", "Biology"],
        cutoff: "Varies",
        facilities: ["Research Labs", "Library"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=CSRTI"
    },
    {
        id: 6,
        name: "Central University of Jammu",
        location: "Jammu",
        streams: ["Science", "Vocational", "Commerce"],
        courses: ["B.Tech", "MBA", "B.Sc", "B.Com"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=Central+Univ.+Jammu"
    },
    {
        id: 7,
        name: "Central University of Kashmir",
        location: "Ganderbal",
        streams: ["Science", "Vocational", "Commerce", "Arts"],
        courses: ["B.Tech", "MBA", "B.A Legal Studies", "B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Hostel", "Library"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Central+Univ.+Kashmir"
    },
    {
        id: 8,
        name: "Cluster University, Srinagar",
        location: "Srinagar",
        streams: ["Science", "Vocational", "Commerce", "Arts"],
        courses: ["B.Tech", "MBA", "B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=Cluster+Univ.+Srinagar"
    },
    {
        id: 9,
        name: "Cluster University of Jammu",
        location: "Jammu",
        streams: ["Commerce", "Science"],
        courses: ["B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=Cluster+Univ.+Jammu"
    },
    {
        id: 10,
        name: "Durgapur Government College",
        location: "Durgapur",
        streams: ["Science", "Commerce", "Arts"],
        courses: ["B.Sc. Botany", "B.Com (General)", "B.A. Political Science"],
        cutoff: "80%",
        facilities: ["Hostel", "Lab", "Library"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=Durgapur+Govt."
    },
    {
        id: 11,
        name: "Gandhi Memorial College",
        location: "Srinagar",
        streams: ["Commerce", "Science"],
        courses: ["B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GM+College"
    },
    {
        id: 12,
        name: "GDC Bhaderwah",
        location: "Bhaderwah",
        streams: ["Commerce", "Science"],
        courses: ["B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=GDC+Bhaderwah"
    },
    {
        id: 13,
        name: "Govt Degree College GANDERBAL",
        location: "Ganderbal",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GDC+Ganderbal"
    },
    {
        id: 14,
        name: "Govt. College For Women, Gandhi Nagar",
        location: "Jammu",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen", "Common Room"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GCW+Gandhi+Nagar"
    },
    {
        id: 15,
        name: "Govt. College for Women",
        location: "Jammu",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Labs"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=GCW+Jammu"
    },
    {
        id: 16,
        name: "Govt. College for Women Nawakadal",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["B.Sc Home Science"],
        cutoff: "Varies",
        facilities: ["Library", "Labs"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=GCW+Nawakadal"
    },
    {
        id: 17,
        name: "Govt. Gandhi Memorial Science College, Jammu",
        location: "Jammu",
        streams: ["Science"],
        courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Geology"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GGM+Science"
    },
    {
        id: 18,
        name: "Govt. M.A.M PG College",
        location: "Jammu",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=MAM+PG+College"
    },
    {
        id: 19,
        name: "Govt. Maulana Azad Memorial College",
        location: "Jammu",
        streams: ["Arts"],
        courses: ["B.A"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=MAM+College"
    },
    {
        id: 20,
        name: "Government College of Engineering and Technology, Jammu",
        location: "Jammu",
        streams: ["Science", "Vocational"],
        courses: ["B.E. Computer Engineering", "B.E. Civil Engineering"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GCET+Jammu"
    },
    {
        id: 21,
        name: "Government College of Engineering and Technology, Safapora Ganderbal",
        location: "Ganderbal",
        streams: ["Science", "Vocational"],
        courses: ["B.Tech Civil", "B.Tech Mechanical"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=GCET+Ganderbal"
    },
    {
        id: 22,
        name: "Government Degree College(Boys), Pulwama",
        location: "Pulwama",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GDC+Pulwama"
    },
    {
        id: 23,
        name: "Government Degree College, Akhnoor",
        location: "Akhnoor",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GDC+Akhnoor"
    },
    {
        id: 24,
        name: "Government Degree College Anantnag",
        location: "Anantnag",
        streams: ["Science", "Arts", "Commerce"],
        courses: ["B.Sc", "B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=GDC+Anantnag"
    },
    {
        id: 25,
        name: "Government Degree College, Baramulla",
        location: "Baramulla",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=GDC+Baramulla"
    },
    {
        id: 26,
        name: "Government Degree College, Bemina",
        location: "Srinagar",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=GDC+Bemina"
    },
    {
        id: 27,
        name: "Government Degree College for Women, Anantnag",
        location: "Anantnag",
        streams: ["Arts", "Commerce", "Science"],
        courses: ["B.A", "B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GDCW+Anantnag"
    },
    {
        id: 28,
        name: "Government Degree College for Women, Jammu",
        location: "Jammu",
        streams: ["Commerce"],
        courses: ["B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=GDCW+Jammu"
    },
    {
        id: 29,
        name: "Government Degree College for Women, Sopore",
        location: "Sopore",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GDCW+Sopore"
    },
    {
        id: 30,
        name: "Government Degree College, Kargil",
        location: "Kargil",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GDC+Kargil"
    },
    {
        id: 31,
        name: "Government Degree College, Kathua",
        location: "Kathua",
        streams: ["Science", "Arts", "Commerce"],
        courses: ["B.Sc", "B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Lab", "Library", "Gym"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=GDC+Kathua"
    },
    {
        id: 32,
        name: "Government Degree College, Kulgam",
        location: "Kulgam",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=GDC+Kulgam"
    },
    {
        id: 33,
        name: "Government Degree College, Kunjwani",
        location: "Jammu",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=GDC+Kunjwani"
    },
    {
        id: 34,
        name: "Government Degree College, Magan",
        location: "Magan",
        streams: ["Arts"],
        courses: ["B.A"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=GDC+Magan"
    },
    {
        id: 35,
        name: "Government Degree College, Marh",
        location: "Marh",
        streams: ["Arts"],
        courses: ["B.A"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GDC+Marh"
    },
    {
        id: 36,
        name: "Government Degree College, Nawakadal",
        location: "Srinagar",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GDC+Nawakadal"
    },
    {
        id: 37,
        name: "Government Degree College, Paloura",
        location: "Jammu",
        streams: ["Arts"],
        courses: ["B.A"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GDC+Paloura"
    },
    {
        id: 38,
        name: "Government Degree College, Pampore",
        location: "Pampore",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=GDC+Pampore"
    },
    {
        id: 39,
        name: "Government Degree College, Rajouri",
        location: "Rajouri",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=GDC+Rajouri"
    },
    {
        id: 40,
        name: "Government Degree College, Srinagar",
        location: "Srinagar",
        streams: ["Arts", "Commerce"],
        courses: ["B.A", "B.Com"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=GDC+Srinagar"
    },
    {
        id: 41,
        name: "Government Medical College, Anantnag, Kashmir",
        location: "Anantnag",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=GMC+Anantnag"
    },
    {
        id: 42,
        name: "Government Medical College, Baramula, Kashmir",
        location: "Baramulla",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=GMC+Baramula"
    },
    {
        id: 43,
        name: "Government Medical College, Doda, Kashmir",
        location: "Doda",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GMC+Doda"
    },
    {
        id: 44,
        name: "Government Medical College, Handwara, Kashmir",
        location: "Handwara",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GMC+Handwara"
    },
    {
        id: 45,
        name: "Government Medical College, Jammu",
        location: "Jammu",
        streams: ["Science"],
        courses: ["MBBS", "MD", "MS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=GMC+Jammu"
    },
    {
        id: 46,
        name: "Government Medical College, Kathua, Jammu",
        location: "Kathua",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=GMC+Kathua"
    },
    {
        id: 47,
        name: "Government Medical College, Rajouri, Jammu",
        location: "Rajouri",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=GMC+Rajouri"
    },
    {
        id: 48,
        name: "Government Medical College, Srinagar",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["MBBS", "MD", "MS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=GMC+Srinagar"
    },
    {
        id: 49,
        name: "Government Medical College Udhampur, Jammu",
        location: "Udhampur",
        streams: ["Science"],
        courses: ["MBBS"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=GMC+Udhampur"
    },
    {
        id: 50,
        name: "IIM Jammu - Indian Institute of Management",
        location: "Jammu",
        streams: ["Commerce"],
        courses: ["MBA", "PhD", "Executive MBA"],
        cutoff: "Varies",
        facilities: ["Hostel", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=IIM+Jammu"
    },
    {
        id: 51,
        name: "IIT Jammu - Indian Institute of Technology",
        location: "Jammu",
        streams: ["Science", "Vocational"],
        courses: ["B.Tech Computer Science", "B.Tech Mechanical", "B.Tech Electrical"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=IIT+Jammu"
    },
    {
        id: 52,
        name: "Islamia College of science and commerce",
        location: "Srinagar",
        streams: ["Commerce", "Science"],
        courses: ["B.Com", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=Islamia+College"
    },
    {
        id: 53,
        name: "Islamic University of Science and Technology",
        location: "Awantipora",
        streams: ["Science", "Vocational", "Commerce", "Arts"],
        courses: ["B.Tech", "MBA", "B.A", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen", "Common Room"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=IUST"
    },
    {
        id: 54,
        name: "Jadavpur University",
        location: "Kolkata",
        streams: ["Science", "Arts", "Vocational"],
        courses: ["B.E. Computer Science", "B.A. English", "B.Sc. Mathematics"],
        cutoff: "97%",
        facilities: ["Hostel", "Lab", "Library", "Internet"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=Jadavpur+University"
    },
    {
        id: 55,
        name: "Kashmir University",
        location: "Srinagar",
        streams: ["Commerce", "Arts", "Science"],
        courses: ["MBA", "B.A", "LL.B", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Hostel", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Kashmir+Univ."
    },
    {
        id: 56,
        name: "Krishnath College",
        location: "Berhampore",
        streams: ["Science", "Commerce", "Arts"],
        courses: ["B.Sc. Geography", "B.Com (Hons)", "B.A. Sanskrit"],
        cutoff: "78%",
        facilities: ["Hostel", "Library"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Krishnath+College"
    },
    {
        id: 57,
        name: "Maulana Azad College",
        location: "Kolkata",
        streams: ["Science", "Commerce", "Arts"],
        courses: ["B.Com (Hons)", "B.Sc. Zoology", "B.A. Urdu"],
        cutoff: "88%",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=Maulana+Azad"
    },
    {
        id: 58,
        name: "NIT Srinagar - National Institute Of Technology",
        location: "Srinagar",
        streams: ["Science", "Vocational", "Commerce"],
        courses: ["B.Tech Civil Engineering", "M.Tech", "MBA"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Internet"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=NIT+Srinagar"
    },
    {
        id: 59,
        name: "Presidency University",
        location: "Kolkata",
        streams: ["Science", "Arts"],
        courses: ["B.Sc. Physics", "B.A. History", "B.Sc. Chemistry"],
        cutoff: "95%",
        facilities: ["Hostel", "Lab", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Presidency+University"
    },
    {
        id: 60,
        name: "S.P. College, Srinagar",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=SP+College"
    },
    {
        id: 61,
        name: "SKUAST K, Srinagar",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["B.V.Sc", "B.Sc Agriculture"],
        cutoff: "Varies",
        facilities: ["Hostel", "Labs", "Library"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=SKUAST+K"
    },
    {
        id: 62,
        name: "School of Legal Studies - Central University of Kashmir",
        location: "Ganderbal",
        streams: ["Arts"],
        courses: ["LL.B", "LL.M"],
        cutoff: "Varies",
        facilities: ["Library", "Moot Court"],
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=SLS+CUK"
    },
    {
        id: 63,
        name: "Sher-I-Kashmir Instt. of Medical Sciences, (Deened Uni.), Srinagar",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["MBBS", "MD", "M.Ch"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Hospital"],
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=SKIMS"
    },
    {
        id: 64,
        name: "Sher-e-Kashmir University of Agricultural Sciences & Technology of Jammu",
        location: "Jammu",
        streams: ["Science"],
        courses: ["B.V.Sc & A.H.", "B.Sc Agriculture"],
        cutoff: "Varies",
        facilities: ["Hostel", "Farms", "Labs", "Library"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=SKUAST+Jammu"
    },
    {
        id: 65,
        name: "Shri Mata Vaishno Devi University",
        location: "Katra",
        streams: ["Science", "Vocational", "Commerce", "Arts"],
        courses: ["B.Tech", "MBA", "B.A", "B.Sc"],
        cutoff: "Varies",
        facilities: ["Hostel", "Lab", "Library", "Gym"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=SMVDU"
    },
    {
        id: 66,
        name: "Siliguri College",
        location: "Siliguri",
        streams: ["Science", "Commerce", "Arts"],
        courses: ["B.Com in Accountancy", "B.Sc. in Physics", "B.A. in Sociology"],
        cutoff: "82%",
        facilities: ["Library", "Canteen", "Common Room"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=Siliguri+College"
    },
    {
        id: 67,
        name: "Srinagar Women College",
        location: "Srinagar",
        streams: ["Arts"],
        courses: ["B.A"],
        cutoff: "Varies",
        facilities: ["Library", "Canteen"],
        image: "https://placehold.co/600x400/6366f1/ffffff?text=Srinagar+Women+College"
    },
    {
        id: 68,
        name: "The Business School, University of Jammu",
        location: "Jammu",
        streams: ["Commerce"],
        courses: ["MBA"],
        cutoff: "Varies",
        facilities: ["Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/10b981/ffffff?text=TBS+Jammu"
    },
    {
        id: 69,
        name: "The Law School, University of Jammu",
        location: "Jammu",
        streams: ["Arts"],
        courses: ["LL.B", "B.A LL.B"],
        cutoff: "Varies",
        facilities: ["Library", "Moot Court"],
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=Law+School+Jammu"
    },
    {
        id: 70,
        name: "University Of Jammu",
        location: "Jammu",
        streams: ["Science", "Vocational"],
        courses: ["B.E", "B.Tech"],
        cutoff: "Varies",
        facilities: ["Hostel", "Library", "Gym"],
        image: "https://placehold.co/600x400/14b8a6/ffffff?text=Univ.+of+Jammu"
    },
    {
        id: 71,
        name: "University of Kashmir",
        location: "Srinagar",
        streams: ["Science"],
        courses: ["B.Sc"],
        cutoff: "Varies",
        facilities: ["Hostel", "Library", "Wi-Fi"],
        image: "https://placehold.co/600x400/ef4444/ffffff?text=Kashmir+University"
    }
];