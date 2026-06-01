const MaincategoryRoutes = require('express').Router();
const { createMainCategory, getMaincategory } = require('../controllers/MaincategoryController');

MaincategoryRoutes.post('/', createMainCategory);
MaincategoryRoutes.get('/', getMaincategory);

module.exports = MaincategoryRoutes;