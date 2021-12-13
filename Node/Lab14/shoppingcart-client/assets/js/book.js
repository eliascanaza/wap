let url = {
    add: "http://localhost:3000/books/add",
    list: "http://localhost:3000/books",
    update:"http://localhost:3000/books/update",
    delete: "http://localhost:3000/books"
}

let fun = {
    books: [],
    idToUpdate: "", 
    submit : function() {
        const self = this;
        const form = document.getElementById('form-add-book');
        form.onsubmit = function (evt) {
            evt.preventDefault();
            
            if(self.idToUpdate != "")
                self.refreshBook(self.idToUpdate, form);
            else
                self.sendData(form);
        }
    },
    sendData: async function(form){
        let result = await fetch(url.add, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                isbn: document.getElementById('isbn').value,
                publishedDate: document.getElementById('publishedDate').value,
                author: document.getElementById('author').value,
                description: document.getElementById('description').value
            })
        }).then(res => res.json());

        this.listBooks();
        form.reset();
    },
    listBooks: async function() {
        const table = document.getElementById('data-books');
        let result = await fetch(url.list)
                            .then(res => res.json());
        console.log("listBooks - books: "+result.length);
        
        let row = "";
        this.books = result;
        result.forEach(book=>{
            row += `
            <tr>
                <td>${book.id}</td>
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${book.publishedDate}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>
                    <a class="button-option edit" onClick="fun.updateBook(${book.id}); return false;" href="#"><img src="assets/img/edit.png"></a>
                    <a class="button-option delete" onClick="fun.deleteBook(${book.id}); return false;" href="#"><img src="assets/img/delete.png"></a>
                </td>
            </tr>
            `;
        });
        document.getElementById('data-books').innerHTML = row;
        document.getElementsByClassName('list-books').visibility = 'visible';
    },
    updateBook: async function(id) {
        console.log("update: "+id);

        this.books.forEach(book => {
            if(book.id == id){
                document.getElementById('title').value = book.title;
                document.getElementById('isbn').value  = book.isbn;
                document.getElementById('publishedDate').value = book.publishedDate;
                document.getElementById('author').value = book.author;
                document.getElementById('description').value = book.description;
            }
        });
        this.idToUpdate = id;
        this.updateMessage(true);
    },
    refreshBook: async function(id, form) {
        let result = await fetch(url.update,  {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                title: document.getElementById('title').value,
                isbn: document.getElementById('isbn').value,
                publishedDate: document.getElementById('publishedDate').value,
                author: document.getElementById('author').value,
                description: document.getElementById('description').value
            })
        }).then();
        this.listBooks();
        this.idToUpdate = "";
        form.reset();
        this.updateMessage(false);
    },
    deleteBook: async function (id) {
        console.log("delete: "+id);
        let res = confirm("Are you sure?");
        if(res){
            let result = await fetch(url.delete+"/"+id,  {
                method: 'DELETE'
            }).then();
            
            if(result.status == 200)
                fun.listBooks();
            else
                alert("Something was happened!");
        }
    },
    updateMessage: function (type) {
        console.log(type);
        document.getElementById('button-register').innerText = type?"Update":"Register";
        document.getElementById('title-form').innerText = type?"Update Book":"New Book";
    }
};

window.onload = function () {
    fun.submit();
    fun.listBooks();
}
