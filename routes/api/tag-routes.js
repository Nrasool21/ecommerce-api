const { v4: uuidv4 } = require("uuid");

const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    let tag = await Tag.findAll({
      include: [Product],
    });
    res.json(tag);
  } catch (error) {
    console.log("Not working", error);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const { id } = req.params;
    const oneTag = await Tag.findOne({ where: { id: id }, include: [Product] });
    res.json(oneTag);
  } catch (error) {
    console.log("not working", error);
  }
});

router.post("/", async(req, res) => {
  // create a new tag
  try {
  
    const createTag = await Tag.create(req.body);
    res.json(createTag);
  } catch (error) {
    console.log("not working, error")
  }
});

router.put("/:id", async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const { id } = req.params
  newData = {
    tag_name: req.body.tag_name
  }
  await Tag.update(newData, {
    where: {id:id},
    returning: true, 
  })
  res.json({success: true})
    
  } catch (error) {
    console.log("not working", error)
  }
  
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const { id } = req.params;
    await Tag.destroy({ where: { id: id } });
    res.json({ success: true });
  } catch (error) {
    console.log("not working", error);
  }
});

module.exports = router;
