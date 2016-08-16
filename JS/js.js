$(function(){
	
	slide_eventos = setInterval(function(){
		$("section.eventos button.nav.next").click();
	}, 3000);
	
	slide_eventos = setInterval(function(){
		$("section.slideshow button.nav.next").click();
	}, 3000);
	
	$("section.slideshow button.nav.next").click(function(){
		
		curr_dot = $("section.slideshow ul.dots li.current");
		if(curr_dot.next().length){
			curr_dot.removeClass("current");
			curr_dot.next().addClass("current");
		}else{
			curr_dot.removeClass("current");
			$("section.slideshow ul.dots li:first-child").addClass("current");
		}
		
		
		if($("section.slideshow ul.slides li.current").next("li").length >=1){
			next = $("section.slideshow ul.slides li.current").next("li");
		}else{
			next = $("section.slideshow ul.slides li").first();
		}
		$("section.slideshow ul.slides li").removeClass("prev-prev prev-curr");
		$("section.slideshow ul.slides li.current").removeClass("current nxt-nxt prev-prev prev-curr").addClass("nxt-curr");
		next.addClass("current nxt-nxt");
		
		clearInterval(slide_eventos);
		
		slide_eventos = setInterval(function(){
			$("section.slideshow button.nav.next").click();
		}, 3000);
	});
	
	$("section.slideshow button.nav.prev").click(function(){
		curr_dot = $("section.slideshow ul.dots li.current");
		if(curr_dot.prev().length){
			curr_dot.removeClass("current");
			curr_dot.prev().addClass("current");
		}else{
			curr_dot.removeClass("current");
			$("section.slideshow ul.dots li:last-child").addClass("current");
		}
		
		//alert("foi");
		if($("section.slideshow ul.slides li.current").prev("li").length >=1){
			next = $("section.slideshow ul.slides li.current").prev("li");
		}else{
			next = $("section.slideshow ul.slides li").last();
		}
		$("section.slideshow ul.slides li").removeClass("nxt-nxt nxt-curr");
		$("section.slideshow ul.slides li.current").removeClass("current prev-prev nxt-nxt nxt-curr").addClass("prev-curr");
		//$("section.slideshow ul.slides li").remove
		next.addClass("current prev-prev");
		
		clearInterval(slide_eventos);
		
		slide_eventos = setInterval(function(){
			$("section.slideshow button.nav.next").click();
		}, 3000);
	});
	
	////////////////////////
	
	$("section.eventos button.nav.next").click(function(){
		
		curr_dot = $("section.eventos ul.dots li.current");
		if(curr_dot.next().length){
			curr_dot.removeClass("current");
			curr_dot.next().addClass("current");
		}else{
			curr_dot.removeClass("current");
			$("section.eventos ul.dots li:first-child").addClass("current");
		}
		//alert("foi");
		if($("section.eventos ul.slides li.current").next("li").length >=1){
			next = $("section.eventos ul.slides li.current").next("li");
		}else{
			next = $("section.eventos ul.slides li").first();
		}
		$("section.eventos ul.slides li").removeClass("prev-prev prev-curr");
		$("section.eventos ul.slides li.current").removeClass("current nxt-nxt prev-prev prev-curr").addClass("nxt-curr");
		next.addClass("current nxt-nxt");
		
		clearInterval(slide_eventos);
		
		slide_eventos = setInterval(function(){
			$("section.eventos button.nav.next").click();
		}, 3000);
	});
	
	$("section.eventos button.nav.prev").click(function(){
		
		curr_dot = $("section.eventos ul.dots li.current");
		if(curr_dot.prev().length){
			curr_dot.removeClass("current");
			curr_dot.prev().addClass("current");
		}else{
			curr_dot.removeClass("current");
			$("section.eventos ul.dots li:last-child").addClass("current");
		}
		//alert("foi");
		if($("section.eventos ul.slides li.current").prev("li").length >=1){
			next = $("section.eventos ul.slides li.current").prev("li");
		}else{
			next = $("section.eventos ul.slides li").last();
		}
		$("section.eventos ul.slides li").removeClass("nxt-nxt nxt-curr");
		$("section.eventos ul.slides li.current").removeClass("current prev-prev nxt-nxt nxt-curr").addClass("prev-curr");
		//$("section.eventos ul.slides li").remove
		next.addClass("current prev-prev");
		
		clearInterval(slide_eventos);
		
		slide_eventos = setInterval(function(){
			$("section.eventos button.nav.next").click();
		}, 3000);
	});
	
	$("div.glass").click(function(){
		$("div.glass, div.orcamento").removeClass("show");
	});
	
	$("button.orc").click(function(){
		$("div.glass, div.orcamento").addClass("show");
	});
	
	$("div.language").click(function(){
		$("ul.select-lang").toggleClass("open");
	});
	
});