import Link from "next/link"
import NextImage from "./Image"  
 
const Header = ({ categories = [], blogs = [] }) => {
  return ( 
    <nav id="navbar" class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
      <Link href="/">
        <a>
          TEST NAME
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
      <div id="blog-link"  class="dropdown">
        <Link href="/blog">Blog</Link>
        {/*<ul class="dropdown-content">
        {blogs.map((_blog) => {
          return (
            <li key={_blog.id}>
               <Link href={`/blogs/${_blog.slug}`} >
                <a id="dropdown-link" >
                  {_blog.name}
                </a>
                
            </Link>
            </li>
          )
          })}
        </ul> */}
      </div>
      <div id="shop-link" class="dropdown">
        <Link href="/shop">Shop</Link>
        <ul class="dropdown-content">
        {categories.map((_category) => {
          return (
            <li key={_category.id}>
               <Link href={`/categories/${_category.slug}`} >
                <a id="dropdown-link" >
                  {_category.name}
                </a>
                
            </Link>
            </li>
          )
          })}
        </ul>
         
      </div>
      <div id="shop-link" ><a href="/about">About</a></div>
         
      </div>
    </div>
    </nav>
  )
}

export default Header

 /*
 <div className="flex justify-between ml-6 mr-6 mt-4">
      <nav class="navbar navbar-inverse">
      <Link href="/">
        <a>
          <NextImage
            src="/strapi.png"
            alt="home"
            className="logo"
            height="44"
            width="150"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
      </nav>
    </div>
 */

   