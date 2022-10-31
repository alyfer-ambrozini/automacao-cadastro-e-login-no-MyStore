const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker')
const { SignInPage } = require('../pages/sign_in_page')
const { SignUpPage } = require('../pages/sign_up_page')
const { MyAccount } = require('../pages/my_account_page')
const { HomePage } = require('../pages/home_page')

const nome = faker.name.firstName()
const sobrenome = faker.name.lastName()
const email = `${nome}_${sobrenome}@gmail.com`
const password = "123456789"
const signInPage = new SignInPage()  
const signUpPage = new SignUpPage()
const myAccount = new MyAccount()
const homePage = new HomePage()

Given('que eu esteja na home do WebSite', async function () {
await homePage.openMyStore()
await homePage.clickSignIn()    
});


When('eu clico em create account', async function () {
    await signInPage.createAccount(email)
});


When('preencho todos os dados do formulário', async function () {
    await signUpPage.fillForm(nome, sobrenome, password)
});


When('clico no botão Register', async function () {
    await signUpPage.clickRegisterButton()
    
});


Then('o cadastro é realizado com sucesso exibindo a mensagem {string}', async function (mensagemWelcome) {    
    await myAccount.validadeWelcomeMsg(mensagemWelcome)
});


Then('exibe o nome do usuário cadastrado no menu', async function () {
    await myAccount.validadeNomeMenu(nome, sobrenome)
});

console.log(`Cadastro realizado com sucesso!\nDados: \nNome:${nome}\nSobrenome:${sobrenome}\nEmail:${email}`)