import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component{
  render(){
    const { data } = this.props

    const posts = data.allMarkdownRemark.edges

  return(
    <Layout>
      <SEO title="Home" />
      {posts.map(({ node }) => {
          const title = node.frontmatter.title;
          const path = node.frontmatter.path;
          const image = node.frontmatter.img;
          return (
            <Link to={path} key={node.id}>
               <h1>{title}</h1>
               <img src={image} alt="" width="100px"/>
            </Link>
          )
        })}
  </Layout>
  )
  }
}


export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id,
        html
        frontmatter {
          title
          path
          date
          img
        }
      }
    }
  }
}
`