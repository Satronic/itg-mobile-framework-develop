import React from 'react'
import { TabBarContainer } from 'itg-ecommerce-plugin/tabbar'

export const TabBar = () => {
  return (
    <TabBarContainer
      className={'TabBar-Style'}
      tabs={[
        { path: 'Home', label: 'Home', icon: 'home' },
        {
          path: 'Categories',
          label: 'Categories',
          icon: 'categories',
        },
        { path: 'Checkout', label: 'Checkout', icon: 'checkout' },
        { path: 'Profile', label: 'Profile', icon: 'profile' },
      ]}
    />
  )
}
