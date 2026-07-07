export const add = (a, b) => {
  const res = a + b;
  return res;
};

export const sub = (a, b) => {
  const res = a - b;
  return res;
};
export const mul = (a, b) => {
  const res = a * b;
  return res;
};
export const div = (a, b) => {
  const res = a / b;
  return res;
};

let funObj = {
    add: add(),
    sub: sub(),
    mul: mul(),
    div: div()
}

let {add, sub} = funObj

