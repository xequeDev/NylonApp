# NylonApp
A simple library for handle HTML elements with JS

## Get the library
var app = new NylonApp("appName","parentID (optional)");

## Create a element
```
var button = app.new("button");
//["button","box","text","link","image","HTMLTag"]
```

## Add a attribute to element
```
button.attribute("set","text","BUTTON");
//["add" or "set","get","remove"]
//["text","textContent","textEditable","html","allHtml","tag","HTMLAttribute"]
```

## Add a event to element
```
button.event("add","click",AFunction());
//["add" or "set","delete" or "remove"]
//["HTMLEvents"]
//["JSFunction"]
```

## Get parent of element
```
button.parent();
```

## Get childs of element
```
button.childs();
```

## Delete the element
```
button.delete();
```
