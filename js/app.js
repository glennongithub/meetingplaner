/**
 * Created by glenn on 2016-10-27.
 */
function meetingPart(description, timeUsage, lockedIn, disabled) {
    this._description = description;
    this._timeUsage = timeUsage; //in miliseconds
    this._lockedIn = lockedIn; // init as not locked in
    this._disabled = typeof disabled !== 'undefined' ? undefined : false; //default val is false

    // description
    // timeUsage
    // locked in .. do not auto-calculate.
    // disabled
    // start in milli-secs from start time
    // end


}
var meetingParts = [
    {description:'preAndSong', minutesUsed:1, lockedIn:false},
    {description:'intoWords', minutesUsed:3, lockedIn:false},
    {description:'TREASURES FROM GOD’S WORD', minutesUsed:10, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Digging for Spiritual Gems', minutesUsed:10, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Bible reading', minutesUsed:4, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Prepare This Month’s Presentations', minutesUsed:15, lockedIn:false, disabled:true},
    {description:'Initial Call', minutesUsed:4, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Return Visit', minutesUsed:4, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Bible Study', minutesUsed:4, lockedIn:false},
    {description:'chairmanCommentsAndMidSong', minutesUsed:5, lockedIn:false},
    {description:'lacP1', minutesUsed:5, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'lacP2', minutesUsed:10, lockedIn:false},
    {description:'chairmanComments', minutesUsed:1, lockedIn:false},
    {description:'Congregation Bible Study', minutesUsed:1, lockedIn:false},
    {description:'chairmanClosingComments', minutesUsed:1, lockedIn:false},
];

for

//


