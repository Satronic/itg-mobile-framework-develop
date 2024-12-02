import RichText from './RichText'
import TabBarContainer from './TabBar'

type AllowedComponents = Record<string, any>

export const customComponents: AllowedComponents = {
  'rich-text': RichText,
  'tabBar-Navigator': TabBarContainer,
}
