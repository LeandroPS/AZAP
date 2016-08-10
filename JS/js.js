$(function(){
	
	slide_eventos = setInterval(function(){
		$("section.eventos button.nav.next").click();
	}, 3000);
	
	$("section.eventos button.nav.next").click(function(){
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
	
	$("div.language").click(function(){
		$("ul.select-lang").toggleClass("open");
	});
	
});