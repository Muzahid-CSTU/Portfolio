export interface SocialLink {
  name: string;
  url: string;
  icon: string; // react-icons name
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Muzahid-CSTU", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kaji-muzahidul-islam",
    icon: "FaLinkedin",
  },
  { name: "Facebook", url: "[TODO: Facebook profile URL]", icon: "FaFacebook" },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Muzahid.Gazi",
    icon: "SiCodeforces",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/muzahid_cstu",
    icon: "SiCodechef",
  },
];

export const contact = {
  name: "Kaji Muzahidul Islam",
  email: "k.muzahid.islam@gmail.com",
  phone: "01647539095",
  // wa.me needs the country code and no leading 0 or "+"
  whatsapp: "8801647539095",
  location: "Chandpur Sadar, Chattagram",
};

export const site = {
  title: "Kaji Muzahidul Islam | Full Stack Web Developer",
  designation: "Full Stack Web Developer",
  typedRoles: [
    "Full Stack Web Developer",
    "Competitive Programmer",
    "Event Host & Mentor",
  ],
  intro:
    "2-time ICPC Regionalist and CodeChef 2★. I build full stack web apps and love mentoring students and hosting events.",
  resume: "/resume.pdf",
  photo: "/photo.jpg",
};
