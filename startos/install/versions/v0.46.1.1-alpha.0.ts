import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_0_46_1_1 = VersionInfo.of({
  version: '0.46.1:1-alpha.0',
  releaseNotes: `\
  ## Updated for StartOS 0.4.0

  ### Dependency Updates
  * Updated SDK to beta.41
  * Updated dev dependencies to latest versions
  
  ## 0.46.1
  ### Patch Changes
  * Fix issue with application hanging from capacitorjs modules
  * Fix elements under nav bar on mobile
  ## 0.46.0
  ### Minor Changes
  * Add option for custom share service (njump.me)
  * Add article reader component using native web TTS API
  * Show favorite relays in discovery view
  * Add relay feed to discovery view
  * Redesign user profile navigation
  ### Patch Changes
  * Fix open graph link images not being blured
  * Fix ncrypsec accounts not prompting for decryption password`,
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
