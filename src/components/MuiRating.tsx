import { Stack, Rating } from "@mui/material"
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// https://www.youtube.com/watch?v=5sgTF15fHqM&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=13

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    const handleChange = (
        _event: React.ChangeEvent<{}>,
        newValue : number | null
    ) => {
        setValue(newValue)
    }
    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
                highlightSelectedOnly
            />
        </Stack>
    )
}