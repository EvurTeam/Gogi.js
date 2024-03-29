# Gogi.js  
Js-library for easy manipulated DOM, elements property and visual styles

## Philosopy
### Looks like...
... merge JQuery and C#.
#### From JQuery
Shared targets for scripting, CSS-selectors as main way of find object, main object in one letter (G as $). 
#### From C#
Pascal case, methods may returns only one data type, friendly code style.

## Simple examples  
### Get element by CSS-selector  
    G.Get("#div a");  
This method as other get-methods returns GElement object. This is special container for HTML-elements.  
For take HTML-element use Object property like this:  

    G.Get(".news").Object;  
    
If you needed create GElement for exist HTML-element use static method:  

    GElement.FromObject(someObj);
  
### Get all elements by CSS-selector    
    G.GetAll(".col");  
    G.GetAll(); // work like "*" selector  
    
### Get element by name
    G.GetByName("login");

### Query aggregation  
    G.Get(".text").GetAll("li");  

### CSS-styles
    G.Get(".title").SetStyle("text-decoration", "underline");  
    G.Get(".box").SetStyle("background-color", "black"); // may use all rules and values for CSS syntax
    
### Fast important rules
    G.GetAll("div").SetStyleImportant("display", "flex"); // rule with !important
    
### GColor as style helper
    G.Get(".rnd").SetStyle("background-color", GColor.Random());  
    G.Get("#row").SetStyle("background-color", GColor.RGB(255,225,0)); // -> #ffff00  

### Text manipulation  
    G.Get("h1").SetText("Hello World");  
    let txt = G.Get("h1").GetText(); // -> Hello World  

### Class manipulation
    let lbl = G.Get(".label");  
    if (!lbl.HasClass("hidden"))  
      lbl.AddClass("hidden");  
    else  
      lbl.RemoveClass("hidden");  
    
    // this method repeat last write but in one method!
    G.Get(".label").AddOrRemoveClass("hidden");

### Attributes manipulation  
    let body = G.Get("body");  
    body.SetAttribute("contenteditable", "true");  
    let isEditable = body.GetAttribute("contenteditable"); // -> true  
    let flag = body.HasAttribute("contenteditable"); // -> true  

### Get element childrens  
All methods (without GetChildsCount) returns GElements like Get\GetAll etc  

    let body = G.Get("body");  
    body.GetChildsCount(); // get count of children elements  
    body.GetChilds(); // all elemtents without script  
    body.GetFirstChild();  
    body.GetLastChild();  
    body.GetChildAt(2); // item by index 2  
    body.GetEachChilds(3); // items with index like 3 6 9 12 15 ...  
    body.GetChildsWhere((x) => x.tagName != "DIV"); // filter get only not div tags. May use any user filters (predicates)  
    
### 
