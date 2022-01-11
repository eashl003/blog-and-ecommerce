
import ArticlesList from "../components/ArticlesList"
import { getArticles } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"
import { getBlogs } from "../utils/api"

const BlogPage = ({ articles, blogs }) => {
  return (
    <div> Blog page
      <ArticlesList articles={articles} />
    </div>
  )
}

export async function getStaticProps() {
  const articles = await getArticles()
  return { props: { articles } }
}

export default BlogPage
