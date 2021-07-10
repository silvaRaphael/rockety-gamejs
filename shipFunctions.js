function moveShip() {
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
}

function pauseShip() {
    switch (shipN) {
        case 0:
            ship.style.backgroundImage = 'url(image/ships/sBl1-pause.png)'
            break
        case 1:
            ship.style.backgroundImage = 'url(image/ships/sGr1-pause.png)'
            break
        case 2:
            ship.style.backgroundImage = 'url(image/ships/sGr2-pause.png)'
            break
        case 3:
            ship.style.backgroundImage = 'url(image/ships/sGr3-pause.png)'
            break
        case 4:
            ship.style.backgroundImage = 'url(image/ships/sOr1-pause.png)'
            break
        case 5:
            ship.style.backgroundImage = 'url(image/ships/sOr2-pause.png)'
            break
        case 6:
            ship.style.backgroundImage = 'url(image/ships/sYe1-pause.png)'
            break
        case 7:
            ship.style.backgroundImage = 'url(image/ships/sYe2-pause.png)'
            break
    }
}

