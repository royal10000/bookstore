
import { Link } from "react-router-dom"
const Card = (data, key) => {
    const { _id, bookName, bookPrice, bookImage, authorName, publication } = data.data

    return (
        <>
            <div key={key} className=" md:w-1/3 sm:w-1/2   rounded overflow-hidden shadow-lg mt-10">
                <img className="w-full h-[15rem] object-contain" src={bookImage} alt="image not found" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{bookName}</div>
                    <p className="text-gray-700 text-base">
                        <span className="font-bold text-l ">Author : </span> {authorName}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className="font-bold text-l ">Publication : </span> {publication}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className="font-bold text-l ">Price : </span> {bookPrice}
                    </p>
                </div>
                <div className="px-3 mb-5 bg-blue-600 text-white font-semibold hover:bg-blue-900 transition-all  w-fit ml-5 rounded-md  py-1" >
                    <Link to={"/books/" + _id}> Read More</Link>
                </div>
            </div>
        </>
    )
}

export default Card