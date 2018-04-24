# Custom-select

## Plugin in jQuery that transform a list in a select navigable by mouse and by keyboard.

To use this plugin:

* Insert the file 'javascriptSelectCustom.js' into the project folder.
* Link the file 'javascriptSelectCustom.js' in the page .html.
* In the page .html create a tag `<script>` and write the following lines: 

    ```javascript
    var arraySelect = $('.nameClassSelect');
    arraySelect.pluginCustomSelect();
    ```

All the elements `<ul>` inside of the elements `<div>` will become `<select>`.