import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'TV Shows', icon: <LiveTvIcon /> },
    { text: 'Movies', icon: <MovieIcon /> },
    { text: 'New & Popular', icon: <WhatshotIcon /> },
    { text: 'My List', icon: <PlaylistPlayIcon /> },
    { text: 'Browse by Languages', icon: <LanguageIcon /> },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'black',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#E50914',
            fontWeight: 700,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            cursor: 'pointer',
          }}
        >
          TMDB
        </Typography>

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Navigation Items */}
        {!isMobile && (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                startIcon={item.icon}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#e5e5e5',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Stack>
        )}

        {/* Right Section */}
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Search Bar */}
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {isSearchOpen && (
              <InputBase
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  color: 'inherit',
                  backgroundColor: alpha(theme.palette.common.white, 0.15),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                  },
                  width: '240px',
                  borderRadius: 1,
                  padding: '4px 8px',
                  paddingLeft: '40px',
                }}
              />
            )}
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              sx={{ position: isSearchOpen ? 'absolute' : 'relative', left: isSearchOpen ? 4 : 0 }}
            >
              {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
          </Box>

          {!isMobile && (
            <Tooltip title="Notifications">
              <IconButton color="inherit" size="large">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="Account">
            <IconButton
              color="inherit"
              size="large"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircleIcon />
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              color: 'white',
              marginTop: '8px',
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
