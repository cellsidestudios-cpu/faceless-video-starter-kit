// Channel intro: how Claude edits my YouTube videos from three desktop folders.
import { backdrop, beats, fact, hookFrame, payoff, punch } from './format.js';

export default {
  hook(s) {
    s.camera(punch(s, '#claude', { zoom: 1.15 }));
    hookFrame(s, 'Claude edits my *YouTube* videos', { icon: 'clapperboard', color: 'orange' });
    fact(s, '*0* hours editing', { at: '#anymore' });
    s.short.flash('#claude', { color: '#f59f00', alpha: 0.3 });
  },

  folders(s) {
    s.camera(punch(s, '#edited', { zoom: 1.12 }));
    backdrop(s);
    s.short.step(1, 2);
    beats(s, [
      { at: '#three', icon: 'monitor', label: 'My desktop', color: 'blue' },
      { at: '#raw', icon: 'folder-input', label: 'Raw footage', color: 'orange' },
      { at: '#examples', icon: 'folder-heart', label: 'Examples', color: 'purple' },
      { at: '#edited', icon: 'folder-check', label: 'Edited videos', color: 'green' },
    ]);
  },

  tools(s) {
    s.camera(punch(s, 'cuts', { zoom: 1.12 }));
    s.short.jolt('checks');
    backdrop(s, { pattern: 'grid' });
    s.short.step(2, 2);
    beats(s, [
      { at: '#tools', icon: 'wrench', label: 'Claude\'s tools', color: 'yellow' },
      { at: '#ffmpeg', icon: 'scissors', label: 'FFmpeg cuts', color: 'orange' },
      { at: '#whisper', icon: 'captions', label: 'Whisper captions', color: 'blue' },
      { at: '#sound', icon: 'audio-waveform', label: 'Earshot sound', color: 'green' },
    ]);
  },

  turn(s) {
    s.camera(punch(s, '#done'));
    s.short.interrupt('#turn', { flash: false });
    backdrop(s, { glow: '#f59f00', pattern: 'rays' });
    beats(s, [
      { at: '#turn', icon: 'sparkles', label: 'The good part', color: 'yellow' },
      { at: '#drop', icon: 'upload', label: 'Drop a clip', color: 'orange' },
      { at: '#ask', icon: 'message-square', label: 'Tell Claude', color: 'purple' },
      { at: '#done', icon: 'circle-check', label: 'Edit is ready', color: 'green' },
    ]);
  },

  tip(s) {
    s.camera(punch(s, '#every', { zoom: 1.12 }));
    payoff(s, 'Follow the setup', [
      { text: 'Three folders', at: '#follow' },
      { text: 'Every step shown', at: '#every' },
    ]);
  },
};
