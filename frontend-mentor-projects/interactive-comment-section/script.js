let comments = [
    {
        avatar: "image/avatars/image-amyrobson.webp",
        username: "amyrobson",
        timestamp: "2 months ago",
        comment: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        replies: [],
        user: false
    },
    {
        avatar: "image/avatars/image-maxblagun.webp",
        username: "maxblagun",
        timestamp: "3 weeks ago",
        comment: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        replies: [
            {
                avatar: "image/avatars/image-ramsesmiron.webp",
                username: "ramsesmiron",
                timestamp: "5 days ago",
                comment: "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                user: false
            },
            {
                avatar: "image/avatars/image-juliusomo.webp",
                username: "juliusomo",
                timestamp: "3 hours ago",
                comment: "@ramsesmiron I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                user: true
            }
        ],
        user: false
    }
];

// Variables for managing state
let editingIndex = null;
let replyTarget = null;
let selectedCommentIndex = null;
const commentSection = document.getElementById("comment-section");
const typingBox = document.getElementById("typing-box");
const newCommentTextarea = document.getElementById("new-comment");
const deleteModal = document.getElementById("delete-modal");
const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
const confirmDeleteBtn = document.getElementById("confirm-delete-btn");

// Render comments
function renderComments() {
    commentSection.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentBox = createCommentBox(comment, index);
        commentSection.appendChild(commentBox);
        if (comment.replies.length > 0) {
            const replyLine = document.createElement('div');
            replyLine.classList.add('reply-line');
            comment.replies.forEach((reply, replyIndex) => {
                const replyBox = createCommentBox(reply, index, replyIndex);
                replyLine.appendChild(replyBox);
            });
            commentSection.appendChild(replyLine);
        }
    });
}

// Create comment box
function createCommentBox(comment, index, replyIndex = null) {
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');
    
    let formattedComment = comment.comment.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
    commentBox.innerHTML = `
        <div class="comment-header">
            <img src="${comment.avatar}" alt="${comment.username}'s avatar">
            <span class="username">${comment.username}</span>
            <span class="timestamp">${comment.timestamp}</span>
        </div>
        <div class="comment-content">${formattedComment}</div>
        <div class="comment-footer">
            ${comment.user 
                ? `<span class="edit">Edit</span><span class="delete">Delete</span>`
                : `<span class="reply">Reply</span>`}
        </div>
    `;
    
    const replyButton = commentBox.querySelector('.reply');
    const editButton = commentBox.querySelector('.edit');
    const deleteButton = commentBox.querySelector('.delete');

    if (replyButton) {
        replyButton.addEventListener('click', () => {
            showReplyBox(index, replyIndex);
        });
    }

    if (editButton) {
        editButton.addEventListener('click', () => {
            showEditBox(index, replyIndex);
        });
    }

    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            showDeleteModal(index, replyIndex);
        });
    }

    return commentBox;
}

// Show reply box
function showReplyBox(commentIndex, replyIndex) {
    replyTarget = { commentIndex, replyIndex };
    const lastReplyIndex = comments[commentIndex].replies.length - 1;
    let targetElement = commentSection.children[commentIndex];

    // If there are replies, target the last reply box
    if (replyIndex !== null) {
        targetElement = commentSection.children[commentIndex + 1].children[lastReplyIndex];
    }

    // Position the typing box below the target comment
    targetElement.after(typingBox);
    typingBox.style.display = 'block';
    newCommentTextarea.focus();
}

// Show edit box
function showEditBox(commentIndex, replyIndex) {
    const targetComment = replyIndex === null
        ? comments[commentIndex]
        : comments[commentIndex].replies[replyIndex];
    
    newCommentTextarea.value = targetComment.comment;
    editingIndex = { commentIndex, replyIndex };
    typingBox.style.display = 'block';
    newCommentTextarea.focus();
}

// Save comment (for both reply and new comment)
document.getElementById("send-btn").addEventListener("click", () => {
    const commentText = newCommentTextarea.value.trim();
    if (commentText === "") return;
    
    if (editingIndex) {
        // Edit existing comment
        if (editingIndex.replyIndex === null) {
            comments[editingIndex.commentIndex].comment = commentText;
        } else {
            comments[editingIndex.commentIndex].replies[editingIndex.replyIndex].comment = commentText;
        }
        editingIndex = null;
    } else if (replyTarget) {
        // Add a reply
        comments[replyTarget.commentIndex].replies.push({
            avatar: "image/avatars/image-juliusomo.webp",
            username: "juliusomo",
            timestamp: "Just now",
            comment: commentText,
            user: true
        });
        replyTarget = null;
    } else {
        // Add new comment
        comments.push({
            avatar: "image/avatars/image-juliusomo.webp",
            username: "juliusomo",
            timestamp: "Just now",
            comment: commentText,
            replies: [],
            user: true
        });
    }

    newCommentTextarea.value = '';
    typingBox.style.display = 'none';
    renderComments();
});

// Show delete confirmation modal
function showDeleteModal(commentIndex, replyIndex) {
    deleteModal.style.display = 'flex';
    selectedCommentIndex = { commentIndex, replyIndex };
}

// Cancel delete action
cancelDeleteBtn.addEventListener('click', () => {
    deleteModal.style.display = 'none';
    selectedCommentIndex = null;
});

// Confirm delete action
confirmDeleteBtn.addEventListener('click', () => {
    if (selectedCommentIndex.replyIndex === null) {
        comments.splice(selectedCommentIndex.commentIndex, 1);
    } else {
        comments[selectedCommentIndex.commentIndex].replies.splice(selectedCommentIndex.replyIndex, 1);
    }
    
    deleteModal.style.display = 'none';
    selectedCommentIndex = null;
    renderComments();
});

// Initialize rendering
renderComments();
