const tree = {
  value: 3,
  left: {
    value: 6,
    left: { value: 2, left: { value: 9 } },
    right: { value: 11, right: { value: 5 } },
  },
  right: { value: 8, right: { value: 1, left: { value: 7 } } },
};

iterateObj(tree);

function iterateObj(tree) {}
