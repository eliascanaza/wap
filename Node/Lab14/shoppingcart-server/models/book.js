let books = [];

module.exports = class Book{
    constructor(id, title, isbn, publishedDate, author, description){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
        this.description = description;
    }

    /**
     * Save book
     * @returns book
     */
    save(){
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    /**
     * Return all books
     * @returns books
     */
    static fetchAll(){
        return books;
    }

    /**
     * Update book
     * @returns updated book
     */
    update(){
        const index = books.findIndex(book => book.id == this.id);
        if(index > -1){
            books[index] = this;
            return this;
        }else {
            throw new Error('Book not found!');
        }
    }

    /**
     * find book by id
     * @param {*} bookId 
     * @returns return book by id
     */
    static findById(bookId){
        const index = books.findIndex(book => book.id === bookId);
        if(index > -1){
            return books[index];
        }else {
            throw new Error('Book not found!');
        }
    }

    /**
     * delete by book id
     * @param {*} bookId 
     */
    static deleteById(bookId){
        const index = books.findIndex(book => book.id == bookId);
        if(index > -1){
            books = books.filter(book => book.id != bookId);
        }else {
            throw new Error('Book not found!');
        }
    }
}
