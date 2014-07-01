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


Ideally we'd get multiple cities to have a single backend but there is a question of who would pay for that server. Therefore this software was written to support multiple brands with just  a "site" environment variable. 

Colors are set for the whole app in the _dynamic.css.erb file and  assets  are named with that site name in upper case. For instance, /assets/marker_AMHERST.png, will be the map marker for the Amherst site. The variable is passed into javascript via application.html.erb and accessed through window.cmconfig.site. 

# Styling

CSS Styles were developed independently as a static site and those stylings live in the style.scss. Additional styles that were found to be needed when transfering the style to the rails site exist in the application.css.scss for now. 


## AngularJS

Angular was chosen to manage javascript and switch views in and out on the front end. We are calling the back end Rails REST interface via CultureService.js and then using angular views, which are defined in application.html.erb for easy loading, to give us both map and list views of that data with out having to connect to the server again. 




