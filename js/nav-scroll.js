 $(document).ready(function(){
   	var code = $('#code'),
   		text = $('#text');

   	$("<div id='start'></div>").appendTo(code);
   	$("<div style='margin-left: 32px;' id='name'></div>").appendTo(code);
   	$("<div style='margin-left: 32px;' id='skills'></div>").appendTo(code);
   	$("<div style='margin-left: 32px;' id='email'></div>").appendTo(code);
   	$("<div style='margin-left: 32px;' id='quote'></div>").appendTo(code);
   	$("<div id='end'></div>").appendTo(code);
   	
   	$("<h1 id='name'></h1>").appendTo(text);
   	$("<h2 id='skills'></h2>").appendTo(text);
   	$("<h3 id='email'></h3>").appendTo(text);
   	$("<blockquote id='quote'></blockquote>").appendTo(text);

   	function typing(){
   		window.TypeItDefaults.speed = 70;
   		window.TypeItDefaults.cursor = false;
	   	new TypeIt('#code #start', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    strings: '<info-card>'
		});

	   	new TypeIt('#code #name', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    startDelay: 2000,
		    strings: '<name> A.D.Adams </name>'
		});

	   	new TypeIt('#code #skills', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    startDelay: 4000,
		    strings: '<skills> Designer & Developer </skills>'
		});

	   	new TypeIt('#code #email', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    startDelay: 7000,
		    strings: '<email> adams100111@gmail.com </email>'
		});

	   	new TypeIt('#code #quote', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    startDelay: 9000,
		    strings: '<quote> Think twise code once :) </quote>'
		});

		new TypeIt('#code #end', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: false,
		    startDelay: 1100,
		    strings: '</info-card>'
		});

		/////////////////////////////////////

		new TypeIt('#text #name', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: true,
		    startDelay: 3100,
		    strings: '<span class="fa fa-user"></span> A.D.Adams'
		});

	   	new TypeIt('#text #skills', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: true,
		    startDelay: 5000,
		    strings: '<span class="fa fa-briefcase"></span> Designer & Developer'
		});

	   	new TypeIt('#text #email', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: true,
		    startDelay: 7000,
		    strings: '<span class="fa fa-at"></span> adams100111@gmail.com'
		});

	   	new TypeIt('#text #quote', {
		    speed: 80,
		    lifeLike: true,
		    autoStart: false,
		    html: true,
		    startDelay: 9200,
		    strings: '<span class="fa fa-quote-left"></span> Think twise code once :) <span class="fa fa-quote-right"></span>'
		});
   	}


   	typing();
   $(window).bind('scroll', function() {
   		var navHeight = $( window ).height();
		if ($(window).scrollTop() >= navHeight) {
			$('#navbar').addClass('fixed');
			$('#navbar').addClass('bb');
			$('#content').addClass('mt');
		}
		else {
			$('#navbar').removeClass('fixed');
			$('#navbar').removeClass('bb');
			$('#content').removeClass('mt');

			code.html("");
			text.html("");

			$("<div id='start'></div>").appendTo(code);
		   	$("<div style='margin-left: 32px;' id='name'></div>").appendTo(code);
		   	$("<div style='margin-left: 32px;' id='skills'></div>").appendTo(code);
		   	$("<div style='margin-left: 32px;' id='email'></div>").appendTo(code);
		   	$("<div style='margin-left: 32px;' id='quote'></div>").appendTo(code);
		   	$("<div id='end'></div>").appendTo(code);
		   	
		   	$("<h1 id='name'></h1>").appendTo(text);
		   	$("<h2 id='skills'></h2>").appendTo(text);
		   	$("<h3 id='email'></h3>").appendTo(text);
		   	$("<blockquote id='quote'></blockquote>").appendTo(text);
			typing();
		}
	});
});