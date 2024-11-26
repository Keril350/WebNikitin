const express = require("express");
const productController = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");
const validate = require("../middleware/validate");
const ProductScheme = require("../schemes/product");
const multer = require('multer');
const storage = require("../config").storage;
const fileFilter = require("../config").fileFilter;
const limits = require("../config").limits;
const upload = multer({storage: storage, fileFilter: fileFilter, limits: limits});

const router = express.Router();

router.get("/", productController.list);
router.get("/search/tags", productController.searchByTags);
router.get("/search", productController.searchByName);
router.get("/:id/image", productController.getImage);
router.post("/:id/image", upload.single('image'), productController.setImage);
router.put("/:id/mark", isUser, productController.setMark);
router.delete("/:id/mark", isUser, productController.deleteMark);
router.use(isAdmin);
router.get("/:id/tags", productController.listTags);
router.post("/:id/tags", productController.addTag);
router.delete("/:id/tags", productController.deleteTag);
router.post("/", validate(ProductScheme.create), productController.create);
router.put("/:id", validate(ProductScheme.update), productController.update);
router.delete("/:id", productController.delete);


module.exports = router;
