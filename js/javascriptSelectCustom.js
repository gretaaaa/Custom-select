(function($){
	$(document).ready(function(){

		var arraySelect = $('.custom-select');
		arraySelect.each(function(){
			var select = $(this);
			var label = select.find("label");
			var lista = select.find("ul");
			var elementoLista = select.find("li");

			//salvo il primo elemnto della lista nella label
			var primoElemento = (elementoLista.first()).text();
			label.html(primoElemento);

			//seleziono il primo elemento della lista
			var liSelezionato = elementoLista.first();
			liSelezionato.addClass("active");

			label.click(function(){
				//nascondo o visualizzo la lista
				lista.toggle();
				//aggiungo la classe active all'ultimo elemento della lista selezionato
				liSelezionato.addClass("active");
			});

			elementoLista.click(function(){
				//nascondo la lista
				lista.hide();
				//salvo nella label il testo dell'elemento selezionato
				var elementoScelto = $(this);
				label.html(elementoScelto.text());
			});

			//seleziono il primo elemento della lista
			var liSelezionato = elementoLista.first();
			liSelezionato.addClass("active");

			//calcolo l'indice dell'elemento in ultima posizione
			indiceUltimoElemento = (elementoLista.last()).index();
		
						
			elementoLista.on({
				mouseenter: function(){
					elementoLista.removeClass("active");
					liSelezionato = $("li:hover");
					elementoLista.removeClass("noHover");
				},
				mouseleave: function(){
					liSelezionato.addClass("active");
				}
			});


			$(document).on("keydown", function(event){
				if(lista.is(':visible')){
					if(event.which == 40 && (liSelezionato.index() != indiceUltimoElemento)){
						elementoLista.addClass("noHover");
						liSelezionato.removeClass("active");
						liSelezionato = liSelezionato.next();
						liSelezionato.addClass("active");
					} else if(event.which == 38 && (liSelezionato.index() != 0)){
						elementoLista.addClass("noHover");
						liSelezionato.removeClass("active");
						liSelezionato = liSelezionato.prev();
						liSelezionato.addClass("active");
					} else if(event.which == 13){
						//nascondo la lista
						lista.hide();
						label.html(liSelezionato.text());
					}
				} else {
					if(event.which == 13 && select.is(':focus')){
						lista.show();
					}
				}
			});
			
		});		
	});

}(jQuery));