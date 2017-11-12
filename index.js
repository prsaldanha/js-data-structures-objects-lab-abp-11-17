var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  return Object .assign(...driver, {name: key, address: value});

}
