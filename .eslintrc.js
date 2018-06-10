module.exports = {
  extends: ["airbnb-base"],
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  rules: {
    "semi": "off",
    "no-console": "off",
    "no-undef": 0,
    "no-alert": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "default-case": "off",
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ]
  }
};