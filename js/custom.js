jQuery(document).ready(function() {
        jQuery('#search').keyup(function() {
            jQuery('#result').html('');
            var searchField = jQuery('#search').val();
            var expression = new RegExp(searchField, "i");
            jQuery.getJSON('words_dictionary.json', function(data) {
                jQuery.each(data, function(val) {
                    if (val.search(expression) != -1) {
                      jQuery('#result').append('<li class="list-group-item link-class">' + val + '</li>');
                    }
                });
            });
        });
        jQuery('#result').on('click', 'li', function() {
            var click_text = jQuery(this).text().split('|');
            jQuery('#search').val(jQuery.trim(click_text[0]));
            jQuery("#result").html('');
        });
    });