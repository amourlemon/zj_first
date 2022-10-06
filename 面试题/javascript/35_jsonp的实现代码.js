function jsonp({ url, onData, params }) {
    const script = document.createElement("script");
  
    // 一、为了避免全局污染，使用一个随机函数名
    const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`;
  
    // 二、默认 callback 函数为 cbFnName
    script.src = `${url}?${stringify({ callback: cbFnName, ...params })}`;
  
    // 三、使用 onData 作为 cbFnName 回调函数，接收数据
    window[cbFnName] = onData;
  
    document.body.appendChild(script);
  }
  
  // 发送 JSONP 请求
  jsonp({
    url: "http://localhost:10010",
    onData(data) {
      console.log("Data:", data);
    },
    params: { id: 10000 },
  });