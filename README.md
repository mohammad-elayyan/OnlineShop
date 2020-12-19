# OnlineShop
 Online Tshirts shop
 Use the below urls in Postman
 
 
 1. Post => http://localhost:3000/tshirt
        (To add new Tshirt)
        {
         "brand":"String",
         "price":"Number",
         "numberOfAvailableItems":"Number"
        }
        
 2. Post => http://localhost:3000/category
        (To add new category)
        {
         "name":"String"
         }
        
 3. Get => http://localhost:3000/tshirt
        (To show all Tshirts with category name)
        
 4. Get => http://localhost:3000/category
        (To show all categories)
        
 5. put => http://localhost:3000/category/tshirt/add
        (To add Tshirt for category)
        {
         "tshirtId":"",
         "categoryId":""
         }
        
 6. put => http://localhost:3000/order/tshirt
        (To add order Tshirt)
        {
         "tshirtId":"",
         "phone":""
         }