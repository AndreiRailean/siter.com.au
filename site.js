// Canvas is created at the top left corner of the #notepad element
// (or its top right corner in dir="rtl" elements)
var paper = Raphael("graphics", 600, 200);

var st = paper.set();
st.push(
    paper.circle(10, 10, 5),
    paper.circle(30, 10, 5)
);
st.attr({fill: "black"});

