import Head from "next/head"
import { useRouter } from "next/router"
import ArticlesList from "../../components/ArticlesList"
import { getCategories, getCategory } from "../../utils/api"
import { getBlogs, getBlog } from "../../utils/api"

const BlogPage = ({ blog }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{blog.name} products</title>
      </Head>
      <ArticlesList articles={blog.articles} />
    </div>
  )
}

export default BlogPage

export async function getStaticProps({ params }) {
  const blog = await getBlog(params.slug)
  return { props: { blog } }
}

export async function getStaticPaths() {
  const blogs = await getBlogs()
  return {
    paths: blogs.map((_blog) => {
      return {
        params: { slug: _blog.slug },
      }
    }),
    fallback: true,
  }
}
