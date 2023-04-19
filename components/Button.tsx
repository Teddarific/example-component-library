import { Button as ChakraButton } from '@chakra-ui/react'

import { Label } from './Label'
export function Button({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <ChakraButton onClick={onClick}>
      <Label text={label} />
    </ChakraButton>
  )
}
