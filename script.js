const dogImage = document.getElementById("dogImage");
const button = document.getElementById("button");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const API_URL = "https://dog.ceo/api/breeds/image/random";

async function getDogImage() {
    try {
        // エラー表示をリセット
        error.textContent = "";

        // ローディング開始
        loading.style.display = "block";
        button.disabled = true;

        // APIにリクエスト
        const response = await fetch(API_URL);

        // 通信が成功したか確認
        if (!response.ok) {
            throw new Error("APIからデータを取得できませんでした");
        }

        // JSONデータに変換
        const data = await response.json();

        // 取得した画像URLをimgに設定
        dogImage.src = data.message;

    } catch (err) {
        console.error(err);
        error.textContent = "画像の取得に失敗しました。";

    } finally {
        // ローディング終了
        loading.style.display = "none";
        button.disabled = false;
    }
}

// ボタンをクリックしたら犬を変更
button.addEventListener("click", getDogImage);

// ページを開いたときにも1回取得
getDogImage();