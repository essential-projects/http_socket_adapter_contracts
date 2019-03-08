import {IEndpointSocketScope} from '@essential-projects/websocket_contracts';
import * as http from 'http';

export interface IHttpSocketAdapter {
  initializeAdapter(httpServer: http.Server): Promise<any> | any;
  getNamespace(namespaceIdentifier: string): IEndpointSocketScope;
  dispose(): Promise<void> | void;
}
