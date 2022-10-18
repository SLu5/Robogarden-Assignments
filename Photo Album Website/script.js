function inputSatisfiesMinLength(inputId, minLength) {
    const length = $(`#${inputId}`).val().length;
    return length >= minLength;
}
function isUsernameValid() {
    return inputSatisfiesMinLength('usernameinput', 6);
}
function isImageTitleValid() {
    return inputSatisfiesMinLength('imagetitleinput', 1);
}
function isCommentValid() {
    return inputSatisfiesMinLength('commentinput', 1);
}
function isFormValid() {
    return isUsernameValid() && isImageTitleValid() && isCommentValid();
}
    
$(document).ready(function () {

    $('#usernameinput').focusout(function () {
        if (isUsernameValid()) {
            $('#hiddentextusernameinput').addClass("hidden");
        }
        else {
            $('#hiddentextusernameinput').removeClass("hidden");
        }
        if (isFormValid()) {
            $('#submitbutton').removeClass("hidden");
        }
        else {
            $('#submitbutton').addClass("hidden");
        }

    });

    $('#imagetitleinput').focusout(function () {
        if (isImageTitleValid()) {
            $('#hiddentextimagetitleinput').addClass("hidden");
        }
        else {
            $('#hiddentextimagetitleinput').removeClass("hidden");
        }
        if (isFormValid()) {
            $('#submitbutton').removeClass("hidden");
        }
        else {
            $('#submitbutton').addClass("hidden");
        }
    });

    $('#commentinput').focusout(function () {
        if (isCommentValid()) {
            $('#hiddentextcommentinput').addClass("hidden");
        }
        else {
            $('#hiddentextcommentinput').removeClass("hidden");
        }
        if (isFormValid()) {
            $('#submitbutton').removeClass("hidden");
        }
        else {
            $('#submitbutton').addClass("hidden");
        }
    });

    $('#submitbutton').click(function () {
        let username = $('#usernameinput').val().length;
        let imgtitl = $('#imagetitleinput').val().length;
        let comment = $('#commentinput').val().length;

        console.log(username, imgtitl, comment);

        if (username <= 5) {
            alert("Username must be at least 6 characters.");
            return;

        }
        if (imgtitl == 0) {
            alert("Image Title cannot be empty.");
            return;
        }

        if (comment == 0) {
            alert("Comment cannot be empty");
            return;
        }

    });

    $('#submitbutton').mouseover(function () {
        $('#submitbutton').css({ 'background-color': 'lightgreen', 'border-color': 'blue' })
    })
});

$('.gallery li span').css({
    'font-family': 'Candara', 'font-weight':'bold'
})
$('.gallery li img').css({
    'border': '4px solid darkolivegreen'
})