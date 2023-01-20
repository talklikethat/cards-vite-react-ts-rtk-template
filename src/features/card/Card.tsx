import React, { ReactElement } from 'react';
import { ICard } from '../../interfaces/interfaces';
import { LINK_TARGET_ATTRIBUTES } from '../../constants/typings';
import Link from '../../components/Link';
import './card.css';

interface Props {
    card: ICard;
    isRedLink: boolean;
    target: LINK_TARGET_ATTRIBUTES;
}

const Card = (props: Props): ReactElement => {
    const { card, target, isRedLink } = props;
    const { title, linkTitle, text, link } = card;
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
            <Link
                href={link}
                linkTitle={linkTitle}
                linkClassName={`card__link ${isRedLink ? 'card__link--red' : ''}`}
                target={target}
            />
        </div>
    );
};

export default Card;
