//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v{{ evo_meta_version }} - Base JS Functions
// DATE: {{ evo_meta_date }}
// AUTHOR: {{ evo_meta_author }}
// URL: {{ evo_meta_url }}
//--------------------------------------------------------------------------------------------------------

// BUTTONS
//--------------------------------------------------------------------------------------------------------

	// INTERACTIVE BUTTONS
	var evoButtonInteractive = function(objectDataValue){
		var evoButtonInteractiveDataObject = '[data-evo-button-interactive='+objectDataValue+']';
		var evoButtonInteractiveResetText = jQuery(evoButtonInteractiveDataObject).html();
		var d = 'disabled';
		jQuery(evoButtonInteractiveDataObject).click(function(){
			jQuery(evoButtonInteractiveDataObject).html('loading&hellip;').addClass(d).attr(d, d);
			setTimeout(function () {
				jQuery(evoButtonInteractiveDataObject).html(evoButtonInteractiveResetText).removeClass(d).removeAttr(d, d);
			}, 3000)
		});
	}

	// DISABLED ANCHOR BUTTONS FOUNDATION FIX
	var evoButtonDisabled = function(){
		jQuery('.disabled').click(function(e){
			return false;
		});
	}

	// Disabled Anchor Buttons Init
	evoButtonDisabled();


// FORMS
//--------------------------------------------------------------------------------------------------------

	// PLACEHOLDER ATTRIBUTE POLYFILL FOR IE9
	var evoFormPlaceholderPolyFill = function(){
		jQuery('input, textarea').placeholder();
	}

	// Placeholder Attribute Polyfill for IE9 Init
	evoFormPlaceholderPolyFill();
	