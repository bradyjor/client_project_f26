// automatically update year so it doesn't need to be manually changed in HTML every year
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear //

var yearSpan = document.getElementById("current-year");
yearSpan.textContent = new Date().getFullYear();
var tooltipTerms = document.querySelectorAll(".term-tooltip");

// select all elements with the term tooltip class for looping through them.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll //

for (var tooltipIndex = 0; tooltipIndex < tooltipTerms.length; tooltipIndex++) {
    tooltipTerms[tooltipIndex].addEventListener("mouseenter", function() {
        this.classList.remove("tooltip-dismissed");
    });
    tooltipTerms[tooltipIndex].addEventListener("focus", function() {
        this.classList.remove("tooltip-dismissed");
    });
}

// loop through each tooltip and remove dissmised class when the user hovers over of focuses on it. 
// "This" refers to the element the event listener is attached to.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList //

// WCAG 1.4.13 requires users to be able to dismiss additional content in cases without moving their mouse/ keyboard focus
// allow users to be able to dismiss tooltips by pressing escape
// https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html
// https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39 //

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        for (var checkIndex = 0; checkIndex < tooltipTerms.length; checkIndex++) {
            var tooltipTerm = tooltipTerms[checkIndex];

// Listen for keyboard input and check if user pressed escape
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key //

            if (tooltipTerm.matches(":hover") || tooltipTerm === document.activeElement) {
                tooltipTerm.classList.add("tooltip-dismissed");
            }
        }
    }
});

// check which tooltip the user is hovering/ focusing on
// add the tooltip-dismissed class to hide tooltip 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement //


// cites
// ChatGPT was used to assist in finding some sources. This code is my own/ taken from the sources listed. It is not AI generated.
// https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 
// https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html //