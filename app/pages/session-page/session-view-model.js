"use strict";
var observable_1 = require("data/observable");
var SessionViewModel = (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        _this._favorite = false;
        if (source) {
            _this._session = source;
        }
        return _this;
    }
    Object.defineProperty(SessionViewModel.prototype, "id", {
        get: function () {
            return this._session.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "calendarEventId", {
        get: function () {
            return this._session.calendarEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "description", {
        get: function () {
            return this._session.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "descriptionShort", {
        get: function () {
            if (this.description.length > 160) {
                return this.description.substr(0, 160) + '...';
            }
            return this.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "end", {
        get: function () {
            return this._session.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "isBreak", {
        get: function () {
            return this._session.isBreak;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "room", {
        get: function () {
            if (this._session.room) {
                return this._session.room;
            }
            if (this._session.roomInfo) {
                return this._session.roomInfo.name;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "roomInfo", {
        get: function () {
            return this._session.roomInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "speakers", {
        get: function () {
            return this._session.speakers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "start", {
        get: function () {
            return this._session.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "title", {
        get: function () {
            return this._session.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "favorite", {
        get: function () {
            return this._favorite;
        },
        set: function (value) {
            if (this._favorite !== value) {
                this._favorite = value;
                this.notify({
                    object: this,
                    eventName: observable_1.Observable.propertyChangeEvent,
                    propertyName: 'favorite',
                    value: this._favorite
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SessionViewModel.prototype.toggleFavorite = function () {
        this.favorite = !this.favorite;
    };
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFHN0M7SUFBc0Msb0NBQVU7SUFJNUMsMEJBQVksTUFBZ0I7UUFBNUIsWUFDSSxpQkFBTyxTQUlWO1FBUE8sZUFBUyxHQUFZLEtBQUssQ0FBQztRQUkvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQzs7SUFDTCxDQUFDO0lBRUQsc0JBQUksZ0NBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDhDQUFnQjthQUFwQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25ELENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0NBQUk7YUFBUjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdkMsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxzQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG1DQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFhLEtBQWM7WUFFdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FDUDtvQkFDSSxNQUFNLEVBQUUsSUFBSTtvQkFDWixTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUI7b0JBQ3pDLFlBQVksRUFBRSxVQUFVO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3hCLENBQUMsQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDOzs7T0FiQTtJQWVNLHlDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXpFRCxDQUFzQyx1QkFBVSxHQXlFL0M7QUF6RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTZXNzaW9uLCBTcGVha2VyLCBSb29tSW5mbyB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgU2Vzc2lvbiB7XG4gICAgcHJpdmF0ZSBfc2Vzc2lvbjogU2Vzc2lvbjtcbiAgICBwcml2YXRlIF9mYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogU2Vzc2lvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uID0gc291cmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlkO1xuICAgIH1cbiAgICBnZXQgY2FsZW5kYXJFdmVudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmNhbGVuZGFyRXZlbnRJZDtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb25TaG9ydCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPiAxNjApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cigwLCAxNjApICsgJy4uLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBlbmQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uZW5kO1xuICAgIH1cbiAgICBnZXQgaXNCcmVhaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uaXNCcmVhaztcbiAgICB9XG4gICAgZ2V0IHJvb20oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb24ucm9vbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbi5yb29tSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm8ubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IHJvb21JbmZvKCk6IFJvb21JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm87XG4gICAgfVxuICAgIGdldCBzcGVha2VycygpOiBTcGVha2VyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5zcGVha2VycztcbiAgICB9XG4gICAgZ2V0IHN0YXJ0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnN0YXJ0O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24udGl0bGU7XG4gICAgfVxuICAgIGdldCBmYXZvcml0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhdm9yaXRlO1xuICAgIH1cbiAgICBzZXQgZmF2b3JpdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2Zhdm9yaXRlICE9PSB2YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLl9mYXZvcml0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsIFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiAnZmF2b3JpdGUnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZmF2b3JpdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVGYXZvcml0ZSgpe1xuICAgICAgICB0aGlzLmZhdm9yaXRlID0gIXRoaXMuZmF2b3JpdGU7XG4gICAgfVxufSJdfQ==