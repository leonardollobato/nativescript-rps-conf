"use strict";
var fakeDataServiceModule = require("./fake-data-service");
var SessionsService = (function () {
    function SessionsService() {
        this._useHttpService = false;
    }
    SessionsService.prototype.loadSessions = function () {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp();
        }
        else {
            return this.loadSessionsViaFaker();
        }
    };
    SessionsService.prototype.loadSessionsViaHttp = function () {
        return new Promise(function () { });
    };
    SessionsService.prototype.loadSessionsViaFaker = function () {
        return new Promise(function (resolve, reject) {
            var speakers = fakeDataServiceModule.generateSpeakers();
            var rooms = fakeDataServiceModule.generateRoomInfos();
            var sessions = fakeDataServiceModule.generateSessions(speakers, rooms);
            resolve(sessions);
        });
    };
    return SessionsService;
}());
exports.SessionsService = SessionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25zLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJEQUE2RDtBQUU3RDtJQUFBO1FBQ1ksb0JBQWUsR0FBVyxLQUFLLENBQUM7SUF1QjVDLENBQUM7SUFyQlUsc0NBQVksR0FBbkI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUEsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFLLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBSyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNkNBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLGNBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLDhDQUFvQixHQUE1QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksUUFBUSxHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEQsSUFBSSxLQUFLLEdBQUcscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFFBQVEsR0FBUSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0UsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZha2VEYXRhU2VydmljZU1vZHVsZSBmcm9tICcuL2Zha2UtZGF0YS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25zU2VydmljZXtcbiAgICBwcml2YXRlIF91c2VIdHRwU2VydmljZTpib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbG9hZFNlc3Npb25zPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIGlmKHRoaXMuX3VzZUh0dHBTZXJ2aWNlKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRTZXNzaW9uc1ZpYUh0dHA8VD4oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFGYWtlcjxUPigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU2Vzc2lvbnNWaWFIdHRwPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigoKT0+IHt9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTZXNzaW9uc1ZpYUZha2VyPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3BlYWtlcnMgPSBmYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVTcGVha2VycygpO1xuICAgICAgICAgICAgbGV0IHJvb21zID0gZmFrZURhdGFTZXJ2aWNlTW9kdWxlLmdlbmVyYXRlUm9vbUluZm9zKCk7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbnMgPSA8YW55PmZha2VEYXRhU2VydmljZU1vZHVsZS5nZW5lcmF0ZVNlc3Npb25zKHNwZWFrZXJzLHJvb21zKTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzZXNzaW9ucyk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==