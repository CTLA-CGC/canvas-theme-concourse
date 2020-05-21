//Found this from the Canvas Community. It is a simple script to change the title of the navigation menu. The other problem that we have is on the current syllabus tool there is a title that is called syllabus and mention of syllabus in the descriptive body text. I have limited knowledge with JavaScript to know how to change just those items when the script is at the theme level. I would need to call the page and only the text on that page replace "syallbus" with "course schedule." //

$(document.body).find('a.syllabus').each(function() { //search with links only
    var tmp = $(this).children().remove();
    var text = $(this).text();
    text = text.replace(/Syllabus/g, "Course Schedule");  //replace modules with topics
    $(this).text(text);
    $(this).append(tmp);
	
});
