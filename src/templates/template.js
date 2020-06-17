import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Templates = ({ pageContext }) => {
    return (
        <Layout >
            <SEO title={pageContext.node.title} />
            <div className="article-content">
                <h1>{pageContext.node.title}</h1>
                <div className="node">
                    <p>{pageContext.node.author}, {pageContext.node.publishDate} </p>
                </div>
                    <img src={pageContext.node.titleImage.localFile.url} alt="title" />
                <div className="content">
                    {
                        documentToReactComponents(pageContext.node.body.json)
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Templates
