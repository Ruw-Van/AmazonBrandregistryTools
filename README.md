# AmazonBrandregistryTools

[アマゾンブランド登録][アマゾンブランド登録]の権利侵害申告フォームについて、チェックボックスを1つずつチェックしていくのはストレスのかかる作業です。
このリポジトリでは、検索結果におけるマウス操作の一部を自動的に実行するためのJavaScriptを公開しています。

本コードはMITライセンスです。

# スクリプトの詳細

## openVariationList.js

検索結果のリスト中にある、すべての「バリエーションを表示」リンクのクリックを実行します。
クリック後に展開されるリストはAmazonからの検索結果が表示されるのですが、以下の場合は手作業が必要です。
- 正しくデータを取得できなかった場合はリストが表示されないため「バリエーションを表示」を閉じて再度開く必要があります。
- 20件以上のバリエーションが存在する場合、または正しくデータが表示されない場合は、リスト末尾の「この商品のX個のバリエーションをすべて表示」をクリックし、検索結果の画面を表示する必要があります。

## clickCheckbox.js

画面上に存在する申請チェックボックスをすべてクリックします。
既にチェックボックスにチェックが付いている場合、チェックを外してしまうため、基本的には検索後すぐに実行することをおすすめします。
検索結果の表示が非同期に行われるため、実行前にすべてのバリエーションが表示されているか目視で確認が必要です。
当然ながら、正規品であるかのチェックも目視で行う必要があります。


[アマゾンブランド登録]: https://brandregistry.amazon.co.jp/
