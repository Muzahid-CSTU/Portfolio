export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  details?: string[];
}

export const education: Education[] = [
  {
    degree: "BSc in Computer Science and Engineering (CSE)",
    institution: "Chandpur Science and Technology University",
    period: "Session 2022-23",
    status: "3rd year, 2nd semester",
  },
];
