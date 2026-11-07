export interface Activity {
  title: string;
  organization: string;
  period?: string;
  description: string;
  link?: string; // LinkedIn post or certificate link
  image?: string; // original photo in /public/events/ (not a screenshot)
}

export interface CoCurricularTab {
  id: "ambassadorships" | "mentoring" | "events" | "roles";
  label: string;
  items: Activity[];
}

export const coCurricular: CoCurricularTab[] = [
  {
    id: "ambassadorships",
    label: "Ambassadorships",
    items: [
      {
        title: "Campus Ambassador (Phitronista'25)",
        organization: "Phitron",
        period: "Jul 2025 - Oct 2025",
        description:
          "Ranked 4th among all ambassadors and received a Certificate of Recognition for student engagement.",
        image: "/events/phitronista.jpg",
      },
      {
        title: "Campus Ambassador",
        organization: "Shohoj Coding",
        description: "Student outreach and engagement. Earned a Certificate of Leadership.",
      },
      {
        title: "Campus Ambassador",
        organization: "Innovation Olympiad (Bangla Innovator)",
        description:
          "Representing Chandpur Science and Technology University and promoting innovation and problem-solving on campus.",
        image: "/events/BanglaInovation.jpg",
      },
    ],
  },
  {
    id: "mentoring",
    label: "Mentoring",
    items: [
      {
        title: "Student Mentor and Private Tutor",
        organization: "Independent",
        period: "2020 - Present",
        description:
          "Taught and mentored 80+ online and 25+ offline students at SSC and HSC level.",
      },
      {
        title: "C++ Basics & STL for Competitive Programming",
        organization: "CSTU Computer and Programming Club",
        description:
          "Interactive session for 1st-year students: fast I/O, string handling, time-limit reasoning, integer overflow and the STL toolbox (vectors, pairs, sets, maps).",
        image: "/events/session.jpg",
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    items: [
      {
        title: "Host, July Mass Uprising Day 2026",
        organization: "Chandpur Science and Technology University",
        period: "2026",
        description: "Hosted the programme in front of guests and attendees.",
        link: "https://lnkd.in/p/gZXe3wWx",
        image: "/events/36July.jpeg",
      },
      {
        title: "Host, Monetize Your Apps & Ideas in bdapps",
        organization: "CSTU",
        period: "19 Nov 2025",
        description:
          "Hosted a university seminar with four speakers from the bdapps National Appstore Project covering the bdapps ecosystem, monetization strategies and practical guidelines for developers.",
        image: "/events/bdapps.jpeg",
      },
      {
        title: "Campus Coder 2025",
        organization: "Phitron (sponsor)",
        period: "2025",
        description:
          "Conceptualized and ran a campus-wide programming contest, managing logistics and student participation.",
      },
      {
        title: "Phitron Online Session",
        organization: "Phitron",
        period: "2025",
        description:
          "Organized and hosted an official online session at the university to guide aspiring programmers.",
      },
      {
        title: "Tech Career Hunt 2025 (Operation Team)",
        organization: "Shohoj Coding",
        period: "2025",
        description: "Creative Coordinator representing Chandpur Science and Technology University.",
      },
    ],
  },
  {
    id: "roles",
    label: "Additional Roles",
    items: [
      {
        title: "Treasurer",
        organization: "CSTU Computer and Programming Club",
        period: "Jan 2025 - Present",
        description:
          "Manage club finances and event budgets, and help organize coding contests and tech workshops.",
      },
      {
        title: "Secretary of Science & Technology",
        organization: "Greater Cumilla Student Welfare Association",
        period: "Oct 2025 - Present",
        description:
          "Lead technology-focused initiatives and support welfare activities for the student community.",
      },
    ],
  },
];

// Original photos only. Put files in /public/events/
export const gallery: { src: string; alt: string }[] = [
  { src: "/events/36July.jpeg", alt: "July Mass Uprising Day 2026" },
  { src: "/events/bdapps.jpeg", alt: "Monetize Your Apps & Ideas in bdapps" },
  { src: "/events/phitronista.jpg", alt: "Campus Ambassador (Phitronista'25)" },
  { src: "/events/BanglaInovation.jpg", alt: "Innovation Olympiad (Bangla Innovator)" },
  { src: "/events/session.jpg", alt: "C++ Basics & STL for Competitive Programming" },
  { src: "/events/ICPC25.jpg", alt: "ICPC Asia Dhaka Regional 2025" },
];
