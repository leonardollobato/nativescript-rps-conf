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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBNkQ7QUFFN0Q7SUFBQTtRQUNZLG9CQUFlLEdBQVcsS0FBSyxDQUFDO0lBdUI1QyxDQUFDO0lBckJVLHFDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBSyxDQUFDO1FBQ3pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUssQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRDQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBSSxjQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyw2Q0FBb0IsR0FBNUI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hELElBQUksS0FBSyxHQUFHLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEQsSUFBSSxRQUFRLEdBQVEscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmYWtlRGF0YVNlcnZpY2VNb2R1bGUgZnJvbSAnLi9mYWtlLWRhdGEtc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZXtcbiAgICBwcml2YXRlIF91c2VIdHRwU2VydmljZTpib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbG9hZFNlc3Npb25zPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIGlmKHRoaXMuX3VzZUh0dHBTZXJ2aWNlKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRTZXNzaW9uc1ZpYUh0dHA8VD4oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFGYWtlcjxUPigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU2Vzc2lvbnNWaWFIdHRwPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigoKT0+IHt9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTZXNzaW9uc1ZpYUZha2VyPFQ+KCk6IFByb21pc2U8VD57XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3BlYWtlcnMgPSBmYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVTcGVha2VycygpO1xuICAgICAgICAgICAgbGV0IHJvb21zID0gZmFrZURhdGFTZXJ2aWNlTW9kdWxlLmdlbmVyYXRlUm9vbUluZm9zKCk7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbnMgPSA8YW55PmZha2VEYXRhU2VydmljZU1vZHVsZS5nZW5lcmF0ZVNlc3Npb25zKHNwZWFrZXJzLHJvb21zKTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzZXNzaW9ucyk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==