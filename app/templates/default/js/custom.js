$(document).ready(function() {
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            // right: 'month,agendaWeek,agendaDay'
            right: '',
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },
        dayClick: function(date, jsEvent, view) {
	        console.log(date.getFullYear().toString() + ("0" + (date.getMonth()+1)).slice(-2) + ("0" + date.getDate()).slice(-2));

	        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

	        // alert('Current view: ' + view.name);

	        // change the day's background color just for fun
	        // $(this).css('background-color', 'red');

	    },
        // events: [
        //     {
        //         title: 'All Day Event',
        //         start: new Date(y, m, 1)
        //     },
        //     {
        //         title: 'Long Event',
        //         start: new Date(y, m, d-5),
        //         end: new Date(y, m, d-2),
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: new Date(y, m, d-3, 16, 0),
        //         allDay: false,
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: new Date(y, m, d+4, 16, 0),
        //         allDay: false
        //     },
        //     {
        //         title: 'Meeting',
        //         start: new Date(y, m, d, 10, 30),
        //         allDay: false
        //     },
        //     {
        //         title: 'Lunch',
        //         start: new Date(y, m, d, 12, 0),
        //         end: new Date(y, m, d, 14, 0),
        //         allDay: false
        //     },
        //     {
        //         title: 'Birthday Party',
        //         start: new Date(y, m, d+1, 19, 0),
        //         end: new Date(y, m, d+1, 22, 30),
        //         allDay: false
        //     },
        //     {
        //         title: 'Click for Google',
        //         start: new Date(y, m, 28),
        //         end: new Date(y, m, 29),
        //         url: 'http://google.com/'
        //     }
        // ],
    });
});