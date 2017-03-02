"use strict";
var static_data_1 = require("../shared/static-data");
var fileSystemModule = require("file-system");
var faker = require("faker");
var NUM_SPEAKERS = 40;
var NUM_ROOM_INFOS = 10;
var SESSION_LENGTH = 60;
function generateSpeakers() {
    var speakerList = [];
    var avatarsMen = getSpeakerAvatars('images/speakers/base64/men.txt');
    var avatarsWomen = getSpeakerAvatars('images/speakers/base64/women.txt');
    for (var i = 0; i <= NUM_SPEAKERS; i++) {
        var genderBool = faker.random.boolean();
        var genderInt = parseInt(genderBool + '');
        var firstName = faker.name.firstName(genderInt);
        var lastName = faker.name.lastName(genderInt);
        var picture = genderBool ? avatarsMen[faker.random.number(avatarsMen.length - 1)] : avatarsWomen[faker.random.number(avatarsWomen.length - 1)];
        var s = {
            id: faker.random.uuid(),
            name: firstName + ' ' + lastName,
            title: faker.name.jobTitle(),
            company: faker.company.companyName(),
            picture: picture,
            twitterName: '@' + faker.internet.userName(firstName, lastName)
        };
        speakerList.push(s);
    }
    return speakerList;
}
exports.generateSpeakers = generateSpeakers;
function generateRoomInfos() {
    var roomInfoList = [];
    for (var i = 0; i <= NUM_ROOM_INFOS; i++) {
        var r = {
            roomId: faker.random.uuid(),
            name: faker.address.streetName() + ' ' + faker.random.number(10),
            url: faker.internet.domainName(),
            theme: faker.lorem.words(1)
        };
        roomInfoList.push(r);
    }
    return roomInfoList;
}
exports.generateRoomInfos = generateRoomInfos;
function generateSessions(speakers, roomInfos) {
    var sessionList = [];
    var idSeed = 1000;
    for (var _i = 0, conferenceDays_1 = static_data_1.conferenceDays; _i < conferenceDays_1.length; _i++) {
        var confDay = conferenceDays_1[_i];
        var timeSlots = generateTimeSlots(confDay);
        for (var _a = 0, timeSlots_1 = timeSlots; _a < timeSlots_1.length; _a++) {
            var confTimeSlot = timeSlots_1[_a];
            if (confTimeSlot.isBreak) {
                //break session
                var s = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(confTimeSlot.title),
                    isBreak: true,
                    start: confTimeSlot.start.toString(),
                    end: confTimeSlot.end.toString(),
                    room: '',
                    roomInfo: null,
                    speakers: [],
                    description: '',
                    descriptionShort: '',
                    calendarEventId: ''
                };
                sessionList.push(s);
            }
            else {
                //speaker session
                var subSpeakers = getRandomArrayElements(speakers, faker.random.number(3));
                var roomInfo = roomInfos[faker.random.number(roomInfos.length - 1)];
                var s = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(faker.company.bs()),
                    isBreak: false,
                    start: confTimeSlot.start.toString(),
                    end: confTimeSlot.end.toString(),
                    room: roomInfo.name,
                    roomInfo: roomInfo,
                    speakers: subSpeakers,
                    description: faker.lorem.paragraph(),
                    descriptionShort: faker.lorem.sentence(),
                    calendarEventId: faker.random.uuid()
                };
                sessionList.push(s);
            }
        }
    }
    return sessionList;
}
exports.generateSessions = generateSessions;
function generateTimeSlots(confDay) {
    var timeSlotList = [];
    var startTimeList = getTimeRange(addMinutes(confDay.date, 240), addMinutes(confDay.date, 780), SESSION_LENGTH);
    for (var _i = 0, startTimeList_1 = startTimeList; _i < startTimeList_1.length; _i++) {
        var startTime = startTimeList_1[_i];
        var isBreak = false;
        var sessionTitle = '';
        if (startTime.getHours() == 4) {
            isBreak = true;
            sessionTitle = 'Welcome Message';
        }
        else if (startTime.getHours() == 8) {
            isBreak = true;
            sessionTitle = 'Lunch Break';
        }
        var cTimeSlot = { title: sessionTitle, isBreak: isBreak, start: startTime, end: addMinutes(startTime, SESSION_LENGTH) };
        timeSlotList.push(cTimeSlot);
    }
    return timeSlotList;
}
function getTimeRange(startTime, endTime, minutesBetween) {
    var startTimeList = [];
    var diffInMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000);
    var periods = diffInMinutes / minutesBetween;
    for (var i = 0; i <= periods; i++) {
        var periodStart = addMinutes(startTime, (minutesBetween * i));
        startTimeList.push(periodStart);
    }
    return startTimeList;
}
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
function getSpeakerAvatars(path) {
    var avatarList = [];
    var currentAppFolder = fileSystemModule.knownFolders.currentApp();
    var file = currentAppFolder.getFile(path);
    var fileText = file.readTextSync();
    var lines = fileText.split('\n');
    for (var i = 0; i < lines.length; i++) {
        avatarList.push('data:image/png;base64,' + lines[i]);
    }
    return avatarList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWtlLWRhdGEtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscURBQXVEO0FBQ3ZELDhDQUFnRDtBQUVoRCw2QkFBZ0M7QUFFaEMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFDSSxJQUFJLFdBQVcsR0FBbUIsRUFBRSxDQUFDO0lBQ3JDLElBQUksVUFBVSxHQUFHLGlCQUFpQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDckUsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUN6RSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUksUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FB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QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCwyQkFBMkIsSUFBSTtJQUMzQixJQUFJLFVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBQ25DLElBQUksZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xFLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFbkMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uLCBTcGVha2VyLCBSb29tSW5mbywgQ29uZmVyZW5jZURheSwgQ29uZlRpbWVTbG90IH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgY29uZmVyZW5jZURheXMgfSBmcm9tICcuLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0ICogYXMgZmlsZVN5c3RlbU1vZHVsZSBmcm9tICdmaWxlLXN5c3RlbSc7XG5cbmltcG9ydCBmYWtlciA9IHJlcXVpcmUoJ2Zha2VyJyk7XG5cbmxldCBOVU1fU1BFQUtFUlMgPSA0MDtcbmxldCBOVU1fUk9PTV9JTkZPUyA9IDEwO1xubGV0IFNFU1NJT05fTEVOR1RIID0gNjA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNwZWFrZXJzKCkgOiBBcnJheTxTcGVha2VyPiB7XG4gICAgdmFyIHNwZWFrZXJMaXN0OiBBcnJheTxTcGVha2VyPiA9IFtdO1xuICAgIHZhciBhdmF0YXJzTWVuID0gZ2V0U3BlYWtlckF2YXRhcnMoJ2ltYWdlcy9zcGVha2Vycy9iYXNlNjQvbWVuLnR4dCcpO1xuICAgIHZhciBhdmF0YXJzV29tZW4gPSBnZXRTcGVha2VyQXZhdGFycygnaW1hZ2VzL3NwZWFrZXJzL2Jhc2U2NC93b21lbi50eHQnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBOVU1fU1BFQUtFUlM7IGkrKykge1xuICAgICAgICB2YXIgZ2VuZGVyQm9vbCA9IGZha2VyLnJhbmRvbS5ib29sZWFuKCk7XG4gICAgICAgIHZhciBnZW5kZXJJbnQgPSAgcGFyc2VJbnQoZ2VuZGVyQm9vbCArICcnKTtcbiAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGZha2VyLm5hbWUuZmlyc3ROYW1lKGdlbmRlckludCk7XG4gICAgICAgIHZhciBsYXN0TmFtZSA9IGZha2VyLm5hbWUubGFzdE5hbWUoZ2VuZGVySW50KTtcbiAgICAgICAgdmFyIHBpY3R1cmUgPSBnZW5kZXJCb29sID8gYXZhdGFyc01lbltmYWtlci5yYW5kb20ubnVtYmVyKGF2YXRhcnNNZW4ubGVuZ3RoLTEpXSA6IGF2YXRhcnNXb21lbltmYWtlci5yYW5kb20ubnVtYmVyKGF2YXRhcnNXb21lbi5sZW5ndGgtMSldO1xuICAgICAgICBcbiAgICAgICAgbGV0IHM6IFNwZWFrZXIgPSB7XG4gICAgICAgICAgICBpZDogZmFrZXIucmFuZG9tLnV1aWQoKSxcbiAgICAgICAgICAgIG5hbWU6IGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lLFxuICAgICAgICAgICAgdGl0bGU6IGZha2VyLm5hbWUuam9iVGl0bGUoKSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGZha2VyLmNvbXBhbnkuY29tcGFueU5hbWUoKSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICB0d2l0dGVyTmFtZTogJ0AnICsgZmFrZXIuaW50ZXJuZXQudXNlck5hbWUoZmlyc3ROYW1lLCBsYXN0TmFtZSlcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHNwZWFrZXJMaXN0LnB1c2gocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWFrZXJMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb29tSW5mb3MoKSA6IEFycmF5PFJvb21JbmZvPiB7XG4gICAgdmFyIHJvb21JbmZvTGlzdDogQXJyYXk8Um9vbUluZm8+ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gTlVNX1JPT01fSU5GT1M7IGkrKykge1xuICAgICAgICBsZXQgcjogUm9vbUluZm8gPSB7XG4gICAgICAgICAgICByb29tSWQ6IGZha2VyLnJhbmRvbS51dWlkKCksXG4gICAgICAgICAgICBuYW1lOiBmYWtlci5hZGRyZXNzLnN0cmVldE5hbWUoKSArICcgJyArIGZha2VyLnJhbmRvbS5udW1iZXIoMTApLFxuICAgICAgICAgICAgdXJsOiBmYWtlci5pbnRlcm5ldC5kb21haW5OYW1lKCksXG4gICAgICAgICAgICB0aGVtZTogZmFrZXIubG9yZW0ud29yZHMoMSlcbiAgICAgICAgfTtcbiAgICAgICAgcm9vbUluZm9MaXN0LnB1c2gocik7XG4gICAgfVxuICAgIHJldHVybiByb29tSW5mb0xpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNlc3Npb25zKHNwZWFrZXJzOiBBcnJheTxTcGVha2VyPiwgcm9vbUluZm9zOiBBcnJheTxSb29tSW5mbz4pIDogQXJyYXk8U2Vzc2lvbj4ge1xuICAgIHZhciBzZXNzaW9uTGlzdDogQXJyYXk8U2Vzc2lvbj4gPSBbXTtcbiAgICB2YXIgaWRTZWVkID0gMTAwMDtcbiAgICBmb3IgKHZhciBjb25mRGF5IG9mIGNvbmZlcmVuY2VEYXlzKSB7XG4gICAgICAgIHZhciB0aW1lU2xvdHMgPSBnZW5lcmF0ZVRpbWVTbG90cyhjb25mRGF5KTtcbiAgICAgICAgZm9yICh2YXIgY29uZlRpbWVTbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgICAgICAgaWYgKGNvbmZUaW1lU2xvdC5pc0JyZWFrKSB7XG4gICAgICAgICAgICAgICAgLy9icmVhayBzZXNzaW9uXG4gICAgICAgICAgICAgICAgbGV0IHM6IFNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAoaWRTZWVkKyspLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b1RpdGxlQ2FzZShjb25mVGltZVNsb3QudGl0bGUpLFxuICAgICAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogY29uZlRpbWVTbG90LnN0YXJ0LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGVuZDogY29uZlRpbWVTbG90LmVuZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICByb29tOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcm9vbUluZm86IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2Vzc2lvbkxpc3QucHVzaChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc3BlYWtlciBzZXNzaW9uXG4gICAgICAgICAgICAgICAgdmFyIHN1YlNwZWFrZXJzID0gZ2V0UmFuZG9tQXJyYXlFbGVtZW50cyhzcGVha2VycywgZmFrZXIucmFuZG9tLm51bWJlcigzKSk7XG4gICAgICAgICAgICAgICAgdmFyIHJvb21JbmZvID0gcm9vbUluZm9zW2Zha2VyLnJhbmRvbS5udW1iZXIocm9vbUluZm9zLmxlbmd0aC0xKV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHM6IFNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAoaWRTZWVkKyspLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0b1RpdGxlQ2FzZShmYWtlci5jb21wYW55LmJzKCkpLFxuICAgICAgICAgICAgICAgICAgICBpc0JyZWFrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGNvbmZUaW1lU2xvdC5zdGFydC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGNvbmZUaW1lU2xvdC5lbmQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgcm9vbTogcm9vbUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcm9vbUluZm86IHJvb21JbmZvLFxuICAgICAgICAgICAgICAgICAgICBzcGVha2Vyczogc3ViU3BlYWtlcnMsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TaG9ydDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiBmYWtlci5yYW5kb20udXVpZCgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uTGlzdC5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uTGlzdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUaW1lU2xvdHMoY29uZkRheTogQ29uZmVyZW5jZURheSkgOiBBcnJheTxDb25mVGltZVNsb3Q+IHtcbiAgICB2YXIgdGltZVNsb3RMaXN0OiBBcnJheTxDb25mVGltZVNsb3Q+ID0gW107XG4gICAgdmFyIHN0YXJ0VGltZUxpc3QgPSBnZXRUaW1lUmFuZ2UoYWRkTWludXRlcyhjb25mRGF5LmRhdGUsIDI0MCksIGFkZE1pbnV0ZXMoY29uZkRheS5kYXRlLCA3ODApLCBTRVNTSU9OX0xFTkdUSCk7XG4gICAgZm9yICh2YXIgc3RhcnRUaW1lIG9mIHN0YXJ0VGltZUxpc3QpIHtcbiAgICAgICAgdmFyIGlzQnJlYWsgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNlc3Npb25UaXRsZSA9ICcnO1xuICAgICAgICBpZiAoc3RhcnRUaW1lLmdldEhvdXJzKCkgPT0gNCkge1xuICAgICAgICAgICAgaXNCcmVhayA9IHRydWU7XG4gICAgICAgICAgICBzZXNzaW9uVGl0bGUgPSAnV2VsY29tZSBNZXNzYWdlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydFRpbWUuZ2V0SG91cnMoKSA9PSA4KSB7XG4gICAgICAgICAgICBpc0JyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlc3Npb25UaXRsZSA9ICdMdW5jaCBCcmVhayc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNUaW1lU2xvdDogQ29uZlRpbWVTbG90ID0geyB0aXRsZTogc2Vzc2lvblRpdGxlLCBpc0JyZWFrOiBpc0JyZWFrLCBzdGFydDogc3RhcnRUaW1lLCBlbmQ6IGFkZE1pbnV0ZXMoc3RhcnRUaW1lLCBTRVNTSU9OX0xFTkdUSCkgfTtcbiAgICAgICAgdGltZVNsb3RMaXN0LnB1c2goY1RpbWVTbG90KTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVTbG90TGlzdDtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZVJhbmdlKHN0YXJ0VGltZTogRGF0ZSwgZW5kVGltZTogRGF0ZSwgbWludXRlc0JldHdlZW46IG51bWJlcikgOiBBcnJheTxEYXRlPiB7XG4gICAgdmFyIHN0YXJ0VGltZUxpc3Q6IEFycmF5PERhdGU+ID0gW107XG4gICAgdmFyIGRpZmZJbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKChlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gNjAwMDApO1xuICAgIHZhciBwZXJpb2RzOiBudW1iZXIgPSBkaWZmSW5NaW51dGVzIC8gbWludXRlc0JldHdlZW47XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcGVyaW9kczsgaSsrKSB7XG4gICAgICAgIGxldCBwZXJpb2RTdGFydCA9IGFkZE1pbnV0ZXMoc3RhcnRUaW1lLCAobWludXRlc0JldHdlZW4gKiBpKSk7XG4gICAgICAgIHN0YXJ0VGltZUxpc3QucHVzaChwZXJpb2RTdGFydCk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFRpbWVMaXN0O1xufVxuXG5mdW5jdGlvbiBhZGRNaW51dGVzKGRhdGU6IERhdGUsIG1pbnV0ZXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIG1pbnV0ZXMqNjAwMDApO1xufVxuXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24odHh0KXtyZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO30pO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21BcnJheUVsZW1lbnRzKGFyciwgY291bnQpIHtcbiAgICB2YXIgc2h1ZmZsZWQgPSBhcnIuc2xpY2UoMCksIGkgPSBhcnIubGVuZ3RoLCBtaW4gPSBpIC0gY291bnQsIHRlbXAsIGluZGV4O1xuICAgIHdoaWxlIChpLS0gPiBtaW4pIHtcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKChpICsgMSkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGVtcCA9IHNodWZmbGVkW2luZGV4XTtcbiAgICAgICAgc2h1ZmZsZWRbaW5kZXhdID0gc2h1ZmZsZWRbaV07XG4gICAgICAgIHNodWZmbGVkW2ldID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkLnNsaWNlKG1pbik7XG59XG5cbmZ1bmN0aW9uIGdldFNwZWFrZXJBdmF0YXJzKHBhdGgpIHtcbiAgICB2YXIgYXZhdGFyTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHZhciBjdXJyZW50QXBwRm9sZGVyID0gZmlsZVN5c3RlbU1vZHVsZS5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIHZhciBmaWxlID0gY3VycmVudEFwcEZvbGRlci5nZXRGaWxlKHBhdGgpO1xuICAgIHZhciBmaWxlVGV4dCA9IGZpbGUucmVhZFRleHRTeW5jKCk7XG4gICAgXG4gICAgdmFyIGxpbmVzID0gZmlsZVRleHQuc3BsaXQoJ1xcbicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXZhdGFyTGlzdC5wdXNoKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF2YXRhckxpc3Q7XG59Il19