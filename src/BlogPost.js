import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "./blogdata"

export function BlogPost () {

    const {slug} = useParams()

    const navigate = useNavigate()

    const blogpost = blogdata.find(post => post.slug === slug)

    const returnToBlog = () => {
        navigate('/blog')
        // navigate(-1) sirve para hacer un back a la ruta anterior
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    )
}