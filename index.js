
const express = require('express')
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS }@cluster0.0zma47h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const groupsCollection = client.db('groupDB').collection('groups');
 app.get("/groups",async (req, res)=> {
   const cursor =await groupsCollection.find().toArray();
   res.send(cursor)
 })
    app.post("/groups", async (req, res)=> {
         const newGroup = req.body;
         const result =await groupsCollection.insertOne(newGroup);
         res.send(result)

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// hobbyDreamers
//pWUoEzA5pU8jCwvA