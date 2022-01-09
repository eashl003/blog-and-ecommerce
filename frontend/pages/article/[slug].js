import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article }) => {
 
 
  return (
    <div>
        <h1>{article.attributes.title}</h1>
    </div>
  )
}

export default Article



export async function getStaticProps({ params }) {
  const article = await getProduct(params.slug)
  return { props: { article } }
}

export async function getStaticPaths() {
  const articles = await getProducts()
  return {
    paths: articles.map((_article) => {
      return {
        params: { slug: _article.slug },
      }
    }),
    fallback: true,
  }
}