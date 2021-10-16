package com.hrms.hrms.core.utilities.result;

public class Result {
	private boolean success;
	private String message;
	
	public Result(boolean success) {
		this.success=success;
	}
	
	public Result(boolean succsess,String message) {
		this(succsess);
		this.message=message;
	}
	
	public boolean isSuccess() {
		return this.success;
	}
	
	public String getMessage() {
		return this.message;
	}
}
