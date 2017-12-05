var form_url = "https://docs.google.com/forms/d/e/1FAIpQLSf_ikwx4UI7VSYmH2-civbM_3xDZhBv9PXRvDRy30sh3D5CrA/viewform?";
var ticket_url, reviewee, type, filed_correctly, technically_correct, tone, teaching, action_needed, overall_score, generated_url, preset_value;


function generateURL() {

    reviewee = ($('#cr_reviewee').val());
    preset_value = ($('#cr_preset_val').find(":selected").text());

    console.log(reviewee)
    // console.log(preset_value)

    localStorage.setItem("cr_reviewee", reviewee);
    // localStorage.setItem("cr_preset", preset_value);

    if (preset_value == "Mentor - 3's") {
      ticket_url = $("#cr_zd_url").val();
      reviewee = $("#cr_reviewee").val();
      type = "Mentor to mentee";
      filed_correctly = "Yes";
      technically_correct = "3";
      tone = "3";
      teaching = "3";
      action_needed = "No";
      overall_score = "3";
    } else if (preset_value == "P2P - 3's") {
      ticket_url = $("#cr_zd_url").val();
      reviewee = $("#cr_reviewee").val();
      type = "Peer to peer";
      filed_correctly = "Yes";
      technically_correct = "3";
      tone = "3";
      teaching = "3";
      action_needed = "No";
      overall_score = "3";
    }


    generated_url = form_url + "entry.1118257545=" + encodeURIComponent(ticket_url) + "&entry.265527609=" + encodeURIComponent(reviewee) + "&entry.337277821=" + encodeURIComponent(type) + "&entry.1435812154=" + filed_correctly + "&entry.420579198=" + technically_correct + "&entry.1090738306=" + tone + "&entry.904770415=" + teaching + "&entry.1609135359=" + action_needed + "&entry.1844896282=" + overall_score;

    $("#cr_form_url").val(generated_url);
    $(".hidden_first").show();

    console.log(generated_url);
    updateIframe("form_frame", generated_url)

}

function updateIframe(iframeName, url) {

    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}
