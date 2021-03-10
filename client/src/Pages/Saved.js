import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

const Saved = () => {

    // Get saved books from back end

    const [books, setBooks] = useState([])

    const getSavedBooks = async () => {
        const { data } = await axios.get("/books");
        console.log(data);
        setBooks(data)
        let phil = (data[0].authors)
        console.log(phil)
      };
    
      useEffect(() => {
        getSavedBooks();
      }, []);

    return (
        <div className = "container">
            <h1>pleeease just work </h1>  
        </div>
    )
}

export default Saved
