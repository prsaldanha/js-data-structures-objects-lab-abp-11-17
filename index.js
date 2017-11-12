var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  const newObj = {name: key, address: value }
  
  return Object.assign(...driver, newObj);

}
