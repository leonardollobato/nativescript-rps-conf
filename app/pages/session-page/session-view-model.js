"use strict";
var observable_1 = require("data/observable");
// import * as favoritesServiceModule from '../../services/favorites-service';
var SessionViewModel = (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this._session = source;
            _this._startDt = _this.fixDate(new Date(source.start));
            _this._endDt = _this.fixDate(new Date(source.end));
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
    Object.defineProperty(SessionViewModel.prototype, "title", {
        get: function () {
            return this._session.title;
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
    Object.defineProperty(SessionViewModel.prototype, "start", {
        get: function () {
            return this._session.start;
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
    Object.defineProperty(SessionViewModel.prototype, "startDt", {
        get: function () {
            return this._startDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "endDt", {
        get: function () {
            return this._endDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "range", {
        get: function () {
            var startMinutes = this.startDt.getMinutes() + '';
            var endMinutes = this.endDt.getMinutes() + '';
            var startAM = this.startDt.getHours() < 12 ? 'am' : 'pm';
            var endAM = this.endDt.getHours() < 12 ? 'am' : 'pm';
            var startHours = (this.startDt.getHours() <= 12 ? this.startDt.getHours() : this.startDt.getHours() - 12) + '';
            var endHours = (this.endDt.getHours() <= 12 ? this.endDt.getHours() : this.endDt.getHours() - 12) + '';
            return (startHours.length === 1 ? '0' + startHours : startHours) + ':' + (startMinutes.length === 1 ? '0' + startMinutes : startMinutes) + startAM +
                ' - ' + (endHours.length === 1 ? '0' + endHours : endHours) + ':' + (endMinutes.length === 1 ? '0' + endMinutes : endMinutes) + endAM;
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
    Object.defineProperty(SessionViewModel.prototype, "isBreak", {
        get: function () {
            return this._session.isBreak;
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
            else {
                return this.description;
            }
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
    Object.defineProperty(SessionViewModel.prototype, "favorite", {
        get: function () {
            return this._favorite;
        },
        set: function (value) {
            if (this._favorite !== value && !this._session.isBreak) {
                this._favorite = value;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: 'favorite', value: this._favorite });
            }
        },
        enumerable: true,
        configurable: true
    });
    SessionViewModel.prototype.toggleFavorite = function () {
        this.favorite = !this.favorite;
        // if (this.favorite) {
        //     favoritesServiceModule.addToFavourites(this);
        // }
        // else {
        //     favoritesServiceModule.removeFromFavourites(this);
        // }
    };
    SessionViewModel.prototype.fixDate = function (date) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    };
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0MsOEVBQThFO0FBRTlFO0lBQXNDLG9DQUFVO0lBTTVDLDBCQUFZLE1BQWdCO1FBQTVCLFlBQ0ksaUJBQU8sU0FPVjtRQUxHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7O0lBQ0wsQ0FBQztJQUVELHNCQUFJLGdDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0NBQUk7YUFBUjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJ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SSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsSixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBMUdELENBQXNDLHVCQUFVLEdBMEcvQztBQTFHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFNlc3Npb24sIFNwZWFrZXIsIFJvb21JbmZvIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuLy8gaW1wb3J0ICogYXMgZmF2b3JpdGVzU2VydmljZU1vZHVsZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYXZvcml0ZXMtc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSBpbXBsZW1lbnRzIFNlc3Npb24ge1xuICAgIHByaXZhdGUgX3Nlc3Npb246IFNlc3Npb247XG4gICAgcHJpdmF0ZSBfZmF2b3JpdGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfc3RhcnREdDogRGF0ZTtcbiAgICBwcml2YXRlIF9lbmREdDogRGF0ZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBTZXNzaW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uID0gc291cmNlO1xuICAgICAgICAgICAgdGhpcy5fc3RhcnREdCA9IHRoaXMuZml4RGF0ZShuZXcgRGF0ZShzb3VyY2Uuc3RhcnQpKTtcbiAgICAgICAgICAgIHRoaXMuX2VuZER0ID0gdGhpcy5maXhEYXRlKG5ldyBEYXRlKHNvdXJjZS5lbmQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uaWQ7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi50aXRsZTtcbiAgICB9XG4gICAgZ2V0IHJvb20oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb24ucm9vbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbi5yb29tSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm8ubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IHJvb21JbmZvKCk6IFJvb21JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm87XG4gICAgfVxuICAgIGdldCBzdGFydCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5zdGFydDtcbiAgICB9XG5cbiAgICBnZXQgZW5kKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmVuZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHN0YXJ0RHQoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydER0O1xuICAgIH1cblxuICAgIGdldCBlbmREdCgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZER0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHN0YXJ0TWludXRlcyA9IHRoaXMuc3RhcnREdC5nZXRNaW51dGVzKCkgKyAnJztcbiAgICAgICAgdmFyIGVuZE1pbnV0ZXMgPSB0aGlzLmVuZER0LmdldE1pbnV0ZXMoKSArICcnO1xuICAgICAgICB2YXIgc3RhcnRBTSA9IHRoaXMuc3RhcnREdC5nZXRIb3VycygpIDwgMTIgPyAnYW0nIDogJ3BtJztcbiAgICAgICAgdmFyIGVuZEFNID0gdGhpcy5lbmREdC5nZXRIb3VycygpIDwgMTIgPyAnYW0nIDogJ3BtJztcblxuICAgICAgICB2YXIgc3RhcnRIb3VycyA9ICh0aGlzLnN0YXJ0RHQuZ2V0SG91cnMoKSA8PSAxMiA/IHRoaXMuc3RhcnREdC5nZXRIb3VycygpIDogdGhpcy5zdGFydER0LmdldEhvdXJzKCkgLSAxMikgKyAnJztcbiAgICAgICAgdmFyIGVuZEhvdXJzID0gKHRoaXMuZW5kRHQuZ2V0SG91cnMoKSA8PSAxMiA/IHRoaXMuZW5kRHQuZ2V0SG91cnMoKSA6IHRoaXMuZW5kRHQuZ2V0SG91cnMoKSAtIDEyKSArICcnO1xuXG4gICAgICAgIHJldHVybiAoc3RhcnRIb3Vycy5sZW5ndGggPT09IDEgPyAnMCcgKyBzdGFydEhvdXJzIDogc3RhcnRIb3VycykgKyAnOicgKyAoc3RhcnRNaW51dGVzLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0YXJ0TWludXRlcyA6IHN0YXJ0TWludXRlcykgKyBzdGFydEFNICtcbiAgICAgICAgICAgICcgLSAnICsgKGVuZEhvdXJzLmxlbmd0aCA9PT0gMSA/ICcwJyArIGVuZEhvdXJzIDogZW5kSG91cnMpICsgJzonICsgKGVuZE1pbnV0ZXMubGVuZ3RoID09PSAxID8gJzAnICsgZW5kTWludXRlcyA6IGVuZE1pbnV0ZXMpICsgZW5kQU07XG4gICAgfVxuICAgIFxuICAgIGdldCBzcGVha2VycygpOiBBcnJheTxTcGVha2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnNwZWFrZXJzO1xuICAgIH1cbiAgICBnZXQgaXNCcmVhaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uaXNCcmVhaztcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb25TaG9ydCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPiAxNjApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cigwLCAxNjApICsgJy4uLic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgZ2V0IGNhbGVuZGFyRXZlbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5jYWxlbmRhckV2ZW50SWQ7XG4gICAgfVxuICAgIGdldCBmYXZvcml0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhdm9yaXRlO1xuICAgIH1cbiAgICBzZXQgZmF2b3JpdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2Zhdm9yaXRlICE9PSB2YWx1ZSAmJiAhdGhpcy5fc2Vzc2lvbi5pc0JyZWFrKSB7XG4gICAgICAgICAgICB0aGlzLl9mYXZvcml0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoeyBvYmplY3Q6IHRoaXMsIGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBwcm9wZXJ0eU5hbWU6ICdmYXZvcml0ZScsIHZhbHVlOiB0aGlzLl9mYXZvcml0ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdG9nZ2xlRmF2b3JpdGUoKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSAhdGhpcy5mYXZvcml0ZTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZmF2b3JpdGUpIHtcbiAgICAgICAgLy8gICAgIGZhdm9yaXRlc1NlcnZpY2VNb2R1bGUuYWRkVG9GYXZvdXJpdGVzKHRoaXMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgZmF2b3JpdGVzU2VydmljZU1vZHVsZS5yZW1vdmVGcm9tRmF2b3VyaXRlcyh0aGlzKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGZpeERhdGUoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpLCBkYXRlLmdldFVUQ0hvdXJzKCksIGRhdGUuZ2V0VVRDTWludXRlcygpLCBkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG4gICAgfVxufSJdfQ==