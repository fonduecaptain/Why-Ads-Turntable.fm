$(function load () {
chrome.extension.sendMessage({method: "getLocalStorage", key: "mode"}, function(response) {
 
  var data = response.data;
  console.log(data);
	if (data == 'corgis'){
		doTheme();
		var timerId = setInterval(doTheme, 10000); 
	} else if (data == 'logo'){
		doTheme2();
		var timerId = setInterval(doTheme2, 10000); 
	} else if (data == 'static'){
		doTheme3();
		var timerId = setInterval(doTheme3, 10000); 
	} else {
		doTheme();
		var timerId = setInterval(doTheme, 10000); 
	}

});
	
	

});


function doTheme () {
	var pictures = ['http://i.imgur.com/YdB1eWl.gif',
	'http://i.imgur.com/4A8jZOl.gif',
	'http://i.imgur.com/5y10kqS.gif',
	'http://i.imgur.com/ltLOvc6.gif',
	'http://i.imgur.com/1KThDtF.gif',
	'http://i.imgur.com/g8yH5P7.gif',
	'http://i.imgur.com/i5TttSm.gif',
	'http://i.imgur.com/FzpVvV7.gif']; 
 	var theimage = pictures[Math.floor(Math.random() * (pictures.length))];
	$('.screen-content').attr('style', 'z-index:9999; background-image: url('+theimage+'); display: block;').attr('src','');
	$('.why-ads').hide();

	
}

function doTheme2 () {
	
	$('.screen-content').attr('style', 'z-index:9999; background-image: url(http://i.imgur.com/9qHNhWC.png); display: block;').attr('src','');
	$('.why-ads').hide();

	
}

function doTheme3 () {
	
	$('.screen-content').attr('style', 'z-index:9999; background-image: url(http://i.imgur.com/5JE3EHc.gif); display: block;').attr('src','');
	$('.why-ads').hide();

	
}

