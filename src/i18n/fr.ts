import type { Translations } from './index'

export default {
  nav: {
    about: 'Accueil',
    research: 'Recherche',
    teaching: 'Enseignement',
  },
  lang: {
    en: 'English',
    fr: 'Français',
  },
  site: {
    mail: 'louis.chataignier@amss.ac.cn',
  },
  home: {
    welcome: 'Bienvenue',
    job: 'Chercheur postdoctoral en mathématiques',
    localisation: 'Academy of Mathematics and Systems Science',
    introduction: `Je suis chercheur postdoctoral à l'{{institution3}} ({{institution4}}) depuis octobre 2026, sous la supervision de Zhan Shi.
    
    J'ai effectué mon doctorat à l'{{institution1}} ({{institution2}}) entre 2023 et 2026, sous la direction de {{supervisor1}} et {{supervisor1}}.
    
    Mes recherches portent sur la théorie des probabilités, avec un intérêt particulier pour les processus de branchement et la physique statistique.`,
    downloadCv: 'Télécharger le CV',
  },
  research: {
    heading: 'Recherche',
    description: 'Publications et prépublications',
  },
  teaching: {
    heading: 'Enseignement',
    description: "Activités d'enseignement",
    roles: {
      instructor: 'Chargé de cours',
      ta: "Assistant d'enseignement",
    },
  },
} satisfies Translations
