type THandler<A extends any[] = unknown[]> = (...args: A) => void;
type TMapInterface<P> = P[keyof P];

export class EventBus<
  E extends Record<string, string> = Record<string, string>,
  Args extends Record<TMapInterface<E>, any[]> = Record<string, any[]>
> {
  private readonly listeners: {
    [K in TMapInterface<E>]?: THandler<Args[K]>[];
  } = {};

  on<Event extends TMapInterface<E>>(
    event: Event,
    callback: THandler<Args[Event]>
  ) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off<Event extends TMapInterface<E>>(
    event: Event,
    callback: THandler<Args[Event]>
  ) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback
    );
  }

  emit<Event extends TMapInterface<E>>(event: Event, ...args: Args[Event]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}
