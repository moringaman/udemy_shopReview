Template.add_product.events({
  "submit .add_product": function(event){

    var name = event.target.name.value;
    var category = event.target.category.value;
    var description = event.target.description.value;
  //  var is_featured = event.target.is_featured.value;
    var is_featured = $('#is_featured').val();
    var file = $('#productImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file);

      ProductsImages.insert(fsFile, function(err,result){
        if(!err){
          var ProductImage = '/cfs/files/ProductsImages/' + result._id;
          Products.insert({
            name: name,
            category: category,
            description: description,
            is_featured: is_featured,
            Image: ProductImage,
            createdAt: new Date()
          });
        }

      })
    } else {
      var ProductImage = '/img/noimage.png';
          Products.insert({
            name: name,
            category: category,
            description: description,
            is_featured: is_featured,
            Image: ProductImage,
            createdAt: new Date()
          });
    }
    event.target.name.value = "";
    event.target.category.value = "";
    event.target.description.value = "";
    event.target.is_featured.value = "";
 
    FlashMessages.sendSuccess('Product Added');
    Router.go('/');
    return false;

}

});