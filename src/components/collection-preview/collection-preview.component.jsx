import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  PreviewTitle,
  PreviewItemsContainer,
} from './collection-preview.styles';

export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer className="collection-preview">
      <PreviewTitle className="title">{title}</PreviewTitle>
      <PreviewItemsContainer className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewItemsContainer>
    </CollectionPreviewContainer>
  );
}
