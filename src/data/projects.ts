export interface Project {
  id: string;
  name: string;
  image: string; // put the file in /public/projects/
  shortDescription: string;
  description: string;
  techStack: string[];
  features: string[];
  liveLink: string;
  githubLink: string; // client repo only
  challenges: string[];
  futurePlans: string[];
}

// Anything marked [TODO] is information only you can provide.
export const projects: Project[] = [
  {
    id: "bazardor",
    name: "BazarDor (বাজার দর)",
    image: "/projects/bazardor.png",
    shortDescription:
      "A price-tracking dashboard for daily grocery essentials with secure sign-in.",
    description:
      "BazarDor is a modern web platform to monitor, track and compare the daily market prices of essential commodities. It categorizes up-to-date rates for staples such as rice, lentils, oil, vegetables, fish, meat, dairy and spices, helping consumers make informed purchasing decisions. Users can securely sign up, manage their profile and browse prices through a responsive interface.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "BetterAuth",
      "MongoDB",
      "Context API",
      "react-hot-toast",
    ],
    features: [
      "Multi-provider authentication with BetterAuth (email/password, Google and GitHub OAuth).",
      "Real-time toast notifications for sign-in, account creation, logout, profile updates and validation errors.",
      "Skeleton loaders on profile and data-fetching views to avoid layout shifts.",
      "Category-based filtering (rice, lentils, oil, vegetables, fish, meat, dairy, spices) with price breakdowns.",
      "Profile dashboard: view account details, preview OAuth avatar, update display name and sign out.",
    ],
    liveLink: "https://bazar-dor-by-muzahid.vercel.app/",
    githubLink: "https://github.com/Muzahid-CSTU/Bazar-Dor",
    challenges: [
      "[Setting up OAuth providers or handling auth state]",
    ],
    futurePlans: [
      "[Price history charts, price alerts, admin panel]",
    ],
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",
    shortDescription:
      "A workout library where users build a daily plan and save workouts for later.",
    description:
      "FitLog is a simple workout library where users can explore workouts, view workout details, add workouts to today's plan and save workouts for later. The plan is limited to five workouts and is managed from a My Plan page. Data is stored in localStorage so it survives a page refresh.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "react-hot-toast",
    ],
    features: [
      "Browse the workout library with workout cards.",
      "View detailed information about each workout.",
      "Add workouts to today's plan, with a maximum of 5 workouts.",
      "Save workouts for later.",
      "Manage the plan from My Plan: sorting, metrics, mark as done and remove.",
      "Data persists in localStorage after refresh.",
    ],
    liveLink: "https://fitlog-three-dun.vercel.app/",
    githubLink: "https://github.com/Muzahid-CSTU/FITLOG",
    challenges: [
      "[Enforcing the 5-workout limit or syncing state with localStorage]",
    ],
    futurePlans: [
      "[User accounts with a database, progress charts]",
    ],
  },
  {
    id: "dev-stack",
    name: "Dev Stack",
    image: "/projects/devstack.png",
    shortDescription:
      "A React app where you build your own tech stack from a list of technologies.",
    description:
      "Dev Stack is a small React project that shows a list of web technologies as cards. Users add the ones they like to a sidebar to build their own stack, remove single items or clear everything. The technology data comes from a JSON file instead of being hardcoded. Toast messages appear when adding, removing or trying to add a duplicate. It was built as an assignment to practice React.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
      "Vite",
      "JSON",
    ],
    features: [
      "Technology cards loaded from a JSON file, in a grid of 3 columns on desktop, 2 on tablet and 1 on mobile.",
      "Each card shows icon, badge, category, difficulty and rating.",
      "Add to Stack: adds the item to the sidebar instantly, warns on duplicates and disables the button after adding.",
      "Remove one item or all items from the sidebar.",
      "Responsive design with a sticky navbar, hamburger menu on mobile, gradient hero and footer.",
    ],
    liveLink: "https://devstack-muzahid.netlify.app/",
    githubLink: "https://github.com/Muzahid-CSTU/DevStack-A5",
    challenges: [
      "[Managing sidebar state]",
    ],
    futurePlans: [
      "[Search and filter, share your stack]",
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
