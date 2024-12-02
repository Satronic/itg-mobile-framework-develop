/* eslint-disable no-console */
const { remote } = require('webdriverio')

const { wdOpts } = require('.')

const TEST_CREDENTIALS = {
  email: 'alan.agustin@itglobers.com',
  password: 'Alan1234.',
}

async function runTest() {
  let driver

  try {
    driver = await remote(wdOpts)

    // Select the initial login button by id
    const initialLoginButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="signin-button"]'
    )

    // Validate that the element is visible
    if (await initialLoginButton.isDisplayed()) {
      await initialLoginButton.click()
    } else {
      throw new Error('Initial login button is not displayed.')
    }

    await driver.pause(2000)

    // Fill in the email input
    const emailInput = await driver.$(
      '//android.widget.EditText[@resource-id="emailInput"]'
    )

    if (await emailInput.isDisplayed()) {
      await emailInput.setValue(TEST_CREDENTIALS.email)
    } else {
      throw new Error('Email input field is not displayed.')
    }

    // Fill in the password input
    const passwordInput = await driver.$(
      '//android.widget.EditText[@resource-id="pwInputTest"]'
    )

    if (await passwordInput.isDisplayed()) {
      await passwordInput.setValue(TEST_CREDENTIALS.password)
    } else {
      throw new Error('Password input field is not displayed.')
    }

    // Click the final login button
    const loginButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="handleSubmit"]'
    )

    if (await loginButton.isDisplayed()) {
      await loginButton.click()
    } else {
      throw new Error('Final login button is not displayed.')
    }

    // Pause to allow time for the login process to complete
    await driver.pause(8000)

    // Check if the header element is present on the home screen
    const headerElement = await driver.$(
      '//android.view.ViewGroup[@resource-id="header"]'
    )

    if (await headerElement.isDisplayed()) {
      console.log('Login successful')
    } else {
      throw new Error('Login failed: Header element is not displayed.')
    }
  } catch (error) {
    console.error('An error occurred during the test execution:', error)
  } finally {
    if (driver) {
      try {
        await driver.pause(3000)
        await driver.deleteSession()
      } catch (cleanupError) {
        console.error('An error occurred during session cleanup:', cleanupError)
      }
    }
  }
}

runTest().catch((error) => {
  console.error('An unexpected error occurred:', error)
})
