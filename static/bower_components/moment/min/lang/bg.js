// moment.js language configuration
// language : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz
(function () {
    function e(e) {
        e.lang("bg", {
            months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
            monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
            weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
            weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
            weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "h:mm",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
                nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
                nextWeek: "dddd [\u0432] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0441\u043b\u0435\u0434 %s",
                past: "\u043f\u0440\u0435\u0434\u0438 %s",
                s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                h: "\u0447\u0430\u0441",
                hh: "%d \u0447\u0430\u0441\u0430",
                d: "\u0434\u0435\u043d",
                dd: "%d \u0434\u043d\u0438",
                M: "\u043c\u0435\u0441\u0435\u0446",
                MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
            },
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return e === 0 ? e + "-\u0435\u0432" : n === 0 ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : t === 1 ? e + "-\u0432\u0438" : t === 2 ? e + "-\u0440\u0438" : t === 7 || t === 8 ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
            },
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();