import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: 'e7f0a89af04a4b138f466b08c01ebf70',
  rootNotionSpaceId: null,
  name: 'Fortress: Farm to Table',
  domain: 'https://www.fortress-coffee.com',
  author: 'Duncan Bone',
  description: 'Example blog/website for Fortress Coffee and Cafe',
  twitter: '',
  github: '',
  linkedin: '',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: {
    '/blog': 'cf94436b36934a8db5d27bcedcd7cae6'    
  },
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: 'cf94436b36934a8db5d27bcedcd7cae6'
    },
    {
      title: 'About',
      pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: 'Contact',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    }
  ]
})
