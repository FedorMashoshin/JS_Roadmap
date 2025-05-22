// Define the mixin type
type TimestampMixin = {
    created(): string;
};

// Define the mixin object
const timestampMixin: TimestampMixin = {
    created() {
        return new Date().toISOString();
    }
};

// Define the Logger class
class Logger {
    log(message: string): void {
        console.log(`[${(this as any).created()}] ${message}`);
    }
}

// Apply the mixin using Object.assign
Object.assign(Logger.prototype, timestampMixin);

// Create and use the logger
const logger = new Logger();
logger.log("System started");
// [2025-05-14T18:20:00.123Z] System started
