/**
*author : liuyin
time : 2013.04.24
*/

$(document).ready(function(){
	var dateArr = ['Sunday','Mondey', 'Tuesday', 'Wedsday', 'Thursday','Friday','Saturday'];
	var a = new Date();

	$('<div class="currentDay">~happy '+dateArr[a.getDay()]+'~</div>').appendTo('body');
});
