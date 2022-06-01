const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;


const cors = require('cors')



//Midleware 
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

//Import routes
const pingRoute = require('./api/ping')
const postsRoute = require('./api/posts')


//Middleware route
app.use('/api', pingRoute)
app.use('/api', postsRoute)



app.use(cors())
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello Casey')
})


 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})