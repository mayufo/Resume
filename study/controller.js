window.Controller = function (options) {
  var init = options.init
  return {
    view: null,
    model: null,
    init: function () {
      this.view = view
      this.model = model
      this.bindEvents()
    },
    bindEvents: function () {}
    }
}
