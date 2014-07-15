jQuery(document).ready(function() {

	jQuery(".gallery_bodyload").fancybox({
		maxWidth	: 960,
		maxHeight	: 510,
		fitToView	: true,
		width		: '100%',
		height		: '100%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});


/* ebulten uyeliÄŸi iÃ§in */
jQuery( "#newsletter-validate-detail" ).submit(function( event ) {

			   var str = jQuery( "#newsletter-validate-detail" ).serialize();
			   var dolu=jQuery("#newsletter").val();
		if (dolu!=''){
		jQuery.ajax( {
			url : '/mnmajax/subscriber/ajaxnew',
			dataType : 'json',
			type : 'post',
			data : str,
			success : function(data) {
				if(data.RESULT == "SUCCESS"){
				
		 jQuery("#clickbanner").trigger('click');
		
					jQuery("#popup_image img").attr("src",data.IMAGE);
					jQuery("#popup_message").html(data.MESSAGE);
	
					jQuery("#newsletter").val("");
				}

			    else if(data.RESULT == "ERROR"){
		 jQuery("#clickbanner").trigger('click');
					jQuery("#popup_image img").attr("src",data.IMAGE);
					jQuery("#popup_message").html(data.MESSAGE);
				}
				/*else{
					alert(data.MESSAGE);
				}*/
			}
		});
		}
		else {
			jQuery("#newsletter").addClass( "validation-failed" );
			jQuery("#clickbanner").trigger('click');
			
					jQuery("#popup_image img").attr("src",'/skin/frontend/base/default/images/error.png');
					jQuery("#popup_message").html('Lütfen e-mail adresi giriniz.');
		

		}

		return false;
	});
});

