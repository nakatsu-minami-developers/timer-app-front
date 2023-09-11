# 軽量化のためslimを使う
FROM node:18-slim

# UTF-8利用を明示する
ENV LANG C.UTF-8
# コンテナ内のタイムゾーンを日本時間にする
ENV TZ Asia/Tokyo

# コンテナ内の作業ディレクトリ作成
WORKDIR /app
# プロジェクトのコピー
COPY . /app
# インストール可能パッケージを更新
RUN apt-get update

CMD ["yarn", "dev"]