#! /usr/bin/env bash

echo "Running inside /app/prestart.sh, you could add migrations to this file, e.g.:"

echo "
#! /usr/bin/env bash
# Let the DB start
sleep 10;
# Run migrations
alembic upgrade head
"
#alembic upgrade head