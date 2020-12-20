# Component Library
Here you will find all my components made in React.

## Login/Register Modal
This modal will work to sign up the user, validating the data from the server: In the case of password I will need to convert the introduced password into md5 chain. In the register face, I convert the password into md5 chain-characters. 
There are options like register with Google or Login with Google, as extra I want to add a confirmation email once the user is register.

### Backlog
- Connect to an API (Google or Facebook to Log in or sing up).
- Verification email when register.
- Remember password if it's lost.
- Ask keep me log in when register, when login -> save that login in Local Storage.
### Issues
- Login when all data is introduced correctly, errors is undefined so it validates but dosen't push.
 if it's undefined I want it to validate and in case of being okay send data
- Register when it is clicked with or without errors it dosen't return nothing, it waits for the next click
to Post or show the alert

#### Packages
- Axios -> To make petitions in a simple way.
- md5 -> To convert the password into a encrypt password.
- universal cookie -> To store all session variables.

#### Bibliography
- To make titles inside the code:
http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Register
