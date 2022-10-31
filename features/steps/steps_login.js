const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')


Given('que esteja na home do WebSite', async function () {
    await page.goto('http://automationpractice.com/')
});

When('eu clico em sign in no canto superior', async function () {
    await page.locator('a[class="login"]').click()
});


When('preencho email e password corretamente', async function () {
    await page.locator('input[id="email"]').fill("teste@login.com")
    await page.locator('input[name="passwd"]').fill("123456789")
});


When('clico no botão Sign in', async function () {
    await page.locator('button[id="SubmitLogin"]').click()
});



Then('o login é realizado com sucesso exibindo a mensagem {string}', async function () {
    await expect(page.locator('.info-account')).toContainText('Welcome to your account. Here you can manage all of your personal information and orders.')
});



Then('exibe o nome do usuário no menu', async function () {
    await expect(page.locator('div[class=header_user_info] a span')).toContainText('Teste Login')
});

console.log("Login realizado com sucesso!")
