import '../styles/Prizes.css'
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'

const Prizes = () => { 
    return (  
        <div className="prizes-page">
            <div className="prizes-content">
                <div className='prizes-header'></div>
                <div className='prizes-title'>Prizes</div>
                <div className='prizes-caption'>
                    <div className='prizes-para'>Below are the prizes in this year's prize pool! Prizes will be awarded to:</div>
                    <ul className='prizes-list'>
                        <li>Top three best hack winners</li>
                        <li>Best "Gamification" hack (this year's theme)</li>
                        <li>A whopping <b>25</b> individual raffle winners</li>
                    </ul>  
                </div>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/mechkey.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Mechanical Keyboard
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/lego.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    LEGO Infinity Gauntlet
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/echo.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Echo Dot 4th Generation
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../imgs/charger.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Portable Charger
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/pinkblueoctopus.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Reversible Octopus Plush (Pink and Blue)
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Raffle Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/grayblueoctopus.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Reversible Octopus Plush (Gray and Blue)
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Raffle Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/turtle.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Reversible Turtle Plush
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Raffle Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/pinkbluenarwhal.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Reversible Narwhal Plush (Pink and Blue)
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Raffle Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="../../imgs/blackwhitenarwhal.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Reversible Narwhal Plush, Black and White
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Raffle Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}
 
export default Prizes;    