FROM ubuntu:bionic

RUN apt-get update -qq
RUN apt-get install -y socat wget git software-properties-common postgresql-client postgresql-client-common

RUN apt-get update -qq
RUN apt-get install -y python-pip python-psycopg2 libpq-dev python2.7-dev gunicorn libmagic1 libffi-dev nginx supervisor

RUN rm -rf /var/lib/apt/lists/*

# Environment setting
ENV APP_ENVIRONMENT production


RUN mkdir /code
ADD . /code/



# Nginx configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf


# Supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY gunicorn.conf /etc/supervisor/conf.d/gunicorn.conf

# Gunicorn installation
RUN pip install gunicorn gevent

# Gunicorn default configuration
COPY gunicorn.config.py /code/gunicorn.config.py


WORKDIR /code
RUN pip install -r requirements.txt

EXPOSE 81 443

CMD ["/usr/bin/supervisord"]