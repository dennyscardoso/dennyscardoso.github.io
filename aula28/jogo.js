var rodada = 1;
$(document).ready( function() {

	$('#btn_iniciar_jogo').click( function(){
			alert('Jogo iniciado!');
	
	

			if ($('#entrada_apelido_jogador_1').val()=='') {
				alert("O apelido do Jogador 1 deve ser informado!");
				return false;
	}
			if ($('#entrada_apelido_jogador_2').val()=='') {
				alert("O apelido do Jogador 2 deve ser informado!");
				return false;
	}
	


			$('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
			$('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());
			$('#pagina_inicial').hide();
			$('#palco_jogo').show();
				});


	$('.jogada').click( function(){
			var id_campo_clicado = this.id;
			jogada(id_campo_clicado);
			//alert("jogada capturada:"+id_campo_clicado)
	})

});

function jogada(id) {
	var icone = '';
	if ((rodada % 2) == 1 ){
		icone = 'url(imagens/marcacao_1.png)';
	}

	else{
		icone = 'url(imagens/marcacao_2.png)';
	}
	rodada++;

	$('#'+id).css('background-image', icone);
}