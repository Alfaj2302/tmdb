import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#000',
  color: '#757575',
  padding: '2rem 4rem',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '2rem',
  }
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '1rem',
  '& a': {
    color: 'white',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
    '&:hover': {
      color: '#757575',
    }
  }
}));

const FooterLinksGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
  margin: '2rem 0',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  }
}));

const FooterLink = styled(Link)({
  color: '#757575',
  textDecoration: 'none',
  fontSize: '0.875rem',
  marginBottom: '1rem',
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  }
});

const ServiceCodeButton = styled(Button)({
  backgroundColor: 'transparent',
  border: '1px solid #757575',
  color: '#757575',
  padding: '0.5rem 1rem',
  margin: '1rem 0',
  '&:hover': {
    color: 'white',
    borderColor: 'white',
  }
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <SocialLinks>
          <Link href="#" aria-label="Facebook">
            <Facebook />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter />
          </Link>
          <Link href="#" aria-label="YouTube">
            <YouTube />
          </Link>
        </SocialLinks>

        <FooterLinksGrid>
          <FooterLink href="#">Audio Description</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Gift Cards</FooterLink>
          <FooterLink href="#">Media Center</FooterLink>
          <FooterLink href="#">Investor Relations</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Netflix Shop</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Legal Notices</FooterLink>
          <FooterLink href="#">Cookie Preferences</FooterLink>
          <FooterLink href="#">Corporate Information</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Do Not Sell or Share My Personal Information</FooterLink>
          <FooterLink href="#">Ad Choices</FooterLink>
        </FooterLinksGrid>

        <ServiceCodeButton variant="outlined">
          Service Code
        </ServiceCodeButton>

        <Typography variant="body2" sx={{ mt: 2, color: '#757575' }}>
          © 1997-{new Date().getFullYear()} Netflix, Inc.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
