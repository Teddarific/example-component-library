import { Button as ChakraButton } from '@chakra-ui/react'

import { Label } from './Label'
export function Button({ label }: { label: string }) {
  return (
    <ChakraButton>
      <Label text={label} />
    </ChakraButton>
  )
}
