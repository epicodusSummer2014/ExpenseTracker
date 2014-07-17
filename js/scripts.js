var Purchase = {
      description1: "",
      amount: 0,
      quantity: 0,
      totalCost: function(){
        return this.amount * this.quantity
      }
    }

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
      var newObject = Object.create(Purchase);
        newObject.description1 = $("#description1").val();
        newObject.amount= $("#amount").val();
        newObject.quantity= $('#quantity').val();
        $("#purchases").show();
        $("#table").append("<tr><td>"+ newObject.description1 +"</td><td>" + newObject.amount + "</td><td>"
          + newObject.quantity +"</td><td>" + newObject.totalCost() + "</td></tr>")
      })



})
