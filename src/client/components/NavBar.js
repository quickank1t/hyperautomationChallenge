import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { activeItem: 'request page' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="request page"
            active={activeItem === 'request page'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="status page"
            as={Link}
            to="/status"
            active={activeItem === 'status page'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
