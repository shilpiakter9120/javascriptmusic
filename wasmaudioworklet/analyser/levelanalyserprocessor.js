const SAMPLE_FRAMES = 128;

class LevelAnalyserProcessor extends AudioWorkletProcessor {
    stats = {
        clips: []
    };

    constructor() {
        super();

        this.port.onmessage = async (msg) => {
            if (msg.data.stats) {
                this.port.postMessage(this.stats);
            }
        };
    }

    process(inputs, outputs, parameters) {
        const numChannels = inputs[0].length;
        const threshold = 0.9;

        for (let ch = 0; ch < numChannels; ch++) {
            const channeldata = inputs[0][ch];
            for (let n = 0; n < SAMPLE_FRAMES; n++) {

                if (Math.abs(channeldata[n]) >= threshold) {
                    this.stats.clips.push({
                        channel: ch,
                        position: n,
                        time: (n / sampleRate)
                    });
                }
            }
        }
        return false;
    }
}

registerProcessor('levelanalyserprocessor', LevelAnalyserProcessor);
