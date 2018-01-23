/**
 * Created by liuhuimin on 2018/1/21.
 */

!function () {
    // var view = document.querySelector('#
    let view = document.querySelector('#message')
    let model = {
        // 获取
        fetch: function () {
            let query = new AV.Query('Message')
            return query.find()
        },
        // 保存
        save: function (name, message) {
            const Message = AV.Object.extend('Message')
            const messageObject = new Message()
            return messageObject.save({
                name,
                message
            })
        },
        init: function() {
            // 初始化
            const appId = 'UzIwpzSMQd8e18dbqAV9iAj9-gzGzoHsz'
            const appKey = 'hwvTdsbnq4CUpodXAy1Lpmlo'
            AV.init({ appId, appKey })
        },
    }
    let controller = {
        view: null,
        model: null,
        init: function(view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.messageForm = view.querySelector('form')
            this.messageList = view.querySelector('ul')
            this.view = view
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function() {
            // 获取
            this.model.fetch().then((message) => {
                let array = message.map((item) => item.attributes)
                array.forEach(item => {
                    this.addElement(item)
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
        save: function () {
            let name = this.messageForm.querySelector('input[name=name]').value
            let message = this.messageForm.querySelector('input[name=content]').value
            if (!name) {
                alert('请输入用户名')
            } else if (!message) {
                alert('请输入留言内容')
            } else if (name && message) {
                this.model.save(name, message).then((res) => {
                    res = res.attributes
                    alert('发送成功')
                    this.messageForm.querySelector('input[name=name]').value = ''
                    this.messageForm.querySelector('input[name=content]').value = ''
                   this.addElement(res)
                })
            }
        },
        addElement: function (res) { 
            let li = document.createElement('li')
            let h3 = document.createElement('h3')
            h3.innerText = `${res.name}:`
            let p = document.createElement('p')
            p.innerText = `${res.message}`
            li.appendChild(h3)
            li.appendChild(p)
            this.messageList.appendChild(li)
        }
    }
    controller.init(view, model)
}.call()







