
$(document).ready(function(){
    $("#menu").click(function(){
        var showMenu = $("#showMenu").slideToggle();
        showMenu.animate({height: '300px'}, "slow");
        showMenu.animate({width: '98%'}, "slow");
        showMenu.animate({height: '50px'}, "slow");
    });
});


$(document).ready(function(){
	$('#fact1').click(function(){
		$('#showFact1').slideDown();
		$('#showFact2').hide();
		$('#showFact3').hide();
		$('#showFact4').hide();
	})
})

$(document).ready(function(){
	$('#fact2').click(function(){
		$('#showFact2').slideDown();
		$('#showFact3').hide();
		$('#showFact4').hide();
		$('#showFact1').hide();
	})
})


$(document).ready(function(){
	$('#fact3').click(function(){
		$('#showFact3').slideDown();
		$('#showFact2').hide();
		$('#showFact1').hide();
		$('#showFact4').hide();
	})
})


$(document).ready(function(){
	$('#fact4').click(function(){
		$('#showFact4').slideDown();
		$('#showFact3').hide();
		$('#showFact2').hide();
		$('#showFact1').hide();
	})
})

