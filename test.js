/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-14 19:02:49
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-14 19:13:03
 */
var folders = require('./folders')
console.log(folders.getCurrent())
folders.list(folders.getCurrent().path).then((res)=>{
    console.log(res)
})
