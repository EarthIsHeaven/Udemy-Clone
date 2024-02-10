export default function FooterInfo({one, two, three, four, five}: {one: string, two: string, three: string, four: string, five: string}) {

    return (
        <div>
            <div>{one}</div>
            <div>{two}</div>
            <div>{three}</div>
            <div>{four}</div>
            <div>{five}</div>
        </div>
    )
}