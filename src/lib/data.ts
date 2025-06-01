import {
  Calendar,
  CarFront,
  Utensils,
  House,
  Dumbbell,
  Sun,
  Martini,
  Dices,
  Cake,
  Gift,
  PersonStanding,
} from "lucide-react";
import { TProgram, TSection } from "../../types/data";

export const sections: Array<TSection> = [
  {
    title: "Reiseplan",
    href: "/travel-plan",
    icon: CarFront,
    color: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "Program",
    href: "/itinerary",
    icon: Calendar,
    color: "bg-rose-50 dark:bg-rose-950/20",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
];

export const program: Array<TProgram> = [
  {
    day: 1,
    date: "Fredag 6. juni 2025",
    title: "Reise og ankomst Hamburgsund",
    activities: [
      {
        time: "16:00",
        activity: "Avreise fra Oslo",
        type: "travel",
        icon: CarFront,
        description:
          "Vi reiser fra Oslo kl. 16:00 og stopper på veien for å handle i Tanum.",
      },
      {
        time: "20:00",
        activity: "Ankomst i Hamburgsund - Pizza",
        type: "accommodation",
        icon: House,
        description:
          "Ved ankomst i Hamburgsund lager vi pizza sammen. Vi skal kose oss, le og oppdatere hverandre på livet den siste tiden.",
      },
    ],
  },
  {
    day: 2,
    date: "Lørdag 7. juni 2025",
    title: "Tidlig midsommarafton",
    activities: [
      {
        time: "10:00",
        activity: "Frokost på hytta",
        type: "food",
        icon: Utensils,
        description:
          "Vi starter med dagens viktigste måltid. Rykende fersk kaffe og rundstykker. Alle hjelper til.",
      },
      {
        time: "12:00",
        activity: "Trening med Frida",
        type: "workout",
        icon: Dumbbell,
        description:
          "Frida styrer en treningsøkt for oss. Valgfri deltagelse. Ikke glem musklene i Oslo ;)",
      },
      {
        time: "13:00-16:00",
        activity: "Fri disposisjon",
        type: "free",
        icon: Sun,
        description:
          "Muligheter for å utforske området, spise is, bade eller nyte sola på svaberget.",
      },
      {
        time: "16:00",
        activity: "Oppmøte helaften",
        type: "food",
        icon: Martini,
        description:
          "Alle må være ferdig skiftet og klare for en helaften. Kvelden braker løs med bobler og en spennende adjektivhistorie om gjengen. Deretter blir det en drikkelek for alle de tørste jentene. Obs - Lederhatten blir utdelt til den vi mener fortjener å starte med den. Den skal leve gjennom hele kvelden.",
      },
      {
        time: "17:00",
        activity: "Rekelag og hvitvin",
        type: "food",
        icon: Utensils,
        description:
          "Det blir langbord med reker, myk og saftig loff og masse godt tilbehør. Det blir hvitvin i glasset. Ønsker du å ha egen drikke utover dette er du velkommen til det. Alle hjelper til.",
      },
      {
        time: "19:00",
        activity: "Leker",
        type: "games",
        icon: Dices,
        description:
          "Vi tester gjengens emoji ferdigheter før vi deler inn i lag og avgjør hvem som er de ekte kubbmestrene. Du må stille opp med en 330 cl øl eller cider. Husk - Lederhatten lever fortsatt.",
      },
      {
        time: "20:30",
        activity: "Dessert",
        type: "food",
        icon: Cake,
        description:
          "Det blir servert en sommerlig ostekake og Hugo Spritz. Alle hjelper til.",
      },
      {
        time: "21:30",
        activity: "Pakkeleken",
        type: "games",
        icon: Gift,
        description:
          "Det blir pakkelek og Hengegjengen Mule. Du må stille med en innpakket gave til prisen av 100kr eller en gjenbruksgave som du tenker passer.",
      },
      {
        time: "22:00",
        activity: "Latter og dans inn i sommernatten",
        type: "games",
        icon: PersonStanding,
        description:
          "Vi fortsetter kvelden med latter og dans til siste mann står.",
      },
    ],
  },
  {
    day: 3,
    date: "Søndag 8. juni 2025",
    title: "Brunsj og hyttekos",
    activities: [
      {
        time: "10:00 / 11:00",
        activity: "Frokost på hytta",
        type: "food",
        icon: Utensils,
        description: "Vi sover rusen ut og spiser frokost. Alle hjelper til.",
      },
      {
        time: "14:00",
        activity: "Lunsj på Hjalmars",
        type: "food",
        icon: Utensils,
        description:
          "Vi slår på stortromma og går til Hjalmars for lunsj. Er du nysgjerrig på maten kan du følge lenken.",
        link: "https://www.hjalmars.se",
      },
      {
        time: "16:00 - 19:00",
        activity: "Fri disposisjon",
        type: "free",
        icon: Sun,
        description:
          "Vi slapper av, bader, går tur eller hva enn kos en måtte ønske.",
      },
      {
        time: "19:00",
        activity: "Grillkveld",
        type: "food",
        icon: Utensils,
        description:
          "Vi griller hamburgere, grillspyd, pølser med gode salater av ulike varianter.",
      },
    ],
  },
  {
    day: 4,
    date: "Mandag 9. juni 2025",
    title: "Utsjekk og avreise",
    activities: [
      {
        time: "10:00",
        activity: "Frokost på hytta",
        type: "food",
        icon: Utensils,
        description: "Vi koser oss med frokost og kaffe. Alle hjelper til.",
      },
      {
        time: "14:00",
        activity: "Utvask og avreise fra hytta",
        type: "travel",
        icon: CarFront,
        description:
          "Vi pakker og vasker oss ut av hytta før felles avreise. For de som vil kan hjemreisen by på harryhandel før vi når landegrensen.",
      },
    ],
  },
];
