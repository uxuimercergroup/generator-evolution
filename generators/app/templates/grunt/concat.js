module.exports = {

  // Concatenate script files
  options: {
    separator: '\n\n'
  },
  core: {
    options: {
      banner: '/*!\nMercer Evolution - Core JS\nAUTHOR - Doug Fraize, Matthew Holmes, Sherry Seeton\n*/\n\n'
    },
    files: {
      'dist/assets/scripts/evolution.js': [
        'src/assets/scripts/core/foundation/vendor/jquery.js',
        'src/assets/scripts/core/foundation/vendor/jquery.cookie.js',
        'src/assets/scripts/core/foundation/vendor/placeholder.js',
        'src/assets/scripts/core/foundation/vendor/fastclick.js',
        'src/assets/scripts/core/foundation/foundation/foundation.js',
        'src/assets/scripts/core/foundation/foundation/foundation.alert.js',
        'src/assets/scripts/core/foundation/foundation/foundation.accordion.js',
        'src/assets/scripts/core/foundation/foundation/foundation.abide.js',
        'src/assets/scripts/core/foundation/foundation/foundation.dropdown.js',
        'src/assets/scripts/core/foundation/foundation/foundation.equalizer.js',
        'src/assets/scripts/core/foundation/foundation/foundation.offcanvas.js',
        'src/assets/scripts/core/foundation/foundation/foundation.reveal.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tab.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tooltip.js',
        'src/assets/scripts/core/foundation/foundation/foundation.topbar.js',
        'src/assets/scripts/core/lib/jquery/jquery-ui.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.ui.touch-punch.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.dataTables.js',
        'src/assets/scripts/core/lib/jquery/plugins/datatables.foundation.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.autosize.input.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.maskedinput.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.mousewheel.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.mCustomScrollbar.js',
        'src/assets/scripts/core/lib/jquery/plugins/owl.carousel.js',
        'src/assets/scripts/core/lib/mobile/ios-orientationchange-fix.js',
        'src/assets/scripts/core/base/abide.js',
        'src/assets/scripts/core/base/base.js',
        'src/assets/scripts/core/base/dropdowns.js',
        'src/assets/scripts/core/base/equalizer.js',
        'src/assets/scripts/core/base/helpers.js',
        'src/assets/scripts/core/objects/accordion.js',
        'src/assets/scripts/core/objects/autocomplete.js',
        'src/assets/scripts/core/objects/carousel.js',
        'src/assets/scripts/core/objects/data_table.js',
        'src/assets/scripts/core/objects/datepicker.js',
        'src/assets/scripts/core/objects/off_canvas.js',
        'src/assets/scripts/core/objects/reveal.js',
        'src/assets/scripts/core/objects/scroll_pane.js',
        'src/assets/scripts/core/objects/slider.js',
        'src/assets/scripts/core/objects/tabs.js',
        'src/assets/scripts/core/objects/tooltip.js',
        'src/assets/scripts/core/objects/top_bar.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/scripts/site.js': [
        'src/assets/scripts/site.js',
        'src/patterns/organisms/conversational-form/conversational-form.js',
        'src/patterns/organisms/item-selection-panel/item-selection-panel.js'
      ]
    }
  }

};