import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleBook = () => {
    const [singleData, setSingleData] = useState([])
    const { _id } = useParams()
    const FetchSingleBook = async () => {

        return await axios.get(`http://localhost:8000/book/${_id}`)
    }
    useEffect(() => {
        console.log(FetchSingleBook())
        FetchSingleBook().then((response) => {
            // console.log(response.json())
            return response.data
        }).then((value) => {
            console.log(value.data)
            // const Book = value.data
            setSingleData((value.data))
            // return Book
        }).catch((error) => {
            throw new Error('Error while fetching Single book', error)
        })
    }, [_id])

    return (
        <>
            
            <div className="my-32 xl:max-w-7xl m-auto">
                <div className="   rounded overflow-hidden shadow-lg mt-10">
                    <img className="w-full h-[30rem] object-cover" src={singleData.bookImage} alt="image not found" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{singleData.bookName}</div>
                        <p className="text-gray-700 text-base">
                            <span className="font-bold text-l ">Author : </span> {singleData.authorName}
                        </p>
                        <p className="text-gray-700 text-base">
                            <span className="font-bold text-l ">Publication : </span> {singleData.publication}
                        </p>
                        <p className="text-gray-700 text-base">
                            <span className="font-bold text-l ">Price : </span> {singleData.bookPrice}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleBook