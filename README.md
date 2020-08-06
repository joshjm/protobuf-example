# protobuf-example

compile the protos with 
```
protoc --js_out=import_style=commonjs,binary:. sb.proto 
```

and `npm i google-protobuf` or `npm i` to install dependencies. 

Then run `node main.js` 