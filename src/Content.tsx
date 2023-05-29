type ContentType = {
    text1: string
    text2: string
}

export const Content = ({ text1, text2 }: ContentType) => {
    return (
        <>
            <p className="blue">{text1}</p>
            <p>{text2}</p>
        </>
    )
}

export default Content
