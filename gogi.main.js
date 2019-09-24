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

    Get(selector) {
        return GElement.FromObject(this.Object.querySelector(selector));
    }

    GetAll(selector) {
        var arr = this.Object.querySelectorAll(selector);
        var tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    GetParent() {
        return GElement.FromObject(this.Object.parentElement);
    }

    GetChildCount() {
        return GElement.FromObject(this.Object.children.length);
    }

    GetFirstChild() {
        return GElement.FromObject(this.Object.children[0]);
    }

    GetChildAt(index) {
        return GElement.FromObject(this.Object.children[index]);
    }

    GetLastChild() {
        return GElement.FromObject(this.Object.children[this.Object.children.length - 1]);
    }

    GetAttribute(key) {
        return this.Object.getAttribute(key);
    }

    SetAttribute(key, val) {
        return this.Object.setAttribute(key, val);
    }

    GetText() {
        return this.Object.textContent;
    }

    SetText(val) {
        this.Object.textContent = val;
    }

    GetHtml() {
        return this.Object.innerHtml;
    }
    
    SetStyle(key,val) {
        this.Object.style.cssText += key + ":" + val + ";";
    }

    AddClass(clName) {
        this.Object.classList.add(clName);
    }

    RemoveClass(clName) {
        this.Object.classList.remove(clName);
    }

    HasClass(clName) {
        return this.Object.classList.contains(clName);
    }
};

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

    Get(selector) {
        return GElement.FromObject(document.querySelector(selector));
    }

    GetAll(selector) {
        var arr = document.querySelectorAll(selector);
        var tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    Random(min,max) {
        return Math.floor(Math.random() * max) + min;
    }
};

var G = new Gogi();
var GColor = new GColorManager();