"use strict";

// container for html-elements
class GElement {
    Object;

    constructor() {
        this.Object = null;
    }

    static FromObject(obj) {
        let tmp = new GElement();
        tmp.Object = obj;
        return tmp;
    }

    static FromObjects(objArr) {
        let buff = [];
        for (let obj in objArr) {
            let tmp = new GElement();
            tmp.Object = obj;
            buff.push(tmp);
        }
        return buff;
    }

    // selectors etc

    Get(selector) {
        return GElement.FromObject(this.Object.querySelector(selector));
    }

    GetByName(name) {
        return GElement.FromObject(this.Object.getElementsByName(name)[0]);
    }

    GetAllByName(name) {
        let arr = [];
        this.Object.getElementsByName(name).forEach(x => {
            arr.push(GElement.FromObject(x));
        });
        return arr;
    }

    GetAll(selector) {
        let arr = this.Object.querySelectorAll(selector == null ? "*" : selector);
        let tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    // parent and child methods

    GetIndexByParent() {
        let parent = this.Object.parentElement;
        let index = 0;
        for (let child in parent.children) {
            if (child === this.Object) 
                return index;
            index++;
        }
        return -1;
    }

    GetParent() {
        return GElement.FromObject(this.Object.parentElement);
    }

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

    SetId(id) {
        this.Object.id = id;
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


    // TODO: need fix
    AddEvent(event, callback) {
        this.Object.addEventListener(event, callback, false);
    }

    RemoveEvent(event, callback) {
        this.Object.removeEventListener(event, callback, false);
    }

    // debug

    Log() {
        console.log(this.Object);
    }
};

// IO class

class GIO {
    constructor() {
        
    }

    GetCursosLocation() {
        return new {
            x: e.pageX,
            y: e.pageY
        };
    }
}

// math class
class GMathLib {
    DEG2RAD = Math.PI / 180;

    constructor() {
        
    }

    DistanceBetween(x1,y1,x2,y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;
        return dx*dx+dy*dy;
    }

    PolarProjection(x,y,dist,angle) {
        let x2 = x + dist * Math.cos(angle * this.DEG2RAD);
        let y2 = y + dist * Math.sin(angle * this.DEG2RAD);
        return new { x: x2, y: y2 };
    }

    Random(min,max) {
        return Math.floor(Math.random() * max) + min;
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
    Wnidow = new {
        ScrollTo(x,y) {
            window.scrollTo(x,y);
        },

        ScrollBy(x,y) {
            window.scrollBy(x,y);
        },

        Navigate(url) {
            window.location.href = url;
        }
    };

    constructor() {
        
    }

    // fast selectors

    Get(selector) {
        return GElement.FromObject(document.querySelector(selector));
    }

    GetAll(selector) {
        let arr = document.querySelectorAll(selector == null ? "*" : selector);
        let tmp = [];
        for (let index = 0; index < arr.length; index++) {
            tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }

    GetByName(name) {
        return GElement.FromObject(document.getElementsByName(name)[0]);
    }
   
    GetAllByName(name) {
        let arr = [];
        document.getElementsByName(name).forEach(x => {
            arr.push(GElement.FromObject(x));
        });
        return arr;
    }

    GetTopElements() {
        let arr = document.querySelectorAll("body > *");
        let tmp = [];
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].tagName != "SCRIPT")
                tmp.push(GElement.FromObject(arr[index]));
        }
        return tmp;
    }
};

// init global variables
var G = new Gogi();
var GIo = new GIO();
var GMath = new GMathLib;
var GColor = new GColorManager();