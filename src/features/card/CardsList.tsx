import React, { ReactElement } from 'react';
import { ICard } from '../../interfaces/interfaces';
import Card from './Card';

interface Props {
    cards: ICard[] | undefined;
}

const CardsList = (props: Props): ReactElement => {
    const { cards } = props;
    return (
        <ul className="cards-list">
            {cards?.length !== 0 &&
                !!Array.isArray(cards) &&
                cards.map((card, index) => {
                    const isCardWithIdOne = card.id === 1;
                    return (
                        <li className={'cards-list__item'} key={`${card.id}-${index}`}>
                            <Card
                                card={card}
                                isRedLink={isCardWithIdOne}
                                target={isCardWithIdOne ? '_blank' : ''}
                            />
                        </li>
                    );
                })}
        </ul>
    );
};

export default CardsList;
