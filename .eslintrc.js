module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "react", "simple-import-sort"],
  rules: {
    // 1: Turn off rules that are no longer necessary in React 17 and in Next.js
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/no-default-export": "error",
  },
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ["*/pages/*", "*/pages/**/index.tsx", "*/pages/api/*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
    // Storybook needs default exports
    {
      files: ["*/stories/*", "*/stories/**/index.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
