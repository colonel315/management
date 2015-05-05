/**
 * Created by Trey on 2/28/2015.
 */
$(document).ready(function () {
    "use strict";

    var calendar = $('#calendar').calendar({
        tmpl_path: "../static/bower_components/bootstrap-calendar/tmpls/",
        tmpl_cache: false,
        view: 'month',
        "success": 1,
        events_source: function () {
            return [{
                "id": '293',
                "title": "Classroom Management Plan 1 Due Today",
                "class": "event-important",
                "start": new Date("March 06, 2015 11:59").getTime(),
                "end": new Date("March 06, 2015 11:59").getTime()
            },
            {
                "id": '294',
                "title": "Classroom Management Plan 2 Due Today",
                "class": "event-important",
                "start": new Date("April 09, 2015 11:59").getTime(),
                "end": new Date("April 09, 2015 11:59").getTime()
            },
            {
                "id": '294',
                "title": "Classroom Management Plan 3 Due Today",
                "class": "event-important",
                "start": new Date("April 30, 2015 11:59").getTime(),
                "end": new Date("April 30, 2015 11:59").getTime()
            }]
        },

        onAfterEventsLoad: function (events) {
            if (!events) {
                return;
            }

            var list = $('#event-list');
            list.html('');

            $.each(events, function (key, val) {
                $(document.createElement('li'))
                    .html('<a href="' + val.url + '">' + val.title + '</a>')
                    .appendTo(list);
            });
        },

        onAfterViewLoad: function (view) {
            $('#months').text(this.getTitle());
            $('.btn-group button').removeClass('active');
            $('button[data-calendar-view="' + view + '"]').addClass('active');
        }
    });

    $('.btn-group button[data-calendar-nav]').each(function () {
        var _this = $(this);
        _this.click(function () {
            calendar.navigate(_this.data('calendar-nav'));
        });
    });

    $('.btn-group button[data-calendar-view]').each(function () {
        var _this = $(this);
        _this.click(function () {
            calendar.view(_this.data('calendar-view'));
        });
    });
});