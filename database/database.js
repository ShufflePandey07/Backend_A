const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://test:test@cluster0.zkuarcf.mongodb.net/project').then(() => {
        console.log("Database Connected!")
    })
}

//  Exporting the function 
module.exports = connectDatabase 