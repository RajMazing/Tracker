const express = require('express');
const axios=require("axios").default;
const { response } = require('express')
const router = express.Router();








  router.get("/solution/posts", (req, res) => {
    
    axios.get('https://api.hatchways.io/assessment/blog/posts', { params: { tag: "tech"
  }})
      .then(function(response) {
        res.json(response.data)
      }).catch(function(error) {
        res.send(404).res.json("Tag parameter is required!")
        
      })
  })


 











// fetch(`https://api.hatchways.io/assessment/blog/posts`)
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })
// .catch(err => {

// })

// router.route('/posts')

// .post(function(req,res) {
//   res.send({ message: "Checking this route"})
// })

// .get(function(req, res) {
//   res.json(res)
// })


// router.post('/posts', (req, res) => {
//   const posts = req.body;

//   console.log(posts)
//   posts.push(posts)
// })


// router.get('/posts/:key', (req, res) => {
//   res.location({ tags: db[req.params.key]})
// })











// router.get('/posts', async (req, res) => {

  // try {
  //   const tag = []
  //   const myUrl = `https://api.hatchways.io/assessment/blog/posts?q=${tag}`;

  //   const response = await  fetch(myUrl, {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json'}
  //   })
    
  //   const data = await response.json();
  //   return res.json(data)
 

  // } catch(err) {
  //   console.log(err.message);
  //   res.status(400).send("Tag(s) is missing")
  // }
 
  // })


// router.post('/', (req, res) => {
//   console.log()
// })











































// router.get('/', (req, res) => {
//  res.render('post', {
//    id: null,
//    author: null,
//    authorId: null,
//    likes: null,
//    popularity: null,
//    reads: null,
//    tags: null
//  })
// })


// router.post('/post', async (req, res) => {
//   const tag = req.body.tag;
//   const myAPI = `https://api.hatchways.io/assessment/blog/posts?q=${tag}`;
  

//     try {
//       await fetch(myAPI)
//       .then(res => res.json())
//       .then(data => {
//         if (data.message === ' tag(s) not found') {
//           res.render('posts', {
//             id: data.null ,
//             author: null,
//             authorId: null,
//             likes: null,
//             popularity: null,
//             reads: null,
//             tags: data.message
//           })
//         } else {
//           const id = data.posts.id;
//           const author = data.posts.author;
//           const authorId = data.authorId;
//           const likes = data.likes;
//           const popularity = data.popularity;
//           const reads = data.reads;
//           const tags = data.tag;
          
//           res.render('posts', {
//             id,
//             author,
//             authorId,
//             likes,
//             popularity,
//             reads, 
//             tags
//           })
//         }
//       })

//     } catch(err) {
//       res.render('posts', {
//         id: null,
//         author: null,
//         authorId: null,
//         likes: null,
//         popularity: null,
//         reads: null,
//         tags: 'Missing Tags'
//       })
//     }
//   })
    
    

// // http.get('https://api.hatchways.io/assessment/blog/posts?=${tag}')















module.exports = router;