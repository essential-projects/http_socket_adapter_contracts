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
  initializeAdapter(httpServer: http.Server): Promise<any> | any;
  getNamespace(namespaceIdentifier: string): IEndpointSocketScope;
  dispose(): Promise<void> | void;
}
