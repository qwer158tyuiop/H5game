// 苏月白
// api接口来自韩小韩Web API接口站
// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function () {
    // API的URL
    const apiUrl = 'https://api.vvhan.com/api/ian/shici?type=json';

     // 使用fetch API获取数据
    fetch(apiUrl)
        .then(response => {
            // 检查响应状态
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // 解析JSON数据
        })
        .then(data => {
            // 处理获取到的数据
            console.log(data); // 打印整个JSON对象
            const content = data.data.content; // 获取content字段
            console.log(content); // 打印content内容
            // 您可以在这里做更多的操作，比如将内容显示在页面上
            document.getElementById('api-content').innerText = content;
        })
        .catch(error => {
            // 处理错误
            console.error('Error fetching data: ', error);
        });
});

