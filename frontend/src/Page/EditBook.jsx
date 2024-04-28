import axios from "axios"
import { useEffect, useState } from "react"
import Hell from "../Component/Hell"

const EditBook = () => {
    const [books, setBooks] = useState([])
    const fetchData = async () => {
        try {
            return await axios.get(`${import.meta.env.VITE_LOCALHOST_URI}/book`)
        } catch (error) {
            throw new Error("something is wrong while fetching data", error)
        }
    }

    useEffect(() => {
        fetchData()
            .then((res) => { return res.data })
            .then((data) => {
                const book = data.data
                setBooks(book)
            })
            .catch((error) => {
                throw new Error("something is wrong while fetching books", error)
            })
    }, [books])

    return (
        <>
            <div className="h-full py-52 bg-red-400 dark:bg-black">


                <div className=" xl:max-w-7xl mx-auto  overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Publication
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                books.length > 0 ? books.map((value, index) => {
                                    return <Hell key={index} data={value} />
                                }) : <tr>
                                    <td>hello</td>
                                </tr>

                            }

                        </tbody>
                    </table>
                </div>


            </div >
        </>
    )
}

export default EditBook