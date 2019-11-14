/*
 * @Description: 删除文件夹
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-12 19:13:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-12 19:15:37
 */
// 删除目标文件夹或文件
function clean(fileUrl) {
    // 如果当前url不存在，则退出
    if (!fs.existsSync(fileUrl)) return;
    // 当前文件为文件夹时
    if (fs.statSync(fileUrl).isDirectory()) {
        var files = fs.readdirSync(fileUrl);
        var len = files.length,
            removeNumber = 0;
        if (len > 0) {
            files.forEach(function(file) {
                removeNumber ++;
                var stats = fs.statSync(fileUrl+'/'+file);
                var url = fileUrl + '/' + file;
                if (fs.statSync(url).isDirectory()) {
                    deleteTarget(url);
                } else {
                    fs.unlinkSync(url);
                }

            });
            if (removeNumber === len) {
                // 删除当前文件夹下的所有文件后，删除当前空文件夹（注：所有的都采用同步删除）
                fs.rmdirSync(fileUrl);
                console.log('删除文件夹' + fileUrl + '成功');
            }
        } else {
            fs.rmdirSync(fileUrl)
        }
    } else {
        // 当前文件为文件时
        fs.unlinkSync(fileUrl);
        console.log('删除文件' + fileUrl + '成功');
    }
}

module.exports = clean