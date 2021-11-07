const Product = require('../models/product')

exports.getProducts = (req,res,next)=>{
    res.render('add-products',{"title":"Add Product" , "path":"/admin/add-product", formCSS:true ,
    pageTitle:"Product List"})
}




exports.postAddProducts = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProduct = (req,res,next)=>{
    const product = Product.fetchAll()
    res.render('shop',{prods:product , title:"Shop" , 
                       hasProduct:product > 0 ,
                       activeShop: true ,
                       productCSS:true ,
                       layout:false,
                       formCSS:true,
                       pageTitle:"Product List"
                    })
}

