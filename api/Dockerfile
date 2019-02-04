FROM tiangolo/uwsgi-nginx:python2.7

LABEL maintainer="Sebastian Ramirez <tiangolo@gmail.com>"

RUN apt-get update -qq
RUN apt-get install -y socat git software-properties-common postgresql-client postgresql-client-common

RUN apt-get update -qq
RUN apt-get install -y python-pip python-psycopg2 libpq-dev python2.7-dev gunicorn libmagic1 libffi-dev

# By default, allow unlimited file sizes, modify it to limit the file sizes
# To have a maximum of 1 MB (Nginx's default) change the line to:
# ENV NGINX_MAX_UPLOAD 1m
ENV NGINX_MAX_UPLOAD 0

# By default, Nginx listens on port 80.
# To modify this, change LISTEN_PORT environment variable.
# (in a Dockerfile or with an option for `docker run`)
ENV LISTEN_PORT 8000
EXPOSE 8000

# Add demo app
#COPY ./app /app
#WORKDIR /app

RUN mkdir /code
ADD . /code/
WORKDIR /code
RUN pip install -r requirements.txt


# Which uWSGI .ini file should be used, to make it customizable
ENV UWSGI_INI /code/uwsgi.ini

# URL under which static (not modified by Python) files will be requested
# They will be served by Nginx directly, without being handled by uWSGI
ENV STATIC_URL /static
# Absolute path in where the static files wil be
ENV STATIC_PATH /code/static

# If STATIC_INDEX is 1, serve / with /static/index.html directly (or the static URL configured)
# ENV STATIC_INDEX 1
ENV STATIC_INDEX 0


# Make /app/* available to be imported by Python globally to better support several use cases like Alembic migrations.
ENV PYTHONPATH=/code

# Copy start.sh script that will check for a /app/prestart.sh script and run it before starting the app
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Copy the entrypoint that will generate Nginx additional configs
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Run the start script, it will check for an /app/prestart.sh script (e.g. for migrations)
# And then will start Supervisor, which in turn will start Nginx and uWSGI
CMD ["/start.sh"]
