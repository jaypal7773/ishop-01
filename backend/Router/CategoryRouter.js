const express = require('express');
const CategoryController = require('../Controllers/CategoryController')
const fileUpload = require('express-fileupload')

const CategoryRouter = express.Router();

CategoryRouter.get(
    "/:id?",
    (req, res) => {
        const id = req.params.id;
        const result = new CategoryController().get(id)
        result.then(
            (success) => {
                res.send(success) 
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

CategoryRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    async (req, res) => {
        const image = req.files.image;
        await new CategoryController().create(req.body, image)
            .then(
                (success) => {
                    res.send("Category created")
                }
            )
            .catch(
                (error) => {
                    res.send("Data not Created")
                }
            )
    }
)

CategoryRouter.delete(
    "/delete/:id",
    (req , res) => {
        const id = req.params.id;
        const result = new CategoryController().delete(id)
        result.then(
            (success) => {
                res.send(success)
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    } 
)

CategoryRouter.get(
    '/updatestatus/:id/:newStatus',
    (req,res) => {
        const id = req.params.id
        const result = new CategoryController().changestatus(id , req.params.newStatus)
        result.then(
            (success) => {
                res.send(success)
            }
        )
        result.catch(
            (error) => {
                res.send(error)
            }
        )
    }
)


CategoryRouter.patch(
    "/edit/:id",
    fileUpload({
        createParentPath: true
    }),
    (req,res) => {
        const image = req.files?.image ?? null
        const result = new CategoryController().update(req.params.id , req.body , image)
        .then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)

module.exports = CategoryRouter