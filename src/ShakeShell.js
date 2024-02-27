class ShakeShell {
    #wt;
    #commands = new Map();
    #streams = [];

    constructor(url) {
        this.#wt = new WebTransport(url);
    }

   
    async setUpBidirectional(sendOrder="596996858") {
        try {
            const stream = await this.#wt.createBidirectionalStream({
                sendOrder: sendOrder,
              });
            this.#streams.push(stream);
            await this.readData(stream.readable);
        } catch(e) {
            console.log(e);
        }
      }


      async receiveBidirectional() {
        const bds = this.#wt.incomingBidirectionalStreams;
        const reader = bds.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          // value is an instance of WebTransportBidirectionalStream
          await readData(value.readable);
        }
      }
      
      async readData(readable) {
        const reader = readable.getReader();
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          // value is a Uint8Array.
          console.log(value);
        }
      }
      
      async writeData(writable, command) {
        const writer = writable.getWriter();
        const encoder = new TextEncoder();
        const data = encoder.encode(command);
        writer.write(data);
      }
}

export {
    ShakeShell
}