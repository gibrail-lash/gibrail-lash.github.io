$(document).ready(function(){
});


$(function(){
	smoothScroll(800);
	aboutBelt();
	skillsBelt();
	workBelt();
	workLoad();
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
    	$('.aboutReturn').show();
	    
	    
    }); 
	
    $('.aboutReturn').click(function(){
        $('.aboutBelt').css('right', '0%');
        $('.about2Container').hide();
	$('.about2Return').show();
    	$('.aboutReturn').hide();
	    
    });
}


/* SKILLS SECTION */

function skillsBelt(){
    $('.certificationsReturn').click(function(){
        $('.skillsBelt').css('right', '100%');
        $('.certificationsContainer').show();
	$('.certificationsReturn').hide();
    	$('.skillsReturn').show();

    }); 
    $('.skillsReturn').click(function(){
        $('.skillsBelt').css('right', '0%');
        $('.certificationsContainer').hide();
	$('.certificationsReturn').show();
    	$('.skillsReturn').hide();
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

function workLoad() {

$.ajaxSetup({ cache: false });
	
$('.thumbUnit').click(function(){
	
	var $this = $(this),
		newFolder = $this.data('folder'),
		newTitle = $this.find('strong1').text(),	
		newHTML = '/Projects/' + newFolder + '.html';
	
	$('.projectLoad').load(newHTML);
	$('.projectTitle').text(newTitle);
	
});

}
