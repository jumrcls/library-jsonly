
let library = []


function addBook(book) {
    library.push(book)
}

function getAvailableBooks() { /*récupere le livre dispo dans la bibli*/

    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        if (book.borrowed === false) {
            console.log(book)
        }

    }
}

library.forEach(book => { /*parcours le tableau et affiche le livre dispo*/
    if (book.borrowed === false)
        console.log(book)
})

function searchByTitle(title) { /*chercher son livre par son titre*/
    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        if (book.title.toLowerCase().trim() == title.toLowerCase().trim()) { /*tout en bas de case et trim compte pas les espaces*/
            return book
        }
    }
}

function borrowedBook(title) /*savoir si le livre est emprunté*/
{
 if (searchByTitle(title)) { 
        const book = searchByTitle(title); //si le livre existe, on vérifie s'il est déjà emprunté ou non //
        if (book.borrowed === false) {
        }else{

            book.borrowed = true;
            console.log(`Le livre "${book.title}" a été emprunté.`);
        }
    }
}




addBook({
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    publicationYear: 1937,
    borrowed: false
})

addBook({
    title: 'Neuromancier',
    author: 'Wiliam Gibson',
    ypublicationYar: 2019,
    borrowed: true
})

addBook({
    title: 'Les furtifs',
    author: 'Alain Damasio',
    ypublicationYar: 2019,
    borrowed: false
})

console.log(library)

console.log
getAvailableBooks()

const searchedBook = searchByTitle('The Hobbit')

console.log(`Le livre que vous recherchez est ${searchedBook.title} de ${searchedBook.author}, publié en ${searchedBook.publicationYear}.`);