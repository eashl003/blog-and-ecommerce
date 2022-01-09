
import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col min-h-screen w-full">
        <Header categories={categories} />
        <CategoryButtons categories={categories} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout