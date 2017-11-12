var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  var newdriver =  {name: key, address: value};
  return Object .assign(...driver);

}
