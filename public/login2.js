$(document).ready(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyBmO4dLGt5aasYgt9iIcnadjE21Hfw8RCE",
        authDomain: "recommend-app-c2184.firebaseapp.com",
        projectId: "recommend-app-c2184",
        storageBucket: "recommend-app-c2184.appspot.com",
        messagingSenderId: "630278469111",
        appId: "1:630278469111:web:04d2046960c64b4c432af2",
        measurementId: "G-8PSJ51KHDJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    $("#button").on('click', async () => {
        const email = $('#email').val();
        const password = $('#password').val();
        console.log(email);
        console.log(password);
        try {
            const user = await auth.signInWithEmailAndPassword(email, password)
            console.log(user);
            // メインページを飛ばす処理
            window.location = "./main_page.html"; // 通常の遷移
        } catch (error) {
            // login error
            console.log(error);
            alert('login error')
        }
    });

});
