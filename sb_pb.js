/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.GammaDistribution', null, global);
goog.exportSymbol('proto.Strand', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GammaDistribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GammaDistribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GammaDistribution.displayName = 'proto.GammaDistribution';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GammaDistribution.prototype.toObject = function(opt_includeInstance) {
  return proto.GammaDistribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GammaDistribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GammaDistribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    shape: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    rate: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GammaDistribution}
 */
proto.GammaDistribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GammaDistribution;
  return proto.GammaDistribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GammaDistribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GammaDistribution}
 */
proto.GammaDistribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShape(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GammaDistribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GammaDistribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GammaDistribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GammaDistribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShape();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getRate();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double shape = 1;
 * @return {number}
 */
proto.GammaDistribution.prototype.getShape = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GammaDistribution.prototype.setShape = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double rate = 2;
 * @return {number}
 */
proto.GammaDistribution.prototype.getRate = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.GammaDistribution.prototype.setRate = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Strand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Strand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Strand.displayName = 'proto.Strand';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Strand.prototype.toObject = function(opt_includeInstance) {
  return proto.Strand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Strand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Strand.toObject = function(includeInstance, msg) {
  var f, obj = {
    strandId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    seedingProbability: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    infectionProbability: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    incubationPeriod: (f = msg.getIncubationPeriod()) && proto.GammaDistribution.toObject(includeInstance, f),
    infectiousPeriod: (f = msg.getInfectiousPeriod()) && proto.GammaDistribution.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Strand}
 */
proto.Strand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Strand;
  return proto.Strand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Strand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Strand}
 */
proto.Strand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStrandId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeedingProbability(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInfectionProbability(value);
      break;
    case 6:
      var value = new proto.GammaDistribution;
      reader.readMessage(value,proto.GammaDistribution.deserializeBinaryFromReader);
      msg.setIncubationPeriod(value);
      break;
    case 7:
      var value = new proto.GammaDistribution;
      reader.readMessage(value,proto.GammaDistribution.deserializeBinaryFromReader);
      msg.setInfectiousPeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Strand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Strand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Strand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Strand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStrandId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSeedingProbability();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getInfectionProbability();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getIncubationPeriod();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.GammaDistribution.serializeBinaryToWriter
    );
  }
  f = message.getInfectiousPeriod();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.GammaDistribution.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 strand_id = 1;
 * @return {number}
 */
proto.Strand.prototype.getStrandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Strand.prototype.setStrandId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Strand.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.Strand.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.Strand.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Strand.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Strand.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.Strand.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Strand.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Strand.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double seeding_probability = 4;
 * @return {number}
 */
proto.Strand.prototype.getSeedingProbability = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.Strand.prototype.setSeedingProbability = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double infection_probability = 5;
 * @return {number}
 */
proto.Strand.prototype.getInfectionProbability = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.Strand.prototype.setInfectionProbability = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional GammaDistribution incubation_period = 6;
 * @return {?proto.GammaDistribution}
 */
proto.Strand.prototype.getIncubationPeriod = function() {
  return /** @type{?proto.GammaDistribution} */ (
    jspb.Message.getWrapperField(this, proto.GammaDistribution, 6));
};


/** @param {?proto.GammaDistribution|undefined} value */
proto.Strand.prototype.setIncubationPeriod = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.Strand.prototype.clearIncubationPeriod = function() {
  this.setIncubationPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Strand.prototype.hasIncubationPeriod = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GammaDistribution infectious_period = 7;
 * @return {?proto.GammaDistribution}
 */
proto.Strand.prototype.getInfectiousPeriod = function() {
  return /** @type{?proto.GammaDistribution} */ (
    jspb.Message.getWrapperField(this, proto.GammaDistribution, 7));
};


/** @param {?proto.GammaDistribution|undefined} value */
proto.Strand.prototype.setInfectiousPeriod = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.Strand.prototype.clearInfectiousPeriod = function() {
  this.setInfectiousPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Strand.prototype.hasInfectiousPeriod = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto);
