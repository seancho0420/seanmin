var currentDate;

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
            right: 'today',
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
	        currentDate = $(this).data('date');

	        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

	        // alert('Current view: ' + view.name);

	        // change the day's background color just for fun
            // don't change today's bg color            
            $('#calendar .fc-content tbody td').css('background-color', '#F8F8F8');
            $('#calendar .fc-content tbody td.fc-today').css('background-color', '#FCF8E3');
            $(this).css('background-color', '#F2DEDE');

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

    currentDate = $('#calendar .fc-content tbody .fc-today').data('date');
    $('#item_list .ibox-title h5').text(currentDate);

    $('#calendar .fc-content tbody').on('click', 'td', function() {
        $('#item_list .ibox-title h5').text(currentDate);
    });

    $('#out_link').on('click', function() {
        $('#iamout').submit();
    });

    $('head title').text('SEANMIN::' + $('nav ul.nav li.active .nav-label').text());
});


/** Category Color **/
var colorhex = "FF0000";
var hh = 0;
var hexArr = [];

function mouseOverColor(hex) {
    document.getElementById("divpreview").style.visibility = "visible";
    document.getElementById("divpreview").style.backgroundColor = hex;
    document.body.style.cursor = "pointer";
}
function mouseOutMap() {
    if (hh == 0) {
        document.getElementById("divpreview").style.visibility = "hidden";
    } else {
      hh = 0;
    }
    document.getElementById("divpreview").style.backgroundColor = "#" + colorhex;
    document.body.style.cursor = "";
}
function clickColor(hex, seltop, selleft, html5) {
    hh = 1;
    var colorrgb, colornam = "", xhttp, c, r, g, b, i;
    if (html5 && html5 == 5)    {
        c = document.getElementById("html5colorpicker").value;
    } else {
        if (hex == 0)   {
            c = document.getElementById("entercolor").value;
        } else {
            c = hex;
        }
    }
    if (c.substr(0,1) == "#")   {
        c = c.substr(1);
    }
    c = c.replace(/;/g, "");
    if (c.indexOf(",") > -1 || c.toLowerCase().indexOf("rgb") > -1 || c.indexOf("(") > -1) {
        c = c.replace(/rgb/i, "");
        c = c.replace("(", "");
        c = c.replace(")", "");
        c = rgbToHex(c);
    }
    colorhex = c;
    if (colorhex.length == 3) {colorhex = colorhex.substr(0,1) + colorhex.substr(0,1) + colorhex.substr(1,1) + colorhex.substr(1,1) + colorhex.substr(2,1) + colorhex.substr(2,1); }
    colorhex = colorhex.substr(0,6);
    // if (hexArr.length == 0) {checkColorValue(); }
    for (i = 0; i < hexArr.length; i++) {
        if (c.toLowerCase() == hexArr[i].toLowerCase()) {
            colornam = namArr[i];
            break;
        }
        if (c.toLowerCase() == namArr[i].toLowerCase()) {
            colorhex = hexArr[i];
            colornam = namArr[i];            
            break;
        }
        if (c == rgbArr[i]) {
            colorhex = hexArr[i];
            colornam = namArr[i];            
            break;
        }
    }
    colorhex = colorhex.substr(0,10);
    colorhex = colorhex.toUpperCase();

    document.getElementById("colorhexDIV").innerHTML = "#" + colorhex;
    document.getElementById("selectedcolor").style.backgroundColor = "#" + colorhex;
}
/** Category Color **/