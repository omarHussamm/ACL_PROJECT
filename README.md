CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Modules used
 * Work load

INTRODUCTION
------------

This is a flight booking web site to help people travel around the world.
 
REQUIREMENTS
------------
The website is developed to have adminstrator, user , guest user
Admin is implemented to be able to create a flight providing it with all the details such as: from, to, departure date, arrival date, price, seats available and flight model. Admin has the ability to delete any flight from the database. Admin slso has the ability to update any flight with any of the stated information. Admin can also list all the flights in the database. And finally admin can search through the flights.
User module was implemented and he has the ability to sign up first have a username and password and he must provide the website with all the important traveller information such as first name, last name, passport number, email, telephone number, country and address. After signing up he has the ability to search across all the available flights and book a flight from all the available flights and choose a returning flight to the chosen flight also has the ability to choose how many seats he wants to reserve, and it's class. After choosing all of that the website shows a summary of the booking and he has the option to confirm the booking and a confirmation mail is sent once the payment is completed. The user has the ability to edit his profile and change his password later. He also is able to see all his bookings and cancel any of them at anytime or just edit the flight either by choosing another seats or choosing a completly another flight.
The website allows guests to search for flights without signing up or the need to have an account but signing up is required to book a flight.


INSTALLATION
------------
 
npm install to install packages needed to run the website
npm i nodemailer
npm run dev to start the website


MODULES USED
------------
Axios
NodeMailer
Stripes


WORK LOAD
---------
Ahmed Yasser: List all flights, update flight ,search flights, make a reservation , view reservations , cancel reservation backend

Omar Elersh: Login, create flight , edit profile, change password, sending mails , payment, accesstoken and authentication backend

Youssef Nabawy: Delete flight populate db and requirements 18-23 backend

Omar Hussam: Front end and rest of backend



