const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default sleep;

// 简单点可以写成一行
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
