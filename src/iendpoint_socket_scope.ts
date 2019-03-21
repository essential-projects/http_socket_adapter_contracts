import { OnConnectCallback } from './callbacks';

/**
 * A WebSocket endpoint that clients can connect to.
 */
export interface IEndpointSocketScope {

  /**
   * Executes the supplied callback each time a client connects to the socket
   * endpoint.
   *
   * @param  {OnConnectCallback} callback
   * @returns void
   */
  onConnect(callback: OnConnectCallback): void;

  /**
   * Sends a message using the supplied event type to all clients connected to
   * the socked endpoint.
   *
   * @param  {string} eventType The event type used to send the message.
   * @param  {TMessage} message The message to be sent.
   * @returns void
   */
  emit<TMessage>(eventType: string, message: TMessage): void;
}
