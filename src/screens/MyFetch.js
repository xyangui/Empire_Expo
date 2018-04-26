/**
 * 封装网络请求 fetch ，还可以加上超时处理，等待进度圈，参考地址：
 * https://juejin.im/entry/590fe17b1b69e6006854987b
 *
 * 加上旋转进度条 spinner 如下：（旋转进度条在这里加不上）
 * https://blog.csdn.net/SuperBigLw/article/details/55253045
 */
import { Alert } from 'react-native';

const common_url = 'http://empirecollege.net/Education/public/api';  //服务器地址
let token = '';

/**
 * 网络请求：没有旋转进度条
 * @param url              接口地址 /login，注意以 / 开头
 * @param method           请求方法：GET、POST，只能大写
 * @param params           body的请求参数，默认为空
 * @param isErrorAlert     出错时弹出对话框提示（默认），=false时，不弹出对话框，自己处理错误 catch( (error) => {})
 * @returns {Promise<any>} 返回Promise
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

export function fetchNoProgressUrl(url, method, params = '', isErrorAlert = true){

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

    //let strUrl = common_url + url;
    //let newUrl = new URL("https://geo.example.org/api");
    //newUrl.search = new URLSearchParams(params);

    let esc = encodeURIComponent;
    let query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    let newUrl = common_url + url + '?' + query;

    return new Promise(function (resolve, reject) {
      fetch(newUrl, {

        method: method,
        headers: header,

        //params: {email: "ivan@empire.edu.au",}
        //body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析

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

