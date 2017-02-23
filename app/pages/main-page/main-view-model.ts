import { Observable } from 'data/observable';
import { Session } from '../../shared/interfaces';
import { SessionViewModel } from '../session-page/session-view-model';

export class MainViewModel extends Observable {
    private _sessions: Array<Session> = new Array<Session>();
    private _allSessions:Array<SessionViewModel> = new Array<SessionViewModel>();

    constructor() {
        super();
    }

    get sessions(): Array<SessionViewModel>{
        return this._allSessions;
    }

    public init() {
        var sessions: Array<Session> = [
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
        ]
        sessions
            .forEach((item) => this._allSessions.push(new SessionViewModel(item)));
    }
}