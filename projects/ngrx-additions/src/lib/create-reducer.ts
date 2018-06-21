import { ActionHandlers, ActionWithPayload } from '../contracts';

export function createReducer<TState>(
  handlers: ActionHandlers<TState>
): (state: TState, action: ActionWithPayload) => TState {
  return (state: TState, action: ActionWithPayload) =>
    !!handlers[action.type]
      ? handlers[action.type](action.payload, state)
      : state;
}
