class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
}

Driver.prototype.yearsExperienceFromBeginningOf = function(year){
  return year - this.startDate.getFullYear();
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

}
