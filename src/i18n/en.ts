export default {
  nav: {
    about: 'About',
    research: 'Research',
    teaching: 'Teaching',
  },
  lang: {
    en: 'English',
    fr: 'Français',
  },
  site: {
    mail: 'louis.chataignier@amss.ac.cn',
  },
  home: {
    welcome: 'Welcome',
    job: 'Posdoctoral researcher in mathematics',
    localisation: '{{institution3}}',
    introduction: `I am a postdoctoral researcher at the {{institution3}} ({{institution4}}) since October 2026, under the supervision of Zhan Shi.

I completed my PhD at the {{institution1}} ({{institution2}}) between 2023 and 2026, under the supervision of {{supervisor1}} and {{supervisor2}}.

My research focuses on probability theory, with a particular interest in branching processes and statistical physics.`,
    downloadCv: 'Download CV',
  },
  research: {
    heading: 'Research',
    description: 'Research publications and preprints',
  },
  teaching: {
    heading: 'Teaching',
    description: 'Teaching activities',
    roles: {
      instructor: 'Instructor',
      ta: 'Teaching Assistant',
    },
  },
} as const
