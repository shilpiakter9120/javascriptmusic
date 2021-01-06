import { connectLevelAnalyser } from './levelanalysernode.js';

describe.only('levelanalyser', async function () {
    this.timeout(10000);
    it('should analyse levels of audio input', async () => {
        const renderSampleRate = 44100;
        const duration = 500;
        const offlineCtx = new OfflineAudioContext(2,
            duration * renderSampleRate,
            renderSampleRate);

        const oscNode = new OscillatorNode(offlineCtx, {
            frequency: 440, channelCount: 2,
            type: "sine"
        });
        oscNode.start(0);

        const gainNode = offlineCtx.createGain();
        gainNode.gain.setValueAtTime(1, 0);
        oscNode.connect(gainNode);

        const getStats = await connectLevelAnalyser(gainNode);
        const renderedBuffer = await offlineCtx.startRendering();
        console.log(await getStats());
    });
});