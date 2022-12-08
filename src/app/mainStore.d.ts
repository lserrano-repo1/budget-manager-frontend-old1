export interface mainAppState {
    usrLoggedToken : string;
}

export interface ErrorField {
    field: string;
    error: string;
}


export interface InputChange {
    value: string;
    field: string;
}