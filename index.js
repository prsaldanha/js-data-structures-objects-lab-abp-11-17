var driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{

  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  driver[key] = value;
  return driver;
  return Object.assign(...driver, {key: value });
}
