import PipeZaire from '../../assets/PipeZaire.webp';
import ThisIsHCD from '../../assets/ThisIsHCD.webp';

// 2024
import Montserrat2024 from '../../assets/Montserrat2024.webp';
import Bouldering2024 from '../../assets/Bouldering2024.webp';
import Kirx2024 from '../../assets/Kirx2024.webp';
import HalfM2024 from '../../assets/HalfM2024.webp';

// 2023
import TheWeeknd2023 from '../../assets/TheWeeknd2023.webp';
import JobBoard2023 from '../../assets/JobBoard2023.webp';
import Lanzarote2023 from '../../assets/Lanzarote2023.webp';
import Spa2023 from '../../assets/Spa2023.webp';

// 2022
import Elbow2022 from '../../assets/Elbow2022.webp';
import Google2022 from '../../assets/Google2022.webp';
import LCTeamDinner2022 from '../../assets/LCTeamDinner2022.webp';
import LeviAC2022 from '../../assets/LeviAC2022.webp';


// 2021
import Office22021 from '../../assets/Office22021.webp';
import Burnout2021 from '../../assets/Burnout2021.webp';
import Flok2021 from '../../assets/Flok2021.webp';
import LCChristmas2021 from '../../assets/LCChristmas2021.webp';

// 2020
import AliZaire from '../../assets/AliZaire.webp';
import Brighton from '../../assets/Brighton.webp';
import LeviBirthday from '../../assets/LeviBirthday.webp';
import LCRevenue from '../../assets/LCRevenue.webp';

// 2019
import ZaireApple from '../../assets/ZaireApple.webp';
import NycFultonStreet2019 from '../../assets/NycFultonStreet2019.webp';
import ZaireA2019 from '../../assets/ZaireA2019.webp';
import IzaacZaireWeWork from '../../assets/IzaacZaireWeWork.webp';

// Type definition for timeline entries
export type TimelineEntry = {
  title: string;
  subtitle?: string;
  images?: { src: string; objectPosition?: string }[];
  content: string[];
};

export const timelineData: TimelineEntry[] = [
  // === 2025 =========================================================
  {
    title: "2025",
    images: [
      { src: PipeZaire },
      { src: ThisIsHCD },
      { src: ZaireApple, objectPosition: "top" }
    ],
    subtitle: "Today",
    content: [
      "Community Lead @ 96mins – driving programs that raise designers' income and visibility",
      "Building Fulcrum (AI-powered freelance job board) – first 500 beta users onboarded",
      "Doubled down on deep-dive Twitter/X threads about product-led growth and cold outreach"
    ]
  },

  // === 2024 =========================================================
  {
    title: "2024",
    images: [
      { src: Montserrat2024, objectPosition: "0% 60%" },
      { src: Bouldering2024, objectPosition: "0% 40%" },
      { src: Kirx2024, objectPosition: "0% 50%" },  
      { src: HalfM2024, objectPosition: "0% 100%" },
    ],
    subtitle: "Moved to NYC, new beginnings",
    content: [
      "Published 12 personal-growth essays on Bear Blog with over 10k reads",
      "Maintained 6-day/week strength-training routine; logged progress publicly to build audience accountability"
    ]
  },

  // === 2023 =========================================================
  {
    title: "2023",
    images: [
      { src: TheWeeknd2023, objectPosition: "0% 80%" },
      { src: JobBoard2023, objectPosition: "0% 40%" },
      { src: Lanzarote2023, objectPosition: "0% 10%" },  
      { src: Spa2023, objectPosition: "0% 41%" },
    ],
    subtitle: "The Weeknd, first holiday since Covid",
    content: [
      "Rebounded from a $1.5M IP loss; launched Profitable Club + Profitable Agency to help founders scale with outbound + content",
      "Drafted the $2.5k/week luxury group-travel agency concept; ran first market-sizing and offer tests",
      "Started tweeting daily \"micro-lessons\" on deal generation, growing X following past 4k"
    ]
  },

  // === 2022 =========================================================
  {
    title: "2022",
    images: [
      { src: Elbow2022, objectPosition: "0% 70%" },
      { src: Google2022, objectPosition: "0% 40%" },
      { src: LCTeamDinner2022, objectPosition: "0% 10%" },  
      { src: LeviAC2022, objectPosition: "0% 41%" },
    ],
    subtitle: "Broken bones, hosting events with Google",
    content: [
      "Took Love Circular's community-led ed-tech platform past $2M ARR; partnered with Google & KPMG on diversity hiring initiatives",
      "Mentored 350+ students into UX / Product roles; cumulative learner earnings crossed $20M",
      "Prototyped internal lead-gen SaaS tooling that later evolved into Profitable's service stack"
    ]
  },

  // === 2021 =========================================================
  {
    title: "2021",
    images: [
      { src: Office22021, objectPosition: "0% 70%" },
      { src: Burnout2021, objectPosition: "0% 50%" },
      { src: Flok2021, objectPosition: "0% 10%" },  
      { src: LCChristmas2021, objectPosition: "0% 41%" },

    ],
    subtitle: "New office, Burnout, Team Christmas Party",
    content: [
      "Scaled Love Circular to seven-figure revenue; shipped revamped curriculum and async cohort model",
      "Introduced \"squad\" delivery pods—precursor to today's client-growth squads at Profitable Agency",
      "Spoke at three virtual design conferences on community-led growth and inclusive hiring"
    ]
  },

  // === 2020 =========================================================
  {
    title: "2020",
    images: [
      { src: AliZaire, objectPosition: "0% 0%" },
      { src: Brighton, objectPosition: "0% 40%" },
      { src: LeviBirthday, objectPosition: "0% 10%" },  
      { src: LCRevenue, objectPosition: "0% 41%" },

    ],
    subtitle: "A year of firsts",
    content: [
      "Ali joined the Love Circular team as our first hire to teach our second cohort.",
      "I bought my first \"fast\" car as a gift to myself. Did a 333 mile roadtrip from Manchester to Brighton. We had a 718 Cayman GTS, a Mustang GT and my Stage 1 S3.",
      "Levi (my doggo) turned 1.",
      "Made my gross yearly Design salary in 5 months since I went full-time on Love Circular in June.",
      "First year being self-employed."
    ]
  },

  // === 2019 =========================================================
  {
    title: "2019",
    images: [
      { src: ZaireApple, objectPosition: "0% 0%" },
      { src: ZaireA2019, objectPosition: "center" },
      // { src: IzaacsHouse, objectPosition: "center" },
      { src: IzaacZaireWeWork, objectPosition: "center" },  
      // { src: Nyc2019, objectPosition: "center" },
      { src: NycFultonStreet2019, objectPosition: "center" },

    ],
    subtitle: "Apple → UX Designer. Love Circular. NYC",
    content: [
      "I went from fixing iPhones and B2B Sales to my first design role at the UK's largest Mobile App agency.",
      "It only took 2 months to land a job, so I thought I'd help others do the same. From Aug 19 - Jun 20 I mentored 40 designers each week around my full-time job.",
      "Oh yea, it was my first time back in NYC 🗽 in 10 years."
    ]
  }
]; 