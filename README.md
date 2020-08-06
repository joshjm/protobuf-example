# protobuf-example

This example shows how to use protos in JS, showing an example with the definitions in the .proto file, through to an example serializing and deserialzing some data. This example includes working with the google.proto.Timestamp from js dates. 
## Install protoc 
`protoc` is the protobuf compiler

you can install it by following 
```
# Make sure you grab the latest version
curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip
# Unzip
unzip protoc-3.5.1-linux-x86_64.zip -d protoc3
# Move protoc to /usr/local/bin/
sudo mv protoc3/bin/* /usr/local/bin/
# Move protoc3/include to /usr/local/include/
sudo mv protoc3/include/* /usr/local/include/
# Optional: change owner
sudo chown [user] /usr/local/bin/protoc
sudo chown -R [user] /usr/local/include/google
```
## Compile protos

compile the protos with 
```
protoc --js_out=import_style=commonjs,binary:. sb.proto 
```

and `npm i google-protobuf` or `npm i` to install dependencies. 



Then run `node main.js` 
