const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": hot(preferDefault(require("/Users/jay/Jay/portfolio-gatsby/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jay/Jay/portfolio-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jay/Jay/portfolio-gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jay/Jay/portfolio-gatsby/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/jay/Jay/portfolio-gatsby/src/pages/page-2.js")))
}

