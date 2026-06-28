// data.js 
export const SKILLS = [
  { name: "HTML5",      icon: "🌐", level: "Proficient",   strong: true  },
  { name: "CSS3",       icon: "🎨", level: "Proficient",   strong: true  },
  { name: "JavaScript", icon: "⚡", level: "Intermediate", strong: true  },
  { name: "React.js",   icon: "⚛️",  level: "Learning",    strong: false },
  { name: "Git",        icon: "🔀", level: "Proficient",   strong: true  },
  { name: "GitHub",     icon: "🐙", level: "Proficient",   strong: true  },
  { name: "Responsive", icon: "📱", level: "Good",         strong: false },
  { name: "REST APIs",  icon: "🔗", level: "Beginner",     strong: false },
];

export const PROJECTS = [
  {
    title: "TicketVerse",
    icon: "🎟️",
    desc: "A live event ticketing platform where users can browse events, pick seats, and complete bookings. Built with clean component architecture and fully deployed.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://ticket-verse.netlify.app/",
  },
  {
    title: "StayScape",
    icon: "🏡",
    desc: "Travel accommodation listing app with property cards, filtering by location, and a responsive layout that works across all screen sizes.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://stayscape123.netlify.app/",
  },
];

export const ABOUT_CARDS = [
  { icon: "🎓", label: "University",  val: "VIT Chennai",               sub: "B.Tech — Computer Science & Engineering" },
  { icon: "📅", label: "Batch",       val: "2024 – 2028",               sub: "First Year" },
  { icon: "💡", label: "Interests",   val: "Frontend & UI Engineering", sub: "React, component architecture, design systems" },
  { icon: "🎯", label: "Looking for", val: "Frontend Internship",       sub: "Available for immediate start" },
];

export const CONTACT_LINKS = [
  { href: "mailto:kdesai626@gmail.com",                     label: "kdesai626@gmail.com",    external: false },
  { href: "tel:7357380687",                                  label: "+91 7357380687",          external: false },
  { href: "https://github.com/kunal290506",                 label: "github.com/kunal290506", external: true  },
  { href: "https://linkedin.com/in/kunal-desai-8b8418343", label: "LinkedIn Profile",        external: true  },
];