import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:1339/graphql',
  documents: ['src/services/graphql/**/*.graphql'],
  generates: {
    'src/services/generated/': {
      preset: 'client'
    }
  }
}

export default config
