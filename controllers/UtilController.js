export default class UtilController {

    //a real unix timestamp, not JavaScript timestamp
    static unixToReadableTime(unixTime) {
        console.log(unixTime);
        const time = new Date(unixTime * 1000);
        const p = UtilController.leftPadding;
        return `${p(time.getFullYear())} / ${p(time.getMonth())} / ${p(time.getDate())}, ${p(time.getHours())}:${p(time.getMinutes())}:${p(time.getSeconds())}`;
    }

    static leftPadding(raw) {
        if(raw < 10)
            return '0' + raw;
        return raw;
    }
}
