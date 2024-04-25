
const Card = (data,key) => {
    const {  bookName, bookPrice, bookImage, authorName, isbnNumber,publication } = data.data

    return (
        <>
            <div key={key} className=" md:w-1/3 sm:w-1/2     rounded overflow-hidden shadow-lg mt-10">
                <img className="w-full h-[15rem] object-contain" src={bookImage} alt="image not found" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{bookName}</div>
                    <p className="text-gray-700 text-base">
                        {authorName}
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{bookPrice}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{publication}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{isbnNumber}</span>
                </div>
            </div>
        </>
    )
}

export default Card