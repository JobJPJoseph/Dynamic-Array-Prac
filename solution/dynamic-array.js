class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);

    // for (let i = 0; i < this.capacity; i++) {
    //   this.data.push('<empty>');
    // }

  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    this.data = [val, ...this.data];
    this.length++;
  }

}


module.exports = DynamicArray;
