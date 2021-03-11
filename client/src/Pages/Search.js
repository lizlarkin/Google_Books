// QUESTION FOR FARAN: RCC VS RAFCE
// PROXY ERROR

import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {

    bookStyles = {
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

    state = {
        search: [],
        title: [],
        authors: [],
        description: [],
        imageUrl: [],
        link: [],
    }

    handleSearch = (e) => {
     this.setState({search: e.target.value})
    }

    handleSearchClick = (e) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
        .then(res => {
            console.log(res)
            // console.log("Title: " + res.data.items[0].volumeInfo.title)
            this.setState({title: res.data.items[0].volumeInfo.title})
            console.log("Author: " + res.data.items[0].volumeInfo.authors[0])
            this.setState({authors: res.data.items[0].volumeInfo.authors[0]})
            // console.log("Description: " + res.data.items[0].volumeInfo.subtitle)
            this.setState({description: res.data.items[0].volumeInfo.subtitle})
            // console.log("Image Link: " + res.data.items[0].volumeInfo.imageLinks.smallThumbnail)
            this.setState({imageUrl: res.data.items[0].volumeInfo.imageLinks.smallThumbnail})
            this.setState({link: res.data.items[0].volumeInfo.infoLink})
    })
    }

        handleSave = () => {
            const bookData = {
                title: this.state.title,
                authors: this.state.authors,
                description: this.state.description,
                imageUrl: this.state.imageUrl,
                link: this.state.link,
            }
            // console.log(this.state)
            axios.post("/books/save", this.state).then(res => {
                // console.log(res)
            })
            alert('Book saved!')
            }


    render() {
        return (
        
    <div className = "container">

        <div className="input-group mb-3 mt-5">
            <input onChange={(e)=> this.handleSearch(e)} type="text" className="form-control" placeholder="Search for Book" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button onClick={(e)=> this.handleSearchClick(e)} className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
        </div> 

        <div className="card">
            <img src={this.state.imageUrl} className="card-img-top" alt={this.state.title} style={this.bookStyles.imageStyles}/>
            <div className="card-body">
                <h4 className="card-title">{this.state.title}</h4>
                <h5 className="card-title">{this.state.authors}</h5>
                <p className="card-text">{this.state.description}</p>
                <a href={this.state.link} className="btn btn-outline-success" style={this.bookStyles.btnStyles}>View</a>
                <button onClick={(e)=> this.handleSave()} className="btn btn-outline-primary" type="button" style={this.bookStyles.btnStyles}>Save</button>
            </div>
        </div>

    </div>
    
        )
    }
}
