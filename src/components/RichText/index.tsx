import React from 'react'

import { RichText } from './RichText'
import { useRichText } from './useRichText'

interface Props {
  text: string
}

const RichTextContainer = ({ text }: Props) => {
  const richTextProps = useRichText()

  return <RichText {...richTextProps} text={text} />
}

export default RichTextContainer
