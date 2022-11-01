const throwError = (code: number, message: string, status: string) => {
  const err: any = new Error(message);
  err.code = code;
  err.success = status;
  throw err;
};

const assert = (data: any, fn: Function) => {
  if (!data) {
    fn();
  }
}

export default {
  throwError,
  assert,
};
