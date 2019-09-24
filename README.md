# Gogi.js
Js-library for easy manipulated DOM and property

# Examples
1) Get element by CSS-selector
G.Get("#div a");

2) Get all elements by CSS-selector
G.GetAll(".col");

3) Query aggregation
G.Get(".text").GetAll("li");

4) Text manipulation
G.Get("h1").SetText("Hello World");
let txt = G.Get("h1").GetText(); // -> Hello World

5) Attributes manipulation
G.Get("body").SetAttribute("contenteditable", "true");
let isEditable = G.Get("body").GetAttribute("contenteditable"); // -> true

todo
