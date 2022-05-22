// 1.防抖 多用于输入框搜索 滚动画面显示
// 持续触发事件的时候，规定时间内没有触发事件才会执行 在规定时间内再次触发则重新计时
function debounce(fn, wait) {
    let t = null;
    return function() {
        const _self = this;
        const args = arguments;
        if(t) {
        clearTimeout(t); 
        }
        t = setTimeout(()=> {
        fn.apply(_self,args)
        }, wait)
    }
}
// 是否延迟触发
function debounce(fn, wait, triggeNow) {
    let t = null;
    return function() {
      const _self = this;
      const args = arguments;
      if(t) {
        clearTimeout(t); 
      }
      if(triggeNow) {
        const exec = !t;
        t = setTimeout(()=> {
          t = null
        }, wait)
        if(exec) {
          fn.apply(_self,args)
        }
      }else {
        t = setTimeout(()=> {
            fn.apply(_self,args)
          }, wait)
      }
    }
}


// 2.节流 多用于防止高频点击提交
// 当持续触发事件的时候，保证一定时间内只调用一次事件处理函数
function throttle(fn,wait) {
    let t = null;
    let prev = new Date().getTime();
    return function() {
      clearTimeout(t)
      const _self = this;
      const args = arguments;
      const cur = new Date().getTime();
      if(cur - prev >= wait) {
        fn.apply(_self,args);
        prev = cur;
        t = null;
      } else {
        t = setTimeout(()=> {
          fn.apply(_self,args);
          t = null;
        }, wait)
      }
    }
}