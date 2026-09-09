import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Kuvempu PEACE',
  id: 'kupeace',
  logo: logoImage,
  seo: {
    title: 'Kuvempu PEACE',
    description:
      'A student-first guide to campus life, the forest we call home, and everything in between — an initiative of the Kuvempu University Planning, Monitoring and Evaluation Board (PMEB).',
    author: 'Kuvempu University PMEB',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#2f6b3c',
    secondary: '#1a936f',
    neutral: '#8a8f85',
    outline: '#e0a72e',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/kupeace/',
      },
      {
        type: 'link',
        label: 'My Forest Laboratory',
        href: '/kupeace/campus',
      },
      {
        type: 'link',
        label: 'My Clean & Green Campus',
        href: '/kupeace/clean-green',
      },
      {
        type: 'link',
        label: 'IT Guide',
        href: '/kupeace/it-guide',
      },
      {
        type: 'link',
        label: 'Research Tools',
        href: '/kupeace/research-tools',
      },
      {
        type: 'link',
        label: 'Activities & Sign-Ups',
        href: '/kupeace/activities',
      },
    ],
  },
  socials: [],
})
