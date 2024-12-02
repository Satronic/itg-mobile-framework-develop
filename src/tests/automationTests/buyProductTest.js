/* eslint-disable no-console */
const { remote } = require('webdriverio')

const { wdOpts } = require('.')

const TEST_CREDENTIALS = {
  email: 'alan.agustin@itglobers.com',
}

async function runTest() {
  let driver

  try {
    driver = await remote(wdOpts)

    // Select the initial login button by id
    const initialLoginButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="signin-button"]'
    )

    if (await initialLoginButton.isDisplayed()) {
      await initialLoginButton.click()
    } else {
      throw new Error('Initial login button is not displayed.')
    }

    await driver.pause(2000)

    // Select the guest mode button
    const guestModeButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="goHomeButton"]'
    )

    if (await guestModeButton.isDisplayed()) {
      await guestModeButton.click()
    } else {
      throw new Error('Guest mode button is not displayed.')
    }

    await driver.pause(10000)

    const addToCartButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="addToCartButton-container"]'
    )

    if (await addToCartButton.isDisplayed()) {
      await addToCartButton.click()
    } else {
      throw new Error('"Add to Cart" button is not displayed.')
    }

    await driver.pause(6000)

    // Click on the Checkout option in the tab bar
    const checkoutButton = await driver.$(
      '//android.view.ViewGroup[@resource-id="go-cart-icon"]'
    )

    if (await checkoutButton.isDisplayed()) {
      await checkoutButton.click()
    } else {
      throw new Error('Checkout tab is not displayed.')
    }

    await driver.pause(20000)

    // Verify that the product is in the checkout page
    const checkoutProduct = await driver.$(
      '//android.view.View[@resource-id="cartLoadedDiv"]/android.widget.GridView/android.view.View'
    )

    if (await checkoutProduct.isDisplayed()) {
      console.log('Product is visible in the checkout page')
    } else {
      throw new Error('Product is not visible in the checkout page.')
    }

    // Click on the "Proceed to Payment" button
    const proceedToPaymentButton = await driver.$(
      '//android.view.View[@resource-id="cart-to-orderform"]'
    )

    if (await proceedToPaymentButton.isDisplayed()) {
      const { x, y } = await proceedToPaymentButton.getLocation()

      driver.performActions([
        {
          type: 'pointer',
          id: 'pointer1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x, y },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerUp', button: 0 },
          ],
        },
      ])
    } else {
      throw new Error('"Proceed to Payment" button is not displayed.')
    }

    await driver.pause(5000)

    // Fill in the personal data form
    const emailInput = await driver.$(
      '//android.widget.EditText[@resource-id="client-email"]'
    )

    if (await emailInput.isDisplayed()) {
      await emailInput.setValue(TEST_CREDENTIALS.email)
    } else {
      throw new Error('Email input field is not displayed.')
    }

    const firstNameInput = await driver.$(
      '//android.widget.EditText[@resource-id="client-first-name"]'
    )

    if (await firstNameInput.isDisplayed()) {
      await firstNameInput.setValue('TestName')
    } else {
      throw new Error('First name input field is not displayed.')
    }

    const lastNameInput = await driver.$(
      '//android.widget.EditText[@resource-id="client-last-name"]'
    )

    if (await lastNameInput.isDisplayed()) {
      await lastNameInput.setValue('TestLastName')
    } else {
      throw new Error('Last name input field is not displayed.')
    }

    const documentInput = await driver.$(
      '//android.widget.EditText[@resource-id="client-document"]'
    )

    if (await documentInput.isDisplayed()) {
      await documentInput.setValue('1234567890')
    } else {
      throw new Error('Document input field is not displayed.')
    }

    const phoneInput = await driver.$(
      '//android.widget.EditText[@resource-id="client-phone"]'
    )

    if (await phoneInput.isDisplayed()) {
      await phoneInput.setValue('573001234567')
    } else {
      throw new Error('Phone input field is not displayed.')
    }

    await driver.hideKeyboard()

    await driver.pause(2000)

    const goToShippingButton = await driver.$(
      '//android.widget.Button[@resource-id="go-to-shipping"]'
    )

    if (await goToShippingButton.isDisplayed()) {
      await goToShippingButton.click()
    } else {
      throw new Error('"Go to Shipping" button is not displayed.')
    }

    await driver.pause(8000)

    const continueButton = await driver.$(
      '//android.widget.Button[@resource-id="btn-identified-user-button"]'
    )

    if (await continueButton.isDisplayed()) {
      await continueButton.click()
    } else {
      throw new Error('"Continue" button is not displayed.')
    }

    await driver.pause(1000)

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 500, y: 1600 }, // Start point (near the bottom of the screen)
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 1000, x: 500, y: 1200 }, // Move up (scroll down)
          { type: 'pointerUp', button: 0 },
        ],
      },
    ])

    await driver.pause(1000) // Pause briefly to ensure the scroll is done

    const goToPaymentButton = await driver.$(
      '//android.widget.Button[@resource-id="btn-go-to-payment"]'
    )

    if (await goToPaymentButton.isDisplayed()) {
      await goToPaymentButton.click()
    } else {
      throw new Error('"Go To Payment" button is not displayed.')
    }

    const cardButton = await driver.$(
      '//android.view.View[@resource-id="payment-group-creditCardPaymentGroup"]'
    )

    if (await cardButton.isDisplayed()) {
      await cardButton.click()
    } else {
      throw new Error('Credit card payment button is not displayed.')
    }

    await driver.pause(2000)

    const paymentCard = await driver.$(
      '//android.view.View[@resource-id="app-container"]/android.view.View[1]/android.view.View/android.view.View/android.view.View[1]'
    )

    if (await paymentCard.isDisplayed()) {
      const cardBrand = await driver.$(
        '//android.view.View[@resource-id="creditCardpayment-card-0Brand"]'
      )

      if (await cardBrand.isDisplayed()) {
        await cardBrand.click()

        await driver.pause(1000)

        const brandOption = await driver.$(
          '(//android.widget.CheckedTextView[@resource-id="android:id/text1"])[2]'
        )

        if (await brandOption.isDisplayed()) {
          await brandOption.click()
        } else {
          throw new Error('Card brand option is not displayed.')
        }
      } else {
        throw new Error('Card brand dropdown is not displayed.')
      }

      // Completar código de seguridad
      const cardCodeInput = await driver.$(
        '//android.widget.EditText[@resource-id="creditCardpayment-card-0Code"]'
      )

      if (await cardCodeInput.isDisplayed()) {
        await cardCodeInput.setValue('123')
      } else {
        throw new Error('Campo de código de seguridad no está disponible.')
      }
    } else {
      // Fill credit card details
      const cardNumberInput = await driver.$(
        '//android.widget.EditText[@resource-id="creditCardpayment-card-0Number"]'
      )

      if (await cardNumberInput.isDisplayed()) {
        await cardNumberInput.setValue('5254 1336 7440 3564')
      } else {
        throw new Error('Credit card number input field is not displayed.')
      }

      await driver.pause(1000)

      const cardBrand = await driver.$(
        '//android.view.View[@resource-id="creditCardpayment-card-0Brand"]'
      )

      if (await cardBrand.isDisplayed()) {
        await cardBrand.click()

        await driver.pause(1000)

        const brandOption = await driver.$(
          '(//android.widget.CheckedTextView[@resource-id="android:id/text1"])[2]'
        )

        if (await brandOption.isDisplayed()) {
          await brandOption.click()
        } else {
          throw new Error('Card brand option is not displayed.')
        }
      } else {
        throw new Error('Card brand dropdown is not displayed.')
      }

      const cardNameInput = await driver.$(
        '//android.widget.EditText[@resource-id="creditCardpayment-card-0Name"]'
      )

      await driver.pause(1000)

      if (await cardNameInput.isDisplayed()) {
        await cardNameInput.setValue('Test Name')
      } else {
        throw new Error('Cardholder name input field is not displayed.')
      }

      await driver.pause(1000)

      const cardMonth = await driver.$(
        '//android.view.View[@resource-id="creditCardpayment-card-0Month"]'
      )

      if (await cardMonth.isDisplayed()) {
        await cardMonth.click()
      } else {
        throw new Error('Card expiration month dropdown is not displayed.')
      }

      await driver.pause(1000)

      const cardMonthValue = await driver.$(
        '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="11"]'
      )

      if (await cardMonthValue.isDisplayed()) {
        await cardMonthValue.click()
      } else {
        throw new Error('Card expiration month value "11" is not displayed.')
      }

      await driver.pause(1000)

      // Click on the card expiration year dropdown
      const cardYear = await driver.$(
        '//android.view.View[@resource-id="creditCardpayment-card-0Year"]'
      )

      if (await cardYear.isDisplayed()) {
        await cardYear.click()
      } else {
        throw new Error('Card expiration year dropdown is not displayed.')
      }

      const cardYearValue = await driver.$(
        '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="25"]'
      )

      if (await cardYearValue.isDisplayed()) {
        await cardYearValue.click()
      } else {
        throw new Error('Card expiration year value "25" is not displayed.')
      }

      await driver.pause(1000)

      const cardCodeInput = await driver.$(
        '//android.widget.EditText[@resource-id="creditCardpayment-card-0Code"]'
      )

      if (await cardCodeInput.isDisplayed()) {
        await cardCodeInput.setValue('123')
      } else {
        throw new Error('Security code input field is not displayed.')
      }
    }

    await driver.pause(3000)

    const submitPaymentButton = await driver.$(
      '//android.widget.Button[@resource-id="payment-data-submit"]'
    )

    if (await submitPaymentButton.isDisplayed()) {
      const { x, y } = await submitPaymentButton.getLocation()

      driver.performActions([
        {
          type: 'pointer',
          id: 'pointer1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x, y },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerUp', button: 0 },
          ],
        },
      ])
    } else {
      throw new Error('"Submit Payment" button is not displayed.')
    }

    console.log('Purchase flow completed successfully')
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
