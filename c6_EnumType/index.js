// 1. a group of constant
// 2. That can assign a number to your string and make an easy comparison.
// 3. enum Role(values)
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["ReadOnlyUser"] = 2] = "ReadOnlyUser";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.Manager);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
var Weekday;
(function (Weekday) {
    Weekday["Sunday"] = "Holiday";
    Weekday["Monday"] = "Working";
    Weekday["Tuesday"] = "Working";
    Weekday["Wednesday"] = "Working";
    Weekday["Thursday"] = "Working";
    Weekday["Friday"] = "Working";
    Weekday["Saturday"] = "Working";
})(Weekday || (Weekday = {}));
console.log(Weekday.Sunday);
var Months;
(function (Months) {
    Months["January"] = "31st";
    Months["February"] = "28th or 29th depend upon leap year";
    Months["March"] = "31st";
    Months["April"] = "30th";
    Months["May"] = "31st";
    Months["June"] = "30th";
    Months["July"] = "31st";
    Months["August"] = "31st";
    Months["September"] = "30th";
    Months["October"] = "31st";
    Months["November"] = "30th";
    Months["December"] = "31st";
})(Months || (Months = {}));
console.log(Months.November);
