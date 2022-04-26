/* eslint-disable react/function-component-definition */
import Stack from '@mui/material/Stack'
import ButtonMui from '@mui/material/Button'

// eslint-disable-next-line import/prefer-default-export
export function Button() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonMui variant="contained">Share From UI</ButtonMui>
    </Stack>
  )
}
