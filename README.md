# component.selectfx

Some inspiration for styling a custom version of the select element. There are many possibilities and today we are exploring some ideas of how to let the user select a choice in style. 

Inspired by [INSPIRATION FOR CUSTOM SELECT ELEMENTS](http://tympanus.net/codrops/2014/07/10/inspiration-for-custom-select-elements/)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install periodicjs.component.selectfx
```

The selectfx component is a browserified javascript module.

## Usage

*JavaScript*
```javascript
var SelectFX = require('periodicjs.component.selectfx'),
myFXSelect;
//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	var selectElement = document.querySelector('select');
  myFXSelect = new SelectFX(selectElement);
	//expose your component to the window global namespace
	window.myFXSelect = myFXSelect;
});
```

*HTML*
```html
<html>
	<head>
  	<title>Your Page</title>
  	<link rel="stylesheet" type="text/css" href="[path/to]/component.selectfx.css">
  	<script src='[path/to/browserify/bundle].js'></script>
	</head>
	<body>
		<div class="container">
    	<section>
        <select class="cs-select cs-skin-elastic">
          <option value="" disabled selected>Select a Country</option>
          <option value="france" data-class="flag-france">France</option>
          <option value="brazil" data-class="flag-brazil">Brazil</option>
          <option value="argentina" data-class="flag-argentina">Argentina</option>
          <option value="south-africa" data-class="flag-safrica">South Africa</option>
        </select>
      </section>
	</body>
</html>
```

##API

####Full API [DOCUMENTATION](https://github.com/typesettin/component.selectfx/blob/master/doc/api.md)

```javascript
new SelectFX(selectElement, {
  onChange: function(val) {
    console.log('val', val); //callback for value change
  }
});
```
##Development
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt watch
```
$ grunt watch
```

##Notes
* The less file is located in `resources/stylesheets`