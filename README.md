# hyperlink.js
A PHP library which gives a new look to hrefs

## Usage
### Step 1
Add the CSS file to your project -
```
<link rel="stylesheet" type="text/css" href="css/hyperstyles.css">
```
### Step 2
Add the HTML default empty `<div>` card layout to your project -
```
<div id="url-card" class="tooltipcard">
    <img id="url-image" src="" class="tooltipcard-image">
    <div class="tooltipcard-body">
        <h5 id="url-title" class="tooltipcard-title"></h5>
        <p id="url-description" class="tooltipcard-text"></p>
    </div>
</div>
```
### Step 3
Add the jQuery and JS files to your project before `</body>` -
```
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="js/hyperscript.js"></script>
```
### Step 4
Add the PHP file to your project and update the url path in `hyperscript.js` on line 7 -
```
url: 'js/hyperscript.php',
```
### Use `<a href="link">` tags and check the hover effect
#### Note: This library is not tested on all web hrefs but works on popular ones like Twitter, YouTube.

## Screenshots
![alt text](https://github.com/surhud004/hyperlink.js/blob/master/Screenshot1.png)
![alt text](https://github.com/surhud004/hyperlink.js/blob/master/Screenshot2.png)
