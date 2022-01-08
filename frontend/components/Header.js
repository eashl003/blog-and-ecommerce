import Link from "next/link"
import NextImage from "./Image" 
 
const Header = () => {
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
      <div class="dropdown">
        <Link href="/">Blog</Link>
        <div class="dropdown-content">
          <a id="dropdown-link" href="#">Link 1</a><br></br>
          <a id="dropdown-link" href="#">Link 2</a><br></br>
          <a id="dropdown-link" href="#">Link 3</a><br></br>
        </div>
      </div>
      <div class="dropdown">
        <Link href="/">Shop</Link>
        <div class="dropdown-content">
          <a id="dropdown-link" href="#">Link 1</a><br></br>
          <a id="dropdown-link" href="#">Link 2</a><br></br>
          <a id="dropdown-link" href="#">Link 3</a><br></br>
        </div>
      </div>
      
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

   