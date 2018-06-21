export interface ActionHandlers<TState> {
  [actionType: string]: (payload, state: TState) => TState;
}
