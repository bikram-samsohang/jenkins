const cucumberReportDirectory = 'protractor-report';
const cucumberHtmlReporter = require('cucumber-html-reporter');
const jsonReportFile = `${cucumberReportDirectory}/cucumber_json_report.json`;
const htmlReportFile = `${cucumberReportDirectory}/cucumber_web_report.html`;
const chai = require('chai');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const chaiAsPromised = require('chai-as-promised');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseURL: 'http://localhost:3000/',  
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      './features/**/*.feature'
    ],
    cucumberOpts: {
      format: ['progress-bar', `json:./${jsonReportFile}`],
      require: [
        './step_definitions/**/*.steps.js'
      ]
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        rimraf.sync(cucumberReportDirectory);
        mkdirp.sync(cucumberReportDirectory);
        chai.use(chaiAsPromised);
        browser.ignoreSynchronization = true;
    },
    params: {
        baseURL: 'http://localhost:3000/',
    },
    onCleanUp: async () => {
      const reportOptions = {
        theme: 'bootstrap',
        jsonFile: 'protractor-report',
        output: 'protractor-report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
      };
      cucumberHtmlReporter.generate(reportOptions);
    },
  };