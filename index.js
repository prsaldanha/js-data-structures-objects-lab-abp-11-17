var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  driver.name = key;
  driver.address = value;

  return driver;
  //return Object.assign(driver, {key: value});

}
