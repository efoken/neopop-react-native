import * as React from 'react';
import ElevatedButton from './components/ElevatedButton';
import FlatButton from './components/FlatButton';
import LinkButton from './components/LinkButton';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ kind, ...props }) => {
    switch (kind) {
        case 'elevated':
            return <ElevatedButton kind={kind} {...props} />;
        case 'flat':
            return <FlatButton kind={kind} {...props} />;
        case 'link':
            return <LinkButton kind={kind} {...props} />;
        default:
            return <FlatButton kind={kind} {...props} />;
    }
};

export default Button;
