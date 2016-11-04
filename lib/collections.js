//Categories Collection
Categories = new Mongo.Collection('categories');
//Products Collection
Products = new Mongo.Collection('products');
//Product images Collection
ProductsImages = new FS.Collection("ProductsImages", {
  stores: [new FS.Store.GridFS("ProductsImages")]
});