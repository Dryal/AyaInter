$(document).ready(function(){
    $(".faq-question").click(function(){
        let answer = $(this).parent().next(".faq-answer");
        let icon = $(this).find(".iconFAQ");

        $(".faq-answer").not(answer).slideUp(200); // Close others
        $(".iconFAQ").not(icon).text("+"); // Reset icons
        
        if (answer.is(":visible")) {
            answer.slideUp(500);
            icon.text("+");
        } else {
            answer.slideDown(500);
            icon.text("-");
        }
    });
});
