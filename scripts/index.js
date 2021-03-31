function navigateToBlogList() {
    location.href = "html/bloglist.html"
}

function showCreatePost() {
    var modal = document.getElementById("create_post_modal");
    modal.style.display = "flex";
}

function hideCreatePostModal() {
    var modal = document.getElementById("create_post_modal");
    modal.style.display = "none";
}