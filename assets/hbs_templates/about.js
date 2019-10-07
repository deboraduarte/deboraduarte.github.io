define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"container-fluid\">\n  <section class=\"row about\">\n      <span class=\"col-10 col-md-6\">\n        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.about_text : stack1), depth0))
    + "\n        <br />\n        <a href=\"curriculum/index.html\">Veja mais</a>\n      </span>\n      \n  </section>\n</div>\n\n<style>\n.about{\n height: 25em;\n background: url("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.global : depth0)) != null ? stack1.about_background : stack1), depth0))
    + "), #E0F2F2;\n background-blend-mode: overlay;\n background-size: cover;\n}\n.about span{\n  margin-top: 8em;\n  margin-left: 2em;\n  color: #0D0D95;\n  text-transform: lowercase;\n}\n.about a {\n  \n}\n@media (min-width: 900px) {\n  .about{\n    background-size: 40em;\n    background-position: top right;\n    background-repeat: no-repeat; \n  }\n}\n</style>";
},"useData":true}); });