// 是否能够有读取剪贴板的权限
// result.state == "granted" || result.state == "prompt"
const result = await navigator.permissions.query({ name: "clipboard-read" });

// 获取剪贴板内容
const text = await navigator.clipboard.readText();