#!/bin/sh
echo "DEBUG: $DEBUG"

# デバッグ用に環境変数を表示
echo "DATABASE_URL: $DATABASE_URL"
echo "BACKEND_PORT: ${BACKEND_PORT:-7001}"

# 開発環境でのみマイグレーションを自動実行
if [ "$DEBUG" = "True" ]; then
    echo "Running prisma migrate dev..."
    poetry run prisma migrate dev --name auto_migration --schema=/app/prisma/schema.prisma
    MIGRATE_EXIT_CODE=$?
    if [ $MIGRATE_EXIT_CODE -ne 0 ]; then
        echo "Prisma migrate failed with exit code $MIGRATE_EXIT_CODE"
        exit 1
    fi
else
    # 本番環境ではmigrate deployを実行
    echo "Running prisma migrate deploy..."
    poetry run prisma migrate deploy --schema=/app/prisma/schema.prisma
    MIGRATE_EXIT_CODE=$?
    if [ $MIGRATE_EXIT_CODE -ne 0 ]; then
        echo "Prisma migrate failed with exit code $MIGRATE_EXIT_CODE"
        exit 1
    fi
fi

# Prisma Clientの生成
echo "Running prisma generate..."
poetry run prisma generate --schema=/app/prisma/schema.prisma
GENERATE_EXIT_CODE=$?
if [ $GENERATE_EXIT_CODE -ne 0 ]; then
    echo "Prisma generate failed with exit code $GENERATE_EXIT_CODE"
    exit 1
fi

# サーバーの起動
if [ "$DEBUG" = "True" ]; then
    echo "Starting server in debug mode..."
    poetry run uvicorn app.main:app --host 0.0.0.0 --port "${BACKEND_PORT:-7001}" --reload
else
    echo "Starting server..."
    poetry run uvicorn app.main:app --host 0.0.0.0 --port "${BACKEND_PORT:-7001}"
fi




# Prismaスキーマの変更:
# 新しいテーブルやフィールドを追加する場合、backend/prisma/schema.prismaファイルを編集します。

# マイグレーションの作成:
# Prismaスキーマファイルを変更した後、新しいマイグレーションを作成するために以下のコマンドを実行します。
#
# docker-compose exec backend sh
# poetry run prisma migrate dev --name <migration_name> --schema=/app/prisma/schema.prisma
#
# Prisma Clientの生成:
# マイグレーションを作成した後、Prisma Clientを生成します。
#
# poetry run prisma generate --schema=/app/prisma/schema.prisma

# データベース内のテーブルを確認:
# PostgreSQLコンテナにシェルアクセス
# docker-compose exec db sh
#
# psqlコマンドでデータベースに接続
# psql -U ten -d ecommerce_db
#
# テーブル一覧の表示
# \dt