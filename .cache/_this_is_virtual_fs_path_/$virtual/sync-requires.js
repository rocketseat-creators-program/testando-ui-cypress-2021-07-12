
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/fabianarodrigues/Projetos/Fabi/ui-teste-cypress/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/fabianarodrigues/Projetos/Fabi/ui-teste-cypress/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/fabianarodrigues/Projetos/Fabi/ui-teste-cypress/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/fabianarodrigues/Projetos/Fabi/ui-teste-cypress/src/pages/using-typescript.tsx"))
}

