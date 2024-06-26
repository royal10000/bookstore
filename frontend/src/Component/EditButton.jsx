import axios from "axios";
import { useState } from "react";

const EditButton = (prop) => {
    const id = prop.id
    const [showmodal, setshowModal] = useState(false)
    const [book, setbook] = useState({})
    const [bookImage, setBookImage] = useState(null)
    useState(() => {
        try {
            const fetchBook = async () => {
                return await axios.get(`${import.meta.env.VITE_LOCALHOST_URI}/book/${id}`)
            }

            fetchBook()
                .then((response) => { return response.data })
                .then((result) => {

                    const data = result.data
                    setbook(data)
                    setBookImage(data.bookImage)
                })
        } catch (error) {
            console.log('error while fetching data', error)
        }
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setbook({
            ...book,
            [name]: value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(book)
            console.log(bookImage)
            const formData = new FormData()
            Object.entries(book).forEach(([key, value]) => {
                formData.append(key, value)
            })
            formData.append('bookImage', bookImage)

            const postData = await axios.patch(`${import.meta.env.VITE_LOCALHOST_URI}/book/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (postData.status === 200) {
                setshowModal(false)
            } else {
                alert(" not updat   ed")
            }
        } catch (error) {
            console.log(" error while updating data", error)
        }
    }
    return (
        <>
            <button onClick={() => { setshowModal(true) }} className="bg-blue-600 text-white px-2 py-1 rounded-md first-letter:capitalize font-semibold">edit </button>


            {
                showmodal ? (
                    <>
                        <div className="  h-full w-full absolute top-0 left-0 ">
                            <div className="absolute bg-white -top-3 w-[40rem] left-1/2 mx-auto my-48 -translate-x-1/2   p-10  rounded-lg shadow-lg">
                                <form className="" onSubmit={HandleSubmit}>
                                    <div className="mb-5">
                                        <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Name</label>
                                        <input type="text" id="bookName" name="bookName" onChange={handleChange} defaultValue={book.bookName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="bookImage" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Price</label>
                                        <input type="file" name="bookImage" onChange={(e) => { setBookImage(e.target.files[0]); }} id="bookImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Price</label>
                                        <input type="text" name="bookPrice" onChange={(handleChange)} defaultValue={book.bookPrice} id="bookPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book isbnNumber</label>
                                        <input type="text" name="isbnNumber" onChange={handleChange} defaultValue={book.isbnNumber} id="isbnNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter isbn number" required />
                                    </div>
                                    <div className="mb-5 ">
                                        <label htmlFor="bookPublication" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Publication</label>
                                        <input type="text" name="publication" onChange={handleChange} defaultValue={book.publication} id="bookPublication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter book publication" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Author Name</label>
                                        <input type="text" name="authorName" onChange={handleChange} defaultValue={book.authorName} id="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Author Name" required />
                                    </div>

                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                                    <button onClick={() => { setshowModal(false) }} className="text-white ml-4 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">close</button>
                                </form>
                            </div>
                        </div>
                    </>
                ) : null
            }

        </>
    )
}

export default EditButton