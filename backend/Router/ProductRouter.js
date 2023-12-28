const express = require('express')
const ProductController = require("../Controllers/ProductController");

const ProductRouter = express.Router()

ProductRouter.get(
    "/:id?",
    (req,res) => {
        const id = req.params.id
        const result = new ProductController().get(id)
        result
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

ProductRouter.post(
    "/create",
   async (req,res) => {
        await new ProductController().create(req.body)
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

ProductRouter.delete(
    "/delete/:id",
    (req,res) => {
        const id = req.params.id
        const result = new ProductController().delete(id)
        result
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

ProductRouter.patch(
    "/edit/:id",
    (req,res) => {
        const id = req.params.id
        const result = new ProductController().update(id , req.body)
        result
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

ProductRouter.get(
    "/updatestatus/:id/:newStatus",
    (req,res) => {
        const id = req.params.id
        const result = new ProductController().changestatus(id , req.params.newStatus)
        result
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


module.exports = ProductRouter