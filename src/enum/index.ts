export enum AccountStatus {
  ACCOUNT_ACTIVATED = 'ACCOUNT_ACTIVATED',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  UNAUTHORISED = 'UNAUTHORISED',
  AUTHORISED = 'AUTHORISED',
}

export interface AppState {
  accountStatus: AccountStatus | null;
}

export enum TextForLines{
  TEXT_FOR_LINES_1 = '"Smart, seamless, and always on point. Your AI chat assistant is just a message away."',
}

export enum ViewTypes {
  LIST= 'list',
  GRID_2= 'grid2',
  GRID_3= 'grid3',
};

