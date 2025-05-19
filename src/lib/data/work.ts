// Waypoint
import WaypointDesktop1 from '/src/assets/work/Waypoint/Waypoint - App - Desktop 1.webp'
import WaypointDesktop2 from '/src/assets/work/Waypoint/Waypoint - Marketing Site - Desktop 1.webp'

// RullowJacobs
import RullowJacobsDesktop1 from '/src/assets/work/RullowJacobs/Rullow Jacobs-Desktop-1.webp'
import RullowJacobsDesktop2 from '/src/assets/work/RullowJacobs/Rullow Jacobs-Desktop-2.webp'

// SitesExplained
// import SitesExplainedDesktop1 from '/src/assets/work/SitesExplained/sitesexplained-desktop-1.webp'
import SitesExplainedDesktop2 from '/src/assets/work/SitesExplained/sitesexplained-desktop-2.webp'
//import SitesExplainedDesktop3 from '/src/assets/work/SitesExplained/sitesexplained-desktop-3.webp'
import SitesExplainedDesktop4 from '/src/assets/work/SitesExplained/sitesexplained-desktop-4.webp'

// Love Circular
import LearningPlatform from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile display.webp'
import LearningPlatformSecond from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile screens.webp'


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
      title: "Waypoint",
      images: [
        { src: WaypointDesktop2, objectPosition: "0% 50%" },
        { src: WaypointDesktop1, objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop’s $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn’t resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
  
      ]
    },
    {
      id: 2,
      title: "Rullow Jacobs",
      images: [
        { src: RullowJacobsDesktop1, objectPosition: "0% 50%" },
        { src: RullowJacobsDesktop2, objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop’s $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn’t resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
  
      ]
    },
    {
      id: 3,
      title: "Sites Explained",
      images: [
        { src: SitesExplainedDesktop2, objectPosition: "0% 0%" },
        { src: SitesExplainedDesktop4, objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop’s $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn’t resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
  
      ]
    },{
      id: 4,
      title: "Love Circular Learning Platform Mobile App",
      images: [
        { src: LearningPlatform, objectPosition: "0% 0%" },
        { src: LearningPlatformSecond, objectPosition: "0% 0%" }
      ],
      subtitle: "We were on a Times Square Billboard",
      content: [
        "We hit Times Square after winning Whop’s $3k in 30 dayscompetition on a billboard.",
        "Back to teaching. Couldn’t resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
        "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",
  
      ]
    },
  ];