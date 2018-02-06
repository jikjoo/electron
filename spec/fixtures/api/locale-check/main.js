const {app} = require('electron')

app.setLocale('fr')

process.send({locale: app.getLocale()})

app.quit()
