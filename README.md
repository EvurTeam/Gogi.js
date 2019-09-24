# Gogi.js  
Js-library for easy manipulated DOM and property

## Examples  
1) Get element by CSS-selector  
G.Get("#div a");  

### Get all elements by CSS-selector    
G.GetAll(".col");  

### Query aggregation  
G.Get(".text").GetAll("li");  

### Text manipulation  
G.Get("h1").SetText("Hello World");  
let txt = G.Get("h1").GetText(); // -> Hello World  

### Attributes manipulation  
G.Get("body").SetAttribute("contenteditable", "true");  
let isEditable = G.Get("body").GetAttribute("contenteditable"); // -> true  

### Get element childrens  
let body = G.Get("body");  
body.GetChilds(); // all elemtents without script  
body.GetFirstChild();  
body.GetLastChild();  
body.GetChildAt(2);  
body.GetEachChilds(3); // items with index like 3 6 9 12 15 ...  
body.GetChildsWhere((x) => x.tagName != "DIV"); // filter get only not div tags  
