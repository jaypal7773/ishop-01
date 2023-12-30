const ProductModel = require("../Models/ProductModel");

class ProductController{
    get(id){
        return new Promise(
          async  (res,rej) => {
                try{
                    let product = null
                    if(id != null || id != undefined){
                        product = await ProductModel.findById(id)
                    }else{
                        product = await ProductModel.find()
                    }
                    res({
                        msg:"Data found",
                        status:1,
                        product,
                        baseUrl: "http://localhost:5000/uploads/imgproduct"
                    })
                    rej({
                        msg:"Unable to found data",
                        status:0,
                    })
                }catch{
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }

  

    create(data , file) {
        return new Promise(
            (res, rej) => {
                try {
                    const images = new Date().getSeconds() + Math.floor(Math.random() * 10000) + file.name;
                    
                    const destination = "./public/uploads/imgproduct/" + images;
                    file.mv(
                        destination,
                        (err) => {
                            if(err){
                                rej({
                                    msg:"Unable to upload image",
                                    status:0
                                })
                            }
                            else{
                                data.image = images;
                                const category = new ProductModel(data)
                                category.save()
                                    .then(
                                        (success) => {
                                            res({
                                                msg: "Category created",
                                                status: 1
                                            })
                                        }
                                    ).catch(
                                        (error) => {
                                            rej({
                                                msg: "Unable to create category",
                                                status: 0
                                            })
                                        }
                                    ) 
                            }
                        }
                    )
                } catch {
                    () => {
                        rej({
                            msg: "Internal server error",
                            status: 0
                        })
                    }
                }
            }
        )
    }

    delete(id){
        return new Promise(
            (res,rej) => {
                try{
                    ProductModel.deleteOne({_id : id})
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
                                msg:"Unable to delete data",
                                status:0
                            })
                        }
                    )
                }catch{
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }

    update(id , data){
        return new Promise(
            (res,rej) => {
                try{
                    ProductModel.updateOne({_id : id}, 
                        data
                        )
                        .then(
                            () => {
                                res({
                                    msg:"Data update successfully",
                                    status:1
                                })
                            }
                        ).catch(
                            () => {
                                rej({
                                    msg:"Unable to update data",
                                    status:0
                                })
                            }
                        )
                }catch{
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }

    changestatus(id , newstatus){
        return new Promise(
            (res , rej) => {
                try{
                    ProductModel.updateOne({_id : id}, {newstatus})
                    .then(
                        () => {
                            res({
                                msg:"status change successfully",
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
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }
}

module.exports = ProductController