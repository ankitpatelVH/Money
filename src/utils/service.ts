import constant from '../service/config/constant';
import {
  doPost,
  doPostWithAuth,
  get,
  getWithParams,
} from '../service/config/request';

export default {
  constant: constant,
  get: get,
  doPost: doPost,
  doPostWithParams: doPostWithAuth,
  getWithParams: getWithParams,
};
