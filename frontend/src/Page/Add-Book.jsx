import axios from "axios"
import { useState } from "react"

const Add_Book = () => {
  const [bookName, setBookName] = useState("")
  const [bookPrice, setBookPrice] = useState("")
  const [isbnNumber, setIsbnNumber] = useState('')
  const [bookImage, setBookImage] = useState(null)
  const [authorName, setAuthorName] = useState("")
  const [publication, setPublication] = useState("")

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append('bookName', bookName);
      formData.append('bookPrice', bookPrice);
      formData.append('isbnNumber', isbnNumber);
      formData.append('bookImage', bookImage[0]); // assuming bookImage is a FileList
      formData.append('authorName', authorName);
      formData.append('publication', publication);

      await axios.post(`${import.meta.env.LOCALHOST_URI}/book`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setAuthorName("")
      setBookName("")
      setBookImage(null)
      setIsbnNumber("")
      setPublication("")
      setBookPrice("")
    } catch (error) {
      console.log('error while submitting form', error)
    }
  }
  return (
    <>
      <div className="py-34">
        <form className="xl:max-w-7xl max-w-sm mx-auto my-48" onSubmit={HandleSubmit}>
          <div className="mb-5">
            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Name</label>
            <input type="text" id="bookName" name="bookName" value={bookName} onChange={(e) => { setBookName(e.target.value); }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter book name" required />
          </div>
          <div className="mb-5">
            <label htmlFor="bookImage" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Price</label>
            <input type="file" name="bookImage" onChange={(e) => { setBookImage(e.target.files); console.log(e.target.files[0]) }} id="bookImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
          </div>
          <div className="mb-5">
            <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Price</label>
            <input type="text" name="bookPrice" value={bookPrice} onChange={(e) => { setBookPrice(e.target.value) }} id="bookPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter book price" required />
          </div>
          <div className="mb-5">
            <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book isbnNumber</label>
            <input type="text" name="isbnNumber" value={isbnNumber} onChange={(e) => setIsbnNumber(e.target.value)} id="isbnNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter isbn number" required />
          </div>
          <div className="mb-5 ">
            <label htmlFor="bookPublication" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Book Publication</label>
            <input type="text" name="publication" value={publication} onChange={(e) => setPublication(e.target.value)} id="bookPublication" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter book publication" required />
          </div>
          <div className="mb-5">
            <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 className=text-white">Author Name</label>
            <input type="text" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} id="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Author Name" required />
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Add_Book