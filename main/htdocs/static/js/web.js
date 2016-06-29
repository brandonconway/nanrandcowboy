var SiteIterator = function () {

    var namespace;
    namespace = {};

    
    function _get_columns ( item_array ) {
        var cols, bs;
        
        cols = item_array.length;
        if (cols > 0 && cols <= 3) {
           bs = 12 / cols;
           return "col-md-" + bs;
        }
	else if ( cols > 3) {
	   return "col-md-4";
	}
        else return "col-md-12";
    }

    function init (el, item_list) {
        var title, 
      	    content, 
            img,
            url,
	    container,
            cols,
	    wrapper,
	    i;


        cols = _get_columns(item_list.sites);
	i = 0;
        wrapper = '';

        for (site of item_list.sites) { 
            container = $("<div class='site'></div>");
            container.addClass(cols);
            title = $("<h3></h3>");
            $(title).html(site.title);
            content = $("<p class='content'></p>");
            $(content).html(site.content);
            url= $("<a></a>");
            $(url).attr('href', site.url);
            $(url).html("Visit " + site.title);

            container.append(title);
            if (site.img) {
              img = $("<img class='img-responsive'></img>");
              $(img).attr('src', site.img);
              $(img).attr('alt', site.title);
              container.append(img);
            }
            container.append(content);
            container.append(url);
	    if (i % 3 == 0 ) {
	        wrapper = $("<div class='row'></div><br>");
	    }
	    container = wrapper.append(container);
            $(el).append(container);
	    i++;
        }
        //dynamic card scaling. alternatively we could use a fixed height div with bacjground image.
        $(window).load( function () {
            var height = Math.max.apply(Math, $('.site')
                  .map(function(){ return $(this).outerHeight() }));
            $('.site').each(function(){$(this).css('min-height', height)});
            $('.site .content').css({'position': 'absolute', 'bottom': '1em'});
            $('.site a').css({'position': 'absolute', 'bottom': '0'});
	});
    }

	
    //public vars/methods
    namespace.init = init;   

    return namespace;	
}();
