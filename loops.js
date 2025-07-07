// 1. for循环基本用法
console.log('1. for循环基本用法：');
for (let i = 0; i < 5; i++) {
    console.log(`第${i + 1}次循环`);
}

// 2. for循环遍历数组
console.log('\n2. for循环遍历数组：');
const fruits = ['苹果', '香蕉', '橙子', '葡萄'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`水果${i + 1}: ${fruits[i]}`);
}

// 3. for...of循环（更简洁的数组遍历方式）
console.log('\n3. for...of循环遍历数组：');
for (const fruit of fruits) {
    console.log(`水果: ${fruit}`);
}

// 4. while循环基本用法
console.log('\n4. while循环基本用法：');
let count = 0;
while (count < 3) {
    console.log(`当前计数: ${count}`);
    count++;
}

// 5. do...while循环（至少执行一次）
console.log('\n5. do...while循环：');
let num = 1;
do {
    console.log(`当前数字: ${num}`);
    num *= 2;
} while (num <= 8);

// 6. break语句示例
console.log('\n6. break语句示例：');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('遇到5，提前结束循环');
        break;
    }
    console.log(`当前数字: ${i}`);
}

// 7. continue语句示例
console.log('\n7. continue语句示例：');
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log('跳过数字2');
        continue;
    }
    console.log(`当前数字: ${i}`);
}

// 8. 嵌套循环示例
console.log('\n8. 嵌套循环示例：');
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`外层循环${i}，内层循环${j}`);
    }
}