import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_0_45_0_1 = VersionInfo.of({
  version: '0.45.0:1-alpha.0',
  releaseNotes: `\
  ## Updated for StartOS 0.4.0

  ### Dependency Updates
  * Updated SDK to beta.36
  * Updated dev dependencies to latest versions
  
  ### Minor Changes
  * Add setting for NIP-17 DM relays
  * Support NIP-17 group messages
  * Add NIP-17 message inbox for decrypting messages
  * Show NIP-17 messages in direct message view
  * Add messages cache for direct messages
  * Add DM conversation info drawer
  * Redesign direct messages UI
  * Add profile editor to settings
  * Add preview to profile editor
  
  ### Patch Changes
  * Remove unused dependencies`,
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
