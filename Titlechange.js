$(document.body).find('a.syllabus').each(function() { //search with links only
    var tmp = $(this).children().remove();
    var text = $(this).text();
    text = text.replace(/Syllabus/g, "Course Schedule");  //replace modules with topics
    $(this).text(text);
    $(this).append(tmp);
	
});