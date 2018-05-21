# Groupify (<a href="http://almenshad.com:4444/" target="_blank">Demo</a>) 
##### (NOTE: The demo is often used for live testing, if the server is down, please try again in a few minutes)
[Presentation Slides](https://docs.google.com/presentation/d/1cKuBquG4TE3nPYi-Fv0Z636KcucX01P-X7M6cCBjcbg/edit?usp=sharing)

A web application to help activity organizer divide participants into different teams.

## ScreenShots
#### Application page
![app page](https://cloud.githubusercontent.com/assets/11642176/25405696/ee38118e-29b8-11e7-8b3f-b4f84c71155e.png)

## Dependecies Required to Deploy
* Node.js v6.10.x 
* MongoDB v3.4.x (We are currently using an online MongoDB service `mlab`, you need this dependency unless you want to use your own database)
* [Yarn v0.23.x](https://yarnpkg.com/en/)

## How to Deploy
After you have installed Node.js and MongoDB make sure the `node`, `mongod`, `yarn`, and `npm` are in your `$PATH` environment variable. Then do the following steps.

```bash
# this will clone the 'submission' branch
git clone https://github.com/Vino4/Groupify <path>

# installing all the project dependencies
cd <path>/Groupify
npm install

# make sure mongodb is running
# sudo mongod

# to serve the web page
yarn start
```
It will be availible at 
```
localhost:3000
```

### More infomation
For more information is availible at [Wiki](https://github.com/Vino4/Groupify/wiki)


## Technologies Deployed
* Scaffolding Tool:
	- [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
* Front-End:
	- Control
		- [Reactjs](https://facebook.github.io/react/)
		- [Redux](http://redux.js.org/)
		- [Immutablejs](https://facebook.github.io/immutable-js/)
		- [React Drag and Drop](http://react-dnd.github.io/react-dnd/)
		- [React Sticky Node](https://github.com/yahoo/react-stickynode)
	- View
		- [Material-UI](http://www.material-ui.com/)
		- [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI-React)
		
* Back-End:
	- [Nodejs](https://nodejs.org/en/)
	
* Database:
	- [Mongodb](https://nodejs.org/en/)
	

### Possible Issues
#### Windows
**If you get the error**

```bash
Fatal Error: spawn cmd ENOENT
```
Add `C:\Windows\System32\` to the `PATH` Environment variable

### Credits
#### Prototype (<a href="https://github.com/lightertu/Groupify" target="_blank">Original Repo</a>):
@lightertu Initial Design and Idea. Major work on Activity and Dashboard components. Minor work on API and database. (contributed ~38% of the original code-base)

@kaih1994 Major work on API and database. (contributed ~13% of the original code-base)

@Lebonesco Initial survey moqup. Idea for real-time placement feedback. Development of real-time placement feedback prototype (scraped due to intergration failure). (contributed ~11% of the original code-base)

@vino4 Major work on Survey, Activity and Dashboard components. Major work in component integration. Minor work on API and database. (contributed ~37% of the original code-base)
#### Alpha Release (This Repo):
@vino4 Bug fixes. Maintnance. New Features. Redesigned components. 
