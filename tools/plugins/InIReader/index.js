// ini.js INI文件读取
var fs = require("fs");

// 打开Ini文件，返回JSON配置对象
function OpenIniFile(iniFile) {
  var config = {};

  // 文件内容先去掉回车符(\r)
  var data = fs.readFileSync(iniFile, "UTF8").replace(/\r/g, "");

  // 配置节名正则表达式
  var regSection = new RegExp(/\[(.*)\]/);
  // 配置参数正则表达式
  var regParam = new RegExp(/^\s*([^\s.]*)\s*=\s*(.*)$/);
  // 配置数据行
  var content = data.split("\n");
  // 当前配置节
  var section = config;

  for (var index in content) {
    var sectionName = content[index].match(regSection);
    if (sectionName != null) {
      // 是节名
      config[RegExp.$1] = {};
      section = config[RegExp.$1];
    } else {
      // 不是节名，是参数
      var param = content[index].match(regParam);

      if (param != null) {
        // 参数有等号
        if (RegExp.$2.indexOf(",") == -1) {
          // 单参数
          section[RegExp.$1] = RegExp.$2;
        } else {
          // 多参数，转换成数组
          section[RegExp.$1] = RegExp.$2.split(",");
        }
      } else {
        // 参数无等号, 默认值为空
        param = content[index].trim();
        if (param.length > 0) {
          section[param] = "";
        }
      }
    }
  }
  return config;
};

module.exports = OpenIniFile;
