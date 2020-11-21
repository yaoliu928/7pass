/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (properties, arr) => {
  arr.forEach((obj) => {
    properties.forEach((prop) => {
      delete obj[prop];
    }
    )
  });
  return arr;
};
exports.excludeByProperty = (property, arr) => {
  const newArr = arr.filter((obj) => {
    return Object.keys(obj).indexOf(property) === -1;
  });
  return newArr;
};
exports.sumDeep = (arr) => {
  const newArr = arr.map((ele) => {
    const arrOfVal = Object.values(ele);
    let sum = 0;
    for (i = 0; i < arrOfVal[0].length; i++) {
      sum = sum + arrOfVal[0][i].val;
    };
    return { objects: sum };
  });
  return newArr;
};
exports.applyStatusColor = (color, arrOfCode) => {
  let newArr = [];
  arrOfCode.forEach(
    (ele) => {
      const valuesOfColor = Object.values(color);
      const keysOfColor = Object.keys(color);
      for (i = 0; i < valuesOfColor.length; i++) {
        if (valuesOfColor[i].indexOf(ele.status) > -1) {
          const codeWithColor = {
            status: ele.status,
            color: keysOfColor[i]
          };
          newArr.push(codeWithColor);
          break;
        }
      }
    }
  );
  return newArr;
};
exports.createGreeting = (cb, greetString) => {
  return name => cb(greetString, name);
};
exports.setDefaults = (objWithDefaultProp) => {
  return obj => {
    const defaultProps = Object.keys(objWithDefaultProp);
    const defaultValues = Object.values(objWithDefaultProp);
    for (i = 0; i < defaultProps.length; i++) {
      if (Object.keys(obj).indexOf(defaultProps[i]) === -1) {
        obj[defaultProps[i]] = defaultValues[i];
      }
    }
    return obj;
  };

};
exports.fetchUserByNameAndUsersCompany = () => { };
