
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

    console.log('------for of遍历对象------');

    let obj={name:'domarshmello',age:18}//Objects.keys将对象的key作为新的数组

    for(let val of Object.keys(obj)){

        // console.log(typeof val);
        console.log(val , obj[val]) ;
    }

console.log("-------------过滤 filter 返回结果 ： 过滤后的新数组  回调函数返回true  表示这一项会放到新数组---------------")

    let newArr=[2,3,4,5,6].filter(function(item ){

        return 2<item && item<5;

})
    console.log(newArr)

    console.log('------map 将原有数组映射成新数组 ?-------')


    let Arr1=[2,3,4,5].map(function (item) {

        return '<li>${item}</li>' //''是es6中的模板字符串 变量取值使用${}

    });

    // console.log(Arr);

    console.log(Arr1.join(''));

    console.log('---includes--');
    let Arr2=[2,3,4,5,33];

    console.log(Arr2.includes(6));

    console.log('---find 找不到undefined 有2就显示--');
        let result=Arr2.find(function (item,index) {

        return item.toString().indexOf(33)>-1

    });
    console.log(result);



    console.log('---some 找true  停止 返回true---');

    let Arr3=[2,3,4,5,33,55,66];
    let result1=Arr3.some(function (item,index) {

        return item.toString().indexOf(55)>-1

    });
    console.log(result1);



    console.log('---every 找false  停止 返回false---');


    let Arr4=[0,99,2,3,4,5,33,55,66,99];

    let result2=Arr4.every(function (item,index) {
        return item.toString().indexOf(99)>-1

    });
    console.log(result2);

    console.log('--- 收敛4个参数 reduce : 返回的叠加的结果---');

    let arr5=[0,8,6,54,3,4];
    let result5=arr5.reduce(function (pre,next,index,index) {

        console.log(arguments);
        
    });
    // console.log(result5);
