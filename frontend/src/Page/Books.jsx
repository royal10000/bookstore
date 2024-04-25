import { useEffect, useState } from "react";
import Card from "../Component/Card";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);

    const fetchBook = async () => {
        try {
            return await axios.get('http://localhost:8000/book/');
            // return response.data; // Return the data from the response
        } catch (error) {
            throw new Error("Error fetching data: " + error.message);
        }
    };

    useEffect(() => {
        fetchBook().then((value) => {
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
            <div className="container m-auto   pb-16 pt-28 xl:mx-auto lg:px-8 xl:max-w-7xl flex flex-wrap-reverse justify-between  ">
                {
                    books.map((value,index) => {
                        return <Card key={index} data={value} />
                    })
                }
                
            </div>
        </>
    );
};

export default Books;
