Router.configure({
   layoutTemplate: 'layout'
});



Router.map(function(){
  // catalogue route
  this.route('home', {
            path: ('/'),
            template: 'home',
    data: function(){
              templateData = {
                products: Products.find({is_featured: "1"})
      };
             return templateData;
    }
  });

  this.route('products', {
            path: ('/products'),
            template: 'products',
            data: function(){
              templateData = {
                products: Products.find()
      };
             return templateData;
    }
  })

  this.route('add_product', {
            path: ('/add_product'),
            template: 'add_product',
            data: function(){
              templateData = {
                categories: Categories.find()
      };
             return templateData;
    }
  })

  //category products

  this.route('category_products', {
    path:'/categories/:slug',
    template: 'category_products',
    data: function(){
      templateData={
        category_products: Products.find({
          category: this.params.slug
        })
      };
      return templateData;
    }
  });

  // New review

  this.route('new_review',{
    path:'/new_review/:_id',
    template: 'new_review',
    data: function(){
      return Products.findOne(this.params._id)
    }

  })


});