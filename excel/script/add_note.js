$(function(){
$(document).on('click','#add_note',function(){
	var english = $('#english_txt').val().trim().toUpperCase()
	var romanji = $('#romanji_txt').val().trim()
	if(!english || !romanji){
		alert('Invalid Command!!!')
		return false
	}
	$.ajax({
		type: 'post',
		url: 'server/add_note.php',
		data: {
			english: english,
			romanji: romanji
		}
	}).done(function(data){
		location.href = 'add_note.php'
	}).fail(function(data){
		alert("Something went wrong!")
	})
})
})