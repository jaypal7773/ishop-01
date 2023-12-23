const express = require('express')
const ColorController = require('../Controllers/ColorController')

const ColorRouter = express.Router()

ColorRouter.get(
    "/:id?",
    (req,res) => {
        const id = req.params.id
        const result = new ColorController().get(id)
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

ColorRouter.post(
    "/create",
   async (req,res) => {
    await new ColorController().create(req.body)
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

ColorRouter.delete(
    "/delete/:id",
    (req,res) => {
        const id = req.params.id
        const result = new ColorController().delete(id)
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

ColorRouter.patch(
    "/update/:id",
    (req,res) => {
        const id = req.params.id
        const result = new ColorController().update(id , req.body)
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

ColorRouter.get(
    "/updatestatus/:id/:newStatus",
    (req,res) => {
        const id = req.params.id
        const result = new ColorController().changestatus(id , req.params.newStatus)
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

module.exports = ColorRouter