## Deployed App 
https://frozen-oasis-40893.herokuapp.com/
# getting setup

** make sure you have a modern version of node installed (I used v12.20.0)
** run 'npm install'
\*\* run 'npm run start'

you should now be able to browse to http://localhost:3000 to access the app. live-reload is enabled so your browser should refresh as you make changes.

# interview rules

1. The purpose of this interview is to give you a real-world task and have you work on it on your own time, similar to how you would work on a project at work.
2. You may google anything you want, but keep the copy/pasting reasonable. Any resource that you would have access to during a work day is fair game.
3. Feel free to refactor any of the code as needed or wanted. Feel free to add more properties to the products objects if needed.
4. When you have finished, delete the 'node_modules' folder and zip up the entire project directory.

# instructions

You have just joined the exciting startup Congo.com. The team has already started the project, but everyone is going on vacation just before a major release so it's up to you to finish it! The big goal for this sprint is to finish implementing all the features in the current UI.

Complete the main features before attempting any bonus features. Code quality is more important than quantity, so it's okay if you don't have time to complete all the tasks. Get as far as you can while writing quality code. Tasks are listed most important to least important. Finish one task completely before moving on to the next one.

You have three main tasks:

1. Implement the shopping cart feature. The team has built the UI, but the data is hard-coded and the controls are not hooked up to anything.

\*\* A user should be able to add an item to their cart by using the 'Add to Cart' link from the product card. Done

\*\* If the item is not in the cart already, 'add to cart' should add the item to the cart with a quantity of 1. Done

\*\* If the item is already in the cart, quantity should be increased by 1. // TODO

\*\* The user should be able to use the minus button (-) to decrease the quantity of an item by 1 per click. Done

\*\* The user should be able to use the plus button (+) to increase the quantity by 1 per click. Done

\*\* The user should should able to manually enter a new number into the text box. The quantity should be changed to that number when the user presses enter or clicks out of the input (your choice, or both). // I think users would have a better experience when they see the changed price in real time rather than updating based on waiting .

2. Implement sorting and filters in the product list. The team has built the UI to show a list of the products from a data array, but the 'sort by' and 'filter by' selectboxes don't work.

\*\* The user can sort by 'Name' and 'Price'. 'Name' should sort in ascending alphabetic order (A-Z, case insensitive). 'Price' should be sorted low-to-high. 'None' should clear the filter and restore the normal view. Done

\*\* The user should be able to filter by category. The category list is currently hard-coded, instead the app should read a list of the categories from the data. 'None' should remain as an option, if selected it should clear the filter and restore the normal view.

3. Implement 'Apply Coupon Code'. 3 coupon codes are listed on the main page.

\*\* The CHEAP-SAVER coupon: If the user has a product with 'Cheap Brand' in the name in their cart, this coupon will take 20% off the most expensive Cheap Brand item. This applies to the full quantity of this item (if they had 3 dishwashers in their cart, the discount would apply to all 3).

\*\* The GAMER-10 coupon: Take 10% off the total of all products in the 'Game' category. Applies to the full quantity of 'Game' items in the cart.

\*\* The DAY-SAVER coupon: Take X% off of the total shopping cart price, where X is equal to the current day of the month. May 1st would be 1% off, April 21st would be 21% off, etc.

\*\* A user can only have one coupon code applied at a time.

\*\* If a user has an active coupon code and tries to apply another coupon they should see some kind of error or message (your choice, anything except for console.log / console.error or equivalent).

\*\* A user should be able to remove their current coupon so they can choose a different one.

4. Optional Extra Credit Features

\*\* BONUS: Add a 'save shopping cart' button. If the user clicks this and resets the page, their previous shopping cart should be loaded.

\*\* BONUS: Add a text input for a user to filter by product description. So if they enter 'A high quality' they should only see products that contain that text in their product description.

\*\* BONUS: Show a 'suggested coupon' to the user underneath the shopping cart, this coupon should be whichever saves the user the LEAST (yes, least) amount of money. If the user clicks on it, apply the coupon.
