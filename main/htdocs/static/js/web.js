var SiteIterator = function () {

    var namespace;
    namespace = {};

    function _get_columns ( item_array ) {
        var cols, bs;
        
        cols = item_array.length;
        if (cols > 0) {
           bs = 12 / cols;
           return "col-md-" + bs;
        }
        else return "col-md-12";
    }
    
    function init (el, item_list) {
        var title, 
      	    content, 
            img,
            url,
	    container,
            cols;

        cols = _get_columns(item_list.sites);

        for (site of item_list.sites) { 

            container = $("<div class='site'></div>");
            container.addClass(cols);
            title = $("<h3></h3>");
            $(title).html(site.title);
            content = $("<p></p>");
            $(content).html(site.content);
            url= $("<a></a>");
            $(url).attr('href', site.url);
            $(url).html("Visit " + site.title);

            container.append(title);
            container.append(content);
            if (site.img) {
              img = $("<img class='img-responsive'></img>");
              $(img).attr('src', site.img);
              $(img).attr('alt', site.title);
              container.append(img);
            }
            container.append(url);
            $(el).append(container);
        }
    }

    //public vars/methods
    namespace.init = init;   

    return namespace;	
}();
