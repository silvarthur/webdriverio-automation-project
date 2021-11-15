export default class BasePage {
    async open (path) {
        await browser.url(path)
    }

    async clickOnElement(element) {
        await element.waitForClickable()
        await element.click()
    }

    async sendKeysToAnElement(element, input) {
        await element.waitForDisplayed()
        await element.setValue(input)
    }

    async selectOptionByVisibleText(element, text) {
        await element.waitForExist()
        await element.selectByVisibleText(text)
    }
}