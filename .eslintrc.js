module.exports = {
  plugins: ["css-modules", "sort-destructure-keys"],
  extends: [
    "eslint:recommended",
    "react-app",
    "react-app/jest",
    "plugin:css-modules/recommended",
    "prettier",
  ],
  rules: {
    "sort-destructure-keys/sort-destructure-keys": 2,
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
