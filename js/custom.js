jQuery(document).ready(function() {
    jQuery.ajaxSetup({
        cache: false
    });
    jQuery('#search').keyup(function() {
        jQuery('#result').html('');
        var searchField = jQuery('#search').val();
        var expression = new RegExp(searchField, "i");
        jQuery.getJSON('words_dictionary.json', function(data) {
            jQuery.each(data, function(val) {
                //let length=val.length;
                //console.log(length);
                if (val.search(expression) === 0) {
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