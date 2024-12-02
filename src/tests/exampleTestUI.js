/* eslint-disable no-console */
const { remote } = require('webdriverio')

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:automationName': 'UiAutomator2', // XCUITest (IOS)
  'appium:appPackage': 'com.itgmobileframework',
  'appium:appActivity': 'com.itgmobileframework.MainActivity',
  'appium:noReset': true,
}

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
}

async function runTest() {
  const driver = await remote(wdOpts)

  try {
    // Selected element by id
    const richText = await driver.$(
      '//android.widget.TextView[@resource-id="rich-text"]'
    )

    // Validate that the element is visible
    if (richText.isDisplayed()) {
      console.log('Success Test!')
    }
  } finally {
    await driver.pause(3000)
    await driver.deleteSession()
  }
}

runTest().catch(console.error)
