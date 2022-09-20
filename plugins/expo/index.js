module.exports = function (context, options) {
    return {
      name: 'expo-snack-plugin',
      injectHtmlTags({content}) {
        return {
          postBodyTags: [`<script async src="https://snack.expo.dev/embed.js"></script>`],
        };
      },
    };
  };