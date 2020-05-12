FROM php:7.1.8-apache

COPY ./app /srv/app
COPY .docker/php/vhost.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /srv/app

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN a2enmod headers
RUN chown -R www-data:www-data /srv/app \
    && a2enmod rewrite
RUN apt update
RUN apt install -y wget unzip
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN composer install
