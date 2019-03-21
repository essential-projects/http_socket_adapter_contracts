import { MessageCallback, OnConnectCallback } from './callbacks';

/**
 * The socket client encapsulates the communication with a single connected
 * socket endpoint.
 */
export interface ISocketClient {

  /**
   * Disposes all subscriptions.
   *
   * @returns void
   */
  dispose(): void;

  /**
   * Executes the supplied callback each time a client connects to the socket
   * endpoint.
   *
   * @param  {OnConnectCallback} callback
   * @returns void
   */
  onConnect(callback: OnConnectCallback): void;

  /**
   * Subscribes to the event that is emitted when the connected client
   * disconnects.
   *
   * @param  {Function} callback    The callback that is executed when the
   *                                client disconnects.
   * @returns void
   */
  onDisconnect(callback: Function): void;

  /**
   * Sends a message to the connected socket endpoint using the supplied event
   * type.
   *
   * @param  {string} eventType     The event type used to send the message.
   * @param  {TMessage} message     The message to be sent.
   * @returns void
   */
  emit<TMessage>(eventType: string, message: TMessage): void;

  /**
   * Cancels the subscription to the supplied event type for the supplied
   * callback.
   *
   * @param  {string} eventType             The event type to subscribe to.
   * @param  {MessageCallback<TMessage>}    The callback executed when a message
   *                                        is received.
   * @returns void
   */
  off<TMessage>(eventType: string, callback: MessageCallback<TMessage>): void;

  /**
   * Subscribes to the given event type and executes the supplied callback each
   * time a message is received.
   *
   * @param  {string} eventType             The event type to subscribe to.
   * @param  {MessageCallback<TMessage>}    The callback executed when a message
   *                                        is received.
   * @returns void
   */
  on<TMessage>(eventType: string, callback: MessageCallback<TMessage>): void;

  /**
   * Subscribes to the given event type and executes the supplied callback once
   * when the first message is received.
   *
   * @param  {string} eventType                     The event type to subscribe
   *                                                to.
   * @param  {MessageCallback<TMessage>} callback   The callback executed when a
   *                                                message is received.
   * @returns void
   */
  once<TMessage>(eventType: string, callback: MessageCallback<TMessage>): void;
}
