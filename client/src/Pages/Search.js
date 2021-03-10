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

    // Get books from Google Books API

    state = {
        search: [],
        title: [],
        author: [],
        description: [],
        image: [],
        infoLink: [],
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
            this.setState({author: res.data.items[0].volumeInfo.authors[0]})
            // console.log("Description: " + res.data.items[0].volumeInfo.subtitle)
            this.setState({description: res.data.items[0].volumeInfo.subtitle})
            // console.log("Image Link: " + res.data.items[0].volumeInfo.imageLinks.smallThumbnail)
            this.setState({image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail})
            this.setState({infoLink: res.data.items[0].volumeInfo.infoLink})
    })
    }

    handleSave = (e) => {
        alert('figure this out!')
    }

    render() {
        return (
        
    <div className = "container">

        <div className="input-group mb-3 mt-5">
            <input onChange={(e)=> this.handleSearch(e)} type="text" className="form-control" placeholder="Search for Book" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button onClick={(e)=> this.handleSearchClick(e)} className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
        </div> 

        <div className="card">
            <img src={this.state.image} className="card-img-top" alt={this.state.title} style={this.bookStyles.imageStyles}/>
            <div className="card-body">
                <h4 className="card-title">{this.state.title}</h4>
                <h5 className="card-title">{this.state.author}</h5>
                <p className="card-text">{this.state.description}</p>
                <a href={this.state.infoLink} className="btn btn-success" style={this.bookStyles.btnStyles}>View</a>
                <a href="#" className="btn btn-primary" style={this.bookStyles.btnStyles}>Save</a>
            </div>
        </div>

    </div>
    
        )
    }
}