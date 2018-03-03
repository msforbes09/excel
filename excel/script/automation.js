$(function(){
$(document).on('keypress','#test',function(){
	console.log(event.keyCode)
})
$('.modal').on('shown.bs.modal', function () {//set focus
	$('.default').select()
	$('.default').focus()
})
$(document).on('click','#jinawa',function(){//show jinawa modal
	clear_modal()
	$('.modal-body').load('server/jinawa_modal.php')
	$('.modal-title').html('Jinawa Calculation');
	$('.modal-header').addClass('bg-success');
	$('#modal_footer').html(
		'<button type="button" class="btn btn-default btn-lg" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('change','#offset,#module,#x_1,#x_2,#y_1,#y_2',function(){//calculate jinawa
	calc_jinawa()
})
$(document).on('keypress','#x_1,#x_2,#y_1,#y_2',function(){//validate number
	return isNumber(event);
})
$(document).on('dblclick','.copy',function(){//copy to clipboard
	var j_value = $(this).children().text().trim()
	if(j_value == '_____' ){
		return false
	}
	$('#clipboard').html('<input type="text" id="text_board" value="' + j_value + '" />')
	$('#text_board').select()
	document.execCommand("copy")
	$('#clipboard').html('')
	$('.result').html('"' + j_value + '" copied to clipboard.')
})
$(document).on('click','#s_net',function(){//show s_net modal 
	clear_modal()
	$('.modal-body').load('server/s_net_modal.php')
	$('.modal-title').html('S-Net Calculation');
	$('.modal-header').addClass('bg-info');
	$('#modal_footer').html(
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('change','#grid,#corner',function(){//calculate s_net
	calc_s_net()
})
$(document).on('click','#sodekabe',function(){//show modal sodekabe
	clear_modal()
	$('.modal-body').load('server/sodekabe_modal.php');
	$('.modal-title').html('Sodekabe Calculation');
	$('.modal-header').addClass('bg-warning');
	$('#modal_footer').html(
		'<button type="button" id="calc_sodekabe" class="btn btn-warning">Calculate</button>' +
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('change','#kiso_hgt,#fuka_hgt,#toukets_hgt',function(){//calc sodekabe
	calc_sodekabe()
})
$(document).on('click','#calc_sodekabe',function(){//calc sodekabe
	calc_sodekabe()
})
$(document).on('click','#void',function(){//show modal void
	clear_modal()
	$('.modal-body').load('server/void_modal.php');
	$('.modal-title').html('Void Pipe Calculation');
	$('.modal-header').addClass('bg-primary');
	$('#modal_footer').html(
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('change','#toukets,#count,#fuka_1,#fuka_2,#fuka_3,#fuka_4,#fuka_5,#void_1,#void_2,#void_3,#void_4,#void_5',function(){//calc void
	calc_void()
})
$(document).on('click','#fukakiso',function(){
	clear_modal()
	$('.modal-body').load('server/fukakiso_modal.php');
	$('.modal-title').html('Fukakiso Calculation');
	$('.modal-header').addClass('bg-danger');
	$('#modal_footer').html(
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('change','#jiban_val',function(){
	var jiban = $(this).val()
	if(jiban == 2){
		$('#soil_strength').val(3)
		$('#soil_strength').attr('disabled',1)
		$('#soil_strength').parent().parent().addClass('bg-danger')
	} else {
		$('#soil_strength').val(0)
		$('#soil_strength').removeAttr('disabled')
		$('#soil_strength').parent().parent().removeClass('bg-danger')
	}
	calc_fuka()
})
$(document).on('change','#fuka_input,#touket_height,#soil_strength',function(){
	calc_fuka()
})
$(document).on('click','#menseki',function(){
	clear_modal()
	$('.modal-body').load('server/menseki_modal.php');
	$('.modal-title').html('Menseki Calculation');
	$('.modal-header').addClass('bg-primary');
	$('#modal_footer').html(
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('click','#notes',function(){
	clear_modal()
	$('.modal-body').load('server/notes_modal.php');
	$('.modal-title').html('Copy Notes');
	$('.modal-header').addClass('bg-warning');
	$('#modal_footer').html(
		'<button id="add_note" type="button" class="btn btn-warning">Add</button>' +
		'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
	$('.modal').modal('show')
})
$(document).on('click','#add_note',function(){
	location.href = 'add_note.php'
})
})
function positive(num){
	if(num < 0){
		num *= -1;	
	}
	return num;
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode = 47 && (charCode < 46 || charCode > 57)) {
        return false;
    }
    return true;
}
function check_val(num){
	if( !num || isNaN(Math.abs(num)) ){
		return false;
	}
	return true;
}
function check_diff(num1,num2){
	if ( num1-num2 == 0 ){
		return false;
	}
	return true;
}
function clear_modal(){
	$('.modal-dialog').removeClass('modal-lg');
	$('.modal-dialog').removeClass('modal-sm');
	$('.modal-header').removeClass('bg-primary');
	$('.modal-header').removeClass('bg-danger');
	$('.modal-header').removeClass('bg-success');
	$('.modal-header').removeClass('bg-info');
	$('.modal-header').removeClass('bg-warning');
}
function calc_jinawa(){
	var module = $('#module').val();
	var offset = $('#offset').val() * 2;
	var x_1 = $('#x_1').val();
	var x_2 = $('#x_2').val();
	var y_1 = $('#y_1').val();
	var y_2 = $('#y_2').val();
	var a_1 = (x_2 - x_1)* module;
	var b_1 = (y_2 - y_1)* module;
	var a_2 = positive(x_2 - x_1) * module + offset;
	var b_2 = positive(y_2 - y_1) * module + offset;
	var c_1 = Math.round(Math.sqrt( (a_1 * a_1) + (b_1 * b_1)));
	var c_2 = Math.round(Math.sqrt( (a_2 * a_2) + (b_2 * b_2)));
	var prompt = '';
	if ( !check_val(x_1) || !check_val(x_2) || !check_val(y_1) || !check_val(y_2) || !check_diff(x_1,x_2) || !check_diff(y_1,y_2) ){
		$('.result').html('Invalid Input!')
		$('.j_1,.j_2').html('_____')
		return false
	}
	$('.j_1').html(c_1.toLocaleString())
	$('.j_2').html(c_2.toLocaleString())
	$('.result').html('')
}
function calc_s_net(){
	var grid = parseFloat($('#grid').val());
	var corner = parseFloat($('#corner').val());
	if(!grid || grid <= 0  || isNaN(corner) || corner < 0 ){
		$('.result').html('Invalid Input!')
		return false
	}
	grid *= 0.91;
	corner = (corner + 1) * 0.2;
	var total_net = grid + corner;
	var divider = Math.ceil(total_net / 5);
	var net_10 = Math.floor(divider / 2);
	var net_5 = divider % 2;
	$('#net_10').html(net_10);
	$('#net_5').html(net_5);
	$('.result').html('')
}
function calc_sodekabe(){
	var kiso = parseInt($('#kiso_hgt').val());
	var fuka = parseInt($('#fuka_hgt').val());
	var toukets = parseInt($('#toukets_hgt').val());
	var deduct = 160;
	if(isNaN(kiso) || kiso <= 0 || isNaN(fuka) || fuka < 0 || isNaN(toukets) || toukets <0){
		$('.result').html('Invalid Input!')
		$('.sodekabe_output').removeClass('bg-warning')
		$('.sodekabe_output').children().html('_____')
		return false
	}
	if(toukets > 0){
		deduct = -190;
	} else {
		if(fuka > 0){
			deduct = 70
		}
	}
	var sodekabe = -(kiso + fuka + toukets + deduct);
	$('.result').html('')
	$('.sodekabe_output').addClass('bg-warning')
	$('.sodekabe_output').children().html(sodekabe)
}
function calc_void(){
	var toukets = parseInt($('#toukets').val())
	var count = parseInt($('#count').val())
	var fuka_1 = parseInt($('#fuka_1').val())
	var void_1 = parseInt($('#void_1').val())
	var fuka_2 = parseInt($('#fuka_2').val())
	var void_2 = parseInt($('#void_2').val())
	var fuka_3 = parseInt($('#fuka_3').val())
	var void_3 = parseInt($('#void_3').val())
	var fuka_4 = parseInt($('#fuka_4').val())
	var void_4 = parseInt($('#void_4').val())
	var fuka_5 = parseInt($('#fuka_5').val())
	var void_5 = parseInt($('#void_5').val())
	var fuka_output = ''
	var total = 0
	if(toukets > 330 && count > 0){
		toukets -= 200
		total += toukets * count
		$('#count_output').html(count)
		$('#toukets_output').html(toukets.toLocaleString())
	} else {
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false
	}
	if(fuka_1 > 0 && void_1 > 0){
		fuka_1 += toukets
		total += fuka_1 * void_1
		fuka_output += '<table class="void_table_output">' +
				'<tr>' +
					'<td rowspan="3" class="c_10"><div class="void_fuka"><div></td>' +
					'<td class="c_11">ボイド管(φ150)</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy"><span>' + void_1 + '</span> 箇所</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy">長さ <span>' + fuka_1 + '</span> mm</td>' +
				'</tr>' +
			'</table>'
	} else if (!(fuka_1 == 0 && void_1 == 0)){
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false	
	}
	if(fuka_2 > 0 && void_2 > 0){
		fuka_2 += toukets
		total += fuka_2 * void_2
		fuka_output += '<table class="void_table_output">' +
				'<tr>' +
					'<td rowspan="3" class="c_10"><div class="void_fuka"><div></td>' +
					'<td class="c_11">ボイド管(φ150)</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy"><span>' + void_2 + '</span> 箇所</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy">長さ <span>' + fuka_2 + '</span> mm</td>' +
				'</tr>' +
			'</table>'
	} else if (!(fuka_2 == 0 && void_2 == 0)){
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false	
	}
	if(fuka_3 > 0 && void_3 > 0){
		fuka_3 += toukets
		total += fuka_3 * void_3
		fuka_output += '<table class="void_table_output">' +
				'<tr>' +
					'<td rowspan="3" class="c_10"><div class="void_fuka"><div></td>' +
					'<td class="c_11">ボイド管(φ150)</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy"><span>' + void_3 + '</span> 箇所</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy">長さ <span>' + fuka_3 + '</span> mm</td>' +
				'</tr>' +
			'</table>'
	} else if (!(fuka_3 == 0 && void_3 == 0)){
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false	
	}
	if(fuka_4 > 0 && void_4 > 0){
		fuka_4 += toukets
		total += fuka_4 * void_4
		fuka_output += '<table class="void_table_output">' +
				'<tr>' +
					'<td rowspan="3" class="c_10"><div class="void_fuka"><div></td>' +
					'<td class="c_11">ボイド管(φ150)</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy"><span>' + void_4 + '</span> 箇所</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy">長さ <span>' + fuka_4 + '</span> mm</td>' +
				'</tr>' +
			'</table>'
	} else if (!(fuka_4 == 0 && void_4 == 0)){
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false	
	}
	if(fuka_5 > 0 && void_5 > 0){
		fuka_5 += toukets
		total += fuka_5 * void_5
		fuka_output += '<table class="void_table_output">' +
				'<tr>' +
					'<td rowspan="3" class="c_10"><div class="void_fuka"><div></td>' +
					'<td class="c_11">ボイド管(φ150)</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy"><span>' + void_5 + '</span> 箇所</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="copy">長さ <span>' + fuka_5 + '</span> mm</td>' +
				'</tr>' +
			'</table>'
	} else if (!(fuka_5 == 0 && void_5 == 0)){
		$('.result').html('Invalid Input!')
		$('#count_output,#toukets_output,#total_output').html('_____')
		$('#adtl_output').html('')
		return false	
	}
	$('.result').html('	')
	$('#adtl_output').html(fuka_output)
	$('#total_output').html(total.toLocaleString())
}
function calc_fuka(){
	var fuka = parseInt($('#fuka_input').val())
	var toukets = $('#touket_height').val()
	var soil = $('#soil_strength').val()
	var fuka_index 
	if(soil == 0 || isNaN(fuka) || fuka <= 0){
		$('.fuka_height').parent().parent().removeClass('bg-primary')
		$('.result').html('Invalid Input!')
		$('.fuka_height').html('_____')
		$('.fuka_base').html('_____')
		return false
	}
	if(fuka <= 600){	
		fuka_index	= 1
	} else if(fuka <= 700){	
		fuka_index	= 2
	} else if(fuka <= 800){	
		fuka_index	= 3
	} else if(fuka <= 900){	
		fuka_index	= 4
	} else if(fuka <= 1000){	
		fuka_index	= 5
	} else if(fuka <= 1100){	
		fuka_index	= 6
	} else if(fuka <= 1200){	
		fuka_index	= 7
	} else {
		$('.fuka_height').parent().parent().removeClass('bg-primary')
		$('.result').html('Fukakiso Need Detail!')
		$('.fuka_height').html('_____')
		$('.fuka_base').html('_____')
		return false
	}
	$.ajax({
		type: 'post',
		url: 'server/get_base.php',
		data: {
				fuka: fuka_index,
				toukets: toukets,
				soil: soil
			}
	}).done(function(data){
		if(data){
			$('.result').html('')
			$('.fuka_height').parent().parent().addClass('bg-primary')
			$('.fuka_height').html(fuka)
			$('.fuka_base').html(data)		
		} else {
			$('.fuka_height').parent().parent().removeClass('bg-primary')
			$('.result').html('Fukakiso Need Detail!')
			$('.fuka_height').html('_____')
			$('.fuka_base').html('_____')
		}
	}).fail(function(data){
		alert('Something went wrong!!!')
	})
}