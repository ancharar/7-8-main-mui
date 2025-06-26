import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// StyledTypography для описания здания
const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
    '&:last-child': {
        marginBottom: 0,
    },
}));

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    cardIndex: number;
}

function BuildCard({ building, cardIndex }: ComponentProps) {
    // Определяем порядок: четные - картинка слева, нечетные - справа
    const isEven = cardIndex % 2 === 0;
    return (
        <Card sx={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse' }}>
            <CardMedia
                component="img"
                alt={building.title}
                image={building.img}
                sx={{ width: 220, objectFit: 'cover' }}
            />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        {building.title}
                    </Typography>
                    {building.description.map((item, ind) => (
                        <StyledTypography key={ind} variant="body2">
                            {item}
                        </StyledTypography>
                    ))}
                </CardContent>
                <CardActions sx={{ justifyContent: isEven ? 'end' : 'start' }} >
                    <Button size="small">Подробнее</Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default BuildCard;