import {
  AlignmentFlag,
  QLineEditEvents,
  QPushButtonEvents,
} from '@nodegui/nodegui';
import { Button as Btn, LineEdit } from '@nodegui/react-nodegui';
import { StandardProperties } from 'csstype';
import { kebabCase } from 'lodash';
import React, { FC } from 'react';

export const Button: FC<{
  onClick?: () => void;
  children?: string;
  style?: string;
}> = ({ onClick, children, ...props }) => (
  <Btn
    {...props}
    text={children}
    on={onClick && { [QPushButtonEvents.clicked]: onClick }}
  />
);

export const Input: FC<{
  onChange?: (text: string) => void;
  value?: string;
  style?: string;
}> = ({ onChange, value, ...props }) => (
  <LineEdit
    {...props}
    text={value}
    on={onChange && { [QLineEditEvents.textEdited]: onChange }}
  />
);
export const style = (
  props: {
    qpropertyAlignment?: keyof typeof AlignmentFlag;
    // [key: string]: string | undefined;
  } & StandardProperties,
): string =>
  Object.keys(props)
    .reduce<string[]>((acc, key) => {
      if (props[key]) {
        acc.push(`${kebabCase(key)}: "${props[key]}";`);
      }
      return acc;
    }, [])
    .join('\n');
