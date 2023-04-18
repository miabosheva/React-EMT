import axios from '../custom-axios/axios'

const libraryService = {
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchCategories: () => {
        return axios.get("/categories")
    },
    fetchAuthors: () => {
        return axios.get("/authors")
    },
    deleteBook: (id) => {
        return axios.delete(`/delete/${id}`);
    },
    addBook: (name, author, availableCopies, category) => {
        return axios.post("/add", {
            "name": name,
            "author": author,
            "availableCopies": availableCopies,
            "category": category
        });
    }
}

export default libraryService;