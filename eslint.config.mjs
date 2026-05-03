import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // eslint-plugin-react@7.x (bundled in eslint-config-next) calls context.getFilename()
    // which was removed in ESLint 10. Setting the version explicitly bypasses auto-detection.
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]

export default config
