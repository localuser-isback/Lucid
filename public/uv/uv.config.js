/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/uv/',
    bare: 'http://localhost:3001/bare/',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: 'uv/uv.handler.js',
    client: 'uv/uv.client.js',
    bundle: 'uv/uv.bundle.js',
    config: 'uv/uv.config.js',
    sw: 'uv/uv.sw.js',
};
