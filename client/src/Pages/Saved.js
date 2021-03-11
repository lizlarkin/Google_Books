import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

const Saved = (props) => {

  const bookStyles = {
    btnStyles: {
        marginLeft: "10px",
        width: "100px",
    },
    imageStyles: {
        width: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
    }
}

    // QUESTION FOR FARAN: WHY DOES IT NEED TO COME IN AS PROPS FROM APP
    // VS. AXIOS.GET FROM THIS PAGE AND THIS.STATE TO GET DATA
    // (LOADING SEQUENCE WRONG - CRASHED WHEN RELOADED)



    return (
        <div className = "container">
            <h1>Saved Books</h1> 
            <div className = "container">
            {props.books.map(book => (
              <div className="card">
                <img src={book.image} className="card-img-top" alt={book.title} style={bookStyles.imageStyles}/>
                <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                    <h5 className="card-title">{book.author}</h5>
                    <p className="card-text">{book.description}</p>
                    <a href={book.infoLink} className="btn btn-outline-secondary" style={bookStyles.btnStyles}>View</a>
                    <button onClick={(e)=> this.handleSave(e)} className="btn btn-outline-danger" type="button" style={bookStyles.btnStyles}>Delete</button>
                </div>
</div>
            ))}
        </div>
        </div>
    )
}

export default Saved


// const [books, setBooks] = useState([])

// const getSavedBooks = async () => {
//     const { data } = await axios.get("/books");
//     console.log(data);
//     setBooks(data)
//   };

//   useEffect(() => {
//     getSavedBooks();
//     console.log('load this')
//   }, []);


// ANOTHER ALT THAT DOESN"T WORK

// const [books, setBooks] = useState([])
    
// useEffect(async () => {
//   const bookData = await  axios.get("/books");
//   setBooks(bookData.data)
//   console.log('load this')
// }, []);

