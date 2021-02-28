## 学習
Colabを使うと早い。ローカルでGPUが有効になっていれば異なるかもしれません。
https://colab.research.google.com/

下記を実行。URLを学習対象のファイルに変更すること。
`training.py`

実行後、`/content/model`にフォルダが出来てこれが学習結果です。
Googleドライブをマウントし、下記のコマンドでGoogleドライブに接続。移動させてください。

```
!zip -r /content/model20210228 /content/model
```

`create.py`で対象のmodelを読み込むと学習した結果を利用できます。
