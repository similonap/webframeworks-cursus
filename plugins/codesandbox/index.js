const fs = require('fs');
const util = require('util');

const glob = util.promisify(require('glob'));

module.exports = async function (context, options) {
  return {
    name: 'codesandbox-plugin',
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;

      const templatesDirs = fs.readdirSync('./codesandbox');

      let templates = {};
      for (templateDir of templatesDirs) {
        let fileJson = {};
        let files = await glob(`./codesandbox/${templateDir}/**/*`, {
          nodir: true,
        });
        for (let file of files) {
          let fileContent = fs.readFileSync(`${file}`, 'utf-8');
          if (file.includes("static.json")) {
            fileJson = {...fileJson, ...JSON.parse(fileContent)}
          } else {
            fileJson[file.replace(`./codesandbox/${templateDir}/`, '')] =
              {content: fileContent, isBinary: false};
          }
        }
        templates[templateDir] = { files: fileJson };
      }

      setGlobalData({ templates: templates });
    },
  };
};
