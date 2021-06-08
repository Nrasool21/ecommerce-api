const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//const getCategory = async (req, res) => {}

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    let category = await Category.findAll({
       include: [Product],
      },
    );
    res.json(category);
  } catch (error){
    console.log("Not working", error)
  }

  
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send("get one");
});

router.post("/", (req, res) => {
  // create a new category
  res.send("create one");
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  res.send("update");
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  res.send("delete");
});

module.exports = router;
