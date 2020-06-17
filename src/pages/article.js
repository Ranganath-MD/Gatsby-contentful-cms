import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, CardImg, CardTitle, CardBody } from "reactstrap"

const Articles = () => {
    const data = useStaticQuery(graphql`{
        allContentfulTitle {
            edges {
            node {
                author
                descriprtion
                id
                publishDate(fromNow: false)
                title
                titleImage {
                localFile {
                    url
                }
                }
            }
            }
        }
    }`)


    const allArticles = data.allContentfulTitle.edges
    return (
        <Layout>
            <div className="wrapper">
                <div className="title">
                    <h2>Articles </h2>
                    <div className="row">
                        {
                            allArticles.map((item, i)=> {
                                return (
                                    <div key={i} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <Link to={`${item.node.id}`}>
                                            <Card>
                                                <div className="card-img">
                                                    <CardImg
                                                        top
                                                        width="100%"
                                                        src={item.node.titleImage.localFile.url}
                                                        alt={item.node.description} />
                                                </div>
                                                <CardBody>
                                                    <CardTitle>{item.node.title}</CardTitle>
                                                </CardBody>
                                            </Card>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="articles"></div>
            </div>
        </Layout>
    )
}

export default Articles
