const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber/", // path gerado ao executar o cypress run
  reportPath: "cypress/reports/multiple-cucumber-html-report/", // path de saído do report gerado pelo multiple-cucumber-html-reporter

  displayDuration: true,
  displayReportTime: true,

  metadata: {
    browser: {
      name: "firefox",
      version: 1.0,
    },
    device: "Local test machine",
    platform: {
      name: "linux",
    },
    reportName: "GD Report",
  },
});
