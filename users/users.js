const config = require('config');

let BASE_ID, API_KEY;
if (config.get('ENV') === 'dev') {
  BASE_ID = config.get('BASE_ID_TEST');
  API_KEY = config.get('API_KEY_TEST');  
} else {
  BASE_ID = config.get('BASE_ID_PROD');
  API_KEY = config.get('API_KEY_PROD');  
}

const Airtable = require('airtable');
Airtable.configure({
    apiKey: API_KEY
});
const base = Airtable.base(BASE_ID);

const getFieldsFromTable = (table) => {
    return table[0].map((item) => item.fields);
}

const findLookUpValue = (arr, lookupValue, fieldName) => {
    try {
      if (lookupValue) {
      return arr.filter((func) => { return func.id === lookupValue[0]})[0].fields[fieldName];
    }
    return '';  
    } catch {
      return '';
    }
  };

const userAdapter = (user, units, roles, team) => {
    return {
        "email": user.Email,
        "rights": user['Access Rights'],
        "unit" : findLookUpValue(units, user['Unit (from Team)'], 'Unit'),
        "role" : findLookUpValue(roles, user['Role (from Team)'], 'Role in Unit')
    }
}

const getUnitMapping = async () => {
    const initData = [];
    await base('Unit').select({
        view: 'unit_all'
    }).eachPage((records, fetchNextPage) => {
        initData.push(records);
        fetchNextPage();
    });

    return initData[0];
}

const getRoleMapping = async () => {
  const initData = [];
  await base('Role_Unit').select({
      view: 'roles_all'
  }).eachPage((records, fetchNextPage) => {
      initData.push(records);
      fetchNextPage();
  });

  return initData[0];
}

const getUserList = async () => {

  const units = await getUnitMapping();
  const roles = await getRoleMapping();
  
  const initData = [];
  await base('Login Data').select({
    view: 'Grid view'
  }).eachPage((records, fetchNextPage) => {
    initData.push(records);
    fetchNextPage();
  });

  const userList = getFieldsFromTable(initData).map((user) => userAdapter(user, units, roles));
  return userList;
}

const getUserIndex = (user, list) => {
    const index = list.findIndex((item) => item.email === user);
    return index;
}

module.exports.getUserList = getUserList;
module.exports.getUserIndex = getUserIndex;
