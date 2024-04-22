const express = require("express")
const path = require("path")
const app = express()
const LogInCollection = require("./mongodb")
const { Collection } = require("mongoose")
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.static('public')); // Assuming 'public' folder contains index.html

app.use(express.urlencoded({ extended: false }))

const templatePath = path.join(__dirname, './templates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', templatePath)
app.use(express.static(publicPath))

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
  res.render('/index.html')
})

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    try {
        const existingUser = await LogInCollection.findOne({ name: req.body.name });
        if (existingUser && existingUser.password === req.body.password) {
            res.send("User details already exist.");
        } else {
            await LogInCollection.insertMany([data]);
            res.status(201).render("login"
            // , {
            //     naming: req.body.name
            // }
          );
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal server error.");
    }
    
})

app.post('/login', async (req, res) => {
    try {
      const existingUser = await LogInCollection.findOne({ name: req.body.name });

      console.log(existingUser);
  
      if (existingUser && existingUser.password === req.body.password) {
        // Successful login: Redirect to index.html and optionally pass data
        res.redirect('/index.html'); // Or other relevant data
      } else {
        res.status(401).send("Incorrect username or password"); // Use a more specific error message
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal server error.");
    }
  });
  

// app.post('/login', async (req, res) => {
//     try {
//         const check = await LogInCollection.findOne({ name: req.body.name })
//         if (check.password === req.body.password) {
//             res.status(201).render("index.html", { naming: `${req.body.password}+${req.body.name}` })
//         }
//         else {
//             res.send("incorrect password")
//         }
//     } 
    
//     catch (e) {
//         res.send("wrong details")
//     }
// })


app.listen(port,()=>{
    console.log("port connected");
})

