/**
 * Created by liuhuimin on 2018/1/21.
 */


const appId = 'UzIwpzSMQd8e18dbqAV9iAj9-gzGzoHsz';
const appKey = 'hwvTdsbnq4CUpodXAy1Lpmlo';
AV.init({ appId, appKey });


const TestObject = AV.Object.extend('TestObject');
const testObject = new TestObject();
testObject.save({
    words: 'Hello World!'
}).then((object) => {
    // alert('LeanCloud Rocks!');
})

let messageForm = document.querySelector('#messageForm')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value()
    let message = myForm.querySelector('input[name=content]').value()

    let form = new Message()



})
