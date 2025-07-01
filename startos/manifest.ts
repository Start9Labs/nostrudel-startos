import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'nostrudel',
  title: 'noStrudel',
  license: 'MIT',
  wrapperRepo: 'https://github.com/hzrd149/nostrudel-startos',
  upstreamRepo: 'https://github.com/hzrd149/nostrudel',
  supportSite: 'https://github.com/hzrd149/nostrudel/issues',
  marketingSite: 'https://github.com/hzrd149/nostrudel',
  donationUrl: 'https://geyser.fund/project/nostrudel',
  description: {
    short: 'A simple app to browse and post on the nostr social network.',
    long: 'noStrudel lets you connect with others on the nostr network—a new kind of open, decentralized social platform. Easily view posts, join conversations, and share your own updates in a familiar, user-friendly interface. noStrudel is great for both newcomers and experienced users who want to explore nostr without hassle. For the safest experience, we recommend logging in with a browser extension like Alby or Nos2x instead of entering your private key directly.',
  },
  volumes: ['main'],
  images: {
    nostrudel: {
      source: {
        dockerTag: 'ghcr.io/hzrd149/nostrudel:0.44.1',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
