let startScreen = document.querySelector('.menuStart')
let startBtn = document.querySelector('#start')
let screenGame = document.querySelector('.screen')
let configScreen = document.querySelector('.configScreen')
let gameOverScreen = document.querySelector('.gameOver')
let pauseScreen = document.querySelector('.pauseScreen')
let pointScreen = document.querySelector('#points')
let pointPauseScreen = document.querySelector('#pointsPause')
let prepareDiv = document.querySelector('.prepare')
let contagem = document.querySelector('#contagem')
let configVoltar = document.querySelector('#voltar')

let carreiraBtn = document.querySelector('#carreiraBtn')
let facilBtn = document.querySelector('#facilBtn')
let normalBtn = document.querySelector('#normalBtn')
let dificilBtn = document.querySelector('#dificilBtn')

let recordeNum = document.querySelector('#recordeNum')

let obstaculo = document.querySelector('.obstaculo')
let ob1 = document.querySelector('#ob1')
let ob2 = document.querySelector('#ob2')
let ob3 = document.querySelector('#ob3')

let ship = document.querySelector('#ship')

var screenW = (window.screen.width) // window.devicePixelRatio)
var screenH = (window.screen.height) // window.devicePixelRatio)

let sizePrint = document.querySelector('#size')
//sizePrint.innerHTML = screenW+' '+screenH

let shipW = parseInt(window.getComputedStyle(ship).getPropertyValue('width'))
let shipH = parseInt(window.getComputedStyle(ship).getPropertyValue('height'))
let ob1W = parseInt(window.getComputedStyle(ob1).getPropertyValue('width'))
let ob1H = parseInt(window.getComputedStyle(ob1).getPropertyValue('height'))

let control = document.querySelector('#control')

let leftShip = screenW - shipW
let leftOb = screenW - ob1W

let colid = 50 * (screenH / 100) + shipH

ship.style.top = 50 * (screenH / 100) + 'px'

ob1.style.top = -ob1H + 'px'
ob2.style.top = -ob1H + 'px'
ob3.style.top = -ob1H + 'px'

//---------------------------------

control.addEventListener('input', function() {

    ship.style.left = control.value * (leftShip / 100) + 'px'

}, false)

/* 
localStorage.removeItem('velo')
localStorage.removeItem('shipN')
localStorage.removeItem('highScore')
localStorage.removeItem('shipStyle')
localStorage.removeItem('modo')
*/

//startScreen.style.display = 'none'
//configScreen.style.display = 'flex'

window.animTime = localStorage.getItem('velo')

window.addEventListener('load', function welcome() {

    if (localStorage.getItem('velo') == 'carreira') {
        window.animTime = 2000
    }

    if (localStorage.getItem('velo') == null) {
        animTime = 1700
        localStorage.setItem('velo', 1700)
        localStorage.setItem('modo', normal)
        recordeNum.innerHTML = highScore
    } else {
        recordeNum.innerHTML = highScore
    }

    if (localStorage.getItem('shipN') == null) {
        localStorage.setItem('shipN', 0)
    }

    if (localStorage.getItem('shipStyle') == null) {
        localStorage.setItem('shipStyle', 'image/ships/sBl1-stop.png')
    }

    localStorage.removeItem('point')
})


function config() {
    startScreen.style.display = 'none'
    configScreen.style.display = 'flex'
    configVoltar.style.display = 'block'
}

function voltar() {
    location.reload()
}

switch (localStorage.getItem('modo')) {
    case 'carreira':
        carreiraBtn.style.background = '#298cdd'
        break
    case 'facil':
        facilBtn.style.background = '#298cdd'
        break
    case 'normal':
        normalBtn.style.background = '#298cdd'
        break
    case 'dificil':
        dificilBtn.style.background = '#298cdd'
        break
}

/* carreiraBtn.addEventListener('click', function() {

    localStorage.setItem('velo', 'carreira')

    localStorage.setItem('modo','carreira')

    carreiraBtn.style.background = '#298cdd'
    facilBtn.style.background = '#085fa6'
    normalBtn.style.background = '#085fa6'
    dificilBtn.style.background = '#085fa6'
}) */

facilBtn.addEventListener('click', function() {

    localStorage.setItem('velo', 2200)

    localStorage.setItem('modo','facil')

    // carreiraBtn.style.background = '#085fa6'
    facilBtn.style.background = '#298cdd'
    normalBtn.style.background = '#085fa6'
    dificilBtn.style.background = '#085fa6'
})

normalBtn.addEventListener('click', function() {

    localStorage.setItem('velo', 1700)

    localStorage.setItem('modo','normal')

    // carreiraBtn.style.background = '#085fa6'
    facilBtn.style.background = '#085fa6'
    normalBtn.style.background = '#298cdd'
    dificilBtn.style.background = '#085fa6'
})

dificilBtn.addEventListener('click', function() {

    localStorage.setItem('velo', 1300)

    localStorage.setItem('modo','dificil')

    // carreiraBtn.style.background = '#085fa6'
    facilBtn.style.background = '#085fa6'
    normalBtn.style.background = '#085fa6'
    dificilBtn.style.background = '#298cdd'
})

window.highScore = localStorage.getItem('highScore') || 0;

function sBlue1() {
    localStorage.setItem('shipStyle', 'image/ships/sBl1-stop.png')
    localStorage.setItem('shipN', 0)

    voltar()
}

function sGreen1() {
    localStorage.setItem('shipStyle', 'url(image/ships/sGr1-stop.png)')
    localStorage.setItem('shipN', 1)

    voltar()
}

function sGreen2() {
    localStorage.setItem('shipStyle', 'url(image/ships/sGr2-stop.png)')
    localStorage.setItem('shipN', 2)

    voltar()
}

function sGreen3() {
    localStorage.setItem('shipStyle', 'url(image/ships/sGr3-stop.png)')
    localStorage.setItem('shipN', 3)

    voltar()
}

function sOrange1() {
    localStorage.setItem('shipStyle', 'url(image/ships/sOr1-stop.png)')
    localStorage.setItem('shipN', 4)

    voltar()
}

function sOrange2() {
    localStorage.setItem('shipStyle', 'url(image/ships/sOr2-stop.png)')
    localStorage.setItem('shipN', 5)

    voltar()
}

function sYellow1() {
    localStorage.setItem('shipStyle', 'url(image/ships/sYe1-stop.png)')
    localStorage.setItem('shipN', 6)

    voltar()
}

function sYellow2() {
    localStorage.setItem('shipStyle', 'url(image/ships/sYe2-stop.png)')
    localStorage.setItem('shipN', 7)

    voltar()
}

ship.style.backgroundImage = localStorage.getItem('shipStyle')

let shipN = Number(localStorage.getItem('shipN'))

function start() {

    startScreen.style.display = 'none'
    screenGame.style.display = 'flex'
    gameOverScreen.style.display = 'none'
    configScreen.style.display = 'none'

        // banner()
        game()

    var count = new Number()
    var count = (Number(animTime) / 1000) + (4 - (Number(animTime) / 1000))

    function prepareStart() {
        prepareDiv.style.display = 'flex'
        if ((count - 1) >= 0) {
            count -= 1
            contagem.innerHTML = count
            setTimeout(prepareStart, Number(animTime) / 3)
                //console.log('contagem')
        }
        if (count == 0) {
            prepareDiv.style.display = 'none'
        }
    }
    prepareStart()

    function game() {

        let points = []

        var test = setInterval(teste, 100)

        function teste() {
            pontuacao = points.length - 1
            setTimeout(function() {

                livePoints.innerHTML = pontuacao
            }, Number(animTime))

            localStorage.setItem('point', pontuacao)

            let ob1Top = parseInt(window.getComputedStyle(ob1).getPropertyValue('top'))
            let ob2Top = parseInt(window.getComputedStyle(ob2).getPropertyValue('top'))
            let ob3Top = parseInt(window.getComputedStyle(ob3).getPropertyValue('top'))

            let shipPos = parseInt(window.getComputedStyle(ship).getPropertyValue('left'))

            if (ob1Top + ob1H > screenH / 2 && ob1Top < colid && shipPos + shipW > parseInt(window.getComputedStyle(ob1).getPropertyValue('left')) && shipPos < parseInt(window.getComputedStyle(ob1).getPropertyValue('left')) + ob1W

                ||
                ob2Top + ob1H > screenH / 2 && ob2Top < colid && shipPos + shipW > parseInt(window.getComputedStyle(ob2).getPropertyValue('left')) && shipPos < parseInt(window.getComputedStyle(ob2).getPropertyValue('left')) + ob1W

                ||
                ob3Top + ob1H > screenH / 2 && ob3Top < colid && shipPos + shipW > parseInt(window.getComputedStyle(ob3).getPropertyValue('left')) && shipPos < parseInt(window.getComputedStyle(ob3).getPropertyValue('left')) + ob1W) {

                stop()
            }
        }

        if (localStorage.getItem('modo') !== 'carreira') {

            setTimeout(function() {
                moveShip()
            }, Number(animTime))

            ob1.style.display = 'block'
            ob2.style.display = 'block'
            ob3.style.display = 'block'

            window.timeAll1 = setTimeout(aTimer1, Number(animTime) * 0)
            window.timeAll2 = setTimeout(aTimer2, Number(animTime) * .33)
            window.timeAll3 = setTimeout(aTimer3, Number(animTime) * .66)

            setTimeout(runF1, Number(animTime) + Number(animTime * 0))
            setTimeout(runF2, Number(animTime) + Number(animTime * .33))
            setTimeout(runF3, Number(animTime) + Number(animTime * .66))

            function runF1() {
                ob1.style.animation = 'time1 ' + Number(animTime) / 1000 + 's linear infinite'
            }

            function runF2() {
                ob2.style.animation = 'time1 ' + Number(animTime) / 1000 + 's linear infinite'
            }

            function runF3() {
                ob3.style.animation = 'time1 ' + Number(animTime) / 1000 + 's linear infinite'
            }

            function aTimer1() {
                window.timeInt1 = setInterval(window.sTimer1 = function() {

                    points.push(0)

                    var min = 5
                    var max = 95

                    var random1 = parseInt(Math.random() * (+max - +min) + +min)

                    ob1.style.left = (random1) * (leftOb / 100) + 'px'

                }, Number(animTime))
            }

            function aTimer2() {
                window.timeInt2 = setInterval(window.sTimer2 = function() {

                    points.push(0)

                    var min = 5
                    var max = 95

                    var random2 = parseInt(Math.random() * (+max - +min) + +min)

                    ob2.style.left = (random2) * (leftOb / 100) + 'px'

                }, Number(animTime))
            }

            function aTimer3() {
                window.timeInt3 = setInterval(window.sTimer3 = function() {

                    points.push(0)

                    var min = 5
                    var max = 95

                    var random3 = parseInt(Math.random() * (+max - +min) + +min)

                    ob3.style.left = (random3) * (leftOb / 100) + 'px'

                }, Number(animTime))
            }
        }

        ship.style.left = 50 * (leftShip / 100) + 'px'
        control.value = 50

        function stop() {
            
            if (pontuacao > 10) {
                pauseShip()

                ob1.style.backgroundImage = 'url(image/meteor-pause.png)'
                ob2.style.backgroundImage = 'url(image/meteor-pause.png)'
                ob3.style.backgroundImage = 'url(image/meteor-pause.png)'

                clearInterval(test)
                clearInterval(timeInt1)
                clearInterval(timeInt2)
                clearInterval(timeInt3)
                
                ob1.style.animationPlayState = 'paused'
                ob2.style.animationPlayState = 'paused'
                ob3.style.animationPlayState = 'paused'

                gameOverScreen.style.display = 'flex'

                pontuacao = points.length - 1
                pointScreen.innerHTML = pontuacao

                if (pontuacao > highScore) {
                    highScore = parseInt(pontuacao);
                    localStorage.setItem('highScore', highScore)
                }
            
            } else {
                pauseShip()

                clearInterval(test)
                clearInterval(timeInt1)
                clearInterval(timeInt2)
                clearInterval(timeInt3)

                ob1.style.display = 'none'
                ob2.style.display = 'none'
                ob3.style.display = 'none'

                gameOverScreen.style.display = 'flex'

                pontuacao = points.length - 1
                pointScreen.innerHTML = pontuacao

                if (pontuacao > highScore) {
                    highScore = parseInt(pontuacao);
                    localStorage.setItem('highScore', highScore);
                }
            }
        }
        
        /* videoAd.addEventListener('click', function() {
            adInter()
        //voltarPause()
        }) */

        //let retry = document.querySelector('#retry-btn')

        let btnSair1 = document.querySelector('#sair-btn1')
        let btnSair2 = document.querySelector('#sair-btn2')

        btnSair1.addEventListener('click', function() {
            //console.log('saiu')

            location.reload()
        })

        btnSair2.addEventListener('click', function() {
            //console.log('saiu')

            location.reload()
        })

        let pauseBtn = document.querySelector('#pause')

        let btnVoltar = document.querySelector('#voltar-btn')

        setTimeout(function() {
            pauseBtn.style.display = 'flex'
        }, Number(animTime) * 2)

        function pause() {
            pauseShip()

            ob1.style.backgroundImage = 'url(image/meteor-pause.png)'
            ob2.style.backgroundImage = 'url(image/meteor-pause.png)'
            ob3.style.backgroundImage = 'url(image/meteor-pause.png)'

            //clearInterval(speedChangeTest)
            clearInterval(test)
            clearInterval(timeInt1)
            clearInterval(timeInt2)
            clearInterval(timeInt3)

            ob1.style.animationPlayState = 'paused'
            ob2.style.animationPlayState = 'paused'
            ob3.style.animationPlayState = 'paused'

            pauseScreen.style.display = 'flex'

            pontuacao = points.length - 1
            pointPauseScreen.innerHTML = pontuacao

            if (pontuacao > highScore) {
                highScore = parseInt(pontuacao);
                localStorage.setItem('highScore', highScore);
            }
        }
        
        pauseBtn.addEventListener('click', function() {
            //console.log('paused')

            pause()
        })

        function voltarPause() {
            ob1.style.display = 'block'
            ob2.style.display = 'block'
            ob3.style.display = 'block'

            setTimeout(function() {
                
                switch (shipN) {
                    case 0:
                        ship.style.backgroundImage = 'url(image/ships/sBl1-move.gif)'
                        break
                    case 1:
                        ship.style.backgroundImage = 'url(image/ships/sGr1-move.gif)'
                        break
                    case 2:
                        ship.style.backgroundImage = 'url(image/ships/sGr2-move.gif)'
                        break
                    case 3:
                        ship.style.backgroundImage = 'url(image/ships/sGr3-move.gif)'
                        break
                    case 4:
                        ship.style.backgroundImage = 'url(image/ships/sOr1-move.gif)'
                        break
                    case 5:
                        ship.style.backgroundImage = 'url(image/ships/sOr2-move.gif)'
                        break
                    case 6:
                        ship.style.backgroundImage = 'url(image/ships/sYe1-move.gif)'
                        break
                    case 7:
                        ship.style.backgroundImage = 'url(image/ships/sYe2-move.gif)'
                        break
                }

                ob1.style.backgroundImage = 'url(image/meteor-move.gif)'
                ob2.style.backgroundImage = 'url(image/meteor-move.gif)'
                ob3.style.backgroundImage = 'url(image/meteor-move.gif)'

            }, Number(animTime))

            var count = new Number()
            var count = (Number(animTime) / 1000) + (4 - (Number(animTime) / 1000))

            function prepareStart() {
                prepareDiv.style.display = 'flex'
                if ((count - 1) >= 0) {
                    count -= 1
                    contagem.innerHTML = count
                    setTimeout(prepareStart, Number(animTime) / 3)

                    //console.log('contagem')
                }
                if (count == 0) {
                    prepareDiv.style.display = 'none'
                }
            }
            prepareStart()

            ob1Top = parseInt(window.getComputedStyle(ob1).getPropertyValue('top'))
            ob2Top = parseInt(window.getComputedStyle(ob2).getPropertyValue('top'))
            ob3Top = parseInt(window.getComputedStyle(ob3).getPropertyValue('top'))

            let voltaOb1 = Number(animTime) * (1 - ob1Top / (screenH + ob1H))
            let voltaOb2 = Number(animTime) * (1 - ob2Top / (screenH + ob1H))
            let voltaOb3 = Number(animTime) * (1 - ob3Top / (screenH + ob1H))

            setTimeout(function() {
                test = setInterval(teste, 100)
                //speedChangeTest = setInterval(speedChange,100)
            }, Number(animTime))

            timeAll1 = setTimeout(aTimer1, voltaOb1 - Number(animTime) / 12)
            timeAll2 = setTimeout(aTimer2, voltaOb2 - Number(animTime) / 12)
            timeAll3 = setTimeout(aTimer3, voltaOb3 - Number(animTime) / 12)

            setTimeout(playState, Number(animTime))

            pauseScreen.style.display = 'none'
            gameOverScreen.style.display = 'none'

            //ob1.style.display = 'block'
            //ob2.style.display = 'block'
            //ob3.style.display = 'block'

            function playState() {
                ob1.style.animationPlayState = 'running'
                ob2.style.animationPlayState = 'running'
                ob3.style.animationPlayState = 'running'
            }
        }

        btnVoltar.addEventListener('click', function() {
            //console.log('returned')

            voltarPause()
        })
    }
}