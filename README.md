# Living-Real
A Realty Management Tool
Grey Whittenberger, Cameron Wills, Seth Uschuk, Owais Islam, Richard Ay
(January 2021)


## Table of Contents
* [Application Walk Through](#application-walk-through)
* [The Various Readme.md files for this project](#the-various-readme.md-files-for-this-project)
* [Application Mind Maps](#application-mind-maps)
* [Technologies Used](#technologies-used)
* [Deployment Link](#deployment-link)
* [Application Screen Shot](#application-screen-shot)

## Application Walk Through

There are different ways to utilize this application, depending on what kind of user is active.  

For a 'first-time' visitor, who could be a potential tenant, usage would start with a review of the images for the available properties.  The images are presented in a carousel to take maximum advantage of the available screen space.  When a particular property is of interest, the visitor can click on the image to obtain specific details of that property.  This detail view also includes a carousel of more detailed photos of the property.  The visitor can then submit an application (to the property owner), with the application fee, for consideration as a tenant.

For tenants, the landing page has a login feature which should be used.  Once logged in to the site, the tenant is taken to an information page which displays details of their particular property.  The tenant page also allows the review of the lease agreement and has payment options for rent and miscellaneous fees. An additional control on the tenant page permits the submission of a maintenance request (to the owner).

For owners, the landing page has a login feature which should be used.  Once logged in to the site, the owner can select a particular property to view/manipulate.  For a given property, the owner can view not only the details the tenant can view, but also private owner data (such as mortgage and tax information).  Owners can also view the maintenance requests from the property tenant.

## The Various Readme.md files for this project

1) Overview: [overview-readme.md](./documentation/overview-readme.md)

2) Owner:  [owner-readme.md](./documentation/owner-readme.md) 

3) Tenant: [tenant-readme.md](./documentation/tenant-readme.md)

4) Applicant: [applicant-readme.md](./documentation/applicant-readme.md)


## Application Mind Maps

1) Website users map - this map shows the overall capabilities of the various user types.  (Note, these mind-maps are interactive, clicking on controls will expand/collapse the map.)
[Property Users](./documentation/property-users.html)


## Technologies Used

* GraphQL
* Apollo Server
* JWT (JSON Web Token)
* NodeJS, Express.JS
* MongoDB
* Redux
* React
* Stripe
* Semantic UI


## Deployment Link
The deployment link on Heroku is: https://living-real.herokuapp.com   
[Heroku](https://living-real.herokuapp.com/) 


## Application Screen Shot

![Landing Page](./assets/images/landing-page.jpg) Image of the site landing page.
