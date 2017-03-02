"use strict";
var fakeDataServiceModule = require("./fake-data-service");
var SessionService = (function () {
    function SessionService() {
        this._useHttpService = false;
    }
    SessionService.prototype.loadSessions = function () {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp();
        }
        else {
            return this.loadSessionsViaFaker();
        }
    };
    SessionService.prototype.loadSessionsViaHttp = function () {
        return new Promise(function () { });
    };
    SessionService.prototype.loadSessionsViaFaker = function () {
        return new Promise(function (resolve, reject) {
            var speakers = fakeDataServiceModule.generateSpeakers();
            var rooms = fakeDataServiceModule.generateRoomInfos();
            var sessions = fakeDataServiceModule.generateSessions(speakers, rooms);
            resolve(sessions);
        });
    };
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbmQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25kLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJEQUE2RDtBQUU3RDtJQUFBO1FBQ1ksb0JBQWUsR0FBVyxLQUFLLENBQUM7SUF1QjVDLENBQUM7SUFyQlUscUNBQVksR0FBbkI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUEsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFLLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBSyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLGNBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLDZDQUFvQixHQUE1QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksUUFBUSxHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEQsSUFBSSxLQUFLLEdBQUcscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFFBQVEsR0FBUSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0UsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZha2VEYXRhU2VydmljZU1vZHVsZSBmcm9tICcuL2Zha2UtZGF0YS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNle1xuICAgIHByaXZhdGUgX3VzZUh0dHBTZXJ2aWNlOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBsb2FkU2Vzc2lvbnM8VD4oKTogUHJvbWlzZTxUPntcbiAgICAgICAgaWYodGhpcy5fdXNlSHR0cFNlcnZpY2Upe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZFNlc3Npb25zVmlhSHR0cDxUPigpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRTZXNzaW9uc1ZpYUZha2VyPFQ+KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTZXNzaW9uc1ZpYUh0dHA8VD4oKTogUHJvbWlzZTxUPntcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KCgpPT4ge30pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNlc3Npb25zVmlhRmFrZXI8VD4oKTogUHJvbWlzZTxUPntcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBzcGVha2VycyA9IGZha2VEYXRhU2VydmljZU1vZHVsZS5nZW5lcmF0ZVNwZWFrZXJzKCk7XG4gICAgICAgICAgICBsZXQgcm9vbXMgPSBmYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVSb29tSW5mb3MoKTtcbiAgICAgICAgICAgIGxldCBzZXNzaW9ucyA9IDxhbnk+ZmFrZURhdGFTZXJ2aWNlTW9kdWxlLmdlbmVyYXRlU2Vzc2lvbnMoc3BlYWtlcnMscm9vbXMpO1xuXG4gICAgICAgICAgICByZXNvbHZlKHNlc3Npb25zKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19