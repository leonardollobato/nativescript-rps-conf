"use strict";
var main_view_model_1 = require("./main-view-model");
var vm = new main_view_model_1.MainViewModel();
var page;
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vm;
    vm.init();
}
exports.pageLoaded = pageLoaded;
function toggleFavorite(args) {
    var session = args.view.bindingContext;
    session.toggleFavorite();
}
exports.toggleFavorite = toggleFavorite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxxREFBa0Q7QUFHbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7QUFDN0IsSUFBSSxJQUFVLENBQUM7QUFFZixvQkFBMkIsSUFBZTtJQUN0QyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUN6QixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZCxDQUFDO0FBSkQsZ0NBSUM7QUFFRCx3QkFBK0IsSUFBc0I7SUFDakQsSUFBSSxPQUFPLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3pELE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBSEQsd0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuaW1wb3J0IHsgTWFpblZpZXdNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IFNlc3Npb25WaWV3TW9kZWwgfSBmcm9tICcuLi9zZXNzaW9uLXBhZ2Uvc2Vzc2lvbi12aWV3LW1vZGVsJztcblxudmFyIHZtID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcbnZhciBwYWdlOiBQYWdlO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuICAgIHZtLmluaXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICB2YXIgc2Vzc2lvbiA9IDxTZXNzaW9uVmlld01vZGVsPmFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcbiAgICBzZXNzaW9uLnRvZ2dsZUZhdm9yaXRlKCk7XG59Il19