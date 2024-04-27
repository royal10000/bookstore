import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBook = () => {
    const { _id } = useParams()
    const Navigate = useNavigate()
    useEffect(() => {
        const deleteBook = async () => {

            const data = await axios.delete(`http://localhost:8000/book/${_id}`)
            if (data.status === 200) {
                // console.log("hello world")
                Navigate('/edit-book')
            }else{
                alert("something is wrong   ")
            }
        }

        deleteBook()
    },[])
    return (

        <>
            <div className="h-[30rem] p-[4rem]">
                this is delete page {_id}
            </div>
        </>
    )
}

export default DeleteBook