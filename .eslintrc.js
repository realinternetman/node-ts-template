module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": 0,
  }
};
