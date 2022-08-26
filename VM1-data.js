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
/*
the orange france lab (CC 33, NDC 689) (MCC=208 + MNC=01)
real orange slovakia country (CC=421, NDC=905) (MCC=231 + MNC=01)
real orange romania country (CC=40 ; NC=744) ( MCC=226 + MNC=10)
*/
var hniData = [{
  Hni: "20801",
    Mcc: "208",
    Mnc: "01",
    IsoCountry: "FR",
    CountryCode: "33",
    Network: "Orange France Lab",
    GtPrefix: "33689",
},{
  Hni: "23101",
    Mcc: "231",
    Mnc: "01",
    IsoCountry: "SK",
    CountryCode: "421",
    Network: "Orange Slovakia",
    GtPrefix: "421905",
} ,{
  Hni: "22610",
    Mcc: "226",
    Mnc: "10",
    IsoCountry: "RO",
    CountryCode: "231",
    Network: "Orange Romania",
    GtPrefix: "40744",
}
];
var ccData = [{
    CcNdc: "33689",
    Cc: "33",
    Ndc: "689" ,
    CcNdc: "33689",
    IsoCountry: "FR",
    Network: "Orange France",
    Gt: "33689000706",
},
  {
    CcNdc: "421905",
    Cc: "421",
    Ndc: "905" ,
    IsoCountry: "RO",
    Network: "Orange Slovakia",
    Gt: "123456789",
},
  {
    CcNdc: "40774",
    Cc: "40",
    Ndc: "744" ,
    IsoCountry: "RO",
    Network: "Orange Romania",
    Gt: "123456789",
}
];
