module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "linebreak-style": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
