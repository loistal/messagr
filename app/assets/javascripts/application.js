// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

// scroll at the bottom of the chatroom to see the latest messages
scroll_bottom = function() {

	if ($("#chatbox").length > 0) {
		$("#chatbox").scrollTop($("#chatbox")[0].scrollHeight);
	}
	
}

submit_message = function() {
	$("#message_body").on("keydown", function(e){
		if (e.keyCode == 13) {
			$("#writeMessageBox > button").click();
			e.target.value = "";
		};
	});
}

signup_modal = function() {
	$("#signUpRoot").click( function() {
		$('.ui.modal').modal('show');
	});
}

hide_participants = function () {
	var lessThan1000 = window.matchMedia( "(max-width: 1000px)" );
	lessThan1000.addListener(adaptSmallWindow);

	var moreThan1000 = window.matchMedia( "(min-width: 1000px)" );
	moreThan1000.addListener(adaptBiggerWindow);

}

function adaptSmallWindow(mq) {
	if (mq.matches) {
		$("#chatbox-column").removeClass("twelve wide column");
		$("#chatbox-column").addClass("sixteen wide column");
	} 
}

// media query change
function adaptBiggerWindow(mq) {
	if (mq.matches) {
		$("#chatbox-column").removeClass("sixteen wide column");
		$("#chatbox-column").addClass("twelve wide column");
	} 
}

$(document).on('turbolinks:load', function(){
	$('.ui.dropdown').dropdown();

	$('.message .close')
	.on('click', function() {
		$(this)
		.closest('.message')
		.transition('fade')
		;
	})
	;

	hide_participants();
	signup_modal();
	scroll_bottom();
	submit_message();

})
