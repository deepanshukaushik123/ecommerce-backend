const router = require('express').Router();
const MaincategoryRoutes = require('./MaincategoryRoutes');

router.use('/maincategory', MaincategoryRoutes);

module.exports = router;