// Initialize map
var map = L.map('map', {
    attributionControl: false,
    minZoom: 11,
}).setView([45.46114855406548, 12.362977581982168], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Markers

// Venezia

var marker1 = L.marker([45.437828, 12.335668]);
marker1.bindTooltip("1", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker1.addTo(map);

var marker2 = L.marker([45.438132, 12.336003]);
marker2.bindTooltip("2", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker2.addTo(map);

var marker3 = L.marker([45.436413, 12.331952]);
marker3.bindTooltip("3", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker3.addTo(map);

var marker4 = L.marker([45.431172, 12.332319]);
marker4.bindTooltip("4", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker4.addTo(map);

var marker5 = L.marker([45.43404, 12.33904]);
marker5.bindTooltip("5", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker5.addTo(map);

var marker6 = L.marker([45.434785, 12.336085]);
marker6.bindTooltip("6", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker6.addTo(map);

var marker7 = L.marker([45.434873, 12.327557]);
marker7.bindTooltip("7", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker7.addTo(map);

var marker8 = L.marker([45.437961, 12.335896]);
marker8.bindTooltip("8", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker8.addTo(map);

var marker9 = L.marker([45.437670, 12.335392]);
marker9.bindTooltip("9", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker9.addTo(map);

var marker10 = L.marker([45.437100, 12.321198]);
marker10.bindTooltip("10", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker10.addTo(map);

var marker11 = L.marker([45.453532, 12.351833]);
marker11.bindTooltip("11", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker11.addTo(map);

var marker12 = L.marker([45.485919, 12.415714]);
marker12.bindTooltip("12", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker12.addTo(map);

var marker13 = L.marker([45.484173, 12.417003]);
marker13.bindTooltip("13", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker13.addTo(map);

var marker14 = L.marker([45.485859, 12.417286]);
marker14.bindTooltip("14", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker14.addTo(map);

var marker15 = L.marker([45.486112, 12.416650]);
marker15.bindTooltip("15", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker15.addTo(map);