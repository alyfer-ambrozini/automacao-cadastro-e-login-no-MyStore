const { expect } = require ('@playwright/test')

exports.HomePage = class HomePage{

    async openMyStore(){        
        await page.goto('http://automationpractice.com/')        
    }

    async clickSignIn(){
        await page.locator('a[class="login"]').click()
    }
}