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
      "Back teaching again (part-time) at \"96mins.\" Couldn't resist the urge to help grow designers skills and income.",
      "We won a Whop competition and ended up on a Times Square Billboard.",
      "Currently building coding projects in my spare time. Trying to collect the last infinity stone by learning to code my own designs.",

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
      "Wound things down at Love Circular after dedicating 5 years to the project. It wasn't feasible to keep it going.",
      "I was able to take a few months off to travel and recharge. I went to Porto, Mallorca, Montserrat, Miami, Mexico, eventually settling in New York City.",
      "Running, bouldering and working out became a more regular part of my life. I ran a half-marathon to test my mental strength.",
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
    subtitle: "First holiday since covid-19",
    content: [
      "Spent a lot of this year fighting fires – major setbacks with Love Circular. We lost $1.5M worth of assets and revenue.",
      "Decided it was time for a holiday after being head-down for 2 years, ended up in Lanzarote with pals.",
      "Recorded 30+ hours of vlog content for my YouTube channel documenting the journey of what goes on day-to-day as a founder.",
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
      "Recorded an ad with Pipe as their first UK customer. We used Pipe to 4x revenue.",
      "Hit 500 bootcamp students Love Circular.",
      "Broke my elbow after an incredible bottle of Shiraz and a few Wagyu Beef Tataki."
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
      "Moved out of my bedroom office at my mum's to my first office in Manchester City Centre.",
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
      "Ali joined the Love Circular team as our first hire to teach our second cohort. In May, my first design student landed a role, 3 weeks before her cohort finished.",
      "I bought my first \"fast\" car as a gift to myself. Did a 333 mile roadtrip from Manchester to Brighton. We had a 718 Cayman GTS, a Mustang GT and my Stage 1 S3.",
      "Levi (my doggo and first companion) turned 1.",
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
      { src: IzaacZaireWeWork, objectPosition: "center" },    
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