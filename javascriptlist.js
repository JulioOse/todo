$(document).ready(function() {
	for (var i = 0; i < localStorage.length; i++){
    $('#list').append("<div class='itemLi'> <p>" + localStorage.getItem(localStorage.key(i)) + '</p> </div>');
	}
	$('#button').click(function() {
		var $items = $('input[name=item]').val();
		$('#list').append("<div class='itemLi'> <p>" + $items + '</p> </div>');
		localStorage.setItem($items, $items);
		
	});
	$(document).on('click', '.itemLi', function() {
		var key = localStorage.key($(this).text());
		localStorage.removeItem(key);
		$(this).remove();
		
		
	});

});