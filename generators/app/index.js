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
        choices : ['Core', 'Benefits Portals']
      },
      {
        when: function(props) { return (/core/i).test(props.addProductSuite); },
        type: 'input',
        name: 'addPrimaryColor',
        message: 'What is the primary color of your project?',
        default: '$onyx-dark-70'
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
        this.fs.copyTpl(
          this.templatePath('src/assets/css/core/global/_variables_overrides.scss'),
          this.destinationPath('src/assets/css/core/global/_variables_overrides.scss'),
          { primaryColor: sitePrimaryColor }
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
          this.templatePath('src/assets/css/bp/core/global/_variables_overrides.scss'),
          this.destinationPath('src/assets/css/core/global/_variables_overrides.scss')
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

      this.fs.copy(
        this.templatePath('src/assets/css/core/atoms'),
        this.destinationPath('src/assets/css/core/atoms')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/foundation'),
        this.destinationPath('src/assets/css/core/foundation')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/global/_color_variables.scss'),
        this.destinationPath('src/assets/css/core/global/_color_variables.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/global/_functions.scss'),
        this.destinationPath('src/assets/css/core/global/_functions.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/global/_mixins.scss'),
        this.destinationPath('src/assets/css/core/global/_mixins.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/global/_variables.scss'),
        this.destinationPath('src/assets/css/core/global/_variables.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/lib'),
        this.destinationPath('src/assets/css/core/lib')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/molecules'),
        this.destinationPath('src/assets/css/core/molecules')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/_core.scss'),
        this.destinationPath('src/assets/css/core/_core.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/_settings.scss'),
        this.destinationPath('src/assets/css/core/_settings.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/_ui_core.scss'),
        this.destinationPath('src/assets/css/core/_ui_core.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/core/_ui_settings.scss'),
        this.destinationPath('src/assets/css/core/_ui_settings.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/partials'),
        this.destinationPath('src/assets/css/partials')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/evolution.scss'),
        this.destinationPath('src/assets/css/evolution.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/evolution_ui.scss'),
        this.destinationPath('src/assets/css/evolution_ui.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/ie.scss'),
        this.destinationPath('src/assets/css/ie.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/css/styles.scss'),
        this.destinationPath('src/assets/css/styles.scss')
      );
      this.fs.copy(
        this.templatePath('src/assets/fonts'),
        this.destinationPath('src/assets/fonts/')
      );
      this.fs.copy(
        this.templatePath('src/assets/images/'),
        this.destinationPath('src/assets/images/')
      );
      this.fs.copy(
        this.templatePath('src/assets/scripts/'),
        this.destinationPath('src/assets/scripts/')
      );
      this.fs.copy(
        this.templatePath('src/content/'),
        this.destinationPath('src/content/')
      );
      this.fs.copy(
        this.templatePath('src/design/'),
        this.destinationPath('src/design/')
      );
      this.fs.copy(
        this.templatePath('src/helpers/'),
        this.destinationPath('src/helpers/')
      );
      this.fs.copy(
        this.templatePath('src/patterns/atoms/'),
        this.destinationPath('src/patterns/atoms/')
      );
      this.fs.copy(
        this.templatePath('src/patterns/molecules/'),
        this.destinationPath('src/patterns/molecules/')
      );
      this.fs.copy(
        this.templatePath('src/snippets/'),
        this.destinationPath('src/snippets/')
      );
      this.fs.copy(
        this.templatePath('src/views/'),
        this.destinationPath('src/views/')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('.ftppass'),
        this.destinationPath('.ftppass')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.tpl.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('grunt/'),
        this.destinationPath('grunt/')
      );
      this.fs.copy(
        this.templatePath('CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );
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

