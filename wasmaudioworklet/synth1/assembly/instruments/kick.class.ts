
import { SAMPLERATE } from '../environment';
import { StereoSignal } from '../synth/stereosignal.class';
import { Envelope } from '../synth/envelope.class';
import { SawOscillator } from '../synth/sawoscillator.class';
import { BiQuadFilter, FilterType, Q_BUTTERWORTH } from '../synth/biquad';
import { Noise } from '../synth/noise.class';



export class Kick {
    private _note: f32;
    private velocity: f32;
    readonly envelope: Envelope = new Envelope(0.0, 0.2, 0, 0.2);
    readonly filterenvelope: Envelope = new Envelope(0.0, 0.05, 0.05, 0.1);
    readonly sawoscillator: SawOscillator = new SawOscillator();
    readonly noise: Noise = new Noise();
    
    readonly filter: BiQuadFilter = new BiQuadFilter();
    readonly signal: StereoSignal = new StereoSignal();

    set note(note: f32) {        
        if(note > 1) {            
            this.sawoscillator.frequency = 150;
            this.velocity = note / 16;   
            this.envelope.attack();           
            this.filterenvelope.attack();             
        } else {
            this.envelope.release();
            this.filterenvelope.release();
        }
        this._note = note;
    }

    get note(): f32 {
        return this._note;
    }

    next(): void {        
        let env: f32 = this.envelope.next();
        if(env === 0) {
            this.signal.clear();
            return;
        }
        this.sawoscillator.frequency = 20.0 + (env * 150.0);
        
        this.filter.update_coeffecients(FilterType.LowPass, SAMPLERATE, 
            40 + (this.filterenvelope.next() * 2000), 0.2);

        let osc1: f32 = this.envelope.next() * this.velocity * this.sawoscillator.next() * 0.8 + this.noise.next();

        osc1 = this.filter.process(osc1);
        
        this.signal.left = env * osc1;
        this.signal.right = env * osc1;
    } 
}
  