import { db } from "../db.js";

db.connect((error) => {
    if (error) {
        console.log("There is an error while connecting to the MYSQL server.");
    } else {
        console.log("Connected to the MYSQL server.");
    }
});

export const getUsers = (req, res) => {
    const q = "SELECT * FROM usertable";

    db.query(q, (err, data) => {
        if (err) return res.status(501).json(err);
        return res.status(200).json(data);
    });
}

export const getUser = (req, res) => {
    const q = "SELECT * FROM usertable WHERE Email = ? AND Password = ?";
   
    db.query(q, [req.body.mail, req.body.password], (err, data) => {
        if (err) return res.status(501).json(err);

        console.log(data);
        if(data.length !== 0)
            return res.status(200).json(data);
        else 
            return res.status(201).json({ message : "No User Found"});
    });
}

export const createUser = (req, res) => {
    const checkDataQuery = "SELECT * FROM usertable WHERE Email = ?";
    const q = "INSERT INTO usertable (`Name`,`Email`, `Password`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.mail,
        req.body.password,
    ];

    let mail = req.body.mail;

    db.query(checkDataQuery, [mail], (err, data) => {
        if (err) {
            return res.status(501).json("this is an error");
        }

        if (data.length !== 0) {
            return res.status(201).json({ message : "User Exist"});
        } else {
            db.query(q, [values], (err, data) => {
                if (err) return res.status(501).json(err);
                return res.status(200).json({ message : "User Register successfully"});
            })
        }
    })
}