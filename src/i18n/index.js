import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      welcome: 'Welcome to My Portfolio',
      iam: 'I am a',
      cta: 'Get in Touch'
    },
    titles: {
      frontendDev: 'Frontend Developer',
      vueExpert: 'Vue.js Expert',
      uiuxEnthusiast: 'UI/UX Enthusiast'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      welcome: 'Добро пожаловать в мое портфолио',
      iam: 'Я',
      cta: 'Связаться'
    },
    titles: {
      frontendDev: 'Frontend Разработчик',
      vueExpert: 'Vue.js Эксперт',
      uiuxEnthusiast: 'UI/UX Энтузиаст'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})