import {IEndpointSocketScope, OnConnectCallback} from '@essential-projects/websocket_contracts';
import * as http from 'http';

export interface IHttpSocketAdapter {

  /**
   * Executes the supplied callback each time a client connects to the socket.
   *
   * @param  {OnConnectCallback} callback
   * @returns void
   */
  onConnect(callback: OnConnectCallback): void;

  /**
   * Sends a message using the supplied event type to all clients connected to
   * the socket.
   *
   * @param  {string} eventType The event type used to send the message.
   * @param  {TMessage} message The message to be sent.
   * @returns void
   */
  emit<TMessage>(eventType: string, message: TMessage): void;
  initializeAdapter(httpServer: http.Server): Promise<any> | any;
  getNamespace(namespaceIdentifier: string): IEndpointSocketScope;
  dispose(): Promise<void> | void;
}
