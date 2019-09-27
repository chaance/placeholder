import React from 'react';
import { webFonts } from './src/lib/providers';
import Helmet from 'react-helmet';
import { uniq } from 'lodash';

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
    helmet.base.toComponent(),
    ...uniq(Object.values(webFonts)).map(val => (
      <link key={val} rel="stylesheet" href={val} />
    )),
  ]);
};
