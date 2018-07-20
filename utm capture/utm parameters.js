<script>
 function getQueryVariable(variable) {
 var query = window.location.search.substring(1) || "";
 var vars = query.split('&');
 for (var i = 0; i < vars.length; i++) {
 var pair = vars[i].split('=');
 if (decodeURIComponent(pair[0]) == variable) {
 return decodeURIComponent(pair[1]);
 }
 }
 return '';
 }
 function findData(data, name) {
 for (var i = 0; i < data.length; i++) {
 if (data[i]["name"] == name) {
 return data[i]["value"];
 }
 }
 }

var WebFormEvent = {
 afterInstall: function() {
 },

beforeSubmit: function() {


//Add this for medium/Campaign/Source just like UTM param field.
	 
	 
WebForm.$('<input>').attr({

 type: 'hidden',

 name: 'lead[custom_field][cf_campaign_source]',

 value: getQueryVariable('utm_source')

 }).appendTo('.fs-webform-container form');


WebForm.$('<input>').attr({

 type: 'hidden',

 name: 'lead[custom_field][cf_campaign_medium]',

 value: getQueryVariable('utm_medium')

 }).appendTo('.fs-webform-container form');



 WebForm.$('<input>').attr({

 type: 'hidden',

 name: 'lead[custom_field][cf_campaign_name]',

 value: getQueryVariable('utm_campaign')

 }).appendTo('.fs-webform-container form');


 WebForm.$('<input>').attr({

 type: 'hidden',

 name: 'lead[custom_field][cf_campaign_term]',

 value: getQueryVariable('utm_term')

 }).appendTo('.fs-webform-container form');


  WebForm.$('<input>').attr({

 type: 'hidden',

 name: 'lead[custom_field][cf_campaign_content]',

 value: getQueryVariable('utm_content')

 }).appendTo('.fs-webform-container form');

 },

 afterSubmit: function(event, data, error) {

 }

 };


</script>
