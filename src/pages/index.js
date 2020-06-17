import React from "react"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Contentful" />
    <div >
      <motion.div
        className="container"
        animate={{ y: 100,}}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <h1>Source content from Conentful</h1>
        <p>It’s the modern way to manage content: Control all content from a single hub. Publish to any channel. Integrate hundreds of tools with our industry-leading app framework.</p>
      </motion.div>
    </div>
  </Layout>
)

export default IndexPage
