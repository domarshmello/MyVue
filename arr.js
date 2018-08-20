
    console.log('_______forEach 不支持return_______');


    console.log('_______编程式 自己调用_______');
    let arr=[1,2,3]

    for (let i=0;i<arr.length;i++){

    console.log(arr[i])

}

    console.log('_______声明式 内部实现不关心_______')
    //方案2
    arr.forEach(function(item){

        console.log(item);

})


    arr.b='私有属性';
    console.log('_______for in 不支持 return 并且能遍历对象 改变key的类型变成字符串类型 _______')

    for(let key in arr){

        console.log(typeof key);
        console.log(key);
    }

    console.log('_______for of 支持 return 并且是值of数组 （不能遍历对象）_______')

    for(let val of arr){

        console.log(typeof val);
        console.log(val);
    }

