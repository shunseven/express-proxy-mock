function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export function parseUrlToKey(url) {
  const cleanUrl = url.split('?')[0];
  return cleanUrl.split('/').map(item => firstUpperCase(item)).join('');
}

export class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(type, callback, scope, ...args) {
    if (typeof this.listeners[type] !== "undefined") {
      this.listeners[type].push({ scope, callback, args });
    } else {
      this.listeners[type] = [{ scope, callback, args }];
    }
  }

  off(type, callback, scope) {
    if (typeof this.listeners[type] !== "undefined") {
      this.listeners[type] = this.listeners[type].filter(
        listener => listener.scope !== scope || listener.callback !== callback
      );
    }
  }

  hasEventListener(type, callback, scope) {
    if (typeof this.listeners[type] !== "undefined") {
      if (callback === undefined && scope === undefined) {
        return this.listeners[type].length > 0;
      }
      return this.listeners[type].some(
        listener => (scope ? listener.scope === scope : true) && listener.callback === callback
      );
    }
    return false;
  }

  emit(type, target, ...args) {
    const event = { type, target };
    const eventArgs = [event, ...args];

    if (typeof this.listeners[type] !== "undefined") {
      const listeners = this.listeners[type].slice();
      listeners.forEach(listener => {
        if (listener && listener.callback) {
          listener.callback.apply(listener.scope, [...eventArgs, ...listener.args]);
        }
      });
    }
  }

  getEvents() {
    let str = "";
    for (const type in this.listeners) {
      this.listeners[type].forEach(listener => {
        str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous";
        str += ` listen for '${type}'\n`;
      });
    }
    return str;
  }
  
}

const dict = {
  "全局代理": "Global Proxy",
  "切换为全局代理": "Switch to Global Proxy",
  "MOCK数据优先": "MOCK Data First",
  "自定义代理优先": "Custom Proxy First",
  "新增MOCK数据&自定义代理": "Add MOCK Data & Custom Proxy",
  "名称": "Name",
  "目标": "Target",
  "查看MOCK数据": "View MOCK Data",
  "启用": "Enable",
  "MOCK数据": "MOCK Data",
  "自定义代理": "Custom Proxy",
  "操作": "Action",
  "设置": "Settings",
  "请确认": "Please Confirm",
  "是否要删除这个代理": "Do you want to delete this proxy?",
  "删除": "Delete",
  "取消": "Cancel",
  "转换最近请求为MOCK数据": "Convert Recent Request to MOCK Data",
  "查看数据": "View Data",
  "请求地址": "Request URL",
  "请求时间": "Request Time",
  "历史请求数据": "Historical Request Data",
  "请输入URL": "Please Enter URL",
  "批量导入MOCK数据": "Batch Import MOCK Data",
  "清空当前数据": "Clear Current Data",
  "导入数据": "Import Data",
  "请求参数": "Request Parameters",
  "修改入参": "Modify Input Parameters",
  "增加入参MOCK数据": "Add Input MOCK Data",
  "入参": "Input Parameters",
  "优化返回入参匹配最多的数据": "Optimize Return Input Matching Most Data",
  "出参": "Output Parameters",
  "MOCK数据&自定义代理": "MOCK Data & Custom Proxy",
  "延时": "Delay",
  "输入请求参数名称": "Enter Request Parameter Name",
  "查看MOCK数据": "View MOCK Data",
  "是否要删除这个代理": "Do you want to delete this proxy?",
  "请输入代理的名称": "Please Enter Proxy Name",
  "请输入代理地址": "Please Enter Proxy Address",
  "请输入正确的代理地址": "Please Enter a Valid Proxy Address",
  "代理地址已存在": "Proxy Address Already Exists",
  "创建": "Create",
  "编辑": "Edit",
  "保存": "Save",
  "代理": "Proxy",
  "新增": "Add",
}
export function t (key) {
  if (window.__lang__ === 'en' && dict[key]) {
    return dict[key]
  }
  return key
}
