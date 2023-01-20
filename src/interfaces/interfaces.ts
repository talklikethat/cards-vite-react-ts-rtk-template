export interface ICard {
    id: number;
    title: string;
    linkTitle: string;
    link: string;
    text: string;
}

export interface ICardAPI {
    id: number;
    title: IType;
    link_title: string;
    link: string;
    text: string;
    body: IType;
}

export interface IType {
    en: string;
    id: string;
}
