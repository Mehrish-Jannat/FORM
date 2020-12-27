class Form {
    constructor(){}

    display(){
        var title = createElement("h2")
        title.html("CarRace")
        title.position(130,0)
        var input = createInput("Name")
        input.position(130,160)
        var halfButton = createButton("Start")
        halfButton.position(250,200)
        halfButton.mousePressed(function(){
            input.hide()
            halfButton.hide()
            var name = input.value()
            playerCount++
            player.updateInfo(name)
            player.updateCount(playerCount)
        var greeting = createElement("h3")
        greeting.html("Why are you even here? " + name)
        greeting.position(60,160)
        })
    }
}