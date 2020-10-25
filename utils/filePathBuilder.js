const path = require('path');
const rootDir = require('./rootPath');
const buildFilePath = (fileName, ...folders) => path.join(rootDir, folders,fileName);
module.export = buildFilePath;