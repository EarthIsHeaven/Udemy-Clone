import Course from "./Course"
export default function PythonAndWeb({heading, description, buttonText, src, name, author, price}: {heading: string, description: string, buttonText: string, src: string, name: string, author: string, price: string}) {
    
    return (
        <div>
                <div className="font-bold text-xl mb-2">
                    {heading}
                </div>
                <div className="w-7/12 mb-4">
                    {description}
                </div>
                <div className="mb-6">
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold text-sm px-5 py-2.5 me-2 mb-2">Explore {buttonText}</button>
                </div>
                <div className="flex gap-4">
                    <Course src={src} 
                            name={name} 
                            author={author}
                            price={price}
                    />
                    <Course src={src} 
                            name={name} 
                            author={author}
                            price={price}
                    />
                    <Course src={src} 
                            name={name} 
                            author={author}
                            price={price}
                    />
                    <Course src={src} 
                            name={name} 
                            author={author}
                            price={price}
                    />
                    <Course src={src} 
                            name={name} 
                            author={author}
                            price={price}
                    />
                </div>
            </div>
    )
}