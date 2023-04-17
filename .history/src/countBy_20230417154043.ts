export default function countBy(arr: (string | number)[]){
    return reduce((acc: CountList, item) => {
        if (acc[item]) {
          acc[item] += 1;
        } else {
          acc[item] = 1;
        }
        return acc;
      }, {});
      console.log(total);
    }
};
