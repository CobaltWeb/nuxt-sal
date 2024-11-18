import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  useLogger,
} from '@nuxt/kit'
import type { Options as SalOptions } from 'sal.js'
import { name, version } from '../package.json'

export default defineNuxtModule<Partial<SalOptions>>({
  meta: {
    name,
    version,
    configKey: 'sal',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  hooks: {
    'vite:extendConfig': (config) => {
      config.optimizeDeps ||= {}
      config.optimizeDeps.include ||= []
      config.optimizeDeps.include.push('sal')
    },
  },
  setup(options, nuxt) {
    const logger = useLogger('nuxt-sal')
    const resolver = createResolver(import.meta.url)

    logger.info('🚀 Setting up nuxt-sal')

    nuxt.options.runtimeConfig.public.sal = options || {}

    nuxt.options.build.transpile ||= []
    nuxt.options.build.transpile.push('sal')

    nuxt.options.alias['#sal'] = resolver.resolve('./runtime')

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})
