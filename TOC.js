$(document).ready(function() {
	var itemh2 = $('<span></span>'),
		listh2 = $('<span></span>');
	$('.post-body').prepend('<ol id="tocList"></ol>');
	$(".post-body h2, .post-body h3").each(function(index) {
		var umidi = this.id ? $(this).attr('id') : 't_' + (index + 1),
			li = "<li><a href='#" + umidi + "'>" + $(this).text() + "</a></li>";
		$(this).attr('id', umidi);
		if ($(this).is("h2")) {
			listh2 = $("<ol></ol>");
			itemh2 = $(li);
			itemh2.append(listh2);
			itemh2.appendTo("#tocList");
		} else {
			listh2.append(li);
		}
	});
});