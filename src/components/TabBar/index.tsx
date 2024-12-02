import React from 'react'

import { TabBar } from './TabBar'
import { useTabBar } from './useTabBar'

const TabBarContainer = () => {
  const tabBarProps = useTabBar()

  return <TabBar {...tabBarProps} />
}

export default TabBarContainer
