(function() {
	// Assumes JQuery has been loaded, handled in bookmarklet itself to avoid bloated load order management.

	// Credit to mantish on StackOverflow: http://stackoverflow.com/a/9102270
	// Slightly modified to allow for other arguments to precede v (just added a .* after "watch?")
	function getVideoId(url){
		var pattern = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?.*v=)([^#\&\?]*).*/;
		var match = url.match(pattern);
		if (match && match[2].length == 11){
			return match[2];
		}
		return "";
	}

	// Credit to jottos on StackOverflow: http://stackoverflow.com/a/7579799
	function seconds2time (seconds) {
		var hours   = Math.floor(seconds / 3600);
		var minutes = Math.floor((seconds - (hours * 3600)) / 60);
		var seconds = seconds - (hours * 3600) - (minutes * 60);
		var time = "";

		if (hours != 0) {
		  time = hours+":";
		}
		if (minutes != 0 || time !== "") {
		  minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
		  time += minutes+":";
		}
		if (time === "") {
		  time = seconds+"s";
		}
		else {
		  time += (seconds < 10) ? "0"+seconds : String(seconds);
		}
		return time;
	}

	$("a").each(function(){
		var videoId = getVideoId(this.href);
		var node = this;
		if(videoId){
			$.get("http://gdata.youtube.com/feeds/api/videos/" + videoId, function(data){
				var numSeconds = $(data).find("duration").attr("seconds");
				node.innerHTML += " (" +  seconds2time(numSeconds) + ")";
			});
		}
	});
})();