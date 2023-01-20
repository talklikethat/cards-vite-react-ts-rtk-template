import { API, emptySplitApi } from './api';
import { ICard, ICardAPI } from '../interfaces/interfaces';
import { CUT_TEXT_LENGTH } from '../constants/string';
import { cutTextByLength } from '../utils/string';

// Define a service using a base URL and expected endpoints
export const cardsApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getCardsList: builder.query<ICard[], void>({
            query: () => API.CARDS_LIST,
            transformResponse: (response: ICardAPI[]): ICard[] => {
                // transform ICardAPI to ICard
                return response.map((card, index) => {
                    return {
                        id: card.id,
                        link: card.link,
                        text:
                            card.body?.en?.length >= CUT_TEXT_LENGTH
                                ? cutTextByLength(card.body.en, CUT_TEXT_LENGTH)
                                : card.body?.en,
                        title: card.title?.en,
                        linkTitle: card.link_title,
                    };
                });
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCardsListQuery } = cardsApi;
