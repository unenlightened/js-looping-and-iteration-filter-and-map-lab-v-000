function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, match) {
  matchKey = match.entries()[0][0]
  matchValue = match.entries()[0][1]

  return drivers.filter(function(driver) {
    return driver[matchKey] === matchValue
  })
}
