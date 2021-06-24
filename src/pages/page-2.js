import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import React, { useState } from "react";
import Seo from "../components/seo";
import Card from "../components/wizard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const SecondPage = () => {
  const classes = useStyles();
  const [todoItems, setTodo] = useState([])
  const [clickTime, handleClickTime] = useState(0)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => navigate('/')} key='Home'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Página Inicial' />
        </ListItem>
        <ListItem button onClick={() => navigate('/page-2')} key='Page2'>
          <ListItemText primary='Página 2' />
        </ListItem>
      </List>
    </div>
  );

  const clickToAddTime = () => {
    handleClickTime(clickTime + 1)
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter')
    {
      const todos = [...todoItems, e.target.value]
      setTodo(todos)
      e.target.value = ''
    }
  }

  const handleDel = (id) => {
    const deletedList = todoItems.filter((item, index) => index !== id)
    setTodo(deletedList)
  }
  
  return (
    <div className={classes.root}>
      <React.Fragment key='left'>
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
        <Seo title="Page two" />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toggleDrawer('right', true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Página 2
            </Typography>
          </Toolbar>
        </AppBar>

        <Card />
      <Divider style={{margin: '20px auto'}} />
      <Typography variant="h3">To-do list</Typography>
      {todoItems.length > 0 && 
      (<List component="nav" className={classes.root} aria-label="mailbox folders">
        {todoItems.map((item, index) => (
        <Tooltip title="Clique para excluir este item" placement="top-start">
          <ListItem key={index} onClick={() => handleDel(index)} button>
          <ListItemText primary={item} />
        </ListItem></Tooltip>))
        }
      </List>)}
      <FormControl fullWidth margin='dense'>
        <TextField
          id="standard-full-width"
          label="Tarefa"
          style={{ margin: 8 }}
          helperText="Digite uma tarefa e aperte [ENTER]"
          onKeyDown={handleKeyDown}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
      <Divider style={{margin: '20px auto'}} />
      <Button onClick={() => navigate('/')} variant="outlined" color="secondary">Navegue até a home</Button>
      <Button onClick={clickToAddTime} variant="outlined"   color="secondary">        
        {clickTime == 0 ? 'Você ainda não clicou' :
        `Você clicou ${clickTime} vez${clickTime > 1 ? 'es' : ''}`}
      </Button>
      
      <Divider style={{margin: '20px auto'}} />
      
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-secondary-name" label="Nome" color="primary" />
        <TextField id="standard-secondary-email" label="E-mail" color="primary" />

        <Button onClick={() => console.log('page-2')} variant="outlined" color="primary">Enviar</Button>
      </form>
      </div>
  )
}

export default SecondPage
