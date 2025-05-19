// Waypoint
// import WaypointDesktop1 from '/src/assets/work/Waypoint/Waypoint - App - Desktop 1.webp'
// import WaypointDesktop2 from '/src/assets/work/Waypoint/Waypoint - Marketing Site - Desktop 1.webp'

// RullowJacobs
// import RullowJacobsDesktop1 from '/src/assets/work/RullowJacobs/Rullow Jacobs-Desktop-1.webp'
// import RullowJacobsDesktop2 from '/src/assets/work/RullowJacobs/Rullow Jacobs-Desktop-2.webp'

// SitesExplained
// import SitesExplainedDesktop1 from '/src/assets/work/SitesExplained/sitesexplained-desktop-1.webp'
// import SitesExplainedDesktop2 from '/src/assets/work/SitesExplained/sitesexplained-desktop-2.webp'
//import SitesExplainedDesktop3 from '/src/assets/work/SitesExplained/sitesexplained-desktop-3.webp'
// import SitesExplainedDesktop4 from '/src/assets/work/SitesExplained/sitesexplained-desktop-4.webp'

// Love Circular
// import LearningPlatform from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile display.webp'
// import LearningPlatformSecond from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile screens.webp'


// Type definition for timeline entries
export type DisplayWork = {
    id: number;
    title: string;
    subtitle?: string;
    images?: { src: string; objectPosition?: string }[];
    content: string[];
  };
  
  export const workData: DisplayWork[] = [
    {
      id: 1,
      title: "Love Circular Learning Platform Mobile App",
      images: [
        { src: "/assets/work/LC/Love Circular - Learning Platform - Mobile display.webp", objectPosition: "0% 0%" },
        { src: "/assets/work/LC/Love Circular - Learning Platform - Mobile screens.webp", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
    {
      id: 2,
      title: "Love Circular Year in Review 2023",
      images: [
        { src: "/assets/work/LC/LC 2023 in Review Site.gif", objectPosition: "0% 0%" },
        { src: "/assets/work/LC/LC In Review 2023 Hire Count.webp", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
    {
      id: 3,
      title: "Rullow Jacobs",
      images: [
        { src: "/assets/work/RullowJacobs/Rullow Jacobs-Desktop-1.webp", objectPosition: "0% 50%" },
        { src: "/assets/work/RullowJacobs/Rullow Jacobs search.gif", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
    {
      id: 4,
      title: "Grace O'Malley",
      images: [
        { src: "/assets/work/Grace O Malley/rum-cask.png", objectPosition: "0% 0%" },
        { src: "/assets/work/Grace O Malley/Grace o Malley.gif", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
    {
      id: 5,
      title: "Sites Explained",
      images: [
        { src: "/assets/work/SitesExplained/sitesexplained-desktop-2.webp", objectPosition: "0% 0%" },
        { src: "/assets/work/SitesExplained/sitesexplained-desktop-4.webp", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
    {
      id: 6,
      title: "Waypoint",
      images: [
        { src: "/assets/work/Waypoint/Waypoint Web App2.gif", objectPosition: "0% 70%" },
        { src: "/assets/work/Waypoint/Waypoint - Marketing Site - Desktop 1.webp", objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
      ]
    },
  ];