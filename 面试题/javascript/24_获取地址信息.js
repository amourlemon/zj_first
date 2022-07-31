var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude.toFixed(6));
    console.log('Longitude: ' + crd.longitude.toFixed(6));
    console.log('More or less ' + crd.accuracy + ' meters.');

    const params = {
        key: 'bfb05498b7122564ee2b7e1cfc4d6705',
        location: `${crd.longitude.toFixed(6)},${crd.latitude.toFixed(6)}`
    }
    ajaxPromise(params).then(address => {
        console.log(JSON.parse(address));
    })
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);



const ajaxPromise = function (data) {
  const promise = new Promise((resolve, reject) => {
    //    创建 xhr 实例
    const xhr = new XMLHttpRequest();
    //    打开请求链接，请求数据
    xhr.open(
      "get",
      `https://restapi.amap.com/v3/geocode/regeo?key=${data.key}&location=${data.location}`,
      true
    );
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr)
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.send(data);
  });
  return promise;
};


