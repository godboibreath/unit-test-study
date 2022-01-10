export class WebSocket {
    constructor(url) {
        this.url = url;
        this.onopen = () => {};
        this.onclose = () => {};
        this.onmessage = () => {};
        this.onerror = () => {};
    }

    static event = {};

    send = (data) => {};

    set onopen(cb) {
        this.onopen = Promise(() => cb(this.event));
    }

    set onclose(cb) {
        this.onclose = Promise(() => cb(this.event));
    }

    set onmessage(cb) {
        this.onmessage = Promise(() => cb(this.event));
    }

    set onerror(cb) {
        this.onerror = Promise(() => cb(this.event));
    }
}
