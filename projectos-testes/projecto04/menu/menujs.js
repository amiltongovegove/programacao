            
			function clickMenu() {
			  if (itens.style.display == 'block') {
			     itens.style.display = 'none'
				 } else {
				 itens.style.display = 'block'
			  }
			 }
			 
			 
			function clickCategorias() {
			  if (items.style.display == 'block') {
			     items.style.display = 'block'
				 } else {
				 items.style.display = 'block'
			  }
			 }

          
		    function mudouTamanho(){
			  if (window.innerwidth >= 780) {
			     itens.style.display = 'none'
			     } else {
			     itens.style.display = 'block'
			  }
			 }
			 
			 
            function calc_total() {
                 var qtd = parseInt(document.getElementById('cQtd').value);
                 tot = qtd * 100000;
                 document.getElementById('cTot').value = tot;
             }
			 
			 
			 function alertNotice() {
				 alert("Esse site e um motor de busca dos seus jogos favoritos"); 
		     }
			 function colorNotice() {
				 sssite.style.background = 'rgb(0, 51, 0)'
		     }
			 function corNotice() {
				 sssite.style.background = 'green'
			 }
			 
			 
			 function istDow() {
				 alert("As instalaçoes sò estao disponiveis paea dispositivos Mobiles");
			 }