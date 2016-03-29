# generator-evolution 
<!--[![Build Status](https://secure.travis-ci.org/uxuimercergroup/generator-evolution.png?branch=master)](https://travis-ci.org/uxuimercergroup/generator-evolution) -->

> [Yeoman](http://yeoman.io) generator

## What is the Evolution Tool Box?

The Evolution Tool Box is a collection of development technologies assembled in one spot so you can begin using the Evolution framework and Evolution web components in minutes!

The Evolution Tool Box will:

- Set up a development environment that will allow you to view changes live in your browser with automatic refresh.
- Scaffold the directory structure of your site, including all asset and template directories.
- Optimize your files for production and allow you to FTP the files with one command.

The Evolution Tool Box utilizes the following technologies:

- Node.js (npm) Runtime Environment
- Yo Scaffolding Generator
- Grunt.js Task Runner
- Handlebars.js Templating Engine
- Sass CSS Preprocessor

**NOTE: Please refer to the [Evolution Tool Box wiki](https://github.com/uxuimercergroup/evolution/wiki/Evolution-Tool-Box) for the latest dependency versions that are in use by the Evolution Tool Box development enviroment.**

Follow improvements, updates, and fixes to the Evolution Tool Box (generator-evolution) on the official [Github repository](https://github.com/uxuimercergroup/generator-evolution).

*Have you found any issues or bugs with the Evolution Tool Box?* Please log them on the [Evolution Tool Box issues](https://github.com/uxuimercergroup/generator-evolution/issues) page.

## Prerequisites

The Evolution Tool Box is installed on your system using the [generator-evolution](https://github.com/uxuimercergroup/generator-evolution) Yeoman generator, which is a Node.js module. Node.js and Node Package Manager (npm) must be installed globally on your system before you can install the Evolution Tool Box generator. The Evolution Tool Box generator is then installed globally as well, so that you can continue to use it to set up the Evolution Tool Box in any directory on your system without needing to install the Evolution Tool Box generator again.

1. Install Node.js globally. NOTE: Node Package Manager (http://npmjs.org) will be installed globally when you install Node.js.
	- Go to: http://nodejs.org
	- Download the current version of Node.js. *Use the Mature and Dependable version*
	- Install Node.js on your system.
2. Use Node Package Manager (npm) to install the Evolution Tool Box generator globally. The Yo scaffolding tool will also be installed at this time.
	- Open the command line interface (cli) or terminal (for Mac users)
	- Copy and paste this command into the cli/terminal: `npm login` 
		- NOTE: If you have not already been assigned a username and password for the private Evolution npm registry, please contact Douglas Fraize at [douglas.fraize@mercer.com](mailto:douglas.fraize@mercer.com).
	- Copy and paste this command into the cli/terminal: `npm install -g yo generator-evolution`

## Installing the Evolution Tool Box

Now that the Evolution Tool Box generator is installed on your system, you can install the Evolution Tool Box into your current working directory.

1. Using the cli/terminal, change directory (cd) to the directory where you will be working or current working directory
2. Copy and paste this command into the cli/terminal: `yo evolution`
3. The Evolution Tool Box generator will run in the cli/terminal and prompt you with the following questions so that you can customize the Evolution Tool Box to your project.
	- *What is your full name?*
	- *What is the name of your project?*
	- *Add a short project description.*
	- *What is today's date? (example: January 1, 2016)*
	- *Where will this project be hosted? (URL)*
	- *Please select a product suite:*
		- Core (Get a default boilerplate utilizing the Evolution framework to build your project.)
		- Benefits Portals (Get a boilerplate utilizing the Evolution framework customized for Benefits Portals.)
	- *What is the primary color of your project?* (Only asked if *Core* product suite is selected - default is $onyx-dark-70 - accepts Sass variable from color palette or hex-color formatted like so: #000000)
4. The Evolution Tool Box generator will now install all required files and dependencies into the current working directory.
5. Please ignore any warnings when `yo evolution` is run.

## Updating the Evolution Tool Box

To ensure the Evolution Tool Box generator (generator-evolution) and the Evolution Tool Box installed in your current working directory are both current versions, run the following updates.
- Update all global npm packages *before* installing the Evolution Tool Box into your project's directory (including yo and generator-evolution):
	- Copy and paste this command into the cli/terminal: `npm update -g`
- Update only the npm packages located inside the project directory where the Evolution Tool Box has already been installed:
	1. Using the cli/terminal, change directory (cd) to the project directory.
	2. Copy and paste this command into the cli/terminal: `npm update`
	3. All build tools located within the current working directory are now current versions.

## Installing Node Dependencies

There may be a case when multiple developers are working on a project where you do not have the Node.js dependencies for a project because those dependencies are not checked into source control. All Node.js dependencies are installed locally in a *node_modules* directory. If you are missing the *node_modules* directory from your project and the grunt tasks do not work follow these instructions:

1. Using the cli/terminal, change directory (cd) to the current working directory
2. Copy and paste this command into the cli/terminal: `npm install`
3. Project dependencies should then be retrieved from npm and installed.
4. Proceed to use build tools like `grunt`.

## Using the Build Tools

Now that the Evolution Tool Box has been installed in your current working directory, it is time to run the tasks that will build the static web site, launch a local web server and enable automatic browser refresh - all so you can see changes while you work.

1. Using the cli/terminal, make sure that you are still in the current working directory.
2. Copy and paste this command into the cli/terminal: `grunt`
3. When all tasks are complete, a window will open in your default browser displaying the index.html page. Any changes made to the templates or assets will trigger the automatic browser refresh. To close the server, press Ctrl-c.

## Other Tools

The Evolution Tool Box includes several other tasks to streamline the web development process.

### Production
Generate production UI code for hand-off

- While still in the current working directory, copy and paste this command into the cli/terminal: `grunt prod`
- The *dist* directory in the current working directory now contains production ready code (static HTML, minified CSS, minified JS, and optimized images).

### Deploy
FTP the final production UI code to a secure FTP server

- Setup:
	1. Using your text editor, open the *grunt* directory in the root of the current working directory. Open the *sftp-deploy.js* file.
	2. Edit the *sftp-deploy.js* `host` option under `auth` to set the FTP server host name.
	3. Edit the *sftp-deploy.js* `dest` option to set the destination path where the production files will get uploaded on the FTP server.
	4. Open the *.ftppass* file in your text editor or cli (may be easier in a text editor that displays hidden files but you can also run `ls -al` in the cli/terminal to see hidden files and edit right in the cli using a built-in text editor).
	5. Edit *.ftpass* file and enter the correct username/password credentials for the FTP server being used for deployment. **IMPORTANT: Make sure to ignore the .ftppass file in your source control repository settings so that the login information for the FTP server does not get checked into the project and exposed to others.**
- Deployment
	1. While still in the current working directory, copy and paste this command into the cli/terminal: `grunt deploy`
	2. The deploy task runs `grunt prod` and then deploys the files to the FTP server location.
	3. Check the server URL in a browser to make sure your deployment was successful and correct.

## License

MIT