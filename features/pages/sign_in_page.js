const { expect } = require ('@playwright/test')

exports.SignInPage = class SignInPage{

    async createAccount(email){        
        await page.locator('input[id="email_create"]').fill(email)
        await page.locator('button[id="SubmitCreate"]').click()        
    }
}