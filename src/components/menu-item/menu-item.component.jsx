import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content>
      <Title className="title">{title.toUpperCase()}</Title>
      <Subtitle className="subtitle">SHOP NOW</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
