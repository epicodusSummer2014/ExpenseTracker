var Purchase = {
      description1: "",
      amount: 0,
      quantity: 0,
      totalCost: function(){
        return this.amount * this.quantity
      }
    }

var Category = {
  initialize: function() {
    this.totalPurchases = []
  },
  name: ""
}

$(document).ready(function(){
  var currentCategory;
  $("form#purchases-form").submit(function(event){
    event.preventDefault();
      var newPurchase = Object.create(Purchase);
        newPurchase.description1 = $("#description1").val();
        newPurchase.amount= $("#amount").val();
        newPurchase.quantity= $('#quantity').val();
        $("#purchases").show();
        $("input").val("")
        $("#table").append("<tr><td>"+ newPurchase.description1 +"</td><td>" + newPurchase.amount + "</td><td>"
          + newPurchase.quantity +"</td><td>" + newPurchase.totalCost() + "</td></tr>")
        currentCategory.totalPurchases.push(newPurchase);

      })

  $("form#category-form").submit(function(event){
    event.preventDefault();
    var inputCategory = $("#add-category").val()
    $("ul#category-list").append("<li>"+inputCategory+ "</li>");
    var newCategory = Object.create(Category);
    newCategory.initialize();
    newCategory.name = inputCategory
    $("input").val("")
    $("li").last().click(function(){
      $("#purchases").show();
      $("td").empty();
      currentCategory = newCategory;

      currentCategory.totalPurchases.forEach(function(purchase){
        $("#table").append("<tr><td>"+ purchase.description1 +"</td><td>" + purchase.amount + "</td><td>"
          + purchase.quantity +"</td><td>" + purchase.totalCost() + "</td></tr>")

      })

    })

  })


})
