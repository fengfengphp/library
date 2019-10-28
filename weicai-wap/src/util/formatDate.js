import { dateFormat } from 'vux'
//获取昨天
const getYesterday = function () {
    let yesterdayTimestamp = new Date().getTime() - 24 * 60 * 60 * 1000;
    return dateFormat(yesterdayTimestamp, 'YYYY-MM-DD')
}
//获取这周一
const getThisMonday = function () {
    let date = new Date(),weekNum;
    if(date.getDay() == 0){
        weekNum = 7
    }else {
        weekNum = date.getDay()
    }
    date.setDate(date.getDate() - weekNum + 1);
    let monday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return monday
}
//获取上周一 和 上周天
const getLastWeek = function () {
    let dateOne = new Date(),dateTwo = new Date(),weekNum;
    if(dateOne.getDay() == 0){
        weekNum = 7
    }else {
        weekNum = dateOne.getDay()
    }
    dateOne.setDate(dateOne.getDate() - weekNum - 6);
    dateTwo.setDate(dateTwo.getDate() - weekNum);
    let lastMondayDate = dateOne.getFullYear() + "-" + (dateOne.getMonth() + 1) + "-" + dateOne.getDate();
    let lastSundayDate = dateTwo.getFullYear() + "-" + (dateTwo.getMonth() + 1) + "-" + dateTwo.getDate();
    return [lastMondayDate,lastSundayDate]
}
//获取这个月 第一天
const getThisMonth = function () {
    let date = new Date();
    date.setDate(1);
    let thisMonth = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return thisMonth
}
//获取上个月 第一天 和 最后一天
const getlastMonth = function () {
    let date = new Date();
    let firstDate = new Date(new Date().getFullYear(),new Date().getMonth()-1,1)
    date.setDate(0);
    let lastMonthFirst = firstDate.getFullYear() + "-" + (firstDate.getMonth() + 1) + "-" + firstDate.getDate();
    let lastMonthLastDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return [lastMonthFirst,lastMonthLastDay]
}
export {getYesterday,getThisMonday,getLastWeek,getThisMonth,getlastMonth}
