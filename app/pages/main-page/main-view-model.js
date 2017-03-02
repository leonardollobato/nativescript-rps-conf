"use strict";
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var sessions_service_1 = require("../../services/sessions-service");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._allSessions = new Array();
        _this._sessionService = new sessions_service_1.SessionsService();
        _this.set('isLoading', true);
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        this._sessionService.loadSessions()
            .then(function (result) {
            _this.pushSessions(result);
            _this.onDataLoaded();
        });
    };
    MainViewModel.prototype.pushSessions = function (sessionsFromService) {
        for (var i = 0; i < sessionsFromService.length; i++) {
            var newSession = new session_view_model_1.SessionViewModel(sessionsFromService[i]);
            this._allSessions.push(newSession);
        }
    };
    MainViewModel.prototype.onDataLoaded = function () {
        this.set('isLoading', false);
        this.filter();
    };
    MainViewModel.prototype.filter = function () {
        this._sessions = this._allSessions;
        this.notify({
            object: this,
            eventName: observable_1.Observable.propertyChangeEvent,
            propertyName: "sessions",
            value: this._sessions
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0MseUVBQXNFO0FBQ3RFLG9FQUFrRTtBQUVsRTtJQUFtQyxpQ0FBVTtJQU16QztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVJPLGtCQUFZLEdBQTRCLElBQUksS0FBSyxFQUFvQixDQUFDO1FBTTFFLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDN0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7SUFFRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSw0QkFBSSxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBa0I7YUFDbEQsSUFBSSxDQUFDLFVBQUMsTUFBcUI7WUFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsbUJBQW1DO1FBQ3BELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLDhCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNSLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLHVCQUFVLENBQUMsbUJBQW1CO1lBQ3pDLFlBQVksRUFBRSxVQUFVO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBN0NELENBQW1DLHVCQUFVLEdBNkM1QztBQTdDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2Vzc2lvblZpZXdNb2RlbCB9IGZyb20gJy4uL3Nlc3Npb24tcGFnZS9zZXNzaW9uLXZpZXctbW9kZWwnOyBcbmltcG9ydCB7IFNlc3Npb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Nlc3Npb25zLXNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfYWxsU2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+ID0gbmV3IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+KCk7XG4gICAgcHJpdmF0ZSBfc2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+O1xuICAgIHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBTZXNzaW9uc1NlcnZpY2U7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlID0gbmV3IFNlc3Npb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNldCgnaXNMb2FkaW5nJywgdHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGdldCBzZXNzaW9ucygpOiBBcnJheTxTZXNzaW9uVmlld01vZGVsPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucztcbiAgICB9IFxuICAgIFxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uU2VydmljZS5sb2FkU2Vzc2lvbnM8QXJyYXk8U2Vzc2lvbj4+KClcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogQXJyYXk8U2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXNoU2Vzc2lvbnMocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMub25EYXRhTG9hZGVkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFNlc3Npb25zKHNlc3Npb25zRnJvbVNlcnZpY2U6IEFycmF5PFNlc3Npb24+KXtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlc3Npb25zRnJvbVNlcnZpY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIG5ld1Nlc3Npb24gPSBuZXcgU2Vzc2lvblZpZXdNb2RlbChzZXNzaW9uc0Zyb21TZXJ2aWNlW2ldKTtcbiAgICAgICAgICAgIHRoaXMuX2FsbFNlc3Npb25zLnB1c2gobmV3U2Vzc2lvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGF0YUxvYWRlZCgpe1xuICAgICAgICB0aGlzLnNldCgnaXNMb2FkaW5nJywgZmFsc2UpO1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKCl7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25zID0gdGhpcy5fYWxsU2Vzc2lvbnM7XG4gICAgICAgIHRoaXMubm90aWZ5KHtcbiAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBcInNlc3Npb25zXCIsIFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX3Nlc3Npb25zXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=