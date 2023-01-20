import React, { ReactElement } from 'react';
import { LINK_TARGET_ATTRIBUTES } from '../constants/typings';

interface Props {
    href: string;
    linkTitle: string;
    linkClassName: string; // custom injected classNames
    target: LINK_TARGET_ATTRIBUTES;
}

const Link = (props: Props): ReactElement => {
    const { target, linkClassName, href, linkTitle } = props;

    const onClick = (): void => {
        // sending clicked link url to analytics
        console.log(href);
    };

    return (
        <a
            className={`default-link ${linkClassName ?? ''}`}
            target={target}
            href={href}
            onClick={onClick}
        >
            {linkTitle}
        </a>
    );
};

export default Link;
