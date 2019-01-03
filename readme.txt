Author: Prabuddha Kumar

There are three subfolders in this directory.

'Website-Code'
Requirement: Apache Server
The folder inside 'Website Code' is responsible for hosting the website. This should placed inside the root directory of the apache folder.
The URL for accessing would be of the format "http://localhost/Proj"


'Local-Code'
Requirement: NodeJs and NPM
The folder inside 'Local-Code' runs the surver hosting the user data
npm install
npm start

'Extension'
Requirement: Google Chrome
Go to 'chrome://extensions/' on the google chrome web browser and select 'Load-unpacked'. Browse inside this folder and select the subfolder titled 'extension'
Enable the extensions

*******Environment Dependent Variables**********

Certain variables are dependent on the environment of execution.

To match the values, edit the following sections of the code:

'Extention':

From the 'Extension' directory, go to ./extension/manifest.json

Update the URL inside content_scripts/matches to the URL of the node server
Go to ./extension/index_js.js
Update the URL in line 29 to the URL of the node server
Update the URL in line 158 to the URL of the node server
Update the URL in line 197 to the URL of the node server
Update the URL in line 230 to the URL of the node server


For any other queries or clarifications, please contact me at prabkumar@cs.stonybrook.edu


Some code extended from https://github.com/hayjay/node-api



