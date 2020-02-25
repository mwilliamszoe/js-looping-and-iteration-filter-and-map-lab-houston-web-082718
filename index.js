// * `exactMatch()` - This function takes an array of `driver` objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, `exactMatch(drivers, { revenue: 3000 })` will return all drivers whose `revenue` attribute equals `3000`, and `exactMatch(drivers, { name: 'Bob' })` will return all drivers whose `name` attribute equals `Bob`.
// * `exactMatchToList()` - This function works the same way as the `exactMatch()` function, except that instead of returning an array of `driver` objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, `exactMatchToList(drivers, { revenue: 2000 })` will return `['Sammy']`, as `Sammy` is the name of the matching `driver` object.

function driversWithRevenueOver (driversArr, revenueInt) {
    return driversArr.filter(function (driver) {
      return driver.revenue > revenueInt;
    });
  }

function driverNamesWithRevenueOver(driversArr, revenueInt){
  retrun driversWithRevenueOver(driversArr, revenueInt).map(function(driver){
    return driver.name;
  });
}

