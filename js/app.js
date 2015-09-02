$(document).ready(function() {

	var pages=["#cshistory","#jshistory","#angularjsphilosophy","#htmlcsshistory"];
	var prevbtn=pages[0];
	var nextbtn=pages[0];

	$("#nextbtn").click(function(){
		console.log(prevbtn);
		console.log(pages[0]);

		if (prevbtn == pages[0]){
			//debugger
			$("#jshistory").css('display', 'block');
			$("#cshistory").css('display', 'none');
			prevbtn=pages[1];
			console.log($("#jshistory").css('display'));
			console.log($("#cshistory").css('display'));
		} else if (prevbtn == pages[1]){
			$("#angularjsphilosophy").css('display', 'block');
			$("#jshistory").css('display', 'none');
			prevbtn=pages[2];
			nextbtn=pages[1];
		} else if (prevbtn == pages[2]){
	  		$("#htmlcsshistory").css('display', 'block');
	  		$("#angularjsphilosophy").css('display', 'none');
			prevbtn=pages[3];
			nextbtn=pages[2];
	  	} else if (prevbtn == pages[3]){
	  		$("#cshistory").css('display', 'block');
	  		$("#htmlcsshistory").css('display', 'none');
			prevbtn=pages[0];
			nextbtn=pages[3];
	  	}
	});

	$('#prevbtn').click(function(){
		console.log(nextbtn);
		if (nextbtn == pages[0]){
			$("#htmlcsshistory").css('display', 'block');
			$("#cshistory").css('display', 'none');
			nextbtn=pages[3];
			prevbtn=pages[0];
		} else if (nextbtn == pages[3]){
			$("#angularjsphilosophy").css('display', 'block');
			$("#htmlcsshistory").css('display', 'none');
			nextbtn=pages[2];
			prevbtn=pages[3];
		} else if (nextbtn == pages[2]){
	  		$("#jshistory").css('display', 'block');
	  		$("#angularjsphilosophy").css('display', 'none');
			nextbtn=pages[1];
			prevbtn=pages[2];
	  	} else if (nextbtn == pages[1]){
	  		$("#cshistory").css('display', 'block');
	  		$("#jshistory").css('display', 'none');
			nextbtn=pages[0];
			prevbtn=pages[1];
	  	}
	});

});

$(document).ready(function() {
	var pages=['#cshistory','#jshistory','#angularjsphilosophy','#htmlcsshistory'];
	$("#nextbtn").click(function(event) {
		/* Act on the event */
		for (var i=0; i<4; i++){
			if ($(pages[i]).attr('display', 'block')){
				if (i!=3){
					$(pages[i+1]).css('display', 'block');
					$(pages[i]).css('display', 'none');
				} else{
					$(pages[0]).css('display', 'block');
					$(pages[i]).css('display', 'none');
				}
			}
		}
	});
});
