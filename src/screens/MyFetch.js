/**
 * 封装网络请求 fetch ，还可以加上超时处理，等待进度圈，参考地址：
 * https://juejin.im/entry/590fe17b1b69e6006854987b
 *
 * https://blog.csdn.net/SuperBigLw/article/details/55253045
 */
import { Alert } from 'react-native';

const common_url = 'http://empirecollege.net/Education/public/api';  //服务器地址
let token = '';

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

export function fetchNoProgress(url, method, params = '', isErrorAlert = true){

  let header = {
    "Content-Type": "application/json;charset=UTF-8"
    //,
    //"accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
  };

  if(params == ''){

    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {

        method: method,
        headers: header

      }).then((response) => response.json())
        .then((responseData) => {

          resolve(responseData);
        })
        .catch( (error) => {

          if(isErrorAlert) {
            Alert.alert('Request fail !');
          }
          reject(error);
        });
    });

  }else{

    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {

        method: method,
        headers: header,
        body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析

      }).then((response) => response.json())
        .then((responseData) => {

          resolve(responseData);
        })
        .catch( (error) => {

          if(isErrorAlert) {
            Alert.alert('Request fail !');
          }
          reject(error);
        });
    });
  }
}

