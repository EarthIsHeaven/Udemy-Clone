export default function Footer() {

    return(
        <div className="bg-gray-950 text-white flex justify-center">
            <div className=" w-11/12 ">
                <div className="flex justify-between mt-6 mb-12">
                    <div className="flex">
                        <div className="mr-20">
                            <div>Udemy business</div>
                            <div>Teach on Udemy</div>
                            <div>Get the app</div>
                            <div>About us</div>
                            <div>Contact us</div>
                        </div>
                        <div className="mr-20">
                            <div>Careers</div>
                            <div>Blog</div>
                            <div>Help and Support</div>
                            <div>Affiliate</div>
                            <div>Investors</div>
                        </div>
                        <div>
                            <div>Terms</div>
                            <div>Privacy policy</div>
                            <div>Cookie settings</div>
                            <div>Sitemap</div>
                            <div>Assessibility statement</div>
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