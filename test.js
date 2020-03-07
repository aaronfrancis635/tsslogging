const Logger = require(`.`);
const log = new Logger();

log.info("Network", "Connected to Dummy Network")
log.warn("Network", "Dummy Network restrictions in place")
log.danger("Network", "Connection error to dummy network")