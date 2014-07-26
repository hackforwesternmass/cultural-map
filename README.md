# CultureMap

## Info

* Rails 4.1.0
* Ruby 2.1.2
* PostgreSQL
* AngularJS
* angular-google-maps directives 
* Foundation CSS framework

-- 

## Multi-branding


Ideally we'd get multiple cities to have a single backend but there is a question of who would pay for that server. Therefore this  was written to support multiple brands based on the url of the app. 


# Styling

CSS Styles were developed independently as a static site and those stylings live in the style.scss. Additional styles that were found to be needed when transfering the style to the rails site exist in the application.css.scss for now. 


## AngularJS

Angular was chosen to manage javascript and switch views in and out on the front end. We are calling the back end Rails REST interface via CultureService.js and then using angular views, which are defined in application.html.erb for easy loading, to give us both map and list views of that data with out having to connect to the server again. 




