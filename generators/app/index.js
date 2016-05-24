'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  
  // Prompt user
  promptUser: function() {
    var done = this.async();

    // Have Yeoman greet the user
    this.log(yosay('Evolution Tool Box'));

    var prompts = [
      {
        type: 'input',
        name: 'addProjectAuthor',
        message: 'What is your full name?',
        store: true
      },
      {
        type: 'input',
        name: 'addProjectName',
        message: 'What is the name of your project?',
        store: true
      },
      {
        type: 'input',
        name: 'addProjectDescription',
        message: 'Add a short project description.',
        store: true
      },
      {
        type: 'input',
        name: 'addProjectCreationDate',
        message: 'What is today\'s date? (example: January 1, 2016)',
        store: true
      },
      {
        type: 'input',
        name: 'addProjectURL',
        message: 'Where will this project be hosted? (URL)',
        store: true
      },
      {
        type: 'list',
        name: 'addProductSuite',
        message: 'Please select a product suite:',
        choices : ['Core']
        // choices : ['Core', 'Benefits Portals']
      },
      {
        when: function(props) { return (/core/i).test(props.addProductSuite); },
        type: 'input',
        name: 'addPrimaryColor',
        message: 'What is the primary color of your project? (color palette: https://evolution.mercer.com/pattern-library/color-palette.html)',
        default: '$sapphire-dark'
      }
    ];

    this.prompt(prompts, function (props) {

      this.addProjectAuthor = props.addProjectAuthor;
      var siteProjectAuthor = props.addProjectAuthor;

      this.addProjectName = props.addProjectName;
      var siteProjectName = props.addProjectName;

      this.addProjectDescription = props.addProjectDescription;
      var siteProjectDescription = props.addProjectDescription;

      this.addProjectCreationDate = props.addProjectCreationDate;
      var siteProjectCreationDate = props.addProjectCreationDate;

      this.addProjectURL = props.addProjectURL;
      var siteProjectURL = props.addProjectURL;

      this.addPrimaryColor = props.addPrimaryColor;
      var sitePrimaryColor = props.addPrimaryColor;

      this.addProductSuite = props.addProductSuite;
      var productSuite = props.addProductSuite;

      done();

      this.fs.copyTpl(
        this.templatePath('src/data/global.json'),
        this.destinationPath('src/data/global.json'),
        {
          projectName: siteProjectName,
          projectDescription: siteProjectDescription
        }
      );

      if (productSuite == 'Core') {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          {
            projectAuthor: siteProjectAuthor,
            projectName: siteProjectName,
            projectDescription: siteProjectDescription,
            projectCreationDate: siteProjectCreationDate,
            projectURL: siteProjectURL,
            productSuiteType: 'core'
          } 
        );
        this.fs.copy(
          this.templatePath('src/assets/scss/core/_foundation_settings.scss'),
          this.destinationPath('src/assets/scss/core/_foundation_settings.scss')
        );
        this.fs.copyTpl(
          this.templatePath('src/assets/scss/core/_global.scss'),
          this.destinationPath('src/assets/scss/core/_global.scss'),
          {
            primaryColor: sitePrimaryColor
          }
        );
        this.fs.copy(
          this.templatePath('src/assets/scss/core/_settings.scss'),
          this.destinationPath('src/assets/scss/core/_settings.scss')
        );
        this.fs.copyTpl(
          this.templatePath('src/patterns/organisms/'),
          this.destinationPath('src/patterns/organisms/'),
          {
            productSuiteType: 'core'
          }
        );
      } else if (productSuite == 'Benefits Portals') {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          {
            projectAuthor: siteProjectAuthor,
            projectName: siteProjectName,
            projectDescription: siteProjectDescription,
            projectCreationDate: siteProjectCreationDate,
            projectURL: siteProjectURL,
            productSuiteType: 'bp'
          }
        );
        this.fs.copy(
          this.templatePath('src/assets/scss/bp/_foundation_settings.scss'),
          this.destinationPath('src/assets/scss/core/_foundation_settings.scss')
        );
        this.fs.copy(
          this.templatePath('src/assets/scss/bp/_global.scss'),
          this.destinationPath('src/assets/scss/core/_global.scss')
        );
        this.fs.copy(
          this.templatePath('src/assets/scss/bp/_settings.scss'),
          this.destinationPath('src/assets/scss/core/_settings.scss')
        );
        this.fs.copyTpl(
          this.templatePath('src/patterns/organisms/'),
          this.destinationPath('src/patterns/organisms/'),
          {
            productSuiteType: 'bp'
          }
        );
      }

    }.bind(this));
  },

  // Copy application and project files
  writing: {

    projectfiles: function () {

      console.log('Copying the project files...');

      // Assets (fonts, images, js, scss)
      this.fs.copy(
        this.templatePath('src/assets/fonts'),
        this.destinationPath('src/assets/fonts/')
      );
      this.fs.copy(
        this.templatePath('src/assets/images/'),
        this.destinationPath('src/assets/images/')
      );
      this.fs.copy(
        this.templatePath('src/assets/js/'),
        this.destinationPath('src/assets/js/')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/app'),
        this.destinationPath('src/assets/scss/app')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/core/atoms'),
        this.destinationPath('src/assets/scss/core/atoms')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/core/global'),
        this.destinationPath('src/assets/scss/core/global')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/core/molecules'),
        this.destinationPath('src/assets/scss/core/molecules')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/app.scss'),
        this.destinationPath('src/assets/scss/app.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/evolution-animations.scss'),
        this.destinationPath('src/assets/scss/evolution-animations.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/evolution.scss'),
        this.destinationPath('src/assets/scss/evolution.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/scss/ie.scss'),
        this.destinationPath('src/assets/scss/ie.scss')
      );
      
      // Content (markdown)
      this.fs.copy(
        this.templatePath('src/content/'),
        this.destinationPath('src/content/')
      );

      // Design files
      this.fs.copy(
        this.templatePath('src/design/'),
        this.destinationPath('src/design/')
      );

      // Handlebars helpers
      this.fs.copy(
        this.templatePath('src/helpers/'),
        this.destinationPath('src/helpers/')
      );

      // Patterns
      this.fs.copy(
        this.templatePath('src/patterns/atoms/'),
        this.destinationPath('src/patterns/atoms/')
      );
      this.fs.copy(
        this.templatePath('src/patterns/molecules/'),
        this.destinationPath('src/patterns/molecules/')
      );

      // Snippets (sublime)
      this.fs.copy(
        this.templatePath('src/snippets/'),
        this.destinationPath('src/snippets/')
      );

      // Views (layouts, page templates, partials, templates)
      this.fs.copy(
        this.templatePath('src/views/'),
        this.destinationPath('src/views/')
      );

      // Babel
      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
      );

      // FTP
      this.fs.copy(
        this.templatePath('.ftppass'),
        this.destinationPath('.ftppass')
      );

      // Bower
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );

      // Grunt
      this.fs.copy(
        this.templatePath('Gruntfile.tpl.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('grunt/'),
        this.destinationPath('grunt/')
      );

      // Change log (markdown)
      this.fs.copy(
        this.templatePath('CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );

      // Read me (markdown)
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
    }
  },

  // Install dependencies
  install: function () {

    console.log('Installing the dependencies...');
    
    this.installDependencies();
  }
  
});
