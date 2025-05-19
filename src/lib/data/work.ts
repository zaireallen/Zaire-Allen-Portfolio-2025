import LearningPlatform from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile.webp'
import LearningPlatformSecond from '/src/assets/work/LC/Love Circular - Learning Platform - Mobile screens.webp'
import SitesExplained1 from ''

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