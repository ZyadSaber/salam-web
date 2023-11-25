const totalFromArray = (array: any[], index: string) => {

  console.log(index)

    let value = 0
     array.forEach((record)=>{
        value = +value + +record[index]
    })
  
    return value.toFixed(1);
  };
  
  export default totalFromArray;
  