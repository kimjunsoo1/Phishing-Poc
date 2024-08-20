FROM python:3.12.0

WORKDIR /home/

RUN echo "testing1234"

RUN git clone https://github.com/kimjunsoo1/Phishing-Poc.git

WORKDIR /home/Phishing-Poc/fakeweb

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN echo "SECRET_KEY=django-insecure-q_2!j115dbsl22g#i5!@=*_@1e=&o+#3-o4@a_zfdj$qqy7zm*" > .env

EXPOSE 80

CMD ["python", "manage.py","runserver", "0.0.0.0:80"]