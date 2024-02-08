
export default function Course({src, name, author, price}: {src: string, name: string, author: string, price: string}) {

    return (
        <div>
            <div>
                <img src={src} alt="image" />
            </div>
            <div>
                {name}
            </div>
            <div>
                {author}
            </div>
            <div>
                {price}
            </div>
        </div>
    )
}