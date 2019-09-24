# Gogi.js  
Js-library for easy manipulated DOM and property

## Examples  
### Get element by CSS-selector  
  G.Get("#div a");  

### Get all elements by CSS-selector    
  G.GetAll(".col");  

### Query aggregation  
  G.Get(".text").GetAll("li");  

### CSS-styles
  G.Get(".title").SetStyle("text-decoration", "underline");  
  G.Get(".box").SetStyle("background-color", "black"); // may use all rules and values for CSS syntax

### Text manipulation  
  G.Get("h1").SetText("Hello World");  
  let txt = G.Get("h1").GetText(); // -> Hello World  

### Class manipulation
  let lbl = G.Get(".label");  
  if (lbl.HasClass("hidden"))  
    lbl.AddClass("hidden");  
  else  
    lbl.RemoveClass("hidden");  

### Attributes manipulation  
  let body = G.Get("body");  
  body.SetAttribute("contenteditable", "true");  
  let isEditable = body.GetAttribute("contenteditable"); // -> true  
  let flag = body.HasAttribute("contenteditable"); // -> true  

### Get element childrens  
  let body = G.Get("body");  
  body.GetChildsCount(); // get count of children elements  
  body.GetChilds(); // all elemtents without script  
  body.GetFirstChild();  
  body.GetLastChild();  
  body.GetChildAt(2); // item by index 2  
  body.GetEachChilds(3); // items with index like 3 6 9 12 15 ...  
  body.GetChildsWhere((x) => x.tagName != "DIV"); // filter get only not div tags. May use any user filters (predicates)  
