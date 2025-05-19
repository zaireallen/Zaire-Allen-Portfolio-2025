// 2025
// import mins2025 from '../../assets/timeline/96mins2025.webp';
// import Event2025 from '../../assets/timeline/Event2025.webp';
// import Oysters2025 from '../../assets/timeline/Oysters2025.webp';

// 2024
// import Montserrat2024 from '../../assets/timeline/Montserrat2024.webp';
// import Bouldering2024 from '../../assets/timeline/Bouldering2024.webp';
// import Kirx2024 from '../../assets/timeline/Kirx2024.webp';
// import HalfM2024 from '../../assets/timeline/HalfM2024.webp';

// 2023
// import TheWeeknd2023 from '../../assets/timeline/TheWeeknd2023.webp';
// import JobBoard2023 from '../../assets/timeline/JobBoard2023.webp';
// import Lanzarote2023 from '../../assets/timeline/Lanzarote2023.webp';
// import Spa2023 from '../../assets/timeline/Spa2023.webp';

// 2022
// import Elbow2022 from '../../assets/timeline/Elbow2022.webp';
// import Google2022 from '../../assets/timeline/Google2022.webp';
// import LCTeamDinner2022 from '../../assets/timeline/LCTeamDinner2022.webp';
// import FirstAd2022 from '../../assets/timeline/FirstAd2022.webp';

// 2021
// import Office22021 from '../../assets/timeline/Office22021.webp';
// import Burnout2021 from '../../assets/timeline/Burnout2021.webp';
// import Flok2021 from '../../assets/timeline/Flok2021.webp';
// import LCChristmas2021 from '../../assets/timeline/LCChristmas2021.webp';

// 2020
// import AliZaire from '../../assets/timeline/AliZaire.webp';
// import Brighton from '../../assets/timeline/Brighton.webp';
// import LeviBirthday from '../../assets/timeline/LeviBirthday.webp';
// import LCRevenue from '../../assets/timeline/LCRevenue.webp';

// 2019
// import ZaireApple from '../../assets/timeline/ZaireApple.webp';
// import NycFultonStreet2019 from '../../assets/timeline/NycFultonStreet2019.webp';
// import ZaireA2019 from '../../assets/timeline/ZaireA2019.webp';
// import IzaacZaireWeWork from '../../assets/timeline/IzaacZaireWeWork.webp';

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
      { src: "/assets/timeline/96mins2025.webp", objectPosition: "0% 20%" },
      { src: "/assets/timeline/Event2025.webp", objectPosition: "0% 45%" },
      { src: "/assets/timeline/Oysters2025.webp", objectPosition: "0% 80%" },
    ],
    subtitle: "We were on a Times Square Billboard",
    content: [
      "We hit Times Square after winning Whop's $3k in 30 dayscompetition on a billboard.",
      "Back to teaching. Couldn't resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
      "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",

    ]
  },

  // === 2024 =========================================================
  {
    title: "2024",
    images: [
      { src: "/assets/timeline/Montserrat2024.webp", objectPosition: "0% 60%" },
      { src: "/assets/timeline/Bouldering2024.webp", objectPosition: "0% 40%" },
      { src: "/assets/timeline/Kirx2024.webp", objectPosition: "0% 50%" },  
      { src: "/assets/timeline/HalfM2024.webp", objectPosition: "0% 100%" },
    ],
    subtitle: "Left Manchester → Porto → Mallorca → Montserrat → Miami → Mexico → NYC",
    content: [
      "Wound things down at Love Circular. After five years, keeping it alive wasn't feasible. It was a great run – over 300 students graduated and are now employed. Over 1,300 bootcamp and online course students.",
      "I was able to take a few months off to travel and recharge. I went to Porto, Mallorca, Montserrat, Miami, Mexico, eventually settling in New York City.",
      "Took time off, recharged, ran a half-marathon for shits and giggles one morning, and got addicted to bouldering and weightlifting.",
    ]
  },

  // === 2023 =========================================================
  {
    title: "2023",
    images: [
      { src: "/assets/timeline/TheWeeknd2023.webp", objectPosition: "0% 94%" },
      { src: "/assets/timeline/JobBoard2023.webp", objectPosition: "0% 60%" },
      { src: "/assets/timeline/Lanzarote2023.webp", objectPosition: "0% 10%" },  
      { src: "/assets/timeline/Spa2023.webp", objectPosition: "0% 41%" },
    ],
    subtitle: "Firefighting & first holiday since covid-19",
    content: [
      "Love Circular lost $1.5 M in assets and revenue—tough year.",
      "Decided it was time for a holiday after 2 years head-down, escaped to Lanzarote to reset.",
      "Uploaded 40+ hours of founder-life vlogs for my YouTube channel.",
    ]
  },

  // === 2022 =========================================================
  {
    title: "2022",
    images: [
      { src: "/assets/timeline/Elbow2022.webp", objectPosition: "0% 70%" },
      { src: "/assets/timeline/Google2022.webp", objectPosition: "0% 40%" },
      { src: "/assets/timeline/LCTeamDinner2022.webp", objectPosition: "0% 10%" },  
      { src: "/assets/timeline/FirstAd2022.webp", objectPosition: "0% 31%" },
    ],
    subtitle: "Hosted an event with Google & Pipe Advert",
    content: [
      "We hosted a Hakacthon with Google London, and invited some of our students to join.",
      "Starred as Pipe's first UK customer; using it quadrupled revenue",
      "Hit 500 students milestone at Love Circular.",
      "Elbow meets Shiraz. One bottle + Wagyu tataki = broken elbow."
    ]
  },

  // === 2021 =========================================================
  {
    title: "2021",
    images: [
      { src: "/assets/timeline/Office22021.webp", objectPosition: "0% 70%" },
      { src: "/assets/timeline/Burnout2021.webp", objectPosition: "0% 50%" },
      { src: "/assets/timeline/Flok2021.webp", objectPosition: "0% 10%" },  
      { src: "/assets/timeline/LCChristmas2021.webp", objectPosition: "0% 41%" },

    ],
    subtitle: "New office, Burnout, Team Christmas Party",
    content: [
      "Moved from mum's bedroom office to a proper Manchester city-centre space",
      "Grew fast, hit our first £100 k month (£142 k during Black Friday week), and hired the first full-timers.",
      "I burned out and had to make my first set of full-time hires. Love Circular was growing fast, we made our first £100k month. £142k on Black Friday Week ",
      "We invited some of Love Circular students to our first team Christmas party."
    ]
  },

  // === 2020 =========================================================
  {
    title: "2020",
    images: [
      { src: "/assets/timeline/AliZaire.webp", objectPosition: "0% 0%" },
      { src: "/assets/timeline/Brighton.webp", objectPosition: "0% 40%" },
      { src: "/assets/timeline/LeviBirthday.webp", objectPosition: "0% 10%" },  
      { src: "/assets/timeline/LCRevenue.webp", objectPosition: "0% 41%" },

    ],
    subtitle: "A year of firsts",
    content: [
      "First hire (Ali) to teach cohort #2.",
      "My first design student landed a role, 3 weeks before her cohort finished.",
      "First car road trip (333 mi Manchester → Brighton, Cayman GTS + Mustang GT + my Stage 1 S3)",
      "Doggo Levi turned 1.",
      "Matched my previous annual design salary in five months after going full-time.",
      "First year self-employed."
    ]
  },

  // === 2019 =========================================================
  {
    title: "2019",
    images: [
      { src: "/assets/timeline/ZaireApple.webp", objectPosition: "0% 0%" },
      { src: "/assets/timeline/ZaireA2019.webp", objectPosition: "center" },
      { src: "/assets/timeline/IzaacZaireWeWork.webp", objectPosition: "center" },    
      { src: "/assets/timeline/NycFultonStreet2019.webp", objectPosition: "center" },

    ],
    subtitle: "Apple → UX Designer. Love Circular. NYC",
    content: [
      "Went from fixing iPhones and B2B sales to UX design at the UK's biggest mobile-app agency.",
      "Landed the role fast (2 months), so I started mentoring—40 designers every week from Aug '19 – Jun '20",
      "Oh yea, first time back in the Big Apple in ten years. 🗽"
    ]
  }
]; 