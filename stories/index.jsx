/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from 'storybook-inspecthtml';
import CenterDecorator from '../.storybook/centerDecorator';
import 'rex-core';

import {
  SIZE,
  DEFAULT_SIZE,
  DISPLAY,
  DEFAULT_DISPLAY,
  ALIGNMENT,
  DEFAULT_ALIGN,
} from '../src/props';

const Headings =
  process.env.NODE_ENV === 'production'
    ? require('../build/node_modules/rex-headings').default
    : require('../src/Headings.jsx').default;

const stories = storiesOf('Headings', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(CenterDecorator);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);

// Stories
stories.add('default', () => {
  const sampletext = text('Sample text', 'This is a sample text.');

  return <Headings>{sampletext}</Headings>;
});

stories.add('with size options', () => {
  const sampletext = text(
    'Sample text',
    'This is a sample text. Try all different options here.'
  );

  const label = 'Size';
  const options = Object.keys(SIZE);
  const value = select(label, options, DEFAULT_SIZE);

  return <Headings size={value}>{sampletext}</Headings>;
});
stories.add('with all size options', () => {
  const sampletext = text(
    'Sample text',
    'This is a sample text. Try all different options here.'
  );

  const list = Object.keys(SIZE).map(size => (
    <Headings size={size} key={size}>
      {sampletext}
    </Headings>
  ));

  return <React.Fragment>{list}</React.Fragment>;
});

stories.add('with display options', () => {
  const sampletext = text(
    'Sample text',
    'This is a sample text. Try all different options here.'
  );

  const label = 'Display';
  const options = Object.keys(DISPLAY);
  const value = select(label, options, DEFAULT_DISPLAY);

  return <Headings display={value}>{sampletext}</Headings>;
});

stories.add('with all display options', () => {
  const sampletext = text('Sample text', 'This is a sample text.');

  const list = Object.keys(DISPLAY).map(display => (
    <Headings display={display} key={display}>
      {sampletext}
    </Headings>
  ));

  return <React.Fragment>{list}</React.Fragment>;
});

stories.add('with secondary text', () => {
  const sampleText = text('Sample text', 'This is a sample');
  const secondaryText = text('Secondary text', 'with secondary text');

  return (
    <Headings hasSecondary secondaryText={secondaryText}>
      {sampleText}
    </Headings>
  );
});

stories.add('with classNames', () => {
  const sampleText = text('Sample text', 'This is a sample');
  const className = text('Class names', 'main-title active');

  const label = 'Display';
  const options = Object.keys(DISPLAY);
  const value = select(label, options, DEFAULT_DISPLAY);

  return (
    <Headings className={className} display={value}>
      {sampleText}
    </Headings>
  );
});

stories.add('with alignment options', () => {
  const sampletext = text(
    'Sample text',
    'This is a sample text. Try all different options here.'
  );

  const label = 'Alignment';
  const options = Object.keys(ALIGNMENT);
  const value = select(label, options, DEFAULT_ALIGN);

  return (
    <React.Fragment>
      <Headings align={value}>{sampletext}</Headings>
    </React.Fragment>
  );
});

stories.add('with all aligment options', () => {
  const sampletext = text(
    'Sample text',
    'This is a sample text. Try all different options here.'
  );

  const list = Object.keys(ALIGNMENT).map(align => (
    <Headings align={align} key={align}>
      {sampletext}
    </Headings>
  ));

  return <React.Fragment>{list}</React.Fragment>;
});
