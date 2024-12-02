/* eslint-disable no-console */
const { remote } = require('webdriverio')

const { wdOpts } = require('.')

const TEST_VALUES = {
  term: 'camisa',
}

async function runTest() {
  let driver

  try {
    driver = await remote(wdOpts)

    const initialLoginButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="signin-button"]'
    )

    if (await initialLoginButton.isDisplayed()) {
      await initialLoginButton.click()
    } else {
      throw new Error('Initial login button is not displayed.')
    }

    await driver.pause(2000)

    const guestModeButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="goHomeButton"]'
    )

    if (await guestModeButton.isDisplayed()) {
      await guestModeButton.click()
    } else {
      throw new Error('Guest mode button is not displayed.')
    }

    await driver.pause(3000)

    const searchInput = await driver.$(
      '//android.widget.EditText[@resource-id="search-input"]'
    )

    if (await searchInput.isDisplayed()) {
      await searchInput.setValue(TEST_VALUES.term)
    } else {
      throw new Error('Search input field is not displayed.')
    }

    const searchButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="search-button"]'
    )

    if (await searchButton.isDisplayed()) {
      await searchButton.click()
    } else {
      throw new Error('Search button is not displayed.')
    }

    await driver.pause(10000)

    const searchInfoElement = await driver.$(
      '//android.view.ViewGroup[@resource-id="search-info-container"]'
    )

    if (await searchInfoElement.isDisplayed()) {
      console.log('PLP loaded successfully')
    } else {
      throw new Error('PLP failed to load.')
    }

    const firstProduct = await driver.$(
      '//android.view.ViewGroup[@resource-id="product-summary-container"]'
    )

    if (await firstProduct.isDisplayed()) {
      await firstProduct.click()
    } else {
      throw new Error('First product is not displayed.')
    }

    await driver.pause(5000)

    const pdpElement = await driver.$(
      '//android.view.ViewGroup[@resource-id="ProductDetailName"]'
    )

    if (await pdpElement.isDisplayed()) {
      console.log('PDP loaded successfully')
    } else {
      throw new Error('PDP failed to load.')
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
