"use strict";

// container for html-elements
class GElement {
    Object;

    constructor() {
        this.Object = null;
    }

    static FromObject(obj) {
        var tmp = new GElement();
        tmp.Object = obj;
        return tmp;
    }

    // selectors etc

    Get(selector) {
        return GElement.FromObject(this.Object.querySelector(selector));
    }

    GetByName(name) {
        return GElement.FromObject(this.Object.getElementsByName(name));
    }

    GetAll(selector) {
        var arr = this.Object.querySelectorAll(selector == null ? "*" : selector);
        var tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    // parent

    GetParent() {
        return GElement.FromObject(this.Object.parentElement);
    }

    // children

    GetChildCount() {
        return GElement.FromObject(this.Object.children.length);
    }

    GetFirstChild() {
        return GElement.FromObject(this.Object.firstChild);
    }

    GetChildAt(index) {
        return GElement.FromObject(this.Object.children[index]);
    }

    GetEachChilds(order) {
        let arr = [];
        for (let index = 0; index < this.Object.children.length; index++) {
           if ((index + 1) % order == 0) {
               arr.push(GElement.FromObject(this.Object.children[index]));
           }
        }
        return arr;
    }

    GetChilds() {
        return Array.from(this.Object.children.forEach(x => arr.push(GElement.FromObject(x))));
    }

    GetChildsWhere(filter) {
        let arr = [];
        Array.from(this.Object.children).forEach(x => {
            if (filter(x)) arr.push(GElement.FromObject(x));
        });
        return arr;
    }

    GetLastChild() {
        return GElement.FromObject(this.Object.lastChild);
    }

    // etc

    GetTagName() {
        return this.Object.tagName;
    }

    // attribute

    GetAttribute(key) {
        return this.Object.getAttribute(key);
    }

    SetAttribute(key, val) {
        this.Object.setAttribute(key, val);
    }

    HasAttribute(key) {
        return this.Object.hasAttribute(key);
    }

    // textContent

    GetText() {
        return this.Object.textContent;
    }

    SetText(val) {
        this.Object.textContent = val;
    }

    ClearText() {
        this.Object.textContent = "";
    }

    // innerHtml

    GetHtml() {
        return this.Object.innerHtml;
    }

    SetHtml(val) {
        return this.Object.innerHtml = val;
    }

    // class

    AddClass(clName) {
        this.Object.classList.add(clName);
    }

    RemoveClass(clName) {
        this.Object.classList.remove(clName);
    }

    HasClass(clName) {
        return this.Object.classList.contains(clName);
    }

    AddOrRemoveClass(clName) {
        if (this.Object.classList.contains(clName))
            this.Object.classList.remove(clName);
        else
            this.Object.classList.add(clName);
    }

    // id

    GetId() {
        return this.Object.id;
    }

    // visual

    Show(displayType) {
        if (displayType == null)
            this.Object.style.cssText += "display:block;";
        else
            this.Object.style.cssText += "display:" + displayType + ";";
    }

    Hide() {
        this.Object.style.cssText += "display:none;";
    }

    SetOpacity(val) {
        this.Object.style.cssText += "opacity: " + val + ";"; 
    }

    SetRotation(val) {
        this.Object.style.cssText += "transform: rotate(" + val + "deg);";
    }

    SetStyle(key,val) {
        this.Object.style.cssText += key + ":" + val + ";";
    }

    SetStyleImportant(key,val) {
        this.Object.style.cssText += key + ":" + val + " !important;";
    }

    SetSize(w,h) {
        if (!w.endsWith("px")) w += "px";
        if (!h.endsWith("px")) h += "px";
        this.Object.style.cssText += "width:" + w + ";" + "hight:" + h + ";";
    }

    SetLocation(x,y) {
        if (!x.endsWith("px")) x += "px";
        if (!y.endsWith("px")) y += "px";
        this.Object.style.cssText += "left:" + x + ";" + "top:" + y + ";";
    }

    SetTransition(propName, delay) {
        this.Object.style.cssText += "-webkit-transition:" + propName + " " + delay + ";";
        this.Object.style.cssText += "transition: " + propName + " " + delay + ";";
    }

    // etc

    GetValue() {
        if (this.Object.hasAttribute("value")) {
            return this.Object.value;
        }
        return null;
    }

    SetValue(newVal) {
        if (this.Object.hasAttribute("value")) {
            this.Object.value = newVal;
        }
    }

    // control

    Click() {
        this.Object.click();
    }

    Focus() {
        this.Object.focus();
    }

    AddEvent(event, callback) {
        addEventListener(event, callback, false);
    }

    RemoveEvent(event, callback) {
        removeEventListener(event, callback, false);
    }

    // debug

    Log() {
        console.log(this.Object);
    }
};

// IO class

class GIO {
    MouseX;
    MouseY;

    constructor() {
        window.onmousemove = e => {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
        };
    }
}

// color class
class GColorManager {
    constructor() {
        
    }

    RGB(r,g,b) {
        return "#" + r.toString(16) + g.toString(16) + b.toString(16);
    }

    Random() {
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }
}

// main class
class Gogi {
    constructor() {
        
    }

    // fast selectors

    Get(selector) {
        return GElement.FromObject(document.querySelector(selector));
    }

    GetByName(name) {
        return GElement.FromObject(document.getElementsByName(name));
    }

    GetAll(selector) {
        var arr = document.querySelectorAll(selector == null ? "*" : selector);
        var tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    GetTopElements() {
        var arr = document.querySelectorAll("body > *");
        var tmp = [];
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].tagName != "SCRIPT")
                tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    // 

    Navigate(url) {
        window.location.href = url;
    }

    // other

    Random(min,max) {
        return Math.floor(Math.random() * max) + min;
    }
};

var G = new Gogi();
var GIo = new GIO();
var GColor = new GColorManager();