// a8_q7.js
// Simple PubSub (publish-subscribe) implementation
class PubSub {
  constructor() {
    this.topics = new Map();
  }

  subscribe(topic, listener) {
    if (!this.topics.has(topic)) this.topics.set(topic, new Set());
    this.topics.get(topic).add(listener);
    return () => this.unsubscribe(topic, listener);
  }

  unsubscribe(topic, listener) {
    if (!this.topics.has(topic)) return;
    this.topics.get(topic).delete(listener);
  }

  publish(topic, data) {
    if (!this.topics.has(topic)) return;
    for (const listener of this.topics.get(topic)) {
      try {
        listener(data);
      } catch (err) {
        console.error('Listener error:', err);
      }
    }
  }
}

// Demo
const bus = new PubSub();
const unsub = bus.subscribe('news', (msg) => console.log('a8_q7 - got news:', msg));
bus.publish('news', { headline: 'PubSub demo' });
unsub();
bus.publish('news', { headline: 'should not be received' });

module.exports = PubSub;