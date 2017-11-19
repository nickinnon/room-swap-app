import dataModel from './../models/getDataModel.js';

const getData = new Promise(resolve => {
  resolve(dataModel);
});

export default getData;
