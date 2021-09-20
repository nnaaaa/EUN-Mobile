import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Icon from 'react-native-vector-icons/Ionicons'
const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    more: {
        marginLeft: 'auto'
    }
})

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar>R</Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <Icon name="reorder-three-outline" size={30}/>
                    </IconButton>
                }
                title="Con cho Thang"
                subheader="1m"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image="https://randomwordgenerator.com/img/picture-generator/53e5dd464853ac14f1dc8460962e33791c3ad6e04e507749742d7cd0964fc2_640.jpg"
                title="Image"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Icon name="thumbs-up-outline" size={20}/>
                </IconButton>
                <IconButton aria-label="share">
                    <Icon name="heart-outline" size={20}/>
                </IconButton>
                <IconButton
                    className={classes.more}
                    onClick={handleExpandClick}
                >
                    <Icon name="reorder-three-outline" />
                </IconButton>
            </CardActions>            
        </Card>
    );
}