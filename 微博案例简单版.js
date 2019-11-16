/* 简单版要实现的效果
1.能够在文本域中新增内容，点击发布，能发布出去
2.点击删除能够删除内容（原有的内容，还有新发布的内容）
3.能够实现按Ctrl+enter组合键 实现内容的发布 */

/* 用到的知识点
1.能够获取元素 注册事件，新生成内容用到动态生成元素 元素.innerHTML='字符串' document.creatElement('元素')
2.删除的时候用到事件委托
3.用到事件对象 获取键盘code值 */

//1. 获取元素
let btn = document.querySelector('.weibo-btn');
let text = document.querySelector('.weibo-text');
let ul = document.querySelector('.weibo-list');

//2.给按钮注册事件
btn.onclick = function(){
    // 先得到文本域里面发布的内容
    content = text.value;

    // 动态生成新的li
    let li = document.createElement('li');
    // 给li里面添加内容
    // li.innerHTML ='<li><p>'+content+'</p><span>删除</span></li>'
    // 上面的写法可以用模板字符串解决字符串的拼接问题(不用++了)
    li.innerHTML = ` <li><p>${content}</p><span>删除</span></li>`;
    // 用document.createElement创建的元素要手动添加进去才有效
    // 要把后来写的放在前面
    let first = ul.children[0];
    ul.insertBefore(li,first);

    // 清空文本域的内容
    text.value = '';
    
    
    

}