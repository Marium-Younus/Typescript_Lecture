// 1. a group of constant
// 2. That can assign a number to your string and make an easy comparison.
// 3. enum Role(values)

enum Role{
    Admin,Manager,ReadOnlyUser 
}
console.log(Role)
console.log(Role.Manager)


enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);

  enum Weekday {
    Sunday = 'Holiday',
    Monday = 'Working',
    Tuesday  = 'Working',
    Wednesday  = 'Working',
    Thursday  = 'Working',
    Friday  = 'Working',
    Saturday  = 'Working'
  }

  console.log(Weekday.Sunday);


  enum Months {
    January = '31st',
    February = '28th or 29th depend upon leap year',
    March  = '31st',
    April  = '30th',
    May  = '31st',
    June  = '30th',
    July  = '31st',
    August = '31st',
    September = '30th',
    October = '31st',
    November='30th',
    December='31st'
  }
  console.log(Months.November);