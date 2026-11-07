export interface CpStat {
  value: string;
  label: string;
}

export interface CpAchievement {
  title: string;
  event: string;
  year: string;
  result: string;
  description: string;
  link?: string; // LinkedIn post or certificate link
  image?: string; // original photo in /public/cp/ (not a screenshot)
}

export interface CpProfile {
  platform: string;
  handle: string;
  url: string;
}

export const cpStats: CpStat[] = [
  { value: "2x", label: "ICPC Dhaka Regional" },
  { value: "1477", label: "CodeChef Rating (2★)" },
  { value: "4th", label: "BAIUST Junior IUPC 2025" },
  { value: "3", label: "National IUPCs" },
];

export const cpAchievements: CpAchievement[] = [
  {
    title: "ICPC Asia Dhaka Regional 2025",
    event: "Hosted by BUBT",
    year: "2025",
    result: "239th of 313 teams",
    description:
      "Team CSTU-3-Billions qualified from 367th of 1842 teams in the preliminary round, then solved problem J and worked on problem F at the regional contest. Second ICPC qualification.",
    link: "https://lnkd.in/p/gpvArT5G",
    image: "/events/ICPC25.jpg",
  },
  {
    title: "ICPC Asia Dhaka Regional 2024",
    event: "ICPC Dhaka Regional",
    year: "2024",
    result: "Participant, team leader",
    description: "Led team CSTU-3-Billions at the ICPC Dhaka Regional.",
  },
  {
    title: "CodeChef 2★",
    event: "CodeChef",
    year: "2025",
    result: "Rating 1477",
    description:
      "Reached 2★ in just 5 contests. In Starters 211 (Div 4) secured a global rank of 524 and solved 5 of 7 problems.",
    link: "[TODO: LinkedIn post URL]",
  },
  {
    title: "BAIUST Junior IUPC 2025",
    event: "Inter University Programming Contest",
    year: "2025",
    result: "4th place",
    description:
      "The team's first ranked finish in a programming contest, as team CSTU-3-Billions.",
    link: "https://lnkd.in/p/g9JXni7C",
  },
  {
    title: "National IUPCs",
    event: "KUET IUPC, MU IUPC, CUET IUPC",
    year: "2025",
    result: "Participant",
    description: "Participated in three national inter-university programming contests.",
  },
  {
    title: "Regional Contests",
    event: "Cumilla Regional IUPC (2 times), CoU Regional Programming Contest",
    year: "2025",
    result: "Participant",
    description:
      "Participated in regional programming contests with team CSTU-3-Billions.",
  },
];

export const cpProfiles: CpProfile[] = [
  {
    platform: "Codeforces",
    handle: "Muzahid.Gazi",
    url: "https://codeforces.com/profile/Muzahid.Gazi",
  },
  {
    platform: "CodeChef",
    handle: "muzahid_cstu",
    url: "https://www.codechef.com/users/muzahid_cstu",
  },
];
