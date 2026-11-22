var yearSpan = document.getElementById("current-year");
yearSpan.textContent = new Date().getFullYear();
var tooltipTerms = document.querySelectorAll(".term-tooltip");
for (var tooltipIndex= 0; tooltipIndex < tooltipTerms.length; tooltipIndex++) {
    tooltipTerms[tooltipIndex].addEventListener("mouseenter", function() {
        this.classList.remove("tooltip-dismissed");
    });
    tooltipTerms[tooltipIndex].addEventListener("focus", function() {
        this.classList.remove("tooltip-dismissed");
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        for (var checkIndex = 0; checkIndex < tooltipTerms.length; checkIndex++) {
            var tooltipTerm = tooltipTerms[checkIndex];

            if (tooltipTerm.matches(":hover") || tooltipTerm === document.activeElement) {
                tooltipTerm.classList.add("tooltip-dismissed");
            }
        }
    }
});



// https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key https://developer.mozilla.org/en-US/docs/Web/API/Element/classList https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39 https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html//