import { db } from "../db.js";

db.connect((error) => {
    if (error) {
        console.log("There is an error while connecting to the MYSQL server.");
    } else {
        console.log("Connected to the MYSQL server.");
    }
});

export const getBooks = (req, res) => {
    const q = "SELECT BookISBNNumber,BookName,BookPrice,AuthorName,BookImage,CategoryName FROM bookdetails b INNER JOIN bookcategory c ON b.CategoryId = c.CategoryId";
    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    });
}

export const createNewBook = (req, res) => {
    const q = "INSERT INTO bookdetails (`BookISBNNumber`, `BookName`, `BookPrice`, `AuthorName`, `PublisherName`, `BookEdition`, `BookLanguage`, `BookImage`, `CategoryId`) VALUES (?)";

    const values = [
        req.query.BookISBNNumber,
        req.query.BookName,
        req.query.BookPrice,
        req.query.AuthorName,
        req.query.PublisherName,
        req.query.BookEdition,
        req.query.BookLanguage,
        req.query.BookImage,
        req.query.CategoryId
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const deleteBook = (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM bookdetails WHERE BookISBNNumber = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const getBook = (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM bookdetails b INNER JOIN bookcategory c ON b.CategoryId = c.CategoryId WHERE BookISBNNumber = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

// export const getBookByCategory = (req, res) => {
//     const categoryName = req.params.name;

//     if (categoryName == "All") {
//         const q = "SELECT BookISBNNumber,BookName,BookPrice,AuthorName,BookImage,CategoryName FROM bookdetails b INNER JOIN bookcategory c ON b.CategoryId = c.CategoryId ";

//         db.query(q, (err, data) => {
//             if (err) return res.status(500).json(err);
//             return res.status(200).json(data);
//         })
//     } else {
//         const q = "SELECT BookISBNNumber,BookName,BookPrice,AuthorName,BookImage,CategoryName FROM bookdetails b INNER JOIN bookcategory c ON b.CategoryId = c.CategoryId WHERE CategoryName = ?";

//         db.query(q, [categoryName], (err, data) => {
//             if (err) return res.status(500).json(err);
//             return res.status(200).json(data);
//         })
//     }
// }

// export const getBookByAuthor = (req, res) => {
//     const authorName = req.params.authorname;
//     const q = "SELECT * FROM bookdetails WHERE AuthorName = ?"
//     // const q = "SELECT BookISBNNumber,BookName,BookPrice,AuthorName,BookImage,CategoryName FROM bookdetails b INNER JOIN bookcategory c ON b.CategoryId = c.CategoryId WHERE AuthorName = ?";

//     db.query(q, (err, data) => {
//         if(err) return res.status(500).json(err);
//         return res.status(200).json(data);
//     })
// }