/**
 * @description 节流函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1：时间戳版本 2: 定时器版本
 *  */
function throttle(func, wait = 1000, type = 1) {
    if (type === 1) {
        let timeout = null;
        return function () {
            const context = this;
            const args = arguments;
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, [...args]);
                }, wait);
            }
        }
    } else {
        let previous = 0;
        return function () {
            const context = this;
            const args = arguments;
            let newDate = new Date().getTime();
            if (newDate - previous > wait) {
                func.apply(context, [...args]);
                previous = newDate;
            }
        }
    }

}

function fn() {
    console.log('throttle')
}

const f1 = throttle(fn);

setInterval(() => {
    f1()
}, 100);