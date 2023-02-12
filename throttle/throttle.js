function throttle(func, interval) {
    return function wrapper(...args) {
        throttle.queue = () => func.call(this, ...args);
        if (!throttle.isExecuting) {
            execute();
        }

        function execute() {
            if (throttle.queue) {
                throttle.isExecuting = true;
                const theFunc = throttle.queue;
                throttle.queue = null;
                theFunc();
                setTimeout(execute, interval);
            } else {
                isExecuting = false;
            }
        }
    }
}