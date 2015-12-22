// Original Code
var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    }
};

// Refactored for Performance
var yourself = {
    fibonacci: function(n) {
        return (n < 2) ? n : fibonacci_cached(n - 1) + fibonacci_cached(n - 2);
    }
}

var fibonacci_cached = memoizer([0, 1], function (recur, n) {
       return recur(n - 1) + recur(n - 2);
});

function memoizer(memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
}