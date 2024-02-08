export default function Header() {
    return (
        <div className="flex justify-around shadow h-16 items-center">

          <div className="flex gap-11 items-center">

            <div>
                <img className="h-8" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" />
            </div>
            <div>catagories</div>
            <div>
             <input type="search" 
               id="default-search" 
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
               placeholder="Search for anything" required />
            </div>
            <div>udemy business</div>
            <div>teach on udemy</div>
            <div>cart logo</div>
            <div>log in</div>
            <div>sign up</div>
            <div>language logo</div>

          </div>

        </div>
    )
}