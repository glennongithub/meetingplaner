/**
 * Created by glenn on 2016-10-27.
 */

/*
* Look at http://stackoverflow.com/questions/10804042/calculate-time-difference-with-javascript for ideas how to handle js time
* */


window.onload = function () {


    //vars that might contain settings
    var meetingPartsElementId = "meetingParts";
    var meetingStartTime =  "17:00";


    //initcode. might be moved to own method
    var meetingPartsElement = $('#' + meetingPartsElementId);
    meetingStartTime = meetingStartTime.split(":"); //make an array out of it.
    var startTime = new Date(1970, 01, 01, meetingStartTime[0], meetingStartTime[1], 0); //create DateObj
    //var startTimeInInt = startTime.getTime(); //get the milisec counter
    //var tempTime = new Date(1970, 01, 01, meetingStartTime[0], meetingStartTime[1], 0); //create DateObj
    initEventHandlers();

    function isInt(value) {
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
    }

    function initEventHandlers() {
        $('.js-used-time').on('change', function(){
            var id = $(this).attr('data-part-id');
            //get the val
            var newVal = $('#usedTime-'+id).val();
            //test so it is a int
            if(!isInt(newVal))
                return;
            //set the new time
            meetingParts[id].minutesUsed = newVal;
            //recalc and render all
            recalcAndRender();
        });
    }

    console.log(startTime);
    console.log(startTime.getTime());

    /* might not be needed*/
    /*
    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*(60*1000));
    }

    function addSeconds(date, seconds) {
        return new Date(date.getTime() + seconds*(1000));
    }
    */
    function getCustomTimeString(time, useSeconds) {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        if(useSeconds)
            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + (seconds<= 9 ? "0" : "") + seconds;
        else
            return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }

    function meetingPart(description, timeUsage, lockedIn, disabled) {
        this._description = description;
        this._timeUsage = timeUsage; //in miliseconds
        this._lockedIn = lockedIn; // init as not locked in
        this._disabled = typeof disabled !== 'undefined' ? undefined : false; //default val is false
        this._start = 0; //init as 0
        this._end = 0; //init as 0
        // start in milli-secs from start time
        // end

    }

    function renderMeetintgPartRow(meetingPart,i) {
        var part =
            "<div class='row'>" +
                "<span class='col-md-4 desc'>" +
                    meetingPart.description + " " +
                "</span>" +
                "<span class='col-md-1 planedTime'>" +
                    "<input class='js-used-time' id='usedTime-"+i+"' data-part-id='"+i+"' type='text' value='" + meetingPart.minutesUsed + "'> " +
                "</span>" +
                "<span class=' col-md-1 locked'>" +
                    "<input type='checkbox' value='" + meetingPart.lockedIn + "' "+((meetingPart.lockedIn)? "checked":"") +"> " +
                "</span>" +
                "<span class='col-md-2 startTime'>" +
                    getCustomTimeString(new Date(meetingPart.start)) +
                "</span>" +
                "<span class='col-md-2 endTime'>" +
                    getCustomTimeString(new Date(meetingPart.end)) +
                "</span>" +
            "</div>";
        meetingPartsElement.append(part);
        //console.log(part);
    }

    function recalcAndRender() {
        //clear prev content
        meetingPartsElement.html("");
        for (var i = 0; i < meetingParts.length; i++) {
            //initially calc start and end times
            if(i==0) { //if first part
                meetingParts[i].start = startTime.getTime();
                meetingParts[i].end = ( meetingParts[i].start) + (meetingParts[i].minutesUsed * (60*1000)); //ony handle minutes to start with
            } else { //now we look prev parts end time and use thet as start
                meetingParts[i].start = meetingParts[i-1].end; //start when last part ended
                meetingParts[i].end = ( meetingParts[i].start) + (meetingParts[i].minutesUsed * (60*1000)); //ony handle minutes to start with
            }

            //render to screen
            renderMeetintgPartRow(meetingParts[i], i);
            //reinit all eventHandelers.. that might have changed since we rerendered everything
            initEventHandlers();
        }
    }

    var meetingParts = [
        {description: 'preAndSong', minutesUsed: 1, lockedIn: true, start:0, end:0},
        {description: 'intoWords', minutesUsed: 3, lockedIn: false, start:0, end:0},
        {description: 'TREASURES FROM GOD’S WORD', minutesUsed: 10, lockedIn: false,start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Digging for Spiritual Gems', minutesUsed: 10, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Bible reading', minutesUsed: 4, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Prepare This Month’s Presentations', minutesUsed: 15, lockedIn: false, disabled: true, start:0, end:0},
        {description: 'Initial Call', minutesUsed: 4, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Return Visit', minutesUsed: 4, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Bible Study', minutesUsed: 4, lockedIn: false, start:0, end:0},
        {description: 'chairmanCommentsAndMidSong', minutesUsed: 5, lockedIn: false, start:0, end:0},
        {description: 'lacP1', minutesUsed: 5, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'lacP2', minutesUsed: 10, lockedIn: false, start:0, end:0},
        {description: 'chairmanComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'Congregation Bible Study', minutesUsed: 1, lockedIn: false, start:0, end:0},
        {description: 'chairmanClosingComments', minutesUsed: 1, lockedIn: false, start:0, end:0},
    ];


    recalcAndRender();

}