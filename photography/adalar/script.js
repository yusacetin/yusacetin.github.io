// Initialize map
var map = L.map('map', {
    attributionControl: false,
    minZoom: 11,
}).setView([40.890655, 29.085283], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Markers

// Kınalıada

var marker1 = L.marker([40.922588, 29.051593]);
marker1.bindTooltip("1", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker1.addTo(map);

var marker2 = L.marker([40.907445, 29.053212]);
marker2.bindTooltip("2", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker2.addTo(map);

var marker3 = L.marker([40.907283, 29.052749]);
marker3.bindTooltip("3", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker3.addTo(map);

var marker4 = L.marker([40.906230, 29.049757]);
marker4.bindTooltip("4", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker4.addTo(map);

// Burgazada

var marker5 = L.marker([40.881487, 29.068338]);
marker5.bindTooltip("5", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker5.addTo(map);

var marker6 = L.marker([40.884526, 29.067617]);
marker6.bindTooltip("6", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker6.addTo(map);

var marker7 = L.marker([40.884555, 29.066481]);
marker7.bindTooltip("7", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker7.addTo(map);

var marker8 = L.marker([40.886016, 29.056132]);
marker8.bindTooltip("8", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker8.addTo(map);

var marker9 = L.marker([40.884907, 29.056849]);
marker9.bindTooltip("9", {
    permanent: true,
    direction: 'center',
    className: "single-digit"
});
marker9.addTo(map);

var marker10 = L.marker([40.886339, 29.055541]);
marker10.bindTooltip("10", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker10.addTo(map);

var marker11 = L.marker([40.879837, 29.062850]);
marker11.bindTooltip("11", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker11.addTo(map);

var marker12 = L.marker([40.878652, 29.060636]);
marker12.bindTooltip("12", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker12.addTo(map);

// Heybeliada

var marker13 = L.marker([40.879066, 29.095516]);
marker13.bindTooltip("13", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker13.addTo(map);

var marker14 = L.marker([40.881169, 29.093408]);
marker14.bindTooltip("14", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker14.addTo(map);

var marker15 = L.marker([40.878028, 29.095305]);
marker15.bindTooltip("15", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker15.addTo(map);

var marker16 = L.marker([40.878235, 29.093967]);
marker16.bindTooltip("16", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker16.addTo(map);

var marker17 = L.marker([40.878047, 29.094763]);
marker17.bindTooltip("17", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker17.addTo(map);

var marker18 = L.marker([40.876164, 29.099550]);
marker18.bindTooltip("18", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker18.addTo(map);

// Büyükada

var marker19 = L.marker([40.871814, 29.127057]);
marker19.bindTooltip("19", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker19.addTo(map);

var marker20 = L.marker([40.870801, 29.123953]);
marker20.bindTooltip("20", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker20.addTo(map);

var marker21 = L.marker([40.869611, 29.117370]);
marker21.bindTooltip("21", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker21.addTo(map);

var marker22 = L.marker([40.869530, 29.117269]);
marker22.bindTooltip("22", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker22.addTo(map);

var marker23 = L.marker([40.869461, 29.117046]);
marker23.bindTooltip("23", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker23.addTo(map);

var marker24 = L.marker([40.870668, 29.123163]);
marker24.bindTooltip("24", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker24.addTo(map);

var marker25 = L.marker([40.873066, 29.126114]);
marker25.bindTooltip("25", {
    permanent: true,
    direction: 'center',
    className: "double-digit"
});
marker25.addTo(map);