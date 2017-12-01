// 加载事件
loading()
// 导航栏
navInit()
// 填充导航
// fillNav()
// 作品点击
portfolioInit()


window.onscroll = function (e) {
    let topHeader = document.querySelector('.topHeader')
    if (window.scrollY > 0) {
        topHeader.classList.add('topHeaderFixed')

    } else {
        topHeader.classList.remove('topHeaderFixed')
    }
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
    let navItem = document.querySelectorAll('.topHeader nav ul li')
    for (let i = 0, len = navItem.length; i < len; i++) {
        navItem[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active')
        }
        navItem[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active')
        }
        navItem[i].childNodes[0].onclick = function (e) {
            e.preventDefault()
            let a = e.currentTarget
            let element = document.querySelector(a.getAttribute('href'))
            window.scrollTo(0, element.offsetTop - 100)

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
