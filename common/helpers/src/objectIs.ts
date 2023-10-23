import sortObjectByKeysAndStringify from "./sortObjectByKeysAndStringify";

/**
 * function returns `true` if given objects are equal to each other.
 */
const objectIs = (
  firstObject: any,
  secondObject: any
) => {
  return (
    sortObjectByKeysAndStringify(firstObject) ===
    sortObjectByKeysAndStringify(secondObject)
  );
};

export default objectIs;
