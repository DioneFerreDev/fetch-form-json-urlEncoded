const path = require("path");

module.exports = {
    renderForm: (req,res) => {
        res.sendFile(path.join(__dirname,"../views","index.html"));
    },
    renderFormUrlencoded: (req,res) => {
        res.sendFile(path.join(__dirname,"../views","encoded.html"));
    }
}