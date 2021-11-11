export interface RationalResponseEntry {
    statement: string;
    response: string;
}

export interface RationalResponse {
    id: number;
    entries: Array<RationalResponseEntry>
    createdDate: string
}