var APP_ID = 'UzIwpzSMQd8e18dbqAV9iAj9-gzGzoHsz';
var APP_KEY = 'hwvTdsbnq4CUpodXAy1Lpmlo';



var query = new AV.Query('Message');
query.find().then( (message) => {
    console.log(message)
    let array = message.map(item => {item.attributes})
    array.forEach(item => {
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
}, (error) => {
    // 异常处理 处理find
    alert('请稍后留言')
}).then(()=> {}, (error) => {console.log(error)});


AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
// 创建TestObject
var TestObject = AV.Object.extend('TestObject'); // TestObject 表名
// 在表中创建一行数据
var testObject = new TestObject();
// 数据的内容是words: hello world
testObject.save({
    words: 'Hello World!'  // 代表key  value
}).then(function(object) {
    // 保存成功运行alert
    alert('LeanCloud Rocks!');
})

let myForm = document.querySelector('#postMessageForm')
// 监听form上的提交, 防止用户在input上回车,submit 可以监听到回车和点击btn
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value()
    let Message = AV.Object.extend('Message')
    let message = new Message()

    message.save({
        'name': name,
        'content': content
    }).then((object) => {
        alert('存入成功')
        console.log(object)
        // window.location.reload() // 刷新
        // 精确修改
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
})

//
query.find({success: fn1, fail: fn2})
// promise的写法
query.find().then(fn1, fn2) // find 成功调用fn1, 失败掉fn2

query.find().then(fn1, fn2).then(fn3, fn4) // find 成功调用fn1, 失败掉fn2, fn1 成功 调用fn3, 失败调用fn4


!function () {
    var view = document.querySelector('section.message')
    // 数据有关的
    var model = {
        // 获取数据
        fetch: function () {

        },
        // 存数据
        save: function () {

        }
    }

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view) {
            this.view = view
        }
    }
}.call()
