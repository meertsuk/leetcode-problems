class TimeLimitedCache {

  private storage: Map<number, {value: number; expireAt: number}>;

  constructor() {
    this.storage = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    const now = Date.now();
    const expireAt = now + duration;

    const entry = this.storage.get(key);
    const isExist = entry !== undefined && entry.expireAt > now;
    this.storage.set(key, {value, expireAt});

    return isExist;
  }

  get(key: number): number {
    const now = Date.now();
    const entry = this.storage.get(key);

    if (!entry) {
      return -1;
    }
    if (entry.expireAt <= now) {
      this.storage.delete(key)
      return -1;
    }

    return entry.value
  }

  count(): number {
    const now = Date.now();
    for ( const [key, entry] of this.storage.entries()) {
      if (entry.expireAt <=now) {
        this.storage.delete(key)
      }
    }
    return this.storage.size;
  }
}