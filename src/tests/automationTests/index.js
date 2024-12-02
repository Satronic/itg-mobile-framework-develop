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

module.exports = { wdOpts }
