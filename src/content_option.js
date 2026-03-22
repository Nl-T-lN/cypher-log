import homeimage from "./assets/images/Pandablackbg.png";

const logotext = "HOME";
const meta = {
    title: "Nitin Pandey | Offensive Security Engineer",
    description: "I'm Nitin Pandey, an Offensive Security Engineer & Red Teamer specializing in Web Application Penetration Testing, OSINT, and Digital Forensics",
};

const introdata = {
    title: "Hi, I'm Nitin",
    animated: {
        first: "Bug Creator",
        second: "Code breaker",
        third: "Ctf Player",
    },
    //description: "A dedicated security professional with a passion for finding flaws before malicious actors do. My approach combines technical rigor with a creative, adversarial mindset to simulate real-world attacks and strengthen digital defenses. I am also curious for webdev technologies.",
    your_img_url: homeimage,
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m Nitin Pandey, a BTech (ECE) student and practical cybersecurity enthusiast who learns by building. I combine classroom fundamentals with hands-on projects — from creating a voice-controlled robot to experimenting with homelab malware analyses. I work regularly with Kali Linux and common network/forensic tools, and I enjoy automating reconnaissance with custom scripts to sharpen my offensive and defensive understanding. Outside of technical work, I am expanding my skills in web and backend development, graphic design, content writing, and video editing. This mix of creative and technical pursuits helps me communicate complex ideas effectively while continuing to grow as a well-rounded problem-solver.",
};
const worktimeline = [
    // Work timeline omitted - focusing on projects and skills
];

// content_option.js

// ... (keep all your other data like introdata, dataabout, etc.)

const skills = [
    // Languages
    { name: "Python", icon: "devicon-python-plain colored", category: "Languages" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "Languages" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", category: "Languages" },
    { name: "C", icon: "devicon-c-plain colored", category: "Languages" },
    { name: "C++", icon: "devicon-cplusplus-plain colored", category: "Languages" },
    { name: "Java", icon: "devicon-java-plain colored", category: "Languages" },
    { name: "Kotlin", icon: "devicon-kotlin-plain colored", category: "Languages" },
    { name: "Swift", icon: "devicon-swift-plain colored", category: "Languages" },

    // Frontend
    { name: "React", icon: "devicon-react-original colored", category: "Frontend" },
    { name: "Next.js", icon: "devicon-nextjs-plain", category: "Frontend" },
    { name: "HTML5", icon: "devicon-html5-plain colored", category: "Frontend" },
    { name: "CSS3", icon: "devicon-css3-plain colored", category: "Frontend" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored", category: "Frontend" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", category: "Frontend" },
    { name: "Three.js", icon: "devicon-threejs-original", category: "Frontend" },

    // Backend & Tools
    { name: "Node.js", icon: "devicon-nodejs-plain colored", category: "Backend & Tools" },
    { name: "Flask", icon: "devicon-flask-original", category: "Backend & Tools" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", category: "Backend & Tools" },
    { name: "Git", icon: "devicon-git-plain colored", category: "Backend & Tools" },
    { name: "Docker", icon: "devicon-docker-plain colored", category: "Backend & Tools" },
    { name: "Linux", icon: "devicon-linux-plain", category: "Backend & Tools" },
    { name: "Vercel", icon: "devicon-vercel-original", category: "Backend & Tools" },

    // Offensive Security
    { name: "Burp Suite", icon: null, emoji: "🔓", category: "Offensive Security" },
    { name: "Metasploit", icon: null, emoji: "💀", category: "Offensive Security" },
    { name: "Nmap", icon: null, emoji: "📡", category: "Offensive Security" },
    { name: "Hydra", icon: null, emoji: "🐍", category: "Offensive Security" },
    { name: "Wireshark", icon: null, emoji: "🦈", category: "Offensive Security" },
    { name: "Ghidra", icon: null, emoji: "🔬", category: "Offensive Security" },

    // Core Competencies
    { name: "Web Pentesting", icon: null, emoji: "🌐", category: "Core Competencies" },
    { name: "AD Security", icon: null, emoji: "🏢", category: "Core Competencies" },
    { name: "Digital Forensics", icon: null, emoji: "🔍", category: "Core Competencies" },
    { name: "OSINT", icon: null, emoji: "🕵️", category: "Core Competencies" },
];





const services = [
    {
        title: "Web Application Security Assessment",
        description: "Identifying and mitigating vulnerabilities in web applications, from injection flaws to misconfigurations, to ensure robust digital assets.",
    },
    {
        title: "Network & Infrastructure Pentesting",
        description: "Simulating real-world attacks on internal and external networks to uncover security weaknesses in systems like Active Directory.",
    },
    {
        title: "Security Automation & Tooling",
        description: "Developing custom scripts and tools to automate repetitive security tasks, from reconnaissance to log analysis, improving efficiency and response time.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        description: "System Compromise Analysis: A detailed write-up for the 'Lame' machine on HackTheBox, documenting the full attack lifecycle from enumeration to root privilege escalation.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
        description: "DomainIntel: An automated reconnaissance tool written in Python that uses APIs to gather subdomain and port-scanning intelligence on a target.",
        link: "https://github.com/Nl-T-lN",
    },
    {
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        description: "Building a Secure Malware Analysis Homelab: An architectural breakdown of an isolated lab environment using REMnux for safe, dynamic malware analysis.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nitinpandey11223@gmail.com",
    description: "I'm always open to discussing new opportunities, projects, or just connecting with fellow professionals in the security community. Feel free to reach out.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Nl-T-lN",
    linkedin: "https://www.linkedin.com/in/-nitinpandey-",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
