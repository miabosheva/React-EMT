import './App.css';
import React, {Component} from "react";
import Books from '../Books/BooksList/books';
import LibraryService from '../../repository/libraryRepository'
import {BrowserRouter as Router, Redirect, Route, RouteProps} from "react-router-dom";
import Categories from '../Categories/listCategories'
import Header from '../Header/header'
import libraryRepository from "../../repository/libraryRepository";
import BooksAdd from '../Books/BooksAdd/booksAdd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/add"} exact render={() =>
                            <BooksAdd
                                categories={this.state.categories}
                                authors={this.state.authors}
                                onAddBook={this.addBook}/>}/>
                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books} onDelete={this.deleteBook}/>}/>
                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>

                    </div>
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        LibraryService.fetchBooks().then((data) => {
            this.setState({
                books: data.data
            })
        })
    }

    loadCategories = () => {
        LibraryService.fetchCategories().then((data) => {
            this.setState({
                categories: data.data
            })
        })
    }
    loadAuthors = () => {
        LibraryService.fetchAuthors().then((data) => {
            this.setState({
                authors: data.data
            })
        })
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id).then(() => {
            this.loadBooks();
        })
    }

    addBook = (name, author, availableCopies, category) => {
        libraryRepository.addBook(name, author, availableCopies, category)
            .then(() => {
            this.loadBooks();
            });
    }


    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();
    }
}

export default App;
