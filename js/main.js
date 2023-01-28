// 選手のデータ
const PLAYERS = [
    { "id": 3, "image": "./images/3.jpg", "name": "岡庭愁人" },
    { "id": 4, "image": "./images/4.jpg", "name": "山田将之" },
    { "id": 8, "image": "./images/8.jpg", "name": "田代真一" },
]

// 選手が見つからなかった場合のデフォルト
const NOT_FOUND = { "id": -1, "image": "./images/no_image.jpg", "name": "名無しさん" }

/**
 * 「誰ですか？」を表現する関数。
 * 選手のデータからidが一致する選手を探して返す。
 * もし見つからなかったら・・・・ // TODO 生徒さんがやってみよう
 * @param id 選手のID
 * @returns 見つかった選手のデータ
 */
function daredesuka(id) {
    // 選手データの数だけ繰り返しています。
    for (var i = 0; i < PLAYERS.length; i++) {

        const player = PLAYERS[i];

        // もしも、パラメーターの「id」と一致する選手が見つかった場合、
        // 関数の呼び出し元に選手情報を返しています。
        if (id == player["id"]) {

            // returnは”返す”という意味です。
            return player;
        }
    }

}

/**
 * 「探す」ボタンが押された時に呼ばれる関数。
 * daredesuka関数を呼び出して、選手の情報を画面に表示する。
 */
function sagasu() {

    // ここで変数「id」に値を追加
    const id = 8;
     
    // 関数「誰ですか？」を呼び出して、結果を変数「senshu_joho」に追加。
    const senshu_joho = daredesuka(id);

    // ここから下の３行は画面に表示するコードなので気にしなくて大丈夫！
    // 見つかった「senshu_joho」の情報を画面に表示してるよ！
    document.getElementById("name").innerText = senshu_joho["name"];
    document.getElementById("image").setAttribute("src", senshu_joho["image"]);
    document.getElementById("sebango").innerText = senshu_joho["id"];

    // ここから下は気にしなくて大丈夫！
    const classList = document.getElementById("kensaku_kekka_box").classList
    classList.replace("kensaku-kekka-box-none", "kensaku-kekka-box-hit")
}