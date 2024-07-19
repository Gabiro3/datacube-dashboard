import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <Image
      src="/static/images/ireme-bg.png"
      layout="fixed"
      width={180}
      height={180}
      alt="Microsoft Excel Logo svg"
      quality="75"
      priority
    />
  )
}
