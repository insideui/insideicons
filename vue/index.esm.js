// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === "__esModule") {
        return {};
      }

      throw new Error(
        `Importing from \`@insideicons/vue\` directly is not supported. Please import from either \`@insideicons/vue/icons/solid\`, \`@insideicons/vue/icons/outline\`, or \`@insideicons/vue/icons/tinted\` instead.`
      );
    },
  }
);
