const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characters = [
  {
    routeName: 'yoda',
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'darthmaul',
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: "Obi Wan Kenobi",
    role: "Jedi",
    age: 55,
    forcePoints: 1000
  }
];

app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
  res.sendFile(path.join(__dirname,"view.html"));
});
app.get("/add", (req, res) =>{
  res.sendFile(path.join(__dirname, "add.html"));
})
app.get("/api/characters/:character", (req, res) => {
  const character = req.params.character;
  console.log(character);

  let found;

  characters.forEach(char => {
    if(character === char.routeName) {
      found = char;
    }
  });

  res.json(found || { success: false });
});

app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});

// const express = require("express");
// const PORT = 4100;

// const app = express();
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// // const yoda = {
// //     name: "Yoda",
// //     role: "Jedi",
// //     age: 900,
// //     forcePoints: 2000,
// // }

// // const dartmore = {
// //     name: "Darth",
// //     role: "Lord",
// //     age: 200,
// //     forcePoints: 1000
// // }

// // const roby = {
// //     name: "Roby",
// //     role: "Lord",
// //     age: 600,
// //     forcePoints: 1200
// // }

// app.get("/", (req, res)=>{
//     res.send("welcome to the star wars page");
// });


// // app.get("/yoda", (req, res)=>{
// //     res.json(yoda);
// // });


// // app.get("/dartmore", (req, res)=>{
// //     res.json(dartmore);
// // });

// // app.get("/roby", (req, res)=>{
// //     res.json(dartmore);
// // });


// const characters = [
//    {
//        routeName:"yoda",
//         name: "Yoda",
//         role: "Jedi",
//         age: 900,
//         forcePoints: 2000,
//     },
    
//    {
//        routeName: "dartmore",
//         name: "Darth",
//         role: "Lord",
//         age: 200,
//         forcePoints: 1000
//     },
    
//     {
//         routeName:"roby",
//         name: "Roby",
//         role: "Lord",
//         age: 600,
//         forcePoints: 1200
//     }
     
// ]

// app.get("/api/characters/:character", (req, res)=>{
//     const character = req.params.character;
//     console.log(character);
//     for(let i = 0; i<characters.length; i++){
//         if(character===characters[i].routeName){
            
//                 return res.json(characters[i]);
//         }
//     }
//     return res.send("no character found!");
//     //res.end();
// });

// app.post("/api/charcters", (req, res) =>{
//     const newCharacter = req.body;
//     console.log(newCharacter);
//     console.push(newCharacter);
//     res.json(newCharacter);
// });

// app.listen(PORT, () =>{

//     console.log(`server is listening PORT ${PORT}`);
// });

