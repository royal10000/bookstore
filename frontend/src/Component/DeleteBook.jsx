import axios from "axios"


const DeleteBook = (prop) => {
    const HandleClick = async (id) => {
        await axios.delete(`${import.meta.env.VITE_LOCALHOST_URI}/book/${id}`)
    }
    return (

        <>
            <button className="bg-red-600 text-white px-2 rounded-md first-letter:capitalize font-semibold" onClick={() => { HandleClick(prop.id) }}>delete</button>
        </>
    )
}

export default DeleteBook