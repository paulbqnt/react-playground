import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'
export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    console.log({ checked})
    return (
        <Box>
            <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success'/>}  />
        </Box>
    )
}