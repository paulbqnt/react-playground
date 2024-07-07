import {AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import {CatchingPokemon} from "@mui/icons-material";


export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    Trading App
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Compartment</Button>
                    <Button color='inherit'>Order Logs</Button>
                    <Button color='inherit'>Underlying Check</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}