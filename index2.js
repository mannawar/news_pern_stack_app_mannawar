const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());//req.body, helps in access code from client side

//Routes

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//create a new article
app.post("/article", async(req, res) => {
  try {
    const { title, description, image } = req.body;
    const newarticle = await pool.query("INSERT INTO newslistings (title, description, image) VALUES($1, $2, $3) RETURNING *", [title, description, image])
    res.json(newarticle.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
})

//get all news title including new listing
app.get("/allarticle", async(req, res) => {
  try {
    const allArticle = await pool.query("SELECT title FROM newslistings");
    res.json(allArticle.rows);
  } catch (err) {
    console.error(err.message)
  }
})

//get news article detail
app.get("/articledetails", async(req, res) => {
  try {
    const articleDetails = await pool.query("SELECT description FROM newslistings");
    res.json(articleDetails.rows);
  } catch (err) {
    console.error(err.message)
  }
})

//update a news article
app.patch("/update/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const { title, description, image } = req.body;
    const updateNewsfeed = await pool.query("UPDATE newslistings SET title = $1, description = $2, image = $3 WHERE news_id = $4", [title, description, image, id]);
    res.json("newslistings table is updated");

  } catch (err) {
    console.error(err.message)
  }
})

//delete
app.delete("/del/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const deletenewnews = await pool.query("DELETE FROM newslistings WHERE news_id = $1", [id]);
    res.json(`entries for the id ${id} was deleted`) 
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
