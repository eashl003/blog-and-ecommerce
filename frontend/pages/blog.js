
import ArticlesList from "../components/ArticlesList"
import { getArticles } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"

const BlogPage = ({ articles }) => {
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
