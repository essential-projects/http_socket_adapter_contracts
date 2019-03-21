import {IEndpointSocketScope, OnConnectCallback} from '@essential-projects/websocket_contracts';
import * as http from 'http';

export interface IHttpSocketAdapter {

  /**
   * Executes the supplied callback each time a client connects to the socket.
   *
   * @param  {OnConnectCallback} callback
   */
  onConnect(callback: OnConnectCallback): void;

  /**
   * Sends a message using the supplied event type to all clients connected to
   * the socket.
   *
   * @param  {string} eventType The event type used to send the message.
   * @param  {TMessage} message The message to be sent.
   */
  emit<TMessage>(eventType: string, message: TMessage): void;

  /**
   * Initializes a socket server using the provided http server.
   *
   * @async
   * @param  {http.Server} httpServer   The http server instance the adapter
   *                                    should be initialized on.
   */
  initializeAdapter(httpServer: http.Server): Promise<void> | void;

  /**
   * Returns an endpoint that can be used to communicate with the provided
   * namespace.
   *
   * @param  {string} namespaceIdentifier   The identifier the namespace is
   *                                        registered with.
   * @returns IEndpointSocketScope          An endpoint representing the
   *                                        namespace.
   */
  getNamespace(namespaceIdentifier: string): IEndpointSocketScope;

  /**
   * Closes all connections held by the socket adapter and disposes all of its
   * artifacts.
   *
   * @async
   */
  dispose(): Promise<void> | void;
}
