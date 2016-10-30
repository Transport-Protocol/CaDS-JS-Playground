function toggle_footer(){
    //If the HIDE class exists then remove it, But first hide DIV
    if ( $("#toggle_footer").hasClass('hide_footer') )
        $("#toggle_footer").hide().removeClass('hide_footer');
    else if (! $("#toggle_footer").hasClass('hide_footer') )
        $("#toggle_footer").hide().addClass('hide_footer');
    $("#toggle_footer").show();
}