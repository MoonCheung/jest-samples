export const config = {
  getEnv() {
    // 很复杂的逻辑...
    return 'test';
  }
};

export const configObj = {
  get env() {
    return 'test';
  }
};

export const getEnv = () => 'test';

export const env = 'test';
