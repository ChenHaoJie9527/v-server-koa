const throwError = (code: number, message: string) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

export default {
  throwError,
};
