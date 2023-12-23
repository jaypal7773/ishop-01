const Category = require("../Models/CategoryModel");

class CategoryController {

    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let category = null
                    if (id != null || id != undefined) {
                        category = await Category.findById(id)
                    } else {
                        category = await Category.find()
                    }
                    res({
                        msg: "Data found",
                        status: 1,
                        category,
                        baseUrl:"http://localhost:5000/uploads/category/"
                    })
                    rej({
                        msg: "Data not found",
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

    create(data , file) {
        return new Promise(
            (res, rej) => {
                try {
                    const images = new Date().getSeconds() + Math.floor(Math.random() * 10000) + file.name;
                    
                    const destination = "./public/uploads/category/" + images;
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
                                const category = new Category(data)
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
                    Category.deleteOne({_id : id})
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

    changestatus(id , status){
        return new Promise(
            (res,rej) => {
                try{
                    Category.updateOne({_id : id} , 
                        {status}
                        )
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

        update(id , data , file){
        return new Promise(
            (res,rej) => {
                try{
                    if(file != null) {
                        const allowedFiles = ["image/jpg" , "image/jpeg" , "image/gif" , "image/webp" , "image/png"]
                        if(allowedFiles.includes(file.mimetype)){
                            const imageName = new Date().getSeconds() + Math.floor(Math.random() *100000) + file.name
                            const destination = "./public/uploads/category/" + imageName;
                            file.mv(
                                destination,
                                (err) => {
                                    if(!err) {
                                        Category.updateOne({_id:id},
                                            {
                                                name: data.name,
                                                slug: data.slug,
                                                image: imageName
                                            }
                                            ).then(
                                                (success) => {
                                                    res({
                                                        msg:"Data updated successfully",
                                                        status:1
                                                    })
                                                }
                                            ).catch(
                                                (error) => {
                                                    rej({
                                                    msg:"Unable to update data",
                                                    status:0
                                                    })
                                                }
                                            )
                                    }else{
                                        
                                    }
                                }
                            )
                        }else{
                          rej({
                            msg:"Please upload image only",
                            status:0
                          })  
                        }
                    }else{
                        Category.updateOne({_id : id},
                            {
                                name: data.name,
                                slug: data.slug
                            }
                            ).then(
                                (success) => {
                                    res({
                                        msg:"Data updated successfully",
                                        status:1
                                    })
                                } 
                            ).catch(
                                (error) => { 
                                    rej({
                                    msg:"Unable to update data",
                                    status:0
                                    })
                                }
                            )
                            }
                }catch{
                    rej({
                        msg:"internal server error",
                        status:0
                    })
                }
            }
        )
    }

    
}

module.exports = CategoryController;



    // update(id , data , file){
    //     return new Promise(
    //         (res,rej) => {
    //             try{
    //                 if(file !== null) {
    //                     const allowedFiles = ["image/jpg" , "image/jpeg" , "image/gif" , "image/webp" , "image/png"]
    //                     if(allowedFiles.includes(file.mimetype)){
    //                         const imageName = new Date().getSeconds() + Math.floor(Math.random() *100000) + file.name
    //                         const destination = "./public/uploads/category/" + imageName;
    //                         file.mv(
    //                             destination,
    //                             (err) => {
    //                                 if(!err) {
    //                                     Category.updateOne({_id:id},
    //                                         {
    //                                             name: data.name,
    //                                             slug: data.slug,
    //                                             image: imageName
    //                                         }
    //                                         ).then(
    //                                             (success) => {
    //                                                 res({
    //                                                     msg:"Data updated successfully",
    //                                                     status:1
    //                                                 })
    //                                             }
    //                                         ).catch(
    //                                             (error) => {
    //                                                 rej({
    //                                                 msg:"Unable to update data",
    //                                                 status:0
    //                                                 })
    //                                             }
    //                                         )
    //                                 }else{
                                       
    //                                 }
    //                             }
    //                         )
    //                     }else{
    //                       rej({
    //                         msg:"Please upload image only",
    //                         status:0
    //                       })  
    //                     }
    //                 }else{
    //                     Category.updateOne({_id : id},
    //                         {
    //                             name: data.name,
    //                             slug: data.slug
    //                         }
    //                         ).then(
    //                             (success) => {
    //                                 res({
    //                                     msg:"Data updated successfully",
    //                                     status:1
    //                                 })
    //                             } 
    //                         ).catch(
    //                             (error) => { 
    //                                 rej({
    //                                 msg:"Unable to update data",
    //                                 status:0
    //                                 })
    //                             }
    //                         )
    //                         }
    //             }catch{
    //                 rej({
    //                     msg:"internal server error",
    //                     status:0
    //                 })
    //             }
    //         }
    //     )
    // }


// CategoryRouter.patch(
//     "/edit/:id",
//     fileUpload({
//         createParentPath: true
//     }),
//     (req,res) => {
//         const image = req.files?.image ?? null
//         const result = new CategoryController().update(req.params.id , req.body , image)
//         result.then(
//             (success) => {
//                 res.send(success)
//             }
//         )
//         result.catch(
//             (error) => {
//                 res.send(error)
//             }
//         )
//     }
// )