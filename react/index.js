// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === "__esModule") {
        return {};
      }

      throw new Error(
        `Importing from \`@insideicons/react\` directly is not supported. Please import from either \`@insideicons/react/icons/solid\`, \`@insideicons/react/icons/outline\`, or \`@insideicons/react/icons/tinted\` instead.`
      );
    },
  }
);
