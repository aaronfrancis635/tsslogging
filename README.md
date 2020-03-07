# aaronfrancis635/tsslogging

[![GitHub issues](https://img.shields.io/github/issues/aaronfrancis635/tsslogging)](https://github.com/aaronfrancis635/tsslogging/issues)
[![GitHub license](https://img.shields.io/github/license/aaronfrancis635/tsslogging)](https://github.com/aaronfrancis635/tsslogging/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/tsslogging)](https://www.npmjs.com/package/tsslogging)
[![npm bundle size (min)](https://img.shields.io/bundlephobia/min/tsslogging)](https://www.npmjs.com/package/tsslogging)

## Usage
```javascript
const Logger = require("tsslogging");
const log = new Logger();

log.info("Topic", "message");
log.warn("Topic", "message");
log.danger("Topic", "message");
```
