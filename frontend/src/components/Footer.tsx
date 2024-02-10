import FooterInfo from "./FooterInfo"

export default function Footer() {

    return(
        <div className="bg-gray-950 text-white flex justify-center">
            <div className=" w-11/12 ">
                <div className="flex justify-between mt-6 mb-12">

                    <div className="flex">
                        <div className="mr-20">
                            <FooterInfo one="Udemy business" two="Teach on Udemy" three="Get the app" four="About us" five="Contact us"/>
                        </div>
                        <div className="mr-20">
                            <FooterInfo one="Careers" two="Blog" three="Help and Support" four="Affiliate" five="Investors"/>
                        </div>
                        <div>
                             <FooterInfo one="Terms" two="Privacy policy" three="Cookie settings" four="Site map" five="Assessibility statement"/>
                        </div>
                    </div>
                    
                    <div className="flex border p-2 h-12 border-white cursor-pointer">
                        <div>
                            English
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mb-8">
                    <div className='cursor-pointer'>
                        <img className="h-8" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="logo" />
                    </div>
                    <div>
                    © 2024 Udemy, Inc.
                    </div>
                </div>
            </div>
        </div>
    )
}