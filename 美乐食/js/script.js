function showMessageInput(button) {
    const messageInput = button.closest('.box').querySelector('.message-input');
    messageInput.style.display = 'block';
}

function hideMessageInput(button) {
    const messageInput = button.closest('.box').querySelector('.message-input');
    messageInput.style.display = 'none';
}

function rateItem(button, itemName) {
    const rating = prompt(`请评分（1 - 5）：`);
    if (rating!== null) {
        const validRating = parseInt(rating);
        if (!isNaN(validRating) && validRating >= 1 && validRating <= 5) {
            console.log(`你给 ${itemName} 评分为：${validRating}`);
            // 这里可以添加更多逻辑，如将评分显示在页面上
        } else {
            alert('请输入 1 到 5 之间的有效数字。');
        }
    }
}

function submitMessage(button) {
    const textarea = button.previousElementSibling;
    const message = textarea.value.trim();
    if (message) {
        const box = button.closest('.box');
        const messagesDiv = box.querySelector('.messages');
        const newMessage = document.createElement('div');
        newMessage.className ='message';
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
    } else {
        console.log('留言内容不能为空');
    }
    hideMessageInput(button);
    textarea.value = '';
}
    