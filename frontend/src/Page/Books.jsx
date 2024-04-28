import { useEffect, useState } from "react";
import Card from "../Component/Card";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);
    const FetchBook = async () => {
        try {
            return await axios.get(`${import.meta.env.VITE_LOCALHOST_URI}/book/`);
            // return response.data; // Return the data from the response
        } catch (error) {
            throw new Error("Error fetching data: " + error.message);
        }
    };


    useEffect(() => {
        FetchBook().then((value) => {
            return value.data
        }).then((res) => {
            const data = res.data
            setBooks(data)
        }).catch((error) => {
            throw new Error("Something is wrong while fetching data from database or during promise", error)
        })
        // const fetchData = async () => {
        //     try {
        //         const data = await fetchBook();
        //         setBooks(data); // Update the state with fetched data
        //         console.log(data)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };

        // fetchData();
    }, []);

    return (
        <>
            <div className="container xl:m-auto   pb-16 pt-28 xl:mx-auto lg:px-8 xl:max-w-7xl flex flex-wrap xl:justify-between   ">
                {
                    books.length > 0 ? books.map((value, index) => {
                        console.log(value)
                        return <Card key={index} data={value} />
                    }) : "no book available"
                }

            </div>
        </>
    );
};

export default Books;
