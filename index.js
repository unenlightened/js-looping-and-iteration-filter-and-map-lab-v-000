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
  return drivers.filter(function(driver) {
    return driver[match.key] === match[key].value
  })
}
