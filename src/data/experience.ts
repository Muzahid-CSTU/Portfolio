export interface VideoItem {
  title: string;
  url: string; // YouTube / Facebook link
  thumbnail?: string; // put the file in /public/experience/
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  videos?: VideoItem[];
}

export const experience: Experience[] = [
  {
    role: "Creative Visual Coordinator",
    company: "Shohoj Coding",
    period: "Jan 2025 - Apr 2026",
    points: [
      "Produced video and visual content for student-focused learning campaigns, supporting outreach and engagement.",
      "Collaborated with the operations team for Tech Career Hunt 2025 as Creative Coordinator, representing Chandpur Science and Technology University.",
      "Contributed creative ideas to improve the student learning experience.",
    ],
    videos: [
      { title: "Campus Campaign Video", url: "https://www.facebook.com/reel/1390477355770576" },
      { title: "Tech Career Outreach Reel", url: "https://www.facebook.com/reel/965595895811462" },
    ],
  },
];
