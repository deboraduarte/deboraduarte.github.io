define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    \n    <!-- Mobile -->\n    <div class=\"dropdown col-md-3 col-10\">\n    <button type=\"button\" class=\"row justify-content-center  align-items-center\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"dropdown\" aria-haspopup=\"false\" aria-expanded=\"false\">\n      <i class=\"fas "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + " col-md-3 col-10\"></i>\n      <h2 class=\"col-md-7 col-10\"> "
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h2>\n    </button>\n    <div class=\"dropdown-menu col-md-12 col-12\" aria-labelledby=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"dropdown-item\">\n        <span class=\"text \">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n    </div>\n  </div>\n      <!--End Mobile -->\n      \n        <style>\n        .services{\n          background-color: #DFAE64;\n          height: 30em;\n        }\n        #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "{\n          background-color: transparent;\n          border: none;\n        }\n        #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " i {\n          color: #544124;\n          font-size:  3em;\n        }\n        #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " h2{	\n        	color: #544124;\n        	font-size: 1em;\n        	text-transform: lowercase;\n        	font-family: 'Raleway', sans-serif;\n        }\n        #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " .text{\n          width: 100%;\n        	color: #000000;\n        	font-size: 1em;\n        	font-family: 'Raleway', sans-serif;\n         }\n         .dropdown-item{\n          height: 15em;\n          overflow: scroll;\n          white-space: normal !important;\n         }\n        @media (min-width: 900px) {\n          .services{\n            background-color: #DFAE64;\n            height: 20em;\n          }\n        }\n      </style>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"container-fluid\">\n  <div class=\"row services justify-content-center  align-items-center\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.services : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true}); });