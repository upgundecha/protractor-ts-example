"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
class CustomProcessor extends jasmine_spec_reporter_1.DisplayProcessor {
    displayJasmineStarted(info, log) {
        return `TypeScript ${log}`;
    }
}
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    customProcessors: [CustomProcessor],
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlY3MvaGVscGVycy9yZXBvcnRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBcUU7QUFJckUscUJBQXNCLFNBQVEsd0NBQWdCO0lBQ25DLHFCQUFxQixDQUFDLElBQWUsRUFBRSxHQUFXO1FBQ3JELE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQUVELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNsQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksb0NBQVksQ0FBQztJQUMxQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztDQUN0QyxDQUFDLENBQUMsQ0FBQyJ9