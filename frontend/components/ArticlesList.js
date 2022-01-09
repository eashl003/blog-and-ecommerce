import Link from "next/link" 

const ArticlesList = ({ articles }) => {
  return (
    <div className="flex justify-center bg-gray-200">
     <div className="max-w-screen-lg flex flex-col min-h-screen w-full"> 
      <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-8">
        {articles.map((_article) => (
          <div
            key={_article.id}
            className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
          >
            <Link href={`/articles/${_article.slug}`}>
              <a>
                <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                  <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                    {_article.title} 
                  </h4>
                  <div className="mt-1 text-sm text-gray-700">
                    {_article.description}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  ) 
}

export default ArticlesList
