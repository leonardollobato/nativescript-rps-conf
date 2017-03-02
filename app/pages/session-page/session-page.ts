import { Page } from 'ui/page';
import { SessionViewModel } from '../session-page/session-view-model';

import * as fakeDataServiceModule from '../../service/fake-data-service';

var vm: SessionViewModel;
var page: Page;

export function pageNavigatingTo(args){
    page = <Page> args.object;

    var firstSession = loadFirstSessionViaFaker();
    vm = new SessionViewModel(firstSession);
    page.bindingContext = vm;
}

export function loadFirstSessionViaFaker<T>(){
    let speakers = fakeDataServiceModule.generateSpeakers();
    let roomInfos = fakeDataServiceModule.generateRoomInfos();
    let sessions = <any>fakeDataServiceModule.generateSessions(speakers, roomInfos);
    var nonBreakSessions = sessions.filter(s => {
        return !s.isBreak && s.speakers.length > 0;
    });
    return nonBreakSessions[0];
}