import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            flexGrow: 0,
            mr: 4
          }}
        >
          TMDB Clone
        </Typography>

        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            flexGrow: 1,
            maxWidth: 600,
            mx: 2,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: alpha('#fff', 0.15),
              '&:hover': {
                backgroundColor: alpha('#fff', 0.25),
              },
              marginRight: 2,
              marginLeft: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <InputBase
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                color: 'inherit',
                width: '100%',
                '& .MuiInputBase-input': {
                  padding: '8px 16px',
                },
              }}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="account of current user"
        >
          <AccountCircleIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
