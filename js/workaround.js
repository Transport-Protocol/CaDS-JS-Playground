function toggle_footer(){
    /* global $ */
    //If the HIDE class exists then remove it, But first hide DIV
    if ( $("#toggle_footer").hasClass('hide_footer') )
        $("#toggle_footer").hide().removeClass('hide_footer');
    else if (! $("#toggle_footer").hasClass('hide_footer') )
        $("#toggle_footer").hide().addClass('hide_footer');
    $("#toggle_footer").show();
}

//###################### Twitter Workaround #######################
// TODO : shoud be a directive 
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

function callTheTwitterFunction(){ 
        console.log("Twitter should be ready....");
        /* global twttr */
        twttr.widgets.load()
}

