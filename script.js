var NylonApp = function(name,parentID){
    var mainObject = this;

    var newElement = document.createElement("div");

    newElement.classList.add("NylonApp");
    newElement.id = "NylonApp"+name;

    parentID == undefined ? document.body.appendChild(newElement) : document.querySelector("#"+parentID).appendChild(newElement);

    var returnedElement = Object.assign({},NylonStandard);
    returnedElement.element = newElement;
    return returnedElement;
}

var NylonStandard = {
    element:document.body,
    new:function(type){
        var newElement;
        if(type == "button"){
            newElement = document.createElement("button");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "box"){
            newElement = document.createElement("div");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "text"){
            newElement = document.createElement("p");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "link"){
            newElement = document.createElement("a");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "image"){
            newElement = document.createElement("img");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else{
            newElement = document.createElement(type);
            this.element.appendChild(newElement);
            
            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }
    },
    attribute:function(type,name,value){
        if(type == "add"){
            type = "set";
        }
        if(name == "text"){
            return value == undefined ? this.element.innerText : this.element.innerText = value;
        }else if(name == "textContent"){
var NylonApp = function(name,parentID){
    var mainObject = this;

    var newElement = document.createElement("div");

    newElement.classList.add("NylonApp");
    newElement.id = "NylonApp"+name;

    parentID == undefined ? document.body.appendChild(newElement) : document.querySelector("#"+parentID).appendChild(newElement);

    var returnedElement = Object.assign({},NylonStandard);
    returnedElement.element = newElement;
    return returnedElement;
}

var NylonStandard = {
    element:document.body,
    new:function(type){
        var newElement;
        if(type == "button"){
            newElement = document.createElement("button");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "box"){
            newElement = document.createElement("div");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "text"){
            newElement = document.createElement("p");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "link"){
            newElement = document.createElement("a");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else if(type == "image"){
            newElement = document.createElement("img");
            this.element.appendChild(newElement);

            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }else{
            newElement = document.createElement(type);
            this.element.appendChild(newElement);
            
            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = newElement;
            return returnedElement;
        }
    },
    attribute:function(type,name,value){
        if(type == "add"){
            type = "set";
        }
        if(name == "text"){
            return value == undefined ? this.element.innerText : this.element.innerText = value;
        }else if(name == "textContent"){
            return value == undefined ? this.element.textContent : this.element.textContent = value;
        }else if(name == "html"){
            return value == undefined ? this.element.innerHTML : this.element.innerHTML = value;
        }else if(name == "allHtml"){
            return value == undefined ? this.element.outerHTML : this.element.outerHTML = value;
        }else if(name == "textEditable"){
            return value == undefined ? this.element.contentEditable : this.element.contentEditable = value;
        }else if(name == "tag"){
            var newElementAttributes = {
                names:[],values:[],
            }
            for(i = 0;i < this.element.attributes.length;i++){
                newElementAttributes.names.push(this.element.attributes[i].nodeName);
                newElementAttributes.values.push(this.element.attributes[i].nodeValue);
            }
            var newElement = document.createElement(value);
            for(i = 0;i < newElementAttributes.names.length;i++){
                newElement.setAttribute(newElementAttributes.names[i],newElementAttributes.values[i]);
            }
            newElement.innerHTML = this.element.innerHTML;
            this.element.parentNode.appendChild(newElement);
            this.element.parentNode.removeChild(this.element);
            this.element = newElement;

        }else{
            value == undefined ? this.element[type+"Attribute"](name) : this.element[type+"Attribute"](name,value);
        }
    },
    event:function(type,name,code){
        if(type == "add" || type == "set"){
            this.element.addEventListener(name,code);
        }else if(type == "remove" || type == "delete"){
            this.element.removeEventListener(name,code);
        }
    },
    delete:function(){
        this.element.parentNode.removeChild(this.element);
        this.element = "deleted";
    },
    parent:function(){
        var returnedElement = Object.assign({},NylonStandard);
        returnedElement.element = this.element.parentNode;
        return returnedElement;
    },
    childs:function(){
        var returnedElements = [];
        for(var i = 0;i < this.element.childNodes.length;i++){
            var returnedElement = Object.assign({},NylonStandard);
            returnedElement.element = this.element.childNodes[i];
            returnedElements.push(returnedElement);
        }
        return returnedElements;
    },
}
