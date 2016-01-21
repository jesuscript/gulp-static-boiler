# Gulp Static Boilerplate

## Dependencies (OS X)

Nginx
```
$ brew install nginx
```
Gulp
```
$ npm install -g gulp
```

## Install

```
$ cp /usr/local/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx.conf.backup
$ mv ./nginx.conf /usr/local/etc/nginx/nginx.conf
```

Edit the file to point at this directory's `dist/`

```
$ sudo nginx
```

To reload Nginx:
```
$ sudo nginx -s reload
```

## Usage

```
$ npm install
$ gulp
```

Will compile css, js and html and place them in dist/ where they can be picked up by Nginx.

The server is listening on port 4000. You can change this in nginx.conf.
