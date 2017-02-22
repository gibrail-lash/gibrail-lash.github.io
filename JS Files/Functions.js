$(document).ready(function(){
});


$(function(){
	smoothScroll();
	aboutBelt();
	skillsBelt();
	workBelt();
});



function smoothScroll(duration){
    $('a[href^="#"]').on('click',function(event){
        var target=$($(this).attr('href'));
        
        if(target.length){
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}


/* ABOUT SECTION */

function aboutBelt(){
    $('.about2Return').click(function(){
        $('.aboutBelt').css('right', '100%');
        $('.about2Container').show();
	$('.about2Return').hide();
	    
    }); 
	
    $('.aboutReturn').click(function(){
        $('.aboutBelt').css('right', '0%');
        $('.about2Container').hide();
	$('.about2Return').show();
    });
}


/* SKILLS SECTION */

function skillsBelt(){
    $('.certificationsReturn').click(function(){
        $('.skillsBelt').css('right', '100%');
        $('.certificationsContainer').show();
	$('.certificationsReturn').hide();

    }); 
    $('.skillsReturn').click(function(){
        $('.skillsBelt').css('right', '0%');
        $('.certificationsContainer').hide();
	$('.certificationsReturn').show();
    });
}



/* PROCESS SECTION */


/* PROJECTS SECTION */

function workBelt(){
    $('.thumbUnit').click(function(event){
		event.preventDefault();
        $('.workBelt').css('right', '100%');
        $('.workContainer').show();
    }); 
        $('.thumbReturn').click(function(event){
			event.preventDefault();
            $('.workBelt').css('right', '0%');
            $('.workContainer').hide();
    });   
}
