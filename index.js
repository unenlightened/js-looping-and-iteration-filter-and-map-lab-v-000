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
  matchKey = match.keys()[0]
  matchValue = match.values()[0]

  return drivers.filter(function(driver) {
    return driver[matchKey] === matchValue
  })
}
