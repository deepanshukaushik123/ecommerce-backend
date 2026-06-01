const Maincategory = require("../models/Maincategory");

const createMainCategory = async (req, res) => {
    try {
        const data = new Maincategory(req.body);
        await data.save();
        res.json({ result: "Done", data: data });
    } catch (error) {
        let errorMessage = {};
        if (error.keyValue) {
            errorMessage.name = "A main category with this name already exists.";
            errorMessage.status = 400;
        } else if (error.errors.name) {
            errorMessage.name = error.errors.name.message;
            errorMessage.status = 400;
        } else {
            errorMessage.reason = "Internal Server Error";
            errorMessage.status = 500;
        }
        res.status(errorMessage.status).json({ result: "Fail", error: errorMessage });
    }
};

const getMaincategory = async (req, res) => {
    try {
        const data = await Maincategory.find()
        res.json({data: data})
    } catch (error) {
        res.status(500).json({ result: "Fail", error: "Internal Server Error" });
    }
}

module.exports = {
    createMainCategory,
    getMaincategory
};