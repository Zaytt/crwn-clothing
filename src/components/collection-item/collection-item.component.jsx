import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooter className="collection-footer">
        <Name className="name">{name}</Name>
        <Price className="price">${price}</Price>
      </CollectionFooter>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
