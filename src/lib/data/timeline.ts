// 2025
import mins2025 from '../../assets/96mins2025.webp';
import Event2025 from '../../assets/Event2025.webp';
import Oysters2025 from '../../assets/Oysters2025.webp';

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
import FirstAd2022 from '../../assets/FirstAd2022.webp';


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
      { src: mins2025, objectPosition: "0% 20%" },
      { src: Event2025, objectPosition: "0% 45%" },
      { src: Oysters2025, objectPosition: "0% 80%" },
    ],
    subtitle: "We were on a Times Square Billboard",
    content: [
      "We hit Times Square after winning Whop’s $3k in 30 dayscompetition on a billboard.",
      "Back to teaching. Couldn’t resist—now part-time at  \"96mins.\" helping designers level up their skills (and incomes).",
      "Writing code in my spare time, hunting for the last Infinity Stone by shipping my own designs.",

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
    subtitle: "Left Manchester → Porto → Mallorca → Montserrat → Miami → Mexico → NYC",
    content: [
      "Wound things down at Love Circular. After five years, keeping it alive wasn’t feasible. It was a great run – over 300 students graduated and are now employed. Over 1,300 bootcamp and online course students.",
      "I was able to take a few months off to travel and recharge. I went to Porto, Mallorca, Montserrat, Miami, Mexico, eventually settling in New York City.",
      "Took time off, recharged, ran a half-marathon for shits and giggles one morning, and got addicted to bouldering and weightlifting.",
    ]
  },

  // === 2023 =========================================================
  {
    title: "2023",
    images: [
      { src: TheWeeknd2023, objectPosition: "0% 94%" },
      { src: JobBoard2023, objectPosition: "0% 60%" },
      { src: Lanzarote2023, objectPosition: "0% 10%" },  
      { src: Spa2023, objectPosition: "0% 41%" },
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
      { src: Elbow2022, objectPosition: "0% 70%" },
      { src: Google2022, objectPosition: "0% 40%" },
      { src: LCTeamDinner2022, objectPosition: "0% 10%" },  
      { src: FirstAd2022, objectPosition: "0% 31%" },
    ],
    subtitle: "Hosted an event with Google & Pipe Advert",
    content: [
      "We hosted a Hakacthon with Google London, and invited some of our students to join.",
      "Starred as Pipe’s first UK customer; using it quadrupled revenue",
      "Hit 500 students milestone at Love Circular.",
      "Elbow meets Shiraz. One bottle + Wagyu tataki = broken elbow."
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
      "Moved from mum’s bedroom office to a proper Manchester city-centre space",
      "Grew fast, hit our first £100 k month (£142 k during Black Friday week), and hired the first full-timers.",
      "I burned out and had to make my first set of full-time hires. Love Circular was growing fast, we made our first £100k month. £142k on Black Friday Week ",
      "We invited some of Love Circular students to our first team Christmas party."
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
      { src: ZaireApple, objectPosition: "0% 0%" },
      { src: ZaireA2019, objectPosition: "center" },
      { src: IzaacZaireWeWork, objectPosition: "center" },    
      { src: NycFultonStreet2019, objectPosition: "center" },

    ],
    subtitle: "Apple → UX Designer. Love Circular. NYC",
    content: [
      "Went from fixing iPhones and B2B sales to UX design at the UK’s biggest mobile-app agency.",
      "Landed the role fast (2 months), so I started mentoring—40 designers every week from Aug ’19 – Jun ’20",
      "Oh yea, first time back in the Big Apple in ten years. 🗽"
    ]
  }
]; 