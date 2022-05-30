const { Router } = require("express");

const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsById);
router.post("/news", newsController.createNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
