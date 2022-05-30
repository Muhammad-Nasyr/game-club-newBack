const { Router } = require("express")
const router = Router()

router.use(require("./users.route"));
router.use(require("./news.route"));
router.use(require("./comments.route"));
router.use(require("./product.route"))
router.use(require("./places.route"));
router.use(require("./ps.route"));
router.use(require("./vips.model"));

module.exports = router