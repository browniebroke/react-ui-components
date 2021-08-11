module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => {
    updatedOptions = {
      ...options,
      // any extra options you want to set
      plugins: [
        ...options.plugins,
        require.resolve('@babel/plugin-proposal-numeric-separator'),
      ],
    }
    console.log(updatedOptions)
    return updatedOptions
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
    // https://github.com/styleguidist/react-docgen-typescript/issues/356
    reactDocgen: 'none',
  },
}
