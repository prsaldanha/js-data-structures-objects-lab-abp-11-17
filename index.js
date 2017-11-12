var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  driver =  {name: key, address: value};
  return Object .assign(...driver);

}
