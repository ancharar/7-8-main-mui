import { useParams, Link } from 'react-router-dom';
import structures from '../data';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Paper from '@mui/material/Paper';

function Building() {
  const { id } = useParams();
  const building = structures[Number(id)];

  if (!building) {
    return (
      <Container>
        <Navbar active="1" />
        <Typography variant="h4" sx={{ mt: 4 }}>Здание не найдено</Typography>
      </Container>
    );
  }

  return (
    <>
      <Navbar active="1" />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Главная</Link>
          <Typography color="text.primary">{building.title}</Typography>
        </Breadcrumbs>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: 320 } }}>
            <img src={building.img} alt={building.title} style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>{building.title}</Typography>
            {building.description.map((desc, i) => (
              <Typography key={i} variant="body1" paragraph>{desc}</Typography>
            ))}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Building;