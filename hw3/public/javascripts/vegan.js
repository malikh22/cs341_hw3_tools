jQuery(document).ready(function(){ 
	$("button").click(function(){
		if ($("#notes").val().toLowerCase().indexOf('vegan') != -1) {
        		alert("Our cheesecakes contain dairy.");
    		}
		else { 
			var quantity = $('#quantity :selected').text();
			var checkedValue = $("input[name='topping']").filter(":checked").val();
			var writtenNotes = $("#notes").val();
			$("#notes").hide();
			$("input[name='topping']").hide();
			$("button").hide();
			$("#quantity").hide();
			$("label").hide();
			$("p3").hide();

			var quantityTitle = "Quantity: ";
			var toppingTitle = "Topping: ";
			var noteTitle = "Notes: ";

			var quantityFull = quantityTitle.concat(quantity);
			var toppingFull = toppingTitle.concat(checkedValue);
			var noteFull = noteTitle.concat(writtenNotes);
                        var thanks = "Thank you for your order! You ordered: ";
		
			var fullString = thanks + "\n" + toppingFull + "\n" + quantityFull + "\n" + noteFull;

			$("h2").text(fullString); 
		}
	});
}); 