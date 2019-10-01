define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <style>\n  .clients{\n    margin-left: 0.5em;\n    margin-bottom: 2em;\n  }\n    #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "{\n     height: 3em; \n     background: url("
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + ");\n     border-radius: 50%;\n     background-size: contain;\n     background-repeat: no-repeat;\n     background-position: center;\n     margin-top: 1em;\n     margin-left: 1em;\n     border: solid 0.1em #F4F4F4;\n    }\n    .title{\n      font-family: 'Raleway', sans-serif;\n      font-style: italic;\n      font-size: 1.2em;\n      color: #312E2E;\n      margin-top: 1em;\n      margin-left: 1em;\n      text-transform: lowercase;\n    }\n    @media (min-width: 900px) {\n      #"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "{\n       height: 10em; \n      }\n    }\n  </style>\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"col-2\"></div>\n    \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container-fluid\">\n  <h2 class=\"title\">\n    Já trabalhei para:\n  </h2>\n  <div class=\"row clients\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.clients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true}); });