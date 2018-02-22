window.Controller = function (options) {
  var init = options.init
  this.bindEvents = options.bindEvents
  return {
    view: null,
    model: null,
    init: function () {
      this.view = view
      this.model = model
      this.bindEvents()
      init.call(this, view, model)
    }
  }
}
