
var fs=require('fs')

exports.getAll=function(req,res){
    var path="./products.json"
    fs.readFile(path,(err,data)=>{
        if(data){
            var products=JSON.parse(data);
            res.send(products);
        }
        else{
        res.send("No product found")
        }
    })
}
exports.getById=function(req,res){
    var producdId=req.params.id;
    var path="./products.json"
  fs.readFile(path,(err,data)=>{
        if(data){
            var products=JSON.parse(data)
            var product=products.find(p=>(p.id==producdId))
            res.send(product)
        }
        else{
            res.send("No data")
        }
    })
    
}

exports.insert=function(req,res){
    var path="./products.json"
    fs.readFile(path,(err,data)=>{
        if(data){
        var products=JSON.parse(data)
      var newProduct=req.body
       products.push(newProduct)
       var newData = JSON.stringify(products);
    
       fs.writeFile(path,newData,(err)=>{
           if(err){
               res.send("Input not found")
           }
           else{
               res.send("Product inserted sucessfully")
           }
          
       })
    }
    else{
        res.send("no data")
    }
    })
   
}

exports.update=function(req,res){
    var prodId=req.params.id
    var path="./products.json"
    fs.readFile(path,(err,data)=>{
          if(data){
              var products=JSON.parse(data)
              var productdetail=products.find(p=>(p.id==prodId))
              productdetail.id=req.body.id
              productdetail.product=req.body.product
              productdetail.description=req.body.description
              products.splice(products.findIndex(p=>(p.id==prodId)),1)
              products.push(productdetail)
              res.send(products)
          }
          else{
              res.send("No data")
          }
      })

}

exports.delete=function(req,res){
    var prodId=req.params.id
    var path="./products.json"
    fs.readFile(path,(err,data)=>{
          if(data){

            var products=JSON.parse(data)
            products.splice(products.findIndex(p=>(p.id==prodId)),1)
            res.send(products)

}

})
}