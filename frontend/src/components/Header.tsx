import cart from '../assets/cart.svg'
import world from '../assets/world.svg'

export default function Header() {
    return (
        <div className="flex shadow h-16 items-center justify-around">

              <div className='cursor-pointer'>
                  <img className="h-8" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" />
              </div>
              <div className='cursor-pointer'>Catagories</div>
              <div className="w-5/12">
                <input type="search" 
                  id="default-search" 
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Search for anything" required />
              </div>
              <div className='cursor-pointer'>Udemy Business</div>
              <div className='cursor-pointer'>Teach On Udemy</div>
              <div className='cursor-pointer'>
                <img width="25px" src={cart} alt="cart" />
              </div>
              <div className='cursor-pointer font-bold border border-black py-2 px-4 hover:bg-slate-100'>Log in</div>
              <div className='cursor-pointer font-bold bg-black text-white border border-black py-2 px-4 hover:bg-slate-800'>Sign up</div>
              <div className='cursor-pointer border border-black p-2'>
                <img width="25px" src={world} alt="world" />
              </div>

        </div>
    )
}