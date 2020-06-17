
const path = require("path")

module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const articleTempate = path.resolve(`src/templates/template.js`)
    const result = await graphql(`
        query{
            allContentfulTitle {
                edges {
                    node {
                        author
                        id
                        descriprtion
                        title
                        titleImage {
                            localFile {
                                url
                            }
                        }
                        publishDate(fromNow: true)
                        createdAt(fromNow: true)
                        body {
                            json
                        }
                    }
                }
            }
        }
    `)
    result.data.allContentfulTitle.edges.forEach(({ node }) => {
        createPage({
            path: `${node.id}`,
            component: articleTempate,
            context: {
                node
            }
        })
    });
}