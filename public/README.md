The Den Resturant CapStone Project 

 Background: I decided to make a website for The Den because it's my family restaurant in North Carolina, and since I'm not there, I wanted to create a website that would contribute to and highlight the business.

 There are four pages within this website that are client-side. The first one is home; the home page consists of a navbar, an image, and two cards. The navbar links to the different pages. The image is a picture of the restaurant; one of the cards has the restaurant hours, and the other has the contact information for the business.



 The second page is the menu page, which includes a navbar and cards. The card includes an image, name, price, and a button that connects to the order page. For these cards, I inputted the data into MongoDB, and that's how they are shown on the cards. For the cards, I also looped through the data length on ejs and ejected the data from MongoDB. There is also CRUD implemented into the menu, but it can be accessed through an admin route that is not accessible to customers. With the CRUD (update), the price can be changed. 



 The third page is the order page which includes a navbar and a card with an image. The image is a picture of the menu and the card includes a form that customers can fill out according to their choice of drink, meat, side, or dessert. When that form is submitted it redirects to a thank you page and the customer receives an email confirmation for this email I used Mailjet and implemented it into my js file. There is also CRUD ( Delete) included on this page but it is also on an admin page that is not accessible to the customer. From that admin page, you can delete the order after it is completed. 

 The fourth and final, page is an about me page that includes a navbar, card, and image. The image is the location of the restaurant on Google Maps and within the card, it is a short paragraph about the restaurant.