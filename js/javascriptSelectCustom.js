(function($){
	$.fn.pluginCustomSelect = function(){

		return this.each(function(){
			var select = $(this);
			var label = select.find("label");
			var list = select.find("ul");
			var listElement = select.find("li");

			//save the first element of the list into the label
			var firstElement = (listElement.first()).text();
			label.html(firstElement);

			//select the first element of the list
			var selectedLi = listElement.first();
			selectedLi.addClass("active");

			label.click(function(){
				//hide or show the list
				list.toggle();
				//add class 'active' at the last selected element of the list
				selectedLi.addClass("active");
			});

			listElement.click(function(){
				//hide the list
				list.hide();
				//save text of the last selected element into the list
				var elementChosen = $(this);
				label.html(elementChosen.text());
			});

			//select the first element of the list
			var selectedLi = listElement.first();
			selectedLi.addClass("active");

			//calculate index of the element in last position
			indexLastElement = (listElement.last()).index();
		
						
			listElement.on({
				mouseenter: function(){
					listElement.removeClass("active");
					selectedLi = $("li:hover");
					listElement.removeClass("noHover");
				},
				mouseleave: function(){
					selectedLi.addClass("active");
				}
			});


			$(document).on("keydown", function(event){
				if(list.is(':visible')){
					if(event.which == 40 && (selectedLi.index() != indexLastElement)){
						listElement.addClass("noHover");
						selectedLi.removeClass("active");
						selectedLi = selectedLi.next();
						selectedLi.addClass("active");
					} else if(event.which == 38 && (selectedLi.index() != 0)){
						listElement.addClass("noHover");
						selectedLi.removeClass("active");
						selectedLi = selectedLi.prev();
						selectedLi.addClass("active");
					} else if(event.which == 13){
						//hide the list
						list.hide();
						label.html(selectedLi.text());
					}
				} else {
					if(event.which == 13 && select.is(':focus')){
						list.show();
					}
				}
			});
			
		});		
	};

}(jQuery));

