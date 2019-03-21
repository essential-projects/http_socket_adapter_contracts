import { IIdentity } from '@essential-projects/iam_contracts';
import { ISocketClient } from './isocket_client';

/**
 * The callback executed when a connection to a socket endpoint has been
 * established.
 *
 * @param  {ISocketClient} clientSocket The socket instance to communicate
 *                                      with the connected socket endpoint.
 */
export type OnConnectCallback = (clientSocket: ISocketClient, identity: IIdentity) => void | Promise<void>;

/**
 * A callback executed when a specific message type is received.
 *
 * @param  {TMessage} message   The received message.
 */
export type MessageCallback<TMessage> = (message: TMessage) => void;
