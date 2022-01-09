 
import { useRouter } from "next/router"
import { getArticles, getArticle } from "../../utils/api"

const ArticlePage = ({ article }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading article...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{article.title} article</title>
      </Head> 
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {article.title}  
          </h4>
         
        </div>

        {article.status === "published" ? (
          <button
            className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            data-item-id={article.id} 
            data-item-url={router.asPath}
            data-item-description={article.description} 
            data-item-name={article.title} 
          >
             
          </button>
        ) : (
          <div className="text-center mr-10 mb-1" v-else>
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Coming soon...
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                This article is not available yet.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticlePage



export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug)
  return { props: { article } }
}

export async function getStaticPaths() {
  const articles = await getArticles()
  return {
    paths: articles.map((_article) => {
      return {
        params: { slug: _article.slug },
      }
    }),
    fallback: true,
  }
}