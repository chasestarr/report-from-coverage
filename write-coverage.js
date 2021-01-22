const fs = require('fs');
const libCoverage = require('istanbul-lib-coverage');
const libReport = require('istanbul-lib-report');
const reports = require('istanbul-reports');

const coverageMapRaw = JSON.parse(fs.readFileSync(process.argv[2]));
const coverageMap = libCoverage.createCoverageMap(coverageMapRaw);
const context = libReport.createContext({
  dir: 'coverage',
  defaultSummarizer: 'nested',
  watermarks: {
    statements: [50, 80],
    functions: [50, 80],
    branches: [50, 80],
    lines: [50, 80],
  },
  coverageMap,
});
const report = reports.create('html', {});
report.execute(context);
