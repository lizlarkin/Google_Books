import React from 'react'
import axios from 'axios'

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

const handleDelete = (e) => {
  alert('deleted!')
  axios.delete("/books/" + e.target.id)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

// let savedBooks;

// const getSaved = ()=>{
//   axios.get("/books").then(res=> savedBooks = res)
//   console.log(savedBooks);
// }

// getSaved()

    // QUESTION FOR FARAN: WHY DOES IT NEED TO COME IN AS PROPS FROM APP
    // VS. AXIOS.GET FROM THIS PAGE AND THIS.STATE TO GET DATA
    // (LOADING SEQUENCE WRONG - CRASHED WHEN RELOADED)



    return (
        <div className = "container">
            <h1>Saved Books</h1> 
            <div className = "container">
            {props.books.map(book => (
              <div className="card mt-2 mb-2">
                <img src={book.imageUrl} className="card-img-top" alt={book.title} style={bookStyles.imageStyles}/>
                <div className="card-body">
                    <h4 className="card-title">{book.title}</h4>
                    <h5 className="card-title">{book.author}</h5>
                    <p className="card-text">{book.description}</p>
                    <a href={book.link} className="btn btn-outline-secondary" style={bookStyles.btnStyles}>View</a>
                    <button onClick={(e)=> handleDelete(e)} className="btn btn-outline-danger" type="button" style={bookStyles.btnStyles} id={book._id}>Delete</button>
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

