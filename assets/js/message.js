/**
 * Created by liuhuimin on 2018/1/21.
 */

!function () {
    // var view = document.querySelector('#
    var view = document.querySelector('#message')
    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            console.log(this)
            this.messageForm = view.querySelector('form')
            this.messageList = view.querySelector('ul')
            this.view = view
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: () => {
            // 初始化
            const appId = 'UzIwpzSMQd8e18dbqAV9iAj9-gzGzoHsz'
            const appKey = 'hwvTdsbnq4CUpodXAy1Lpmlo'
            AV.init({ appId, appKey })
        },
        loadMessages: () => {
            // 获取
            var query = new AV.Query('Message');
            query.find().then((message) => {
                let array = message.map((item) => item.attributes)
                array.forEach(item => {
                    let li = document.createElement('li')
                    let h3 = document.createElement('h3')
                    console.log(item.name)
                    h3.innerText = `${item.name}:`
                    let p = document.createElement('p')
                    p.innerText = `${item.message}`
                    li.appendChild(h3)
                    li.appendChild(p)
                    this.messageList.appendChild(li)
                })
            }, (error) => {
                // 异常处理
                alert('请稍后留言')
            });

        },
        bindEvents: function() {
            // 存储
            this.messageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.save()
            })
        },
        save: () => {
            let name = this.messageForm.querySelector('input[name=name]').value
            let message = this.messageForm.querySelector('input[name=content]').value
            if (!name) {
                alert('请输入用户名')
            } else if (!message) {
                alert('请输入留言内容')
            } else if (name && message) {
                const Message = AV.Object.extend('Message');
                const messageObject = new Message();
                messageObject.save({
                    name,
                    message
                }).then((res) => {
                    res = res.attributes
                    alert('发送成功')
                    this.messageForm.querySelector('input[name=name]').value = ''
                    this.messageForm.querySelector('input[name=content]').value = ''
                    let li = document.createElement('li')
                    let h3 = document.createElement('h3')
                    h3.innerText = `${res.name}:`
                    let p = document.createElement('p')
                    p.innerText = `${res.message}`
                    li.appendChild(h3)
                    li.appendChild(p)
                    this.messageList.appendChild(li)
                })
            }
        }
    }
    controller.init(view)



}.call()







