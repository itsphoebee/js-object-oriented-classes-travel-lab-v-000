class Driver {
  constructor(name, startDate){
    this.name = name
    let officialStartDate = new Date(startDate)
    this.startDate = officialStartDate
  }
}

Driver.prototype.startDate

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

}
