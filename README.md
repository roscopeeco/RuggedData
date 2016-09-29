# RuggedData
Weather API Test

Installing
==========
Install the files on node.

Running
=======
The json package includes lite-server which will automatically run the example in your browser under localhost
when you enter the command npm start.


Knockout
========
Knockout has been used as the data binding library for the test.

Bootstrap
=========
The Bootstrap CSS framework has been used to enable easy implementation of responsive functionality, 
provide a layou framework and base styling.

Skycon
======
The Skycon icon generator has been inclued to display the 

Functionality
=============

A weather component has been created which is passed latlong, postcode and refreshFrequency parameters.

The Weather API is called immediately and then repeatedly thereafter based upon the refreshFrequency (in minutes) 
parameters setting.

While the API is called a loading spinner is displayed.

The 'currently' information is displayed when the response is recieved.
