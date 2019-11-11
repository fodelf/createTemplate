package com.easyApp.entity;

public class Result {
  <% _.forEach(tests, function(test) { %> private <%- test.type %>  <%- test.name %>;
  <% }); %> 
	

	// public String getmsg() {
	// 	return msg;
	// }
	// public void setmsg(String msg) {
	// 	this.msg = msg;
	// }
	// public String getCode() {
	// 	return code;
	// }
	// public void setCode(String code) {
	// 	this.code = code;
	// }
	// public Object getData() {
	// 	return data;
	// }
	// public void setData(Object data) {
	// 	this.data = data;
	// }

}
