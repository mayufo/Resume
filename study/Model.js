window.Model = function (options) {
  let resourceName = optiosn.resourceName
  return {
    init: function () {
      const appId = 'UzIwpzSMQd8e18dbqAV9iAj9-gzGzoHsz'
      const appKey = 'hwvTdsbnq4CUpodXAy1Lpmlo'
      AV.init({ appId, appKey })
    },
    fetch: function () {
      let query = new AV.Query(resourceName)
      return query.find()
    },
    save: function (object) {
      const Message = AV.Object.extend(resourceName)
      const messageObject = new Message()
      return messageObject.save({object})
    }
  }
}