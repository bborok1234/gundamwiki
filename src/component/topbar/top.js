import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.tabs} variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="건프라 정보" href="/wiki" />
          <LinkTab label="갤러리" href="/gallary" />
          <LinkTab label="커뮤니티" href="/community" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>건프라 정보</TabContainer>}
      {value === 1 && <TabContainer>갤러리</TabContainer>}
      {value === 2 && <TabContainer>커뮤니티</TabContainer>}
    </div>
  );
}
