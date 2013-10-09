# Node vs JSF

## Introduction
The aim of this project is to test what is the best between JavaScript and Java.
This part is the node JS application.
A simple list of students with CRUD.

Before reading, you should see that:
[Java vs JS](http://nodejsreactions.tumblr.com/post/53284740787/java-pro-trying-to-break-in-to-the-node-community)


## Installation
```
git clone https://github.com/EMA-INFRES4/node-vs-jsf.git
cd node-vs-jsf
npm install
```
Then, you should edit the configuration by editing the file "config/config.json" (there is a sample in config/config-default.json).

```
{
    "development": {
        "username": "root",
        "password": "root",
        "database": "node-vs-jsf_development",
        "host": "127.0.0.1"
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "node-vs-jsf_test",
        "host": "127.0.0.1"
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "node-vs-jsf_production",
        "host": "127.0.0.1"
    }
}
```


Next, create the 3 databases.


## Run tests
Units tests are using [mocha](http://visionmedia.github.io/mocha/) and [zombi](http://zombie.labnotes.org/)

```
make spec
```

## Run application
```
make run
```
[http://localhost:3000/](http://localhost:3000/)



## License

(The MIT License)

Copyright (c) 2013 Xavier TALANDIER &lt;xavier@talandier.fr&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.