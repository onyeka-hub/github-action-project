module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "rules": {
      "semi": ["error", "always"], // Enforce semicolons at the end of statements
      "indent": ["error", 2], // Enforce 2 spaces for indentation
      "quotes": ["error", "single"], // Enforce single quotes for strings
      "comma-spacing": ["error", { "before": false, "after": true }] // Enforce consistent spacing after commas
      // Add more ESLint rules here as needed
    }
  };
  