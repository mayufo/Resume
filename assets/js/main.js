// 加载事件
loading()
// 导航栏
navInit()
// 作品点击
portfolioInit()
// 动画
requestAnimationFrame(animate)
// 高亮nav
findHeightLight()

window.onscroll = function (e) {
    let topHeader = document.querySelector('.topHeader')
    if (window.scrollY > 0) {
        topHeader.classList.add('topHeaderFixed')

    } else {
        topHeader.classList.remove('topHeaderFixed')
    }
    // 高亮nav
    findHeightLight()
}

function findHeightLight() {
    let model = document.querySelectorAll('[data-scroll]')
    let minIndex = 0
    for(let i = 0, len = model.length; i < len; i++) {
        if(Math.abs(model[i].offsetTop - window.scrollY ) < Math.abs(model[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    model[minIndex].classList.add('scroll')

    let href = document.querySelectorAll(`a[href="#${model[minIndex].id}"]`)
    for (let i = 0, item = document.querySelectorAll('.nav > li'), len = item.length; i < len; i++) {
        item[i].classList.remove('heightLight')
    }
    href[0].parentNode.classList.add('heightLight')
}

/**
 * 动画
 * @param time
 */
function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}


function loading() {
   setTimeout( function () {
       let loading = document.querySelector('.shadow')
       loading.style.display = 'none'
       let main = document.querySelector('.main')
       main.style.display = 'block'
   }, 2000)
}

function navInit () {
    let navItem = document.querySelectorAll('.topHeader .nav  li')
    for (let i = 0, len = navItem.length; i < len; i++) {
        navItem[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active')
        }
        navItem[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active')
        }
        navItem[i].children[0].onclick = function (e) {
            e.preventDefault()
            let a = e.currentTarget
            if (a.getAttribute('href')) {
                let endScroll = document.querySelector(a.getAttribute('href')).offsetTop - 100 || null
            }
            let coords = {x: 0, y: window.scrollY}
            let tween = new TWEEN.Tween(coords)
                .to({x: 0, y: endScroll}, 500)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()


        }
    }
}


function portfolioInit () {
    let portfolioArray = document.querySelectorAll('.portfolio  li')
    let barItem = document.getElementById('barItem')
    portfolioArray[0].onclick = function () {
        barItem.className = "bar state-1"
    }
    portfolioArray[1].onclick = function () {
        barItem.className = "bar state-2"
    }
    portfolioArray[2].onclick = function () {
        barItem.className = "bar state-3"
    }
}
