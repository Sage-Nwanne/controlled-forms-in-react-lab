import { useState } from "react";

const Bookshelf = () => {

const [books, setBooks] = useState ([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
])

const [newBook, setNewBook] = useState ({
    title: '',
    author: '',
})


const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name] : event.target.value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks({...books, [event.target.name] : event.target.value});
        setNewBook({
            title: '',
            author: ''
     })
    }
    






    return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>

<label htmlFor="title">Title: </label>
<input id="title" name="title" value={newBook.title} onChange={handleInputChange}></input>

<label htmlFor="author">Author: </label>
<input id="author" name="author" value={newBook.author} onChange={handleInputChange}></input>
<button>Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    <h3>Your Bookshelf</h3>
    {books.map((book, index) => (
        <div key={index} className="bookCard">
            <h4>Title: {book.title} </h4>
            <h4>Author: {book.author} </h4>
        </div>
))}
</div>
</div>
 );
};


export default Bookshelf;