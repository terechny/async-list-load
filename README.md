
-------

1. Implement an ES6 storage class (or a "class" based on a constructor function) that can store an array of strings inside. Within the class, implement an init method that fills an array with random strings (at least 500 elements), then waits for 1 second, and then exits. Implement a get method that returns an array of strings.

2. Design a page that contains the main block, no more than 900px wide and with a minimum height of 100% of the page height. The main block should be in the center of the page and contain:
   - a single-line horizontal menu block containing the "First" button, a text input field, the "Go to" button, and the "Last" button. The text input field must be stretched to the entire remaining width of the parent block. When the screen width is reduced, only the width of the input field should change. When the screen width reaches 575px, the menu items should line up in a column instead of a row.
   - a one-column content block where the lines from the storage should be displayed immediately after the init method is called.

3. When clicking on the "Last" button, a vertical scroll must be performed to the last element of the content block in order for the last element to be visible. When you click on the "First" button, a scroll should be performed to the first element of the content block. When entering a number (no validation required) into the text field and clicking on the "Go" button, scrolling should be performed to the element of the content block with an index corresponding to the entered number.

4. Instantiating the store and calling the init method must be done when the page is fully loaded.
5. You can use any third-party libraries, frameworks.
6. It will be a plus if the scroll is smooth.