const { v4: uuidv4 } = require("uuid");

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
    });
    res.json(category);
  } catch (error) {
    console.log("Not working", error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const { id } = req.params;
    const categoryById = await Category.findOne(
      { where: { id: id } } && {
        include: [Product],
      }
    );
    res.json(categoryById);
  } catch (error) {
    console.log("not working", error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const data = {
      udi: uuidv4(),
      category_name: req.body.category_name,
    };
    const newCategory = await Category.create(data);

    res.json(newCategory);
  } catch (error) {
    console.log("not working", error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const { id } = req.params;
    const newData = {
      category_name: req.body.category_name,
    };
    await Category.update(newData, {
      where: { id: id },
      returning: true,
    });
    res.json({ success: true });
  } catch (error) {
    console.log("not working", error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const { id } = req.params;
    await Category.destroy({ where: { id: id } });
    res.json({ success: true });
  } catch (error) {
    console.log("not working", error);
  }
});

module.exports = router;
