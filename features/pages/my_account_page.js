const { expect } = require ('@playwright/test')

exports.MyAccount = class MyAccount{

    async validadeWelcomeMsg(mensagemWelcome){
        await expect(page.locator('.info-account')).toContainText(mensagemWelcome) 
    }

    async validadeNomeMenu(nome, sobrenome){
        await expect(page.locator('div[class=header_user_info] a span')).toContainText(`${nome} ${sobrenome}`)
    }
}