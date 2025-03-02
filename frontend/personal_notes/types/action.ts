export interface getActionType {
    endpoint: string;
}

export interface postActionType {
    endpoint: string;
    body: Record<string, unknown>;
}

export interface putActionType {
    endpoint: string;
    body: Record<string, unknown>;
}

export interface deleteActionType {
    endpoint: string;
    body: Record<string, unknown>;
}
