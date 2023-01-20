import React, { ReactElement } from 'react';
import CardsList from '../features/card/CardsList';
import { useGetCardsListQuery } from '../services/cards';

const PageCards = (): ReactElement => {
    const { isLoading, data: cards } = useGetCardsListQuery();

    return (
        <section className="page page__cards">
            {isLoading ? <span>LOADING...</span> : <CardsList cards={cards} />}
        </section>
    );
};

export default PageCards;
