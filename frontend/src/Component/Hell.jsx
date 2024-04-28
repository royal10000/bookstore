import DeleteBook from "./DeleteBook"
import EditButton from "./EditButton"

const Hell = (data, key) => {
    const { _id, bookName, bookPrice, authorName, bookImage, publication } = data.data
    return (
        <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {bookName}
            </th>
            <td className="px-6 py-4">
                <img src={bookImage} className="h-12 w-12" alt="" />
            </td>
            <td className="px-6 py-4">
                <span className="font-bold">Rs.</span> {bookPrice}
            </td>
            <td className="px-6 py-4">
                {publication}
            </td>
            <td className="px-6 py-4">
                {authorName}
            </td>
            <td className="px-6 py-4 flex gap-4">
                <EditButton id={`${_id}`} />
                <DeleteBook id={`${_id}`} />
            </td>
        </tr>
    )
}

export default Hell