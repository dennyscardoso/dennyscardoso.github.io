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

});