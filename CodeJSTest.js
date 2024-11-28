let ask = (question, yes, no) => {
    confirm(question) ? yes() : no()
}

ask("Are you fine ? ",
    () => {alert(":)")},
    () => {alert(":(")} )