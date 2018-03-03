$(function(){
	$(document).on('click','#fuka',function(){
		clear_modal()
		$('.modal-header').addClass('bg-info');
		$('.modal-dialog').addClass('bg-info modal-lg');
		$(".modal-title").html('Fukakiso Doma Level')
		$(".modal-body").load('server/porch_modal.php')
		$(".modal-footer").html(
			'<div class="btn-group">'+
				'<button type="button" class="btn btn-info" id="calculate">Enter</button>'+
				'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	
	$(document).on('click','#calculate',function(){
		var fuka = $('#fuka_height').val()*1
		var level = $('#first_level').val()*-1
		var step = parseInt($('#no_steps').val())
		var tile = $('#finishing').val()*1
		var kiso = $('#kiso_height').val()*1
		if (!fuka || !level || !step ){
			$("#glenn").html('<center>Please fill up the required items!</center>')
			return false
		}
		if(step <= 1){
			alert('Invalid Step\nRetry')
			return false
		}
		if(level <= 0){
			alert('Invalid Doma Level')
			return false
		}
		//console.log(fuka)
		//console.log(level)
		//console.log(step)
		//console.log(tile)
		//console.log(kiso)
		var answer = Math.round(((kiso + fuka + tile)-(level))/step)
		$(".output").val(answer)
		$(".output").html(answer)
		//$(".modal").modal('hide')
		
		var outputholder
		var outputholder1
		var outputholder2
		var outputholder3
		var outputholder4
		var outputholder5
		var outputholder6
		var outputholder7
		var outputholder8
		var outputholder9
		var outputholder10
		var outputholder11
		var prompt='<table class="table table-bordered" style="width: 50%;">'
		var riser = level
		for(i = 1; i <= step; i++){
			prompt += '<tr>'
			prompt += '<td>' + i + 'th Step</td>'
			prompt += '<td class="copy"> <span>-' + riser + '</span></td>'
			prompt += '</tr>'
			riser += answer
		}
		prompt += '</table>'
		$(".stepsoutput").html(prompt)
		$("#glenn").html('')
	})
	$(document).on('click','#side_spacer',function(){
		clear_modal()
		$('.modal-header').addClass('bg-danger');
		$('.modal-dialog').addClass('bg-danger modal-lg');
		$(".modal-title").html('Side Spacer Computation');
		$(".modal-body").load('server/side_spacer_beta.php');
		$(".modal-footer").html(
			'<div class="btn-group">'+
				'<button type="button" class="btn btn-danger" id="spacer">Enter</button>'+
				'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
			'</div>'
		)
		$(".modal").modal('show')
	})
	$(document).on('change','#toukets, #k_type',function(){
		if($('#toukets').val() == 1 && $('#k_type').val() == 'beta'){
			$('.side_spacer_table').html(
				'<br>'+'<br>'+'<center>'+'<table class="table table-bordered" id="toukets_nashi">'+
					'<tr>'+
						'<td colspan="2"><strong>SIDE SPACER</strong></td>'+
					'</tr>'+
					'<tr>'+
						'<td class="gai_td"><input type="number" class="gai_design" id="gai_value" /></td>'+
						'<td id="gai_write">Gaisyuubu</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="gai_td"><input type="number" class="gai_design" id="gai_value_wt" /></td>'+
						'<td id="gai_wt">I-type Fukakiso with TACHIAGE</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="gai_td"><input type="number" class="gai_design" id="gai_value_wot" /></td>'+
						'<td id="gai_wot">I-type Fukakiso withOUT TACHIAGE</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="gai_td"><input type="number" class="gai_design" id="gai_value_wtTT" /></td>'+
						'<td id="gai_wtTT">T-type Fukakiso with TACHIAGE</td>'+
					'</tr>'+
					'<tr>'+
						'<td class="gai_td"><input type="number" class="gai_design" id="gai_value_wotTT" /></td>'+
						'<td id="gai_wotTT">T-type Fukakiso withOUT TACHIAGE</td>'+
					'</tr>'+
				'</table>'+
				'</center>'
			)
		} else {
			$('.side_spacer_table').html('')
		}
	
	})
	$(document).on('click','#spacer',function(){
		var side_total = 10*1
		var a = Math.round( (($('#gai_value').val()*.91)/1.82)*2 )*1
		var b = Math.round( (($('#gai_value_wt').val()*.91)/1.82)*4 )*1
		var c = Math.round( (($('#gai_value_wot').val()*.91)/1.82)*2 )*1
		var d = Math.round( (($('#gai_value_wtTT').val()*.91)/1.82)*5 )*1
		var e = Math.round( (($('#gai_value_wotTT').val()*.91)/1.82)*4 )*1
		console.log(a);
		console.log(b);
		$('.side_spacer_table2').html(
		'<br>'+'<center>'+
			'<table class="table table-bordered side_table" style="text-align: center; font-weight: bolder; width: 50%;">'+
				'<tr>'+
					'<td colspan="2">Actual Materials</td>'+
				'</tr>'+
				'<tr>'+
					'<td>SPACER BLOCK</td>'+
					'<td id="side_spacer_output">'+ '' +'</td>'+
				'</tr>'+
				'<tr>'+
				'<tr>'+
					'<td>SIDE SPACER</td>'+
					'<td id="side_spacer_output">'+ (a + b + c +d + e + side_total) +'</td>'+
				'</tr>'+
			'</table>'+
		'</center>'
		)
	})
})
function clear_modal(){
	$('.modal-dialog').removeClass('modal-lg');
	$('.modal-dialog').removeClass('modal-sm');
	$('.modal-header').removeClass('bg-primary');
	$('.modal-header').removeClass('bg-danger');
	$('.modal-header').removeClass('bg-success');
	$('.modal-header').removeClass('bg-info');
	$('.modal-header').removeClass('bg-warning');
}