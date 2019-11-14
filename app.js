/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-12 09:11:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-12 19:17:15
 * @鸣谢 https://www.cnblogs.com/xiaohaifengke/p/7693185.html
 */
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const componentName = 'java'
const clean = require('./clean')

let root = './'

// 读取模板文件，并修改内容
let templateString = fs.readFileSync(
  path.join(__dirname, './Result.java'),
  'utf8'
)
//读取js模板
// let templateString = fs.readFileSync(
//   path.join(__dirname, './module.js'),
//   'utf8'
// )
var compiled = _.template(templateString)
let content = compiled({
  tests: [{ name: 'fred', type: 'String' }, { name: 'sss', type: 'String' }]
})
// let content = template.replace(/componentName/g, componentName) // target file content

// 目标文件夹和目标文件的路径
let targetDirPath = path.join(__dirname, root, componentName)
let targetFilePath = path.join(
  __dirname,
  root,
  componentName,
  componentName + '.java'
)

// mkdirSync
if (!fs.existsSync(targetDirPath)) {
  fs.mkdirSync(targetDirPath)
  console.log('The ' + targetDirPath + ' folder has been created!')
}else{
  clean(targetDirPath)
}

// writeFile async
if (!fs.existsSync(targetFilePath)) {
  fs.writeFile(targetFilePath, content, err => {
    if (err) throw err
    console.log('The ' + targetFilePath + ' has been created!')
  })
} else {
  console.error('error!\n' + targetFilePath + ' has already been existed!')
}
