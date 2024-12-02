# Automated Tests

__Automated tests__ are a process by which software tests are executed automatically, that is, without manual intervention. These tests are designed to verify the behavior of an application or software system according to certain predefined criteria or requirements.

## Getting started

### Install packages

To start using Appium and writing tests, we need to install the following packages:

- [Appium](https://appium.io/docs/en/latest/)
- [uiautomator2](https://github.com/appium/appium-uiautomator2-driver) (driver for Android)
- XCUITest (driver for iOS)
- [webdriverio](https://webdriver.io/es/)

> In our project, we already have all these dependencies installed, you just need to run _`yarn`_.

Once the dependencies are installed, make sure that the [minimum requirements](https://appium.io/docs/en/2.0/intro/requirements/)  of your system are met.

It is worth mentioning that all these dependencies can be installed globally if desired, in order to run the tests outside of the project environment.


### Test it works

After installing the dependencies, open a terminal in the project and run the command `appium`. If everything was installed correctly, you should see the following in the console:

![IMG-Appium-Server](https://i.imgur.com/yCOSxKW.png)

## Writing tests

### Capabilities

Before starting to write a test, we need to understand the concept of __capabilities__. These are a set of parameters used to start an Appium session and define its behavior.

Main capabilities:

```js
const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'com.itgmobileframework',
  'appium:appActivity': 'com.itgmobileframework.MainActivity',
}
```

| capabilities | Description     |
| :-------- | :------- |
| `platformName` | Platform name: Android / iOS |
| `deviceName` | Emulator name. You can get it with the command `adb devices` |
| `automationName` | Driver name. For Android: `UiAutomator2`. For iOS: `XCUITest` |
| `appPackage` | Application package |
| `appActivity` | Initial activity of the application |

One way to get the _appPackage_ and _appActivity_ is while running the application where you want to perform the tests, run the command `adb shell`, and then `dumpsys window displays | grep -E ‘mCurrentFocus’`. In the case of our project, these are the values shown in the example above.

> A very useful capability is `appium:noReset` set to true, as it allows running the test without resetting the application.

You can see the complete list of capabilities [here](https://appium.io/docs/en/latest/guides/caps/).

### Build and run test

Once the capabilities are defined, you can build your test like the following example:

```js
const { remote } = require('webdriverio')

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'host.exp.exponent',
  'appium:appActivity': 'host.exp.exponent.experience.HomeActivity',
  'appium:noReset': true,
}

// Webdriver host and port configurations
const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
}

async function runTest() {
    // Initialize webdriver instance
  const driver = await remote(wdOpts)

   // Write your test below:
  try {
    // Select a button using a selector
    const btnTest = await driver.$(
      '//android.view.ViewGroup[@resource-id="test-button"]'
    )
    // Click the button
    await btnTest.click()

  } finally {
      // Pause and end the session
    await driver.pause(1000)
    await driver.deleteSession()
  }
}

// Run the test
runTest().catch(console.error)
```

In this example, we write a test that looks for a specific button in the application using a selector, clicks on it, and then ends the Appium session.

You can find different types of [selectors](https://webdriver.io/es/docs/selectors/) and actions that can be performed in the [Webdriverio documentation](https://webdriver.io/es/).

To run the test, you need to:
- Application running on the emulator
- Appium server running in the terminal
- Execute the command: `node name_test.js`

> In the file tests/exampleTestUI.js there is a sample test for you to try out!

## Tools

It is recommended to use the tool [Apium Inspector](https://github.com/appium/appium-inspector), as it allows you to connect to your application and view the tree of elements, where you can find each element with its properties such as `id` or `class`, which will be very useful when writing your tests.

![IMG-Appium-Inspector](https://i.imgur.com/tQeVYlG.png)

To connect, you simply need to have your application running on the emulator, the Appium server running in the terminal, and fill in the capabilities within Appium Inspector.