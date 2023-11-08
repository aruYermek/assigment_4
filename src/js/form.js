let commentsArray = [];

function saveCommentLocally(email, comment) {
    const newComment = {
        email: email,
        content: comment
    };

    newComment.displayComment = function () {
        console.log(`Email: ${this.email}\nComment: ${this.content}`);
    }

    commentsArray.push(newComment);
    alert('Your comment has been sent');
}

function validateForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById("adress");
    const commentsInput = document.getElementById("floatingTextarea2");

    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (email === "" || comments === "") {
        alert("Please fill in both email and comments fields.");
    } else {
        saveCommentLocally(email, comments);
        
        commentsArray.forEach(comment => {
            comment.displayComment();
        });
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
