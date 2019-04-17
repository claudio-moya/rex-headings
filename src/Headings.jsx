import React from 'react';
import { bool, string, oneOf, element, oneOfType, arrayOf } from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import './Headings.scss';
import {
  SIZE,
  DEFAULT_SIZE,
  DISPLAY,
  DEFAULT_DISPLAY,
  ALIGNMENT,
  DEFAULT_ALIGN,
} from './props';

export default function Headings({
  align,
  children,
  className,
  hasSecondary,
  secondaryText,
  size,
  display,
}) {
  const alignmentClass = ALIGNMENT[align];
  const Tag = SIZE[size];
  const displayClass = DISPLAY[display];
  const classes = composeClassName([alignmentClass, className, displayClass]);
  const secondaryTag = hasSecondary ? (
    <span className="secondary-text">{secondaryText}</span>
  ) : null;

  return (
    <Tag {...classes}>
      {children}
      {secondaryTag}
    </Tag>
  );
}

Headings.defaultProps = {
  children: null,
  className: 'rex-headings',
  align: DEFAULT_ALIGN,
  hasSecondary: false,
  secondaryText: '',
  size: DEFAULT_SIZE,
  display: DEFAULT_DISPLAY,
};

Headings.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  className: string,
  align: oneOf(Object.keys(ALIGNMENT)),
  hasSecondary: bool,
  secondaryText: string,
  size: oneOf(Object.keys(SIZE)),
  display: oneOf(Object.keys(DISPLAY)),
};
