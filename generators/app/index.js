'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    this.log(yosay('Evolution Tool Box'));

    var prompts = [
      {
        type: 'input',
        name: 'addProjectAuthor',
        message: 'What is your full name?'
      },
      {
        type: 'input',
        name: 'addProjectName',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'addPrimaryColor',
        message: 'What is the primary color of your project?',
        default: '$onyx-dark-70'
      },
      {
        type: 'list',
        name: 'addProductSuite',
        message: 'Please select a product suite:',
        choices : ['Core', 'Benefits Portals']
      }
    ];

    this.prompt(prompts, function (props) {

      this.addProjectAuthor = props.addProjectAuthor;
      var siteProjectAuthor = props.addProjectAuthor;

      this.addProjectName = props.addProjectName;
      var siteProjectName = props.addProjectName;

      this.addPrimaryColor = props.addPrimaryColor;
      var sitePrimaryColor = props.addPrimaryColor;

      this.addProductSuite = props.addProductSuite;
      var productSuite = props.addProductSuite;

      done();

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          projectAuthor: siteProjectAuthor,
          projectName: siteProjectName
        }
      );

      if (productSuite == 'Core') {
        this.fs.copyTpl(
          this.templatePath('src/assets/css/core/global/_variables_overrides.scss'),
          this.destinationPath('src/assets/css/core/global/_variables_overrides.scss'),
          { primaryColor: sitePrimaryColor }
        );
      } else if (productSuite == 'Benefits Portals') {
        this.fs.copy(
          this.templatePath('src/assets/css/bp/core/global/_variables_overrides.scss'),
          this.destinationPath('src/assets/css/core/global/_variables_overrides.scss')
        );
      }

    }.bind(this));
  },

  writing: {

    app: function () {
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {

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
        this.templatePath('src/assets/docs'),
        this.destinationPath('src/assets/docs/')
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
        this.templatePath('src/data/'),
        this.destinationPath('src/data/')
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
        this.templatePath('src/patterns/'),
        this.destinationPath('src/patterns/')
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
    }
  },

  install: function () {
    this.installDependencies();
  }
  
});

