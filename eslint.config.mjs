import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    linterOptions: {
      reportUnusedInlineConfigs: 'error',
    },
    rules: {
      // --- Formatting & Style ---
      // semi: 'error',
      curly: 'error',

      // --- Best Practices ---
      'no-console': 'warn',
      'prefer-const': 'error',
      eqeqeq: 'error',
      'no-duplicate-imports': 'warn',
      'require-await': 'error',
      'no-useless-return': 'warn',

      // --- Handling the API / TypeScript ---
      camelcase: ['error', { properties: 'never' }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // --- Safety Checks (Kept from your list) ---
      'for-direction': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-debugger': 'error',
      'no-dupe-else-if': 'error',
      'no-duplicate-case': 'error',
      'no-empty-pattern': 'warn',
      'no-ex-assign': 'error',
      'no-fallthrough': ['warn', { allowEmptyCase: true }],
      'no-self-assign': 'warn',
      'no-sparse-arrays': 'warn',
      'no-unexpected-multiline': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-optional-chaining': [
        'error',
        { disallowArithmeticOperators: true },
      ],
      'use-isnan': [
        'error',
        { enforceForSwitchCase: false, enforceForIndexOf: true },
      ],
      'valid-typeof': 'error',
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'default-param-last': ['error'],
      'no-case-declarations': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
      'no-implicit-coercion': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'warn',
    },
  },
  {
    // Target layouts, pages, loading states, and error pages in the app directory
    files: [
      'app/**/{layout,page,loading,not-found,error,global-error}.{js,jsx,ts,tsx}',
    ],
    rules: {
      'require-await': 'off', // Disable it ONLY for these files
    },
  },
]);

export default eslintConfig;
