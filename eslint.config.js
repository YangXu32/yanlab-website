// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,  // Load ESLint's built-in recommended rules
  {
    files: ["**/*.jsx", "**/*.js"], // Lint all React and JS files
    plugins: { react },             // Use the React plugin
    languageOptions: {
      ecmaVersion: 2021,            // Use modern JS syntax (ES12)
      sourceType: "module",         // Support ES module imports/exports
      globals: { browser: true },   // Recognize browser globals like 'window' or 'document'
    },
    rules: {
      "no-unused-vars": "warn",         // Warn about unused variables
      "no-undef": "off",                // Disable 'undefined variable' errors (React handles these)
      "react/react-in-jsx-scope": "off",// React 17+ doesn't require 'import React' in every file
      "react/prop-types": "off",        // Disable prop-type warnings (optional for small projects)
    },
    settings: { react: { version: "detect" } }, // Auto-detect React version
  },
];
