import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundColor: '#124191',
  },
  bgc: {
    backgroundColor: '#124191',
    minHeight: '100px',
  },
  logo: {
    maxWidth: 160,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" title={<img src=""/>}>
        <Toolbar className={classes.bgc}>                    
          <img src="https://networks.imdea.org/wp-content/uploads/2019/06/2019-06-05-news-img-700x400px.png" alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
