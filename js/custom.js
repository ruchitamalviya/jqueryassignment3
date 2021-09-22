jQuery(document).ready(function() {
    jQuery('#search').keyup(function() {
        jQuery('#result').html('');
        let searchField = jQuery('#search').val();
        let charLength = searchField.length;
        if (charLength > 0) {
            jQuery('#input_result').html("this is" + ' ' + searchField);
        } else {
            jQuery('#input_result').html("");
        }

        let html = "";
        if (charLength >= 3) {
            let expression = new RegExp(searchField, "i");
            jQuery.getJSON('words_dictionary.json', function(data) {
                jQuery.each(data, function(val) {
                    if (val.search(expression) === 0) {

                        html = '<li class="list-group-item link-class">' + val + '</li>';
                        jQuery('#result').append(html);

                    }

                });

            });

        }

    });
    jQuery('#result').on('click', 'li', function() {
        var clickText = jQuery(this).text().split('|');
        jQuery('#search').val(jQuery.trim(clickText[0]));
        jQuery('#input_result').html("this is" + ' ' + clickText[0]);
        jQuery("#result").html('');

    });
});