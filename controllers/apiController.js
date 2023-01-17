const loki = require('lokijs');
const path = require("path");
const read = require("read-file-utf8");
const bcrypt = require("bcrypt");


module.exports = {
    checkUser: async (req, res) => {
        const user = req.body.user;
        const password = req.body.password;        

        try {
            const db = new loki(path.join(__dirname, '../data/db.json'));
            const data = await read(path.join(__dirname, '../data/db.json'));
            db.loadJSON(data);
            const users = await db.getCollection('users');
            
            const userLogged = await users.findOne({ name: user });
            
            if (userLogged === null) return res.status(404).json({ error: true, message: "User not Found!!" });

            const isUser = bcrypt.compareSync(password, userLogged.password);            
            if (!isUser) return res.status(401).send({ error: true, message: "User or passord invalid !!!" });
            return res.status(200).json({ error: false, user: userLogged.name });
        } catch (error) { console.log(error) }
        res.json(data)
    },
    checkUserEncoded: async (req, res) => {
        const user = req.body.user;
        const password = req.body.password;        

        try {
            const db = new loki(path.join(__dirname, '../data/db.json'));
            const data = await read(path.join(__dirname, '../data/db.json'));
            db.loadJSON(data);
            const users = await db.getCollection('users');
            
            const userLogged = await users.findOne({ name: user });
            
            if (userLogged === null) return res.status(404).json({ error: true, message: "User not Found!!" });

            const isUser = bcrypt.compareSync(password, userLogged.password);            
            if (!isUser) return res.status(401).send({ error: true, message: "User or passord invalid !!!" });
            return res.status(200).json({ error: false, user: userLogged.name });
        } catch (error) { console.log(error) }
        res.json(data)
    }
}