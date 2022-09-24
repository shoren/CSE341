const express = require ('express')
const app = express()
const port = process.env.PORT || 3000

// send to the routes folder and find a path there
app.get('/', require('./routes'))

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
