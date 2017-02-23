import { Observable } from 'data/observable';
import { Session, Speaker, RoomInfo } from '../../shared/interfaces';

export class SessionViewModel extends Observable implements Session {
    private _session: Session;
    private _favorite: boolean = false;

    constructor(source?: Session) {
        super();
        if (source) {
            this._session = source;
        }
    }

    get id(): string {
        return this._session.id;
    }
    get calendarEventId(): string {
        return this._session.calendarEventId;
    }
    get description(): string {
        return this._session.description;
    }
    get descriptionShort(): string {
        if (this.description.length > 160) {
            return this.description.substr(0, 160) + '...';
        }
        return this.description;
    }
    get end(): string {
        return this._session.end;
    }
    get isBreak(): boolean {
        return this._session.isBreak;
    }
    get room(): string {
        if (this._session.room) {
            return this._session.room;
        }
        if (this._session.roomInfo) {
            return this._session.roomInfo.name;
        }
        return null;
    }
    get roomInfo(): RoomInfo {
        return this._session.roomInfo;
    }
    get speakers(): Speaker[] {
        return this._session.speakers;
    }
    get start(): string {
        return this._session.start;
    }
    get title(): string {
        return this._session.title;
    }
    get favorite(): boolean {
        return this._favorite;
    }
    set favorite(value: boolean) {
        
        if(this._favorite !== value){
            this._favorite = value;
            this.notify(
                {
                    object: this, 
                    eventName: Observable.propertyChangeEvent,
                    propertyName: 'favorite',
                    value: this._favorite
                });
        }
    }

    public toggleFavorite(){
        this.favorite = !this.favorite;
    }
}