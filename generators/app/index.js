'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    this.log(yosay('Welcome to the amazing ' + chalk.red('Evolution 3.0.1 boilerplate') + ' generator!'));

    var prompts = [{
        name: 'appName',
        message: 'What is your app\'s name ?'
    },{
        type: 'list',
        name: 'addProductFamily',
        message: 'Please select a Product Family:',
        choices : ['Standard Boilerplate', 'Communication Sites', 'Employee Portals' ]
    }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;
        this.addProductFamily = props.addProductFamily;
        
        var productFamily = props.addProductFamily;
        var siteTitle = props.appName;
        
        done();

        if ( productFamily == 'Standard Boilerplate') {
            this.fs.copy(
              this.templatePath('assets/css/core/global/_variables_overrides.scss'),
              this.destinationPath('assets/css/core/global/_variables_overrides.scss')
            );
            this.fs.copy(
              this.templatePath('assets/scripts/'),
              this.destinationPath('assets/scripts/')
            );
            this.fs.copy(
              this.templatePath('assets/images/'),
              this.destinationPath('assets/images/')
            );
            this.fs.copy(
              this.templatePath('templates/'),
              this.destinationPath('templates/')
            );
            this.fs.copy(
              this.templatePath('templates/includes/'),
              this.destinationPath('templates/includes/')
            );
            this.fs.copyTpl(
              this.templatePath('templates/layouts/layout.html'),
              this.destinationPath('templates/layouts/layout.html'),
              { title: siteTitle }
            );
          } else if (productFamily == 'Communication Sites') {
            this.fs.copy(
              this.templatePath('assets/css/comm/core/global/_variables_overrides.scss'),
              this.destinationPath('assets/css/core/global/_variables_overrides.scss')
            );
            this.fs.copy(
              this.templatePath('assets/scripts/'),
              this.destinationPath('assets/scripts/')
            );
            this.fs.copy(
              this.templatePath('assets/images/'),
              this.destinationPath('assets/images/')
            );
            this.fs.copy(
              this.templatePath('templates/'),
              this.destinationPath('templates/')
            );
            this.fs.copy(
              this.templatePath('templates/includes/'),
              this.destinationPath('templates/includes/')
            );
            this.fs.copyTpl(
              this.templatePath('templates/layouts/layout.html'),
              this.destinationPath('templates/layouts/layout.html'),
              { title: siteTitle }
            );

          } else if (productFamily == 'Employee Portals') {
              this.fs.copy(
                this.templatePath('assets/css/ee/core/global/_variables_overrides.scss'),
                this.destinationPath('assets/css/core/global/_variables_overrides.scss')
              );
              this.fs.copy(
                this.templatePath('assets/scripts/'),
                this.destinationPath('assets/scripts/')
              );
              this.fs.copy(
                this.templatePath('assets/images/'),
                this.destinationPath('assets/images/')
              );
              this.fs.copy(
                this.templatePath('templates/'),
                this.destinationPath('templates/')
              );
              this.fs.copy(
                this.templatePath('templates/includes/'),
                this.destinationPath('templates/includes/')
              );
              this.fs.copyTpl(
                this.templatePath('templates/layouts/layout.html'),
                this.destinationPath('templates/layouts/layout.html'),
                { title: siteTitle }
              );
            }

    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.tpl.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('.ftppass'),
        this.destinationPath('.ftppass')
      );
      this.fs.copy(
        this.templatePath('favicon.ico'),
        this.destinationPath('favicon.ico')
      );
      this.fs.copy(
        this.templatePath('design/'),
        this.destinationPath('design/')
      );
      this.fs.copy(
        this.templatePath('assets/fonts'),
        this.destinationPath('assets/fonts/')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/_core.scss'),
        this.destinationPath('assets/css/core/_core.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/_settings.scss'),
        this.destinationPath('assets/css/core/_settings.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/_ui_core.scss'),
        this.destinationPath('assets/css/core/_ui_core.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/_ui_settings.scss'),
        this.destinationPath('assets/css/core/_ui_settings.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/evolution.scss'),
        this.destinationPath('assets/css/evolution.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/evolution_ui.scss'),
        this.destinationPath('assets/css/evolution_ui.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/ie.scss'),
        this.destinationPath('assets/css/ie.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/styles.scss'),
        this.destinationPath('assets/css/styles.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/base'),
        this.destinationPath('assets/css/core/base')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/foundation'),
        this.destinationPath('assets/css/core/foundation')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/objects'),
        this.destinationPath('assets/css/core/objects')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/global/_color_variables.scss'),
        this.destinationPath('assets/css/core/global/_color_variables.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/global/_functions.scss'),
        this.destinationPath('assets/css/core/global/_functions.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/global/_mixins.scss'),
        this.destinationPath('assets/css/core/global/_mixins.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/core/global/_variables.scss'),
        this.destinationPath('assets/css/core/global/_variables.scss')
      );
      this.fs.copy(
        this.templatePath('assets/css/partials'),
        this.destinationPath('assets/css/partials')
      );
      this.fs.copy(
        this.templatePath('models/'),
        this.destinationPath('models/')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});

