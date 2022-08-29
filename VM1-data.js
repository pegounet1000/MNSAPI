var ParameterFactoryImpl = Java.type("org.mobicents.protocols.ss7.sccp.impl.parameter.ParameterFactoryImpl");
var sccpParameterFactory = new org.mobicents.protocols.ss7.sccp.impl.parameter.ParameterFactoryImpl();
var es = sccpParameterFactory.createEncodingScheme(java.lang.Byte.valueOf(1));
var tt = 0;
var np = org.mobicents.protocols.ss7.indicator.NumberingPlan.ISDN_TELEPHONY;
var npdest = org.mobicents.protocols.ss7.indicator.NumberingPlan.ISDN_MOBILE;
var noa = org.mobicents.protocols.ss7.indicator.NatureOfAddress.INTERNATIONAL;

var ssn = 7;
var spc = 2833;

var riPCSSN = org.mobicents.protocols.ss7.indicator.RoutingIndicator.ROUTING_BASED_ON_DPC_AND_SSN;
var riGT = org.mobicents.protocols.ss7.indicator.RoutingIndicator.ROUTING_BASED_ON_GLOBAL_TITLE;

var sccpLocal = sccpParameterFactory.createSccpAddress(riGT, sccpParameterFactory.createGlobalTitle("0000000000", tt, np, es, noa), spc, ssn);

var ssn = 6;
var dpc = 0;

np = org.mobicents.protocols.ss7.indicator.NumberingPlan.ISDN_MOBILE;
var sccpRemote = sccpParameterFactory.createSccpAddress(riGT, sccpParameterFactory.createGlobalTitle("0000000000", tt, npdest, es, noa), dpc, ssn);

console.log("local",sccpLocal.toString());
console.log("remote",sccpRemote.toString());

var service = {
  ServiceIdentifier: "default service",
  HttpTimeout: 5000,
  MapTimeout: 2000,
  CallingAddress: sccpLocal,
  CalledAddress: sccpRemote
}
var hniData = [{
  Hni: "65202",
    Mcc: "652",
    Mnc: "02",
    IsoCountry: "BW",
    CountryCode: "267",
    Network: "Orange Botswana",
    GtPrefix: "26772",
},{
  Hni: "61302",
    Mcc: "613",
    Mnc: "02",
    IsoCountry: "BF",
    CountryCode: "226",
    Network: "Orange Burkina Faso",
    GtPrefix: "22676",
},{
  Hni: "63086",
    Mcc: "630",
    Mnc: "86",
    IsoCountry: "CD",
    CountryCode: "243",
    Network: "Orange Congo",
    GtPrefix: "24389",
},{
  Hni: "63089",
    Mcc: "630",
    Mnc: "89",
    IsoCountry: "CD",
    CountryCode: "243",
    Network: "Orange Congo",
    GtPrefix: "24389",
},
{
  Hni: "61203",
    Mcc: "612",
    Mnc: "03",
    IsoCountry: "CI",
    CountryCode: "225",
    Network: "Orange Ivory Coast",
    GtPrefix: "22507",
},
{
  Hni: "62402",
    Mcc: "624",
    Mnc: "02",
    IsoCountry: "CM",
    CountryCode: "237",
    Network: "Orange Cameroon",
    GtPrefix: "23769",
},
{
  Hni: "21403",
    Mcc: "214",
    Mnc: "03",
    IsoCountry: "ES",
    CountryCode: "34",
    Network: "Orange Spain",
    GtPrefix: "34652",
},
{
  Hni: "21421",
    Mcc: "214",
    Mnc: "21",
    IsoCountry: "ES",
    CountryCode: "34",
    Network: "Orange Spain",
    GtPrefix: "34652",
},
{
  Hni: "61002",
    Mcc: "610",
    Mnc: "02",
    IsoCountry: "ML",
    CountryCode: "223",
    Network: "Orange Mali",
    GtPrefix: "22376",
},
{
  Hni: "60501",
    Mcc: "605",
    Mnc: "01",
    IsoCountry: "TN",
    CountryCode: "216",
    Network: "Orange Tunisia",
    GtPrefix: "21650",
},
];
var ccData = [{
    CcNdc: "26772",
    Cc: "267",
    Ndc: "72" ,
    CcNdc: "26772",
    IsoCountry: "BW",
    Network: "Orange Botswana",
    Gt: "26772000037",
},
{
    CcNdc: "22676",
    Cc: "226",
    Ndc: "76" ,
    IsoCountry: "BF",
    Network: "Orange Burkina Faso",
    Gt: "22676020075",
},
  {
    CcNdc: "24389",
    Cc: "243",
    Ndc: "89" ,
    IsoCountry: "CD",
    Network: "Orange Congo",
    Gt: "243899099640",
},
  {
    CcNdc: "22507",
    Cc: "225",
    Ndc: "07" ,
    IsoCountry: "CI",
    Network: "Orange Ivory Coast",
    Gt: "2250707939878",
},
  {
    CcNdc: "23769",
    Cc: "237",
    Ndc: "69" ,
    IsoCountry: "CM",
    Network: "Orange Cameroon",
    Gt: "237694000015",
},
  {
    CcNdc: "34652",
    Cc: "34",
    Ndc: "652" ,
    IsoCountry: "ES",
    Network: "Orange Spain",
    Gt: "34656000399",
},
  {
    CcNdc: "22376",
    Cc: "223",
    Ndc: "76" ,
    IsoCountry: "ML",
    Network: "Orange Mali",
    Gt: "22376000550",
},
  {
    CcNdc: "21650",
    Cc: "216",
    Ndc: "50" ,
    IsoCountry: "TN",
    Network: "Orange Tunisia",
    Gt: "21650000047",
},
];
