"use strict";
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._sessions = new Array();
        _this._allSessions = new Array();
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._allSessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        var sessions = [
            {
                id: '1',
                title: 'session 1',
                start: '2016-10-03T12:00:00Z',
                end: '2016-10-03T13:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 1 deesc',
                descriptionShort: 'session 1 short desc',
                calendarEventId: '',
                isBreak: false
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-10-04T09:30:00Z',
                end: '2016-10-04T11:45:00Z',
                room: 'room2',
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 2 deesc',
                descriptionShort: 'session 2 short desc',
                calendarEventId: '',
                isBreak: true
            },
            {
                id: '3',
                title: 'session 3',
                start: '2016-10-05T19:20:00Z',
                end: '2016-10-05T21:25:00Z',
                room: 'room3',
                roomInfo: {
                    roomId: 'room3',
                    name: 'myroom3',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 deesc',
                descriptionShort: 'session 3 short desc',
                calendarEventId: '',
                isBreak: true
            },
            {
                id: '4',
                title: 'session 4',
                start: '2016-10-05T19:20:00Z',
                end: '2016-10-05T21:25:00Z',
                room: 'room4',
                roomInfo: {
                    roomId: 'room4',
                    name: 'myroom4',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 4 deesc',
                descriptionShort: 'session 4 short desc',
                calendarEventId: '',
                isBreak: true
            }
        ];
        sessions
            .forEach(function (item) { return _this._allSessions.push(new session_view_model_1.SessionViewModel(item)); });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0MseUVBQXNFO0FBRXRFO0lBQW1DLGlDQUFVO0lBSXpDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTE8sZUFBUyxHQUFtQixJQUFJLEtBQUssRUFBVyxDQUFDO1FBQ2pELGtCQUFZLEdBQTJCLElBQUksS0FBSyxFQUFvQixDQUFDOztJQUk3RSxDQUFDO0lBRUQsc0JBQUksbUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRU0sNEJBQUksR0FBWDtRQUFBLGlCQTZFQztRQTVFRyxJQUFJLFFBQVEsR0FBbUI7WUFDM0I7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNLEVBQUUsT0FBTztvQkFDZixJQUFJLEVBQUUsU0FBUztvQkFDZixHQUFHLEVBQUUsRUFBRTtvQkFDUCxLQUFLLEVBQUUsRUFBRTtpQkFDWjtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLE9BQU87b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLEVBQUU7aUJBQ1o7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUIsZ0JBQWdCLEVBQUUsc0JBQXNCO2dCQUN4QyxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLE1BQU0sRUFBRSxPQUFPO29CQUNmLElBQUksRUFBRSxTQUFTO29CQUNmLEdBQUcsRUFBRSxFQUFFO29CQUNQLEtBQUssRUFBRSxFQUFFO2lCQUNaO2dCQUNELFFBQVEsRUFBRSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLGdCQUFnQixFQUFFLHNCQUFzQjtnQkFDeEMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNLEVBQUUsT0FBTztvQkFDZixJQUFJLEVBQUUsU0FBUztvQkFDZixHQUFHLEVBQUUsRUFBRTtvQkFDUCxLQUFLLEVBQUUsRUFBRTtpQkFDWjtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUE7UUFDRCxRQUFRO2FBQ0gsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTFGRCxDQUFtQyx1QkFBVSxHQTBGNUM7QUExRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTZXNzaW9uVmlld01vZGVsIH0gZnJvbSAnLi4vc2Vzc2lvbi1wYWdlL3Nlc3Npb24tdmlldy1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfc2Vzc2lvbnM6IEFycmF5PFNlc3Npb24+ID0gbmV3IEFycmF5PFNlc3Npb24+KCk7XG4gICAgcHJpdmF0ZSBfYWxsU2Vzc2lvbnM6QXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4gPSBuZXcgQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBzZXNzaW9ucygpOiBBcnJheTxTZXNzaW9uVmlld01vZGVsPntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbFNlc3Npb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB2YXIgc2Vzc2lvbnM6IEFycmF5PFNlc3Npb24+ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDEnLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMjAxNi0xMC0wM1QxMjowMDowMFonLFxuICAgICAgICAgICAgICAgIGVuZDogJzIwMTYtMTAtMDNUMTM6MDA6MDBaJyxcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTEnLFxuICAgICAgICAgICAgICAgIHJvb21JbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogJ3Jvb20xJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTEnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Nlc3Npb24gMSBkZWVzYycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TaG9ydDogJ3Nlc3Npb24gMSBzaG9ydCBkZXNjJyxcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50SWQ6ICcnLFxuICAgICAgICAgICAgICAgIGlzQnJlYWs6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDInLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMjAxNi0xMC0wNFQwOTozMDowMFonLFxuICAgICAgICAgICAgICAgIGVuZDogJzIwMTYtMTAtMDRUMTE6NDU6MDBaJyxcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTInLFxuICAgICAgICAgICAgICAgIHJvb21JbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogJ3Jvb20yJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTInLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Nlc3Npb24gMiBkZWVzYycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TaG9ydDogJ3Nlc3Npb24gMiBzaG9ydCBkZXNjJyxcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50SWQ6ICcnLFxuICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Nlc3Npb24gMycsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICcyMDE2LTEwLTA1VDE5OjIwOjAwWicsXG4gICAgICAgICAgICAgICAgZW5kOiAnMjAxNi0xMC0wNVQyMToyNTowMFonLFxuICAgICAgICAgICAgICAgIHJvb206ICdyb29tMycsXG4gICAgICAgICAgICAgICAgcm9vbUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiAncm9vbTMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbXlyb29tMycsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IFtdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2Vzc2lvbiAzIGRlZXNjJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnc2Vzc2lvbiAzIHNob3J0IGRlc2MnLFxuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRJZDogJycsXG4gICAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnc2Vzc2lvbiA0JyxcbiAgICAgICAgICAgICAgICBzdGFydDogJzIwMTYtMTAtMDVUMTk6MjA6MDBaJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICcyMDE2LTEwLTA1VDIxOjI1OjAwWicsXG4gICAgICAgICAgICAgICAgcm9vbTogJ3Jvb200JyxcbiAgICAgICAgICAgICAgICByb29tSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICByb29tSWQ6ICdyb29tNCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdteXJvb200JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzcGVha2VyczogW10sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzZXNzaW9uIDQgZGVlc2MnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2hvcnQ6ICdzZXNzaW9uIDQgc2hvcnQgZGVzYycsXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiAnJyxcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgc2Vzc2lvbnNcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLl9hbGxTZXNzaW9ucy5wdXNoKG5ldyBTZXNzaW9uVmlld01vZGVsKGl0ZW0pKSk7XG4gICAgfVxufSJdfQ==