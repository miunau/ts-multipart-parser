/* Copyright © 2023 Exact Realty Limited.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

export {
	encodeMultipartMessage,
	liberalBoundaryMatchRegex,
	multipartBoundaryAlphabet,
	generateMultipartBoundary,
	asyncEncoderGenerator,
} from './encodeMultipartMessage.js';
export type {
	TDecodedMultipartMessage,
	TIterable,
} from './encodeMultipartMessage.js';
export { boundaryMatchRegex, boundaryRegex } from './lib/boundaryRegex.js';
export { parseMessage } from './parseMessage.js';
export type { TMessage } from './parseMessage.js';
export { parseMultipartMessage } from './parseMultipartMessage.js';
export type {
	EState,
	TMultipartMessage,
	TMultipartMessageGenerator,
} from './parseMultipartMessage.js';
