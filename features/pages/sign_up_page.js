const { expect } = require ('@playwright/test')

exports.SignUpPage = class SignUpPage{

    async fillForm(nome, sobrenome, password){
        // await expect(page.locator('h1[class=page-heading]:has-text("Create an account")')).toContainText('Create an account')
        await page.locator('input[id="id_gender1"]').click()
        await page.locator('input[name="customer_firstname"]').fill(nome)
        await page.locator('input[name="customer_lastname"]').fill(sobrenome)
        await page.locator('input[name="passwd"]').fill(password)
        await page.locator('select[name="days"]').selectOption('1')
        await page.locator('select[name="months"]').selectOption('10')
        await page.locator('select[name="years"]').selectOption('2022')
        await page.locator('input[name="newsletter"]').check()
        await page.locator('input[name="firstname"]').fill(nome)
        await page.locator('input[name="lastname"]').fill(sobrenome)
        await page.locator('input[name="company"]').fill('NextQA')
        await page.locator('input[name="address1"]').fill('Itapeva')
        await page.locator('input[name="city"]').fill('Itapeva')
        await page.locator('select[name="id_state"]').selectOption('44')
        await page.locator('input[name="postcode"]').fill('00011')
        await page.locator('input[name="phone_mobile"]').fill('15998000000')
    }

    async clickRegisterButton(){
        await page.locator('button[name="submitAccount"]').click()
    }
}