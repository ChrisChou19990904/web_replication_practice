// 用來檢查表單輸入是否有效
function validateForm(event) {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const submitButton = document.querySelector('button[type="submit"]');

    // 如果帳號或密碼為空，禁用提交按鈕
    if (username === '' || password === '') {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#ccc';  // 改變按鈕顏色來表示禁用
    } else {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '';  // 恢復按鈕顏色
    }
}

// 顯示或隱藏密碼
function togglePassword() {
    const passwordField = document.querySelector('input[name="password"]');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

// 當頁面加載時，設置表單驗證
window.onload = function() {
    // 監聽用戶輸入變化
    document.querySelector('input[name="username"]').addEventListener('input', validateForm);
    document.querySelector('input[name="password"]').addEventListener('input', validateForm);

    // 當按鈕被點擊時，顯示或隱藏密碼
    document.querySelector('#show-password').addEventListener('click', togglePassword);
}