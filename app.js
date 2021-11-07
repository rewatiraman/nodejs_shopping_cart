const express = require("express")
const bodyparser = require('body-parser')
const admin_route = require('./routes/admins')
const shop_route = require('./routes/shop')
const path = require('path')
const getErrorController = require('./controllers/error')

const app = express()

//global configuration
app.set('view engine' , 'ejs')
app.set('views','views')

app.use(bodyparser.urlencoded({extended:false}))
//routes
app.use('/admin',admin_route)
app.use(shop_route)

//public folder
app.use(express.static(path.join(__dirname , 'public')));


app.use(getErrorController.getError)


app.listen(3000,()=>{ console.log("Server started at 3000 Port")})