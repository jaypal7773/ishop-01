const Color = require("../Models/ColorModel");

class ColorController {
    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let color = null
                    if (id != null || id != undefined) {
                        color = await Color.findById(id)
                    } else {
                        color = await Color.find()
                    }
                    res({
                        msg: "Color data found",
                        status: 1,
                        color
                    })
                    rej({
                        msg: "Unable found color data",
                        status: 0
                    })
                } catch (err) {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }

    create(data) {
        return new Promise(
            (res, rej) => {
                try {
                     const createColor = new Color(data)
                   createColor.save()
                        .then(
                            (success) => {
                                res({
                                    msg: "Color data create",
                                    status: 1
                                })
                            }
                        ).catch(
                            (error) => {
                                console.log(error)
                                rej({
                                    msg: "Unable to create color data",
                                    status: 0
                                })
                            }
                        )
                } catch {
                    rej({
                        msg: "Internal server error",
                        status: 1
                    })
                }
            }
        )
    }

    delete(id){
        return new Promise(
            (res,rej) => {
                try{
                    Color.deleteOne({_id : id})
                    .then(
                        () => {
                            res({
                                msg:"Data deleted",
                                status:1
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg:"Unable to deleted data",
                                status:0
                            })
                        }
                    )
                }catch{
                    () => {
                        rej({
                            msg:"Internal server error",
                            status:0
                        })
                    }
                }
            }
        )
    }

    update(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                    Color.updateOne({ _id: id },
                        data)
                        .then(
                            (success) => {
                                res({
                                    msg: "Data update",
                                    status: 1
                                })
                            }
                        ).catch(
                            (error) => {
                                rej({
                                    msg: "Unable to update data",
                                    status: 0
                                })
                            }
                        )
                } catch {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }

    changestatus(id , status){
        return new Promise(
             (res,rej) => {
                try{
                    Color.updateOne({_id : id} , {status})
                    .then(
                        () => {
                            res({
                                msg:"Status change successfully",
                                status:1
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg:"Unable to change status",
                                status:0
                            })
                        }
                    )
                }catch{
                    () => {
                        rej({
                            msg:"Internal server error",
                            status:0
                        })
                    }
                }
            }
        )
    }

}

module.exports = ColorController;