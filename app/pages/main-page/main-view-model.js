"use strict";
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._tempSessions = new Array();
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
        var sessionArray = [
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
                description: 'session 1 desc',
                descriptionShort: 'session 1 short desc',
                calendarEventId: '',
                isBreak: false
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-10-03T13:00:00Z',
                end: '2016-10-03T14:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 2 desc',
                descriptionShort: 'session 2 short desc',
                calendarEventId: '',
                isBreak: true
            },
            {
                id: '3',
                title: 'session 3',
                start: '2016-10-03T14:00:00Z',
                end: '2016-10-03T15:00:00Z',
                room: 'room2',
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 desc',
                descriptionShort: 'session 3 short desc',
                calendarEventId: '',
                isBreak: false
            }
        ];
        for (var i = 0; i < sessionArray.length; i++) {
            //this._tempSessions.push(sessionArray[i]);
            this._allSessions.push(new session_view_model_1.SessionViewModel(sessionArray[i]));
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0MseUVBQXNFO0FBRXRFO0lBQW1DLGlDQUFVO0lBSXpDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTE8sbUJBQWEsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUNyRCxrQkFBWSxHQUE0QixJQUFJLEtBQUssRUFBb0IsQ0FBQzs7SUFJOUUsQ0FBQztJQUVELHNCQUFJLG1DQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVNLDRCQUFJLEdBQVg7UUFDSSxJQUFJLFlBQVksR0FBbUI7WUFDL0I7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNLEVBQUUsT0FBTztvQkFDZixJQUFJLEVBQUUsU0FBUztvQkFDZixHQUFHLEVBQUUsRUFBRTtvQkFDUCxLQUFLLEVBQUUsRUFBRTtpQkFDWjtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsS0FBSzthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLE9BQU87b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLEVBQUU7aUJBQ1o7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsZ0JBQWdCLEVBQUUsc0JBQXNCO2dCQUN4QyxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLElBQUk7YUFDaEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLE1BQU0sRUFBRSxPQUFPO29CQUNmLElBQUksRUFBRSxTQUFTO29CQUNmLEdBQUcsRUFBRSxFQUFFO29CQUNQLEtBQUssRUFBRSxFQUFFO2lCQUNaO2dCQUNELFFBQVEsRUFBRSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxnQkFBZ0I7Z0JBQzdCLGdCQUFnQixFQUFFLHNCQUFzQjtnQkFDeEMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1NBQ0osQ0FBQztRQUVGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUEzRUQsQ0FBbUMsdUJBQVUsR0EyRTVDO0FBM0VZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBTZXNzaW9uVmlld01vZGVsIH0gZnJvbSAnLi4vc2Vzc2lvbi1wYWdlL3Nlc3Npb24tdmlldy1tb2RlbCc7IFxuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3RlbXBTZXNzaW9uczogQXJyYXk8U2Vzc2lvbj4gPSBuZXcgQXJyYXk8U2Vzc2lvbj4oKTtcbiAgICBwcml2YXRlIF9hbGxTZXNzaW9uczogQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4gPSBuZXcgQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNlc3Npb25zKCk6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbFNlc3Npb25zO1xuICAgIH0gXG4gICAgXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHZhciBzZXNzaW9uQXJyYXk6IEFycmF5PFNlc3Npb24+ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDEnLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMjAxNi0xMC0wM1QxMjowMDowMFonLFxuICAgICAgICAgICAgICAgIGVuZDogJzIwMTYtMTAtMDNUMTM6MDA6MDBaJyxcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTEnLFxuICAgICAgICAgICAgICAgIHJvb21JbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogJ3Jvb20xJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTEnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Nlc3Npb24gMSBkZXNjJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnc2Vzc2lvbiAxIHNob3J0IGRlc2MnLFxuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRJZDogJycsXG4gICAgICAgICAgICAgICAgaXNCcmVhazogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Nlc3Npb24gMicsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICcyMDE2LTEwLTAzVDEzOjAwOjAwWicsXG4gICAgICAgICAgICAgICAgZW5kOiAnMjAxNi0xMC0wM1QxNDowMDowMFonLFxuICAgICAgICAgICAgICAgIHJvb206ICdyb29tMScsXG4gICAgICAgICAgICAgICAgcm9vbUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiAncm9vbTEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbXlyb29tMScsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IFtdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2Vzc2lvbiAyIGRlc2MnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2hvcnQ6ICdzZXNzaW9uIDIgc2hvcnQgZGVzYycsXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiAnJyxcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnMycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDMnLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAnMjAxNi0xMC0wM1QxNDowMDowMFonLFxuICAgICAgICAgICAgICAgIGVuZDogJzIwMTYtMTAtMDNUMTU6MDA6MDBaJyxcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTInLFxuICAgICAgICAgICAgICAgIHJvb21JbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogJ3Jvb20yJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTInLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Nlc3Npb24gMyBkZXNjJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnc2Vzc2lvbiAzIHNob3J0IGRlc2MnLFxuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRJZDogJycsXG4gICAgICAgICAgICAgICAgaXNCcmVhazogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2Vzc2lvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL3RoaXMuX3RlbXBTZXNzaW9ucy5wdXNoKHNlc3Npb25BcnJheVtpXSk7XG4gICAgICAgICAgICB0aGlzLl9hbGxTZXNzaW9ucy5wdXNoKG5ldyBTZXNzaW9uVmlld01vZGVsKHNlc3Npb25BcnJheVtpXSkpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==