const Schema = require("./sb_pb");

/**
 * Converts the vuetify/vuex dual date fields into a proto.google.protobuf.Timestamp
 * format. 
 * @param {string} dateString takes the form YYYY-MM-DD
 * @param {string} timeString takes the form HH-MM
 */
const dateStringToTimestampConverter = function(dateString, timeString){
    const dateArr = dateString.split('-');
    const timeArr = timeString.split(':');
    const seconds = 0;
    const milliseconds = 0;
    const dateGenerationArray = [...dateArr, ...timeArr, seconds, milliseconds];
    const date = new Date(...dateGenerationArray)
    const timestamp = new proto.google.protobuf.Timestamp();
    timestamp.fromDate(date)
    return(timestamp)
}

// set up sample gamma functions
const incubationGamma = new Schema.GammaDistribution();
incubationGamma.setShape(11);
incubationGamma.setRate(22);

const infectiousGamma = new Schema.GammaDistribution();
infectiousGamma.setShape(33);
infectiousGamma.setRate(44);

// input date format
const startDate="2020-08-21";
const startHoursMins="07:25";
const endDate="2020-08-29";
const endHoursMins="13:25";

// convert the format from the vuex store to the format we need
const startTimestamp = dateStringToTimestampConverter(startDate, startHoursMins);
const endTimestamp = dateStringToTimestampConverter(endDate, endHoursMins);

// construct the protobuf
const mystrain = new Schema.Strand();
mystrain.setStrandId(1);
mystrain.setStartTime(startTimestamp);
mystrain.setEndTime(endTimestamp);
mystrain.setSeedingProbability(0.02)
mystrain.setInfectionProbability(0.1);
mystrain.setIncubationPeriod(incubationGamma);
mystrain.setInfectiousPeriod(infectiousGamma);

// example serializing and deserializing data protobufs
console.log(mystrain);

const binaryData = mystrain.serializeBinary();

console.log(binaryData);

const deserializedStrand = Schema.Strand.deserializeBinary(binaryData);

console.log(deserializedStrand);